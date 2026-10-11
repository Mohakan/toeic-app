import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import type { Db } from '../src/db.js';
import { runMaintenance } from '../src/maintenance.js';
import { testDb } from './helpers.js';

let db: Db;
beforeAll(async () => {
  db = await testDb();
});
afterAll(async () => {
  await db.close();
});
beforeEach(async () => {
  await db.exec('DELETE FROM users; DELETE FROM partner_calls;');
});

const user = async (email: string, lastActive: string) =>
  (await db.query<{ id: string }>(`INSERT INTO users (email, password_hash, birth_year, last_active_at) VALUES ($1, 'x', 2000, $2) RETURNING id`, [email, lastActive])).rows[0].id;

describe('retention', () => {
  const now = new Date('2030-01-01T00:00:00Z');

  it('deletes accounts unused for 3 years, except those holding a full plan in force', async () => {
    await user('recent@example.com', '2028-06-01T00:00:00Z');
    await user('old@example.com', '2026-06-01T00:00:00Z');
    const paid = await user('paid@example.com', '2026-06-01T00:00:00Z');
    await db.query(`INSERT INTO entitlements (user_id, source) VALUES ($1, 'store_ios')`, [paid]);
    const done = await runMaintenance(db, now);
    expect(done.users).toBe(1);
    const { rows } = await db.query<{ email: string }>('SELECT email FROM users ORDER BY email');
    expect(rows.map((r) => r.email)).toEqual(['paid@example.com', 'recent@example.com']);
  });

  it('removes old sessions, expired reset codes and old partner calls', async () => {
    const id = await user('lina@example.com', '2029-12-01T00:00:00Z');
    await db.query(`INSERT INTO sessions (user_id, token_hash, revoked_at, last_seen_at) VALUES ($1, 'a', '2029-01-01', '2029-01-01'), ($1, 'b', NULL, '2029-12-01')`, [id]);
    await db.query(`INSERT INTO password_resets (user_id, code_hash, expires_at) VALUES ($1, 'c', '2029-12-30'), ($1, 'd', '2029-12-31T23:59:00Z')`, [id]);
    await db.query(`INSERT INTO partner_calls (partner, signature, method, path, received_at) VALUES ('sabil', 's1', 'PUT', '/x', '2029-09-01'), ('sabil', 's2', 'PUT', '/x', '2029-12-20')`);
    expect(await runMaintenance(db, now)).toEqual({ users: 0, sessions: 1, resetCodes: 1, partnerCalls: 1 });
  });
});
