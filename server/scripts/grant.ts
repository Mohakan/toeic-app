/**
 * Gives (or takes back) the full plan by hand: tests, support, gifts.
 *   npm run grant -- learner@example.com [--until 2027-06-30]
 *   npm run grant -- learner@example.com --revoke
 */
import { normalizeEmail } from '../src/auth.js';
import { migrate } from '../src/migrations.js';
import { openDb } from '../src/open.js';

const args = process.argv.slice(2);
const email = args.find((a) => !a.startsWith('--') && a.includes('@'));
const untilIndex = args.indexOf('--until');
const until = untilIndex >= 0 ? args[untilIndex + 1] : null;
const revoke = args.includes('--revoke');

if (!email || (until && !/^\d{4}-\d{2}-\d{2}$/.test(until))) {
  console.error('Usage: npm run grant -- <email> [--until YYYY-MM-DD] [--revoke]');
  process.exit(1);
}

const db = await openDb();
await migrate(db);
const { rows } = await db.query<{ id: string }>('SELECT id FROM users WHERE email = $1', [normalizeEmail(email)]);
if (!rows[0]) {
  console.error(`No account for ${email}.`);
  process.exitCode = 1;
} else if (revoke) {
  await db.query(`UPDATE entitlements SET status = 'revoked' WHERE user_id = $1 AND source = 'grant' AND status = 'active'`, [rows[0].id]);
  console.log(`Full plan taken back from ${email}.`);
} else {
  await db.query(`INSERT INTO entitlements (user_id, source, ends_at) VALUES ($1, 'grant', $2)`, [rows[0].id, until ? `${until}T23:59:59Z` : null]);
  console.log(`Full plan given to ${email}${until ? ` until ${until}` : ''}.`);
}
await db.close();
