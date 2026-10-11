import type { Db } from './db.js';

/**
 * Retention rules announced in the privacy policy, applied once a day (and at start-up).
 * Payment records are kept for accounting (10 years) and are not touched here.
 */
export const RETENTION = {
  /** An account unused for 3 years is deleted, unless it holds a full plan still in force. */
  inactiveAccountDays: 3 * 365,
  /** Signed-out or expired sessions. */
  oldSessionDays: 90,
  /** Password reset codes (valid 30 minutes). */
  resetCodeDays: 1,
  /** Journal of partner calls. */
  partnerCallDays: 90,
};

export async function runMaintenance(db: Db, now = new Date()) {
  const ago = (days: number) => new Date(now.getTime() - days * 86_400_000);
  const count = async (sql: string, params: unknown[]) => (await db.query(`${sql} RETURNING 1`, params)).rows.length;
  return {
    users: await count(
      `DELETE FROM users u WHERE u.last_active_at < $1
         AND NOT EXISTS (SELECT 1 FROM entitlements e WHERE e.user_id = u.id AND e.status = 'active' AND (e.ends_at IS NULL OR e.ends_at > $2))`,
      [ago(RETENTION.inactiveAccountDays), now],
    ),
    sessions: await count('DELETE FROM sessions WHERE (revoked_at IS NOT NULL AND revoked_at < $1) OR last_seen_at < $2', [ago(RETENTION.oldSessionDays), ago(180 + RETENTION.oldSessionDays)]),
    resetCodes: await count('DELETE FROM password_resets WHERE expires_at < $1', [ago(RETENTION.resetCodeDays)]),
    partnerCalls: await count('DELETE FROM partner_calls WHERE received_at < $1', [ago(RETENTION.partnerCallDays)]),
  };
}

/** Runs now, then every 24 hours, without keeping the process alive. */
export function scheduleMaintenance(db: Db, log: (message: string) => void) {
  const run = () =>
    runMaintenance(db)
      .then((done) => log(`maintenance: ${JSON.stringify(done)}`))
      .catch((error) => log(`maintenance failed: ${error}`));
  run();
  const timer = setInterval(run, 24 * 3_600_000);
  timer.unref();
  return () => clearInterval(timer);
}
