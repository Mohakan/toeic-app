import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import type { StoreConfig } from '../src/config.js';
import type { Db } from '../src/db.js';
import type { AppleTransaction, GooglePurchase, Providers } from '../src/providers.js';
import { bearer, planOf, signUp, testApp, testDb, type TestApp } from './helpers.js';

const planIn = async (exam: string, token: string) => (await app.inject({ method: 'GET', url: '/me', headers: { ...bearer(token), 'x-toki-exam': exam } })).json().plan;

/** Stand-ins for Apple and Google: a "signed" transaction is just a key into these tables. */
const appleTx = new Map<string, AppleTransaction>();
const appleNotes = new Map<string, { type: string; transaction: AppleTransaction | null }>();
const googleTokens = new Map<string, GooglePurchase>();
/** Package a token was issued for, when a test sets it. */
const googlePackageOf = new Map<string, string>();
let pushOk = true;

const providers: Providers = {
  apple: {
    transaction: async (jws) => {
      const tx = appleTx.get(jws);
      if (!tx) throw new Error('bad signature');
      return tx;
    },
    notification: async (payload) => {
      const n = appleNotes.get(payload);
      if (!n) throw new Error('bad signature');
      return n;
    },
  },
  google: { product: async (packageName, _id, token) => (packageName === googlePackageOf.get(token) || !googlePackageOf.has(token) ? (googleTokens.get(token) ?? null) : null), verifyPush: async () => pushOk },
  konnect: null,
};

const stores: StoreConfig = {
  apple: {
    apps: [
      { exam: 'toeic', bundleId: 'app.tokiquest', appAppleId: 123, productId: 'toki_quest_full' },
      { exam: 'b2First', bundleId: 'app.tokiquest.b2', appAppleId: 456, productId: 'toki_quest_b2_full' },
    ],
    rootCertFiles: [],
  },
  google: {
    apps: [
      { exam: 'toeic', packageName: 'app.tokiquest', productId: 'toki_quest_full' },
      { exam: 'b2First', packageName: 'app.tokiquest.b2', productId: 'toki_quest_b2_full' },
    ],
    serviceAccountFile: '',
    pubsubAudience: 'aud',
    pubsubServiceAccount: 'sa@example.com',
  },
  konnect: null,
};

const tx = (id: string, extra: Partial<AppleTransaction> = {}): AppleTransaction => ({
  originalTransactionId: id,
  productId: 'toki_quest_full',
  bundleId: 'app.tokiquest',
  environment: 'Sandbox',
  revoked: false,
  amountMilli: 9990,
  currency: 'USD',
  ...extra,
});

let db: Db;
let app: TestApp;

beforeAll(async () => {
  db = await testDb();
  app = await testApp(db, { providers, stores });
});
afterAll(async () => {
  await app.close();
  await db.close();
});
beforeEach(async () => {
  await db.exec('DELETE FROM users; DELETE FROM purchases;');
  appleTx.clear();
  appleNotes.clear();
  googleTokens.clear();
  googlePackageOf.clear();
  pushOk = true;
});

const apple = (signedTransaction: string, token?: string) => app.inject({ method: 'POST', url: '/purchases/apple', payload: { signedTransaction }, headers: bearer(token) });
const google = (purchaseToken: string, token?: string, productId = 'toki_quest_full') =>
  app.inject({ method: 'POST', url: '/purchases/google', payload: { productId, purchaseToken }, headers: bearer(token) });
const pubsub = (event: object) =>
  app.inject({ method: 'POST', url: '/webhooks/google', payload: { message: { data: Buffer.from(JSON.stringify(event)).toString('base64') } }, headers: { authorization: 'Bearer oidc' } });

describe('App Store', () => {
  it('opens the full plan of a signed-in learner after checking the transaction', async () => {
    const token = await signUp(app, 'lina@example.com');
    appleTx.set('jws-signed-transaction-1', tx('1000001'));
    const res = await apple('jws-signed-transaction-1', token);
    expect(res.statusCode).toBe(200);
    expect(res.json()).toMatchObject({ status: 'valid', plan: { tier: 'full', source: 'store_ios' } });
    expect((await planOf(app, token)).tier).toBe('full');
    const { rows } = await db.query<{ amount_milli: number; environment: string }>('SELECT amount_milli, environment FROM purchases');
    expect(rows[0]).toEqual({ amount_milli: 9990, environment: 'Sandbox' });
  });

  it('works without an account, and attaches the purchase when the learner restores it signed in', async () => {
    appleTx.set('jws-signed-transaction-1', tx('1000001'));
    const anonymous = await apple('jws-signed-transaction-1');
    expect(anonymous.json().plan).toMatchObject({ tier: 'full', source: 'store_ios' });
    const token = await signUp(app, 'lina@example.com');
    expect((await planOf(app, token)).tier).toBe('free');
    await apple('jws-signed-transaction-1', token);
    expect((await planOf(app, token)).tier).toBe('full');
  });

  it('does not move a purchase to a second account', async () => {
    appleTx.set('jws-signed-transaction-1', tx('1000001'));
    await apple('jws-signed-transaction-1', await signUp(app, 'lina@example.com'));
    const other = await signUp(app, 'sami@example.com');
    const res = await apple('jws-signed-transaction-1', other);
    expect(res.statusCode).toBe(409);
    expect(res.json()).toEqual({ error: 'purchase_linked_elsewhere' });
    expect((await planOf(app, other)).tier).toBe('free');
  });

  it('frees the purchase when its account is deleted', async () => {
    appleTx.set('jws-signed-transaction-1', tx('1000001'));
    const first = await signUp(app, 'lina@example.com');
    await apple('jws-signed-transaction-1', first);
    await app.inject({ method: 'DELETE', url: '/me', payload: { password: 'correct horse battery' }, headers: bearer(first) });
    const second = await signUp(app, 'lina.new@example.com');
    expect((await apple('jws-signed-transaction-1', second)).statusCode).toBe(200);
    expect((await planOf(app, second)).tier).toBe('full');
  });

  it('rejects forged transactions and other products or apps', async () => {
    expect((await apple('forged-transaction-xxxxxxxx')).json()).toEqual({ error: 'invalid_receipt' });
    appleTx.set('jws-signed-transaction-other', tx('1000002', { productId: 'something_else' }));
    expect((await apple('jws-signed-transaction-other')).json()).toEqual({ error: 'wrong_product' });
    appleTx.set('jws-signed-transaction-app', tx('1000003', { bundleId: 'com.other.app' }));
    expect((await apple('jws-signed-transaction-app')).json()).toEqual({ error: 'wrong_product' });
  });

  it('closes the plan on a refund notification, and an old receipt does not reopen it', async () => {
    const token = await signUp(app, 'lina@example.com');
    appleTx.set('jws-signed-transaction-1', tx('1000001'));
    await apple('jws-signed-transaction-1', token);
    appleNotes.set('note-refund', { type: 'REFUND', transaction: tx('1000001', { revoked: true }) });
    expect((await app.inject({ method: 'POST', url: '/webhooks/apple', payload: { signedPayload: 'note-refund' } })).statusCode).toBe(200);
    expect((await planOf(app, token)).tier).toBe('free');
    await apple('jws-signed-transaction-1', token);
    expect((await planOf(app, token)).tier).toBe('free');
    appleNotes.set('note-reversed', { type: 'REFUND_REVERSED', transaction: tx('1000001') });
    await app.inject({ method: 'POST', url: '/webhooks/apple', payload: { signedPayload: 'note-reversed' } });
    expect((await planOf(app, token)).tier).toBe('full');
  });

  it('rejects an unsigned notification', async () => {
    expect((await app.inject({ method: 'POST', url: '/webhooks/apple', payload: { signedPayload: 'forged' } })).statusCode).toBe(400);
  });
});

describe('Google Play', () => {
  it('opens the plan for a purchase Google confirms, and waits for a pending one', async () => {
    const token = await signUp(app, 'lina@example.com');
    googleTokens.set('pending-token-1', { state: 'pending', orderId: 'GPA.1', test: true });
    expect((await google('pending-token-1', token)).json()).toMatchObject({ status: 'pending', plan: { tier: 'free' } });
    googleTokens.set('pending-token-1', { state: 'purchased', orderId: 'GPA.1', test: true });
    expect((await google('pending-token-1', token)).json()).toMatchObject({ status: 'valid', plan: { tier: 'full', source: 'store_android' } });
  });

  it('rejects unknown tokens and other products', async () => {
    expect((await google('unknown-token-1')).json()).toEqual({ error: 'invalid_receipt' });
    expect((await google('unknown-token-1', undefined, 'other_product')).json()).toEqual({ error: 'wrong_product' });
  });

  it('closes the plan when Google reports a voided purchase, only from an authenticated push', async () => {
    const token = await signUp(app, 'lina@example.com');
    googleTokens.set('token-abcdef', { state: 'purchased', orderId: 'GPA.2', test: false });
    await google('token-abcdef', token);
    pushOk = false;
    expect((await pubsub({ voidedPurchaseNotification: { purchaseToken: 'token-abcdef' } })).statusCode).toBe(401);
    expect((await planOf(app, token)).tier).toBe('full');
    pushOk = true;
    expect((await pubsub({ voidedPurchaseNotification: { purchaseToken: 'token-abcdef' } })).statusCode).toBe(204);
    expect((await planOf(app, token)).tier).toBe('free');
  });
});

describe('one app per exam', () => {
  it('opens the plan of the app the purchase was made in, and only that one', async () => {
    const token = await signUp(app, 'lina@example.com');
    appleTx.set('jws-signed-transaction-b2', tx('2000001', { bundleId: 'app.tokiquest.b2', productId: 'toki_quest_b2_full' }));
    const res = await apple('jws-signed-transaction-b2', token);
    expect(res.json()).toMatchObject({ status: 'valid', plan: { tier: 'full' } });
    expect((await planIn('b2First', token)).tier).toBe('full');
    // The TOEIC app (no header, or its own) stays on the free plan.
    expect((await planOf(app, token)).tier).toBe('free');
    expect((await planIn('toeic', token)).tier).toBe('free');
    const { rows } = await db.query<{ exam: string }>('SELECT exam FROM entitlements');
    expect(rows).toEqual([{ exam: 'b2First' }]);
  });

  it('checks a Google token against the package of the product’s app', async () => {
    const token = await signUp(app, 'lina@example.com');
    googleTokens.set('b2-token-1', { state: 'purchased', orderId: 'GPA.2', test: true });
    googlePackageOf.set('b2-token-1', 'app.tokiquest.b2');
    expect((await google('b2-token-1', token, 'toki_quest_b2_full')).json()).toMatchObject({ status: 'valid', plan: { tier: 'full' } });
    expect((await planIn('b2First', token)).tier).toBe('full');
    expect((await planOf(app, token)).tier).toBe('free');
    // The same token presented as the TOEIC product is checked with the TOEIC package: unknown there.
    googlePackageOf.set('b2-token-2', 'app.tokiquest.b2');
    googleTokens.set('b2-token-2', { state: 'purchased', orderId: 'GPA.3', test: true });
    expect((await google('b2-token-2', token)).json()).toEqual({ error: 'invalid_receipt' });
  });

  it('refuses a product of one app sold through another app', async () => {
    appleTx.set('jws-signed-transaction-mixed', tx('2000002', { bundleId: 'app.tokiquest.b2', productId: 'toki_quest_full' }));
    expect((await apple('jws-signed-transaction-mixed')).json()).toEqual({ error: 'wrong_product' });
  });

  it('treats an unknown exam header as the TOEIC app', async () => {
    const token = await signUp(app, 'lina@example.com');
    appleTx.set('jws-signed-transaction-9', tx('2000003'));
    await apple('jws-signed-transaction-9', token);
    expect((await planIn('nope', token)).tier).toBe('full');
  });
});

describe('without store configuration', () => {
  it('answers that the store is unavailable', async () => {
    const bare = await testApp(db);
    const res = await bare.inject({ method: 'POST', url: '/purchases/apple', payload: { signedTransaction: 'x'.repeat(30) } });
    expect(res.json()).toEqual({ error: 'store_unavailable' });
    await bare.close();
  });
});
