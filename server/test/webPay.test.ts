import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import type { StoreConfig } from '../src/config.js';
import type { Db } from '../src/db.js';
import type { PaymentProvider } from '../src/providers.js';
import { PASSWORD, planOf, signUp, testApp, testDb, type TestApp } from './helpers.js';

/** Stand-in for Konnect: payments it created, and their state as Konnect would report it. */
const payments = new Map<string, { state: 'completed' | 'pending' | 'failed'; amountMillimes: number; currency: string }>();
const created: { orderId: string; email: string; webhookUrl: string; amountMillimes: number }[] = [];
let checks = 0;

const konnect: PaymentProvider = {
  init: async (input) => {
    created.push(input);
    const ref = `ref${String(created.length).padStart(8, '0')}`;
    payments.set(ref, { state: 'pending', amountMillimes: input.amountMillimes, currency: 'TND' });
    return { payUrl: `https://gateway.example/pay?payment_ref=${ref}`, ref };
  },
  status: async (ref) => {
    checks++;
    return payments.get(ref)!;
  },
};
const stores: StoreConfig = { apple: null, google: null, konnect: { apiUrl: '', apiKey: '', walletId: '', priceMillimes: 20_000 } };

let db: Db;
let app: TestApp;

beforeAll(async () => {
  db = await testDb();
  app = await testApp(db, { providers: { apple: null, google: null, konnect }, stores, publicUrl: 'https://api.tokiquest.app' });
});
afterAll(async () => {
  await app.close();
  await db.close();
});
beforeEach(async () => {
  await db.exec('DELETE FROM users; DELETE FROM purchases;');
  payments.clear();
  created.length = 0;
  checks = 0;
});

const checkout = (email: string, password = PASSWORD) => app.inject({ method: 'POST', url: '/web/checkout', payload: { email, password } });
const webhook = (ref: string) => app.inject({ method: 'GET', url: `/webhooks/konnect?payment_ref=${ref}` });

describe('web payment (Tunisia)', () => {
  it('serves the payment page in French and Arabic with a strict content policy', async () => {
    const fr = await app.inject({ method: 'GET', url: '/pay' });
    expect(fr.statusCode).toBe(200);
    expect(fr.body).toContain('Payer 20 DT');
    expect(fr.headers['content-security-policy']).toContain("script-src 'self'");
    const ar = await app.inject({ method: 'GET', url: '/pay?lang=ar' });
    expect(ar.body).toContain('dir="rtl"');
    expect(ar.body).toContain('20 د.ت');
  });

  it('creates a 20 DT Konnect payment for a signed-in account, then opens the plan once Konnect confirms it', async () => {
    const token = await signUp(app, 'lina@example.com');
    const res = await checkout('LINA@example.com');
    expect(res.statusCode).toBe(200);
    const ref = new URL(res.json().payUrl).searchParams.get('payment_ref')!;
    expect(created[0]).toMatchObject({ email: 'lina@example.com', amountMillimes: 20_000, webhookUrl: 'https://api.tokiquest.app/webhooks/konnect' });

    // Konnect calls back before the payment is complete: nothing opens yet.
    const early = await webhook(ref);
    expect(early.statusCode).toBe(302);
    expect(early.headers.location).toBe(`/pay/done?ref=${ref}`);
    expect((await planOf(app, token)).tier).toBe('free');
    expect((await app.inject({ method: 'GET', url: `/pay/done?ref=${ref}` })).body).toContain('en attente');

    payments.set(ref, { state: 'completed', amountMillimes: 20_000, currency: 'TND' });
    await webhook(ref);
    expect(await planOf(app, token)).toMatchObject({ tier: 'full', source: 'web_tn' });
    expect((await app.inject({ method: 'GET', url: `/pay/done?ref=${ref}` })).body).toContain('Paiement confirmé');

    // A repeated notification changes nothing and does not ask Konnect again.
    const before = checks;
    await webhook(ref);
    expect(checks).toBe(before);
  });

  it('does not open the plan for an underpaid or failed payment', async () => {
    const token = await signUp(app, 'lina@example.com');
    const ref = new URL((await checkout('lina@example.com')).json().payUrl).searchParams.get('payment_ref')!;
    payments.set(ref, { state: 'completed', amountMillimes: 1_000, currency: 'TND' });
    await webhook(ref);
    expect((await planOf(app, token)).tier).toBe('free');
    payments.set(ref, { state: 'failed', amountMillimes: 0, currency: 'TND' });
    await webhook(ref);
    expect((await app.inject({ method: 'GET', url: `/pay/done?ref=${ref}` })).body).toContain('pas abouti');
  });

  it('refuses wrong credentials and accounts that already have the full plan', async () => {
    await signUp(app, 'lina@example.com');
    expect((await checkout('lina@example.com', 'wrong password')).json()).toEqual({ error: 'invalid_credentials' });
    expect((await checkout('nobody@example.com')).json()).toEqual({ error: 'invalid_credentials' });
    const user = (await db.query<{ id: string }>('SELECT id FROM users')).rows[0];
    await db.query(`INSERT INTO entitlements (user_id, source) VALUES ($1, 'grant')`, [user.id]);
    expect((await checkout('lina@example.com')).json()).toEqual({ error: 'already_full' });
    expect(created).toHaveLength(0);
  });

  it('ignores unknown or malformed payment references', async () => {
    expect((await webhook('unknown-ref-123')).statusCode).toBe(404);
    expect((await webhook('<script>')).statusCode).toBe(400);
  });
});

describe('legal pages', () => {
  it('serves the privacy policy in the asked or preferred language, and the web sale conditions', async () => {
    const fr = await app.inject({ method: 'GET', url: '/legal/privacy' });
    expect(fr.statusCode).toBe(200);
    expect(fr.body).toContain('Politique de confidentialité');
    expect((await app.inject({ method: 'GET', url: '/legal/privacy', headers: { 'accept-language': 'ar-TN,ar;q=0.9' } })).body).toContain('dir="rtl"');
    expect((await app.inject({ method: 'GET', url: '/legal/terms?lang=en' })).body).toContain('Terms of use and sale');
    expect((await app.inject({ method: 'GET', url: '/legal/sale' })).body).toContain('Konnect');
    expect((await app.inject({ method: 'GET', url: '/legal/unknown' })).statusCode).toBe(404);
    expect((await app.inject({ method: 'GET', url: '/pay' })).body).toContain('/legal/sale?lang=fr');
  });
});
