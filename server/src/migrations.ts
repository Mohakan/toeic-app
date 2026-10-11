import type { Db } from './db.js';

/**
 * Schema versions, applied in order and only once. Never edit a published version: add a new one.
 * Progress data stays on the learner's device; the server keeps only what accounts and access need.
 */
const MIGRATIONS: { version: number; sql: string }[] = [
  {
    version: 1,
    sql: `
      CREATE TABLE users (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        email text NOT NULL UNIQUE,
        password_hash text NOT NULL,
        birth_year integer NOT NULL,
        parental_consent_at timestamptz,
        lang text NOT NULL DEFAULT 'fr',
        created_at timestamptz NOT NULL DEFAULT now()
      );

      -- One row per signed-in device. Only a hash of the token is stored.
      CREATE TABLE sessions (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        token_hash text NOT NULL UNIQUE,
        device text,
        created_at timestamptz NOT NULL DEFAULT now(),
        last_seen_at timestamptz NOT NULL DEFAULT now(),
        revoked_at timestamptz
      );
      CREATE INDEX sessions_user ON sessions(user_id) WHERE revoked_at IS NULL;

      CREATE TABLE password_resets (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        code_hash text NOT NULL,
        expires_at timestamptz NOT NULL,
        attempts integer NOT NULL DEFAULT 0,
        used_at timestamptz,
        created_at timestamptz NOT NULL DEFAULT now()
      );
      CREATE INDEX password_resets_user ON password_resets(user_id);

      -- Access to the full plan. Purchases (lot M4) and manual grants create rows here.
      CREATE TABLE entitlements (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        source text NOT NULL CHECK (source IN ('store_ios', 'store_android', 'web_tn', 'grant')),
        status text NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'revoked', 'refunded')),
        starts_at timestamptz NOT NULL DEFAULT now(),
        ends_at timestamptz,
        external_ref text,
        created_at timestamptz NOT NULL DEFAULT now(),
        UNIQUE (source, external_ref)
      );
      CREATE INDEX entitlements_user ON entitlements(user_id);

      -- Payment records (lot M4). Kept for accounting when an account is deleted.
      CREATE TABLE purchases (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id uuid REFERENCES users(id) ON DELETE SET NULL,
        source text NOT NULL,
        product_id text NOT NULL,
        transaction_id text NOT NULL,
        amount_minor integer,
        currency text,
        created_at timestamptz NOT NULL DEFAULT now(),
        UNIQUE (source, transaction_id)
      );

      -- Learners enrolled with the partner (lot M5 fills it). Matched to accounts by e-mail.
      CREATE TABLE sabil_accounts (
        sabil_id text PRIMARY KEY,
        email text NOT NULL,
        first_name text,
        status text NOT NULL CHECK (status IN ('active', 'ended')),
        valid_until date,
        created_at timestamptz NOT NULL DEFAULT now(),
        updated_at timestamptz NOT NULL DEFAULT now()
      );
      CREATE INDEX sabil_accounts_email ON sabil_accounts(email);
    `,
  },
  {
    // Lots M4 and M5: payment states, and the journal of partner calls (also used against replays).
    version: 2,
    sql: `
      ALTER TABLE purchases ADD COLUMN status text NOT NULL DEFAULT 'valid'
        CHECK (status IN ('pending', 'valid', 'refunded', 'revoked', 'failed'));
      ALTER TABLE purchases ADD COLUMN environment text;
      -- Amounts in thousandths of the currency: Apple milli-units, Konnect millimes.
      ALTER TABLE purchases RENAME COLUMN amount_minor TO amount_milli;
      ALTER TABLE purchases ADD COLUMN order_id text;
      ALTER TABLE purchases ADD COLUMN updated_at timestamptz NOT NULL DEFAULT now();
      CREATE INDEX purchases_user ON purchases(user_id);

      CREATE TABLE partner_calls (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        partner text NOT NULL,
        signature text NOT NULL UNIQUE,
        method text NOT NULL,
        path text NOT NULL,
        status integer,
        received_at timestamptz NOT NULL DEFAULT now()
      );
      CREATE INDEX partner_calls_received ON partner_calls(received_at);
    `,
  },
  {
    // Lot M6: last activity of an account, for the retention rules (maintenance.ts).
    version: 3,
    sql: `
      ALTER TABLE users ADD COLUMN last_active_at timestamptz NOT NULL DEFAULT now();
    `,
  },
  {
    // One app per exam (Toki Quest, Toki Quest B2…): purchases and rights belong to an exam.
    // Everything sold before is a TOEIC plan.
    version: 4,
    sql: `
      ALTER TABLE purchases ADD COLUMN exam text NOT NULL DEFAULT 'toeic';
      ALTER TABLE entitlements ADD COLUMN exam text NOT NULL DEFAULT 'toeic';
      CREATE INDEX entitlements_user_exam ON entitlements(user_id, exam);
    `,
  },
];

export async function migrate(db: Db): Promise<number> {
  await db.exec('CREATE TABLE IF NOT EXISTS schema_migrations (version integer PRIMARY KEY, applied_at timestamptz NOT NULL DEFAULT now())');
  const { rows } = await db.query<{ version: number }>('SELECT version FROM schema_migrations');
  const done = new Set(rows.map((r) => r.version));
  let applied = 0;
  for (const m of MIGRATIONS) {
    if (done.has(m.version)) continue;
    await db.exec(`BEGIN; ${m.sql}; INSERT INTO schema_migrations (version) VALUES (${m.version}); COMMIT;`);
    applied++;
  }
  return applied;
}
