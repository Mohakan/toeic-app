import { Environment, SignedDataVerifier, type JWSTransactionDecodedPayload } from '@apple/app-store-server-library';
import { GoogleAuth, OAuth2Client } from 'google-auth-library';
import { readFileSync } from 'node:fs';
import type { StoreConfig } from './config.js';

/**
 * The payment services, behind small interfaces: the routes and the tests do not depend on Apple,
 * Google or Konnect directly. Amounts are in thousandths of the currency (Apple's "milli-units",
 * Konnect's millimes).
 */

export interface AppleTransaction {
  originalTransactionId: string;
  productId: string;
  bundleId: string;
  environment: string;
  revoked: boolean;
  amountMilli: number | null;
  currency: string | null;
}

export interface AppleVerifier {
  /** Verifies a StoreKit 2 signed transaction (JWS); throws if it is not genuine. */
  transaction(signed: string): Promise<AppleTransaction>;
  /** Verifies an App Store Server Notification V2. */
  notification(signedPayload: string): Promise<{ type: string; transaction: AppleTransaction | null }>;
}

export interface GooglePurchase {
  state: 'purchased' | 'canceled' | 'pending';
  orderId: string | null;
  test: boolean;
}

export interface GooglePlay {
  /** The purchase as Google Play knows it, or null when the token is unknown. */
  product(productId: string, purchaseToken: string): Promise<GooglePurchase | null>;
  /** Checks the OIDC token Pub/Sub sends with real-time developer notifications. */
  verifyPush(authorization: string | undefined): Promise<boolean>;
}

export interface PaymentProvider {
  init(input: { amountMillimes: number; orderId: string; email: string; webhookUrl: string; description: string }): Promise<{ payUrl: string; ref: string }>;
  status(ref: string): Promise<{ state: 'completed' | 'pending' | 'failed'; amountMillimes: number; currency: string }>;
}

export interface Providers {
  apple: AppleVerifier | null;
  google: GooglePlay | null;
  konnect: PaymentProvider | null;
}

const appleTransaction = (t: JWSTransactionDecodedPayload): AppleTransaction => ({
  originalTransactionId: t.originalTransactionId ?? '',
  productId: t.productId ?? '',
  bundleId: t.bundleId ?? '',
  environment: String(t.environment ?? ''),
  revoked: t.revocationDate !== undefined && t.revocationDate !== null,
  amountMilli: typeof t.price === 'number' ? t.price : null,
  currency: t.currency ?? null,
});

/** Apple: production first (needs the App Store app id), then the sandbox used by TestFlight. */
export function appleVerifier(config: NonNullable<StoreConfig['apple']>): AppleVerifier {
  const roots = config.rootCertFiles.map((file) => readFileSync(file));
  const verifiers = [
    ...(config.appAppleId ? [new SignedDataVerifier(roots, true, Environment.PRODUCTION, config.bundleId, config.appAppleId)] : []),
    new SignedDataVerifier(roots, true, Environment.SANDBOX, config.bundleId),
  ];
  const tryAll = async <T>(run: (v: SignedDataVerifier) => Promise<T>): Promise<T> => {
    let last: unknown;
    for (const v of verifiers) {
      try {
        return await run(v);
      } catch (error) {
        last = error;
      }
    }
    throw last;
  };
  return {
    transaction: async (signed) => appleTransaction(await tryAll((v) => v.verifyAndDecodeTransaction(signed))),
    notification: async (signedPayload) => {
      const { notification, verifier } = await tryAll(async (v) => ({ notification: await v.verifyAndDecodeNotification(signedPayload), verifier: v }));
      const signedTx = notification.data?.signedTransactionInfo;
      return {
        type: String(notification.notificationType ?? ''),
        transaction: signedTx ? appleTransaction(await verifier.verifyAndDecodeTransaction(signedTx)) : null,
      };
    },
  };
}

/** Google Play Developer API (purchases.products) with a service account; Pub/Sub push authenticated by OIDC. */
export function googlePlay(config: NonNullable<StoreConfig['google']>): GooglePlay {
  const auth = new GoogleAuth({ keyFile: config.serviceAccountFile, scopes: ['https://www.googleapis.com/auth/androidpublisher'] });
  const oidc = new OAuth2Client();
  return {
    product: async (productId, token) => {
      const url = `https://androidpublisher.googleapis.com/androidpublisher/v3/applications/${encodeURIComponent(config.packageName)}/purchases/products/${encodeURIComponent(productId)}/tokens/${encodeURIComponent(token)}`;
      const client = await auth.getClient();
      try {
        const res = await client.request<{ purchaseState?: number; orderId?: string; purchaseType?: number }>({ url });
        const state = res.data.purchaseState === 0 ? 'purchased' : res.data.purchaseState === 2 ? 'pending' : 'canceled';
        return { state, orderId: res.data.orderId ?? null, test: res.data.purchaseType === 0 };
      } catch (error) {
        const status = (error as { response?: { status?: number } }).response?.status;
        if (status === 400 || status === 404 || status === 410) return null;
        throw error;
      }
    },
    verifyPush: async (authorization) => {
      if (!config.pubsubAudience || !config.pubsubServiceAccount || !authorization?.startsWith('Bearer ')) return false;
      try {
        const ticket = await oidc.verifyIdToken({ idToken: authorization.slice(7), audience: config.pubsubAudience });
        const payload = ticket.getPayload();
        return payload?.email === config.pubsubServiceAccount && payload.email_verified === true;
      } catch {
        return false;
      }
    },
  };
}

/** Konnect (Tunisia): card, e-Dinar and wallet. See https://docs.konnect.network */
export function konnect(config: NonNullable<StoreConfig['konnect']>): PaymentProvider {
  const call = async <T>(path: string, init?: RequestInit): Promise<T> => {
    const res = await fetch(`${config.apiUrl}${path}`, {
      ...init,
      headers: { 'x-api-key': config.apiKey, 'content-type': 'application/json', ...init?.headers },
      signal: AbortSignal.timeout(15_000),
    });
    if (!res.ok) throw new Error(`Konnect ${path}: HTTP ${res.status}`);
    return (await res.json()) as T;
  };
  return {
    init: async ({ amountMillimes, orderId, email, webhookUrl, description }) => {
      const body = {
        receiverWalletId: config.walletId,
        token: 'TND',
        amount: amountMillimes,
        type: 'immediate',
        description,
        acceptedPaymentMethods: ['bank_card', 'e-DINAR', 'wallet'],
        lifespan: 30,
        checkoutForm: false,
        addPaymentFeesToAmount: false,
        email,
        orderId,
        webhook: webhookUrl,
        theme: 'light',
      };
      const res = await call<{ payUrl: string; paymentRef: string }>('/payments/init-payment', { method: 'POST', body: JSON.stringify(body) });
      return { payUrl: res.payUrl, ref: res.paymentRef };
    },
    status: async (ref) => {
      const { payment } = await call<{ payment: { status: string; amount: number; reachedAmount?: number; token?: string } }>(`/payments/${encodeURIComponent(ref)}`);
      const state = payment.status === 'completed' ? 'completed' : payment.status === 'failed' || payment.status === 'expired' ? 'failed' : 'pending';
      return { state, amountMillimes: payment.reachedAmount ?? payment.amount, currency: payment.token ?? 'TND' };
    },
  };
}

export function providersFrom(config: StoreConfig): Providers {
  return {
    apple: config.apple ? appleVerifier(config.apple) : null,
    google: config.google ? googlePlay(config.google) : null,
    konnect: config.konnect ? konnect(config.konnect) : null,
  };
}
