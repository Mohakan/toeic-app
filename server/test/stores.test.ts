import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import type { StoreConfig } from '../src/config.js';
import type { Db } from '../src/db.js';
import type { AppleTransaction, GooglePurchase, Providers } from '../src/providers.js';
import { bearer, planOf, signUp, testApp, testDb, type TestApp } from './helpers.js';

/** Stand-ins for Apple and Google: a "signed" transaction is just a key into these tables. */
const appleTx = new Map<string, AppleTransaction>();
const appleNotes = new Map<string, { type: string; transaction: AppleTransaction | null }>();
const googleTokens = new Map<string, GooglePurchase>();
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
  google: { product: async (_id, token) => googleTokens.get(token) ?? null, verifyPush: async () => pushOk },
  konnect: null,
};

const stores: StoreConfig = {
  apple: { bundleId: 'app.tokiquest', appAppleId: 123, productId: 'toki_quest_full', rootCertFiles: [] },
  google: { packageName: 'app.tokiquest', productId: 'toki_quest_full', serviceAccountFile: '', pubsubAudience: 'aud', pubsubServiceAccount: 'sa@example.com' },
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

describe('without store configuration', () => {
  it('answers that the store is unavailable', async () => {
    const bare = await testApp(db);
    const res = await bare.inject({ method: 'POST', url: '/purchases/apple', payload: { signedTransaction: 'x'.repeat(30) } });
    expect(res.json()).toEqual({ error: 'store_unavailable' });
    await bare.close();
  });
});
