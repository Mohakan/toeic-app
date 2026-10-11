import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { buildApp } from '../src/app.js';
import { MAX_DEVICES } from '../src/auth.js';
import { pgliteDb, type Db } from '../src/db.js';
import type { Mail } from '../src/mailer.js';
import { migrate } from '../src/migrations.js';

let db: Db;
let app: Awaited<ReturnType<typeof buildApp>>;
const outbox: Mail[] = [];
const YEAR = new Date().getUTCFullYear();
const ADULT = { password: 'correct horse battery', birthYear: YEAR - 25 };

beforeAll(async () => {
  db = await pgliteDb();
  await migrate(db);
  app = await buildApp({ db, mailer: { send: async (m) => void outbox.push(m) }, strictLimit: 1000 });
});
afterAll(async () => {
  await app.close();
  await db.close();
});
beforeEach(async () => {
  outbox.length = 0;
  await db.exec('DELETE FROM users; DELETE FROM sabil_accounts;');
});

const post = (url: string, payload: object, token?: string) =>
  app.inject({ method: 'POST', url, payload, headers: token ? { authorization: `Bearer ${token}` } : {} });
const me = (token: string) => app.inject({ method: 'GET', url: '/me', headers: { authorization: `Bearer ${token}` } });
const signup = async (email = 'Lina@Example.com', extra: object = {}) => {
  const res = await post('/auth/signup', { email, ...ADULT, ...extra });
  return { res, body: res.json() as { token: string; user: { email: string; devices: number }; plan: { tier: string; source: string | null } } };
};

describe('accounts', () => {
  it('migrates only once', async () => {
    expect(await migrate(db)).toBe(0);
  });

  it('signs up with a normalized e-mail and a free plan, then reads the profile', async () => {
    const { res, body } = await signup();
    expect(res.statusCode).toBe(201);
    expect(body.user.email).toBe('lina@example.com');
    expect(body.plan).toEqual({ tier: 'free', source: null, since: null, validUntil: null });
    expect(body.token.length).toBeGreaterThan(40);
    const profile = await me(body.token);
    expect(profile.statusCode).toBe(200);
    expect(profile.json().user).toMatchObject({ email: 'lina@example.com', birthYear: ADULT.birthYear, devices: 1 });
  });

  it('stores only a hash of the password and of the token', async () => {
    const { body } = await signup();
    const { rows } = await db.query<{ password_hash: string; token_hash: string }>('SELECT password_hash, token_hash FROM users JOIN sessions ON sessions.user_id = users.id');
    expect(rows[0].password_hash.startsWith('scrypt$')).toBe(true);
    expect(rows[0].password_hash).not.toContain(ADULT.password);
    expect(rows[0].token_hash).not.toBe(body.token);
  });

  it('rejects a taken e-mail, a bad e-mail and a short password, and drops unknown fields', async () => {
    await signup();
    expect((await signup('lina@example.com')).res.statusCode).toBe(409);
    expect((await signup('not-an-email')).res.json()).toEqual({ error: 'invalid_email' });
    expect((await post('/auth/signup', { email: 'a@b.co', password: 'short', birthYear: ADULT.birthYear })).statusCode).toBe(400);
    // Fastify removes fields that are not in the schema before the handler sees them.
    const extra = await post('/auth/signup', { email: 'a@b.co', ...ADULT, admin: true, plan: 'full' });
    expect(extra.statusCode).toBe(201);
    expect(extra.json().plan.tier).toBe('free');
  });

  it('asks for a parent’s agreement under 15, and refuses accounts under 13', async () => {
    expect((await signup('kid@example.com', { birthYear: YEAR - 14 })).res.json()).toEqual({ error: 'parental_consent_required' });
    const ok = await signup('kid@example.com', { birthYear: YEAR - 14, parentalConsent: true });
    expect(ok.res.statusCode).toBe(201);
    const { rows } = await db.query<{ parental_consent_at: Date | null }>('SELECT parental_consent_at FROM users');
    expect(rows[0].parental_consent_at).not.toBeNull();
    // Born 13 years ago by the year: may still be 12, so refused.
    expect((await signup('young@example.com', { birthYear: YEAR - 13, parentalConsent: true })).res.json()).toEqual({ error: 'too_young' });
    expect((await signup('future@example.com', { birthYear: YEAR + 1 })).res.json()).toEqual({ error: 'invalid_birth_year' });
  });

  it('signs in, gives the same error for a wrong password and an unknown e-mail, and signs out', async () => {
    await signup();
    const wrong = await post('/auth/login', { email: 'lina@example.com', password: 'wrong password' });
    const unknown = await post('/auth/login', { email: 'nobody@example.com', password: 'wrong password' });
    expect(wrong.statusCode).toBe(401);
    expect(unknown.json()).toEqual(wrong.json());
    const ok = await post('/auth/login', { email: ' LINA@example.com ', password: ADULT.password, device: 'Pixel 9' });
    expect(ok.statusCode).toBe(200);
    const token = ok.json().token as string;
    expect((await post('/auth/logout', {}, token)).statusCode).toBe(204);
    expect((await me(token)).statusCode).toBe(401);
  });

  it(`keeps at most ${MAX_DEVICES} devices signed in`, async () => {
    const first = (await signup()).body.token;
    const tokens = [];
    for (let i = 0; i < MAX_DEVICES; i++) tokens.push((await post('/auth/login', { email: 'lina@example.com', password: ADULT.password })).json().token as string);
    expect((await me(first)).statusCode).toBe(401);
    for (const t of tokens) expect((await me(t)).statusCode).toBe(200);
    expect((await me(tokens[0])).json().user.devices).toBe(MAX_DEVICES);
  });

  it('refuses a missing or forged token', async () => {
    expect((await app.inject({ method: 'GET', url: '/me' })).statusCode).toBe(401);
    expect((await me('forged-token')).json()).toEqual({ error: 'unauthorized' });
  });

  it('changes the password with an e-mailed code, then signs every device out', async () => {
    const old = (await signup()).body.token;
    expect((await post('/auth/password/forgot', { email: 'nobody@example.com' })).statusCode).toBe(204);
    expect(outbox).toHaveLength(0);
    expect((await post('/auth/password/forgot', { email: 'lina@example.com' })).statusCode).toBe(204);
    expect(outbox).toHaveLength(1);
    const code = outbox[0].text.match(/\b(\d{6})\b/)![1];
    const wrongCode = code === '000000' ? '111111' : '000000';
    expect((await post('/auth/password/reset', { email: 'lina@example.com', code: wrongCode, password: 'a new password' })).json()).toEqual({ error: 'invalid_code' });
    const ok = await post('/auth/password/reset', { email: 'lina@example.com', code, password: 'a new password' });
    expect(ok.statusCode).toBe(200);
    expect((await me(old)).statusCode).toBe(401);
    expect((await me(ok.json().token)).statusCode).toBe(200);
    // A code works once.
    expect((await post('/auth/password/reset', { email: 'lina@example.com', code, password: 'another password' })).statusCode).toBe(400);
    expect((await post('/auth/login', { email: 'lina@example.com', password: 'a new password' })).statusCode).toBe(200);
  });

  it('writes the reset e-mail in the account language', async () => {
    await signup('amal@example.com', { lang: 'ar' });
    await post('/auth/password/forgot', { email: 'amal@example.com' });
    expect(outbox[0].subject).toContain('رمز');
  });

  it('blocks a code after 5 wrong attempts', async () => {
    await signup();
    await post('/auth/password/forgot', { email: 'lina@example.com' });
    const code = outbox[0].text.match(/\b(\d{6})\b/)![1];
    const wrong = code === '123456' ? '654321' : '123456';
    for (let i = 0; i < 5; i++) await post('/auth/password/reset', { email: 'lina@example.com', code: wrong, password: 'a new password' });
    expect((await post('/auth/password/reset', { email: 'lina@example.com', code, password: 'a new password' })).statusCode).toBe(400);
  });

  it('expires a code after 30 minutes', async () => {
    let clock = new Date('2026-10-08T10:00:00Z');
    const timed = await buildApp({ db, mailer: { send: async (m) => void outbox.push(m) }, strictLimit: 1000, now: () => clock });
    await timed.inject({ method: 'POST', url: '/auth/signup', payload: { email: 'lina@example.com', ...ADULT } });
    await timed.inject({ method: 'POST', url: '/auth/password/forgot', payload: { email: 'lina@example.com' } });
    const code = outbox[0].text.match(/\b(\d{6})\b/)![1];
    clock = new Date('2026-10-08T10:31:00Z');
    const res = await timed.inject({ method: 'POST', url: '/auth/password/reset', payload: { email: 'lina@example.com', code, password: 'a new password' } });
    expect(res.statusCode).toBe(400);
    await timed.close();
  });

  it('deletes the account with its password', async () => {
    const { token } = (await signup()).body;
    const del = (password: string) => app.inject({ method: 'DELETE', url: '/me', payload: { password }, headers: { authorization: `Bearer ${token}` } });
    expect((await del('wrong password')).statusCode).toBe(401);
    expect((await del(ADULT.password)).statusCode).toBe(204);
    expect((await me(token)).statusCode).toBe(401);
    expect((await db.query('SELECT * FROM users')).rows).toHaveLength(0);
  });

  it('deletes the account from the web page too (store requirement), with its password', async () => {
    await signup();
    const page = await app.inject({ method: 'GET', url: '/account/delete' });
    expect(page.statusCode).toBe(200);
    expect(page.body).toContain('data-action="/web/account/delete"');
    const del = (password: string) => app.inject({ method: 'POST', url: '/web/account/delete', payload: { email: 'LINA@example.com', password } });
    expect((await del('wrong password')).statusCode).toBe(401);
    expect((await del(ADULT.password)).statusCode).toBe(204);
    expect((await db.query('SELECT * FROM users')).rows).toHaveLength(0);
  });

  it('changes the account language', async () => {
    const { token } = (await signup()).body;
    const res = await app.inject({ method: 'PATCH', url: '/me', payload: { lang: 'es' }, headers: { authorization: `Bearer ${token}` } });
    expect(res.statusCode).toBe(204);
    expect((await me(token)).json().user.lang).toBe('es');
  });
});

describe('plan', () => {
  it('opens the full plan with a manual grant, and closes it when revoked or expired', async () => {
    const { token } = (await signup()).body;
    const user = (await db.query<{ id: string }>('SELECT id FROM users')).rows[0];
    await db.query(`INSERT INTO entitlements (user_id, source) VALUES ($1, 'grant')`, [user.id]);
    expect((await me(token)).json().plan).toMatchObject({ tier: 'full', source: 'grant', validUntil: null });
    await db.query(`UPDATE entitlements SET status = 'revoked'`);
    expect((await me(token)).json().plan.tier).toBe('free');
    await db.query(`INSERT INTO entitlements (user_id, source, ends_at) VALUES ($1, 'grant', now() - interval '1 day')`, [user.id]);
    expect((await me(token)).json().plan.tier).toBe('free');
  });

  it('recognizes a partner enrolment by e-mail, before or after sign-up', async () => {
    await db.query(`INSERT INTO sabil_accounts (sabil_id, email, status, valid_until) VALUES ('s-1', 'lina@example.com', 'active', '2099-06-30')`);
    const { body } = await signup();
    expect(body.plan).toMatchObject({ tier: 'full', source: 'sabil', validUntil: '2099-06-30' });
    await db.query(`UPDATE sabil_accounts SET status = 'ended'`);
    expect((await me(body.token)).json().plan.tier).toBe('free');
    await db.query(`UPDATE sabil_accounts SET status = 'active', valid_until = current_date - 1`);
    expect((await me(body.token)).json().plan.tier).toBe('free');
  });
});

describe('protection', () => {
  it('limits sign-in attempts per IP address', async () => {
    const limited = await buildApp({ db, mailer: { send: async () => {} }, strictLimit: 3 });
    const codes = [];
    for (let i = 0; i < 4; i++) codes.push((await limited.inject({ method: 'POST', url: '/auth/login', payload: { email: 'x@example.com', password: 'whatever pass' } })).statusCode);
    expect(codes).toEqual([401, 401, 401, 429]);
    await limited.close();
  });

  it('answers the web app only from allowed origins', async () => {
    const withCors = await buildApp({ db, mailer: { send: async () => {} }, corsOrigins: ['http://localhost:8081'] });
    const ok = await withCors.inject({ method: 'GET', url: '/health', headers: { origin: 'http://localhost:8081' } });
    const other = await withCors.inject({ method: 'GET', url: '/health', headers: { origin: 'https://evil.example' } });
    expect(ok.headers['access-control-allow-origin']).toBe('http://localhost:8081');
    expect(other.headers['access-control-allow-origin']).toBeUndefined();
    await withCors.close();
  });
});
