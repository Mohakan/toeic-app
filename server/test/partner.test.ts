import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import type { Db } from '../src/db.js';
import { signPartnerCall } from '../src/routes/partner.js';
import { planOf, signUp, testApp, testDb, type TestApp } from './helpers.js';

const KEY = 'sabil-test-key-0123456789';
const SECRET = 'sabil-test-secret-0123456789abcdef0123';
let clock = new Date('2026-10-08T10:00:00Z');

let db: Db;
let app: TestApp;

beforeAll(async () => {
  db = await testDb();
  app = await testApp(db, { sabil: { apiKey: KEY, hmacSecret: SECRET }, now: () => clock });
});
afterAll(async () => {
  await app.close();
  await db.close();
});
beforeEach(async () => {
  clock = new Date('2026-10-08T10:00:00Z');
  await db.exec('DELETE FROM users; DELETE FROM sabil_accounts; DELETE FROM partner_calls;');
});

/** A call signed like Sabil would sign it. `tamper` alters one part after signing. */
function call(method: 'GET' | 'PUT' | 'DELETE' | 'POST', url: string, body?: object, tamper: { key?: string; ts?: number; body?: string; signature?: string } = {}) {
  const raw = body ? JSON.stringify(body) : '';
  const ts = String(tamper.ts ?? Math.floor(clock.getTime() / 1000));
  const signature = tamper.signature ?? signPartnerCall(SECRET, ts, method, url, raw);
  return app.inject({
    method,
    url,
    payload: tamper.body ?? (body ? raw : undefined),
    headers: {
      authorization: `Bearer ${tamper.key ?? KEY}`,
      'x-timestamp': ts,
      'x-signature': signature,
      ...(body || tamper.body ? { 'content-type': 'application/json' } : {}),
    },
  });
}

const put = (id: string, body: object) => call('PUT', `/partner/sabil/accounts/${id}`, body);

describe('Sabil partner API', () => {
  it('creates an enrolled learner, and an app account with that e-mail gets the full plan', async () => {
    const res = await put('S-1001', { email: 'Amal@Example.com', firstName: 'Amal', validUntil: '2027-06-30' });
    expect(res.statusCode).toBe(200);
    expect(res.json()).toEqual({ sabilId: 'S-1001', email: 'amal@example.com', status: 'active', validUntil: '2027-06-30' });
    const token = await signUp(app, 'amal@example.com');
    expect(await planOf(app, token)).toMatchObject({ tier: 'full', source: 'sabil', validUntil: '2027-06-30' });
  });

  it('updates in place (idempotent) and follows an e-mail change', async () => {
    const token = await signUp(app, 'new@example.com');
    await put('S-1', { email: 'old@example.com' });
    expect((await planOf(app, token)).tier).toBe('free');
    await put('S-1', { email: 'new@example.com' });
    await put('S-1', { email: 'new@example.com' });
    expect((await planOf(app, token)).tier).toBe('full');
    expect((await db.query('SELECT * FROM sabil_accounts')).rows).toHaveLength(1);
    const got = await call('GET', '/partner/sabil/accounts/S-1');
    expect(got.json()).toMatchObject({ sabilId: 'S-1', email: 'new@example.com', status: 'active', validUntil: null });
  });

  it('ends an enrolment now, or on a given last day', async () => {
    const token = await signUp(app, 'amal@example.com');
    await put('S-1', { email: 'amal@example.com' });
    expect((await call('DELETE', '/partner/sabil/accounts/S-1?endsOn=2099-01-31')).statusCode).toBe(204);
    expect(await planOf(app, token)).toMatchObject({ tier: 'full', validUntil: '2099-01-31' });
    expect((await call('DELETE', '/partner/sabil/accounts/S-1')).statusCode).toBe(204);
    expect((await planOf(app, token)).tier).toBe('free');
    expect((await call('DELETE', '/partner/sabil/accounts/S-unknown')).statusCode).toBe(404);
  });

  it('imports a batch, reporting each invalid account without stopping', async () => {
    const res = await call('POST', '/partner/sabil/accounts:batch', {
      accounts: [
        { sabilId: 'S-1', email: 'a@example.com' },
        { sabilId: 'S-2', email: 'not-an-email' },
        { sabilId: 'bad id!', email: 'c@example.com' },
        { sabilId: 'S-4', email: 'd@example.com', validUntil: '2027-02-30' },
        { sabilId: 'S-5', email: 'e@example.com', status: 'ended' },
      ],
    });
    expect(res.statusCode).toBe(200);
    expect(res.json()).toEqual({
      received: 5,
      upserted: 2,
      errors: [
        { index: 1, sabilId: 'S-2', error: 'invalid_email' },
        { index: 2, sabilId: 'bad id!', error: 'invalid_account' },
        { index: 3, sabilId: 'S-4', error: 'invalid_date' },
      ],
    });
  });

  it('refuses more than 500 accounts in one batch', async () => {
    const accounts = Array.from({ length: 501 }, (_, i) => ({ sabilId: `S-${i}`, email: `l${i}@example.com` }));
    expect((await call('POST', '/partner/sabil/accounts:batch', { accounts })).statusCode).toBe(400);
  });

  it('rejects a wrong key, a wrong or altered signature, and an old timestamp', async () => {
    const body = { email: 'amal@example.com' };
    expect((await call('PUT', '/partner/sabil/accounts/S-1', body, { key: 'wrong-key' })).json()).toEqual({ error: 'invalid_api_key' });
    expect((await call('PUT', '/partner/sabil/accounts/S-1', body, { signature: 'a'.repeat(64) })).json()).toEqual({ error: 'invalid_signature' });
    expect((await call('PUT', '/partner/sabil/accounts/S-1', body, { body: JSON.stringify({ email: 'attacker@example.com' }) })).json()).toEqual({ error: 'invalid_signature' });
    const old = Math.floor(clock.getTime() / 1000) - 301;
    expect((await call('PUT', '/partner/sabil/accounts/S-1', body, { ts: old })).json()).toEqual({ error: 'invalid_timestamp' });
    expect((await db.query('SELECT * FROM sabil_accounts')).rows).toHaveLength(0);
  });

  it('accepts a signed call only once, and keeps a journal of calls', async () => {
    const ts = Math.floor(clock.getTime() / 1000);
    const first = await call('PUT', '/partner/sabil/accounts/S-1', { email: 'a@example.com' }, { ts });
    const replay = await call('PUT', '/partner/sabil/accounts/S-1', { email: 'a@example.com' }, { ts });
    expect(first.statusCode).toBe(200);
    expect(replay.json()).toEqual({ error: 'replayed_request' });
    const { rows } = await db.query<{ method: string; path: string; status: number }>('SELECT method, path, status FROM partner_calls');
    expect(rows).toEqual([{ method: 'PUT', path: '/partner/sabil/accounts/S-1', status: 200 }]);
  });

  it('does not exist when the partner secrets are not configured', async () => {
    const bare = await testApp(db);
    expect((await bare.inject({ method: 'GET', url: '/partner/sabil/accounts/S-1' })).statusCode).toBe(404);
    await bare.close();
  });
});
