import type { Db } from './db.js';

export type PlanSource = 'store_ios' | 'store_android' | 'web_tn' | 'grant' | 'sabil';

/** What the app receives; it matches the app's own Plan type. */
export interface Plan {
  tier: 'free' | 'full';
  source: PlanSource | null;
  /** Day the full plan started (YYYY-MM-DD). */
  since: string | null;
  /** Last day of access for a time-limited plan (partner enrolment), or null when it does not end. */
  validUntil: string | null;
}

export const FREE_PLAN: Plan = { tier: 'free', source: null, since: null, validUntil: null };

export interface EntitlementRow {
  source: Exclude<PlanSource, 'sabil'>;
  since: string;
  until: string | null;
}

export interface SabilRow {
  since: string;
  until: string | null;
}

/**
 * The plan in force from active rights only (the queries filter on dates and status). A permanent
 * right wins over a time-limited one, then the latest end date, then the oldest start.
 */
export function choosePlan(entitlements: EntitlementRow[], sabil: SabilRow[]): Plan {
  const candidates: Plan[] = [
    ...entitlements.map((e) => ({ tier: 'full' as const, source: e.source, since: e.since, validUntil: e.until })),
    ...sabil.map((s) => ({ tier: 'full' as const, source: 'sabil' as const, since: s.since, validUntil: s.until })),
  ];
  if (candidates.length === 0) return FREE_PLAN;
  // Permanent first (no end date), then the latest end date, then the oldest start.
  const end = (p: Plan) => p.validUntil ?? '9999-12-31';
  return candidates.sort((a, b) => cmp(end(b), end(a)) || cmp(a.since, b.since))[0];
}

const cmp = (a: string | null, b: string | null) => (a ?? '').localeCompare(b ?? '');

export async function planFor(db: Db, userId: string, email: string): Promise<Plan> {
  const { rows: entitlements } = await db.query<EntitlementRow>(
    `SELECT source, to_char(starts_at AT TIME ZONE 'UTC', 'YYYY-MM-DD') AS since,
            to_char(ends_at AT TIME ZONE 'UTC', 'YYYY-MM-DD') AS until
       FROM entitlements
      WHERE user_id = $1 AND status = 'active' AND starts_at <= now() AND (ends_at IS NULL OR ends_at > now())`,
    [userId],
  );
  const { rows: sabil } = await db.query<SabilRow>(
    `SELECT to_char(created_at AT TIME ZONE 'UTC', 'YYYY-MM-DD') AS since, valid_until::text AS until
       FROM sabil_accounts
      WHERE email = $1 AND status = 'active' AND (valid_until IS NULL OR valid_until >= current_date)`,
    [email],
  );
  return choosePlan(entitlements, sabil);
}
