import {
  fetchProducts,
  finishTransaction,
  getAvailablePurchases,
  initConnection,
  isUserCancelledError,
  purchaseErrorListener,
  purchaseUpdatedListener,
  requestPurchase,
  restorePurchases,
  type Purchase,
} from 'expo-iap';
import { Platform } from 'react-native';
import { api, API_URL, ApiError } from './api';
import { PRODUCT_ID, type PurchaseOutcome, type PurchaseService } from './purchases';
import { tokenStore } from './tokenStore';

export { PRODUCT_ID } from './purchases';
export type { PurchaseOutcome, PurchaseService } from './purchases';

let connection: Promise<boolean> | null = null;
let waiting: ((outcome: PurchaseOutcome) => void) | null = null;
const listeners = new Set<(outcome: PurchaseOutcome) => void>();

const answer = (outcome: PurchaseOutcome) => {
  if (waiting) waiting(outcome);
  else listeners.forEach((l) => l(outcome));
  waiting = null;
};

/** One store connection for the app's lifetime, with listeners for every purchase update. */
function connect(): Promise<boolean> {
  connection ??= initConnection()
    .then((ok) => {
      purchaseUpdatedListener((purchase) => {
        settle(purchase).then(answer, () => answer({ kind: 'error' }));
      });
      purchaseErrorListener((error) => answer(isUserCancelledError(error) ? { kind: 'cancelled' } : { kind: 'error' }));
      return ok;
    })
    .catch(() => {
      connection = null;
      return false;
    });
  return connection;
}

/**
 * Sends the purchase to our server, which checks it with Apple or Google. The store transaction is
 * finished only once the server has recorded it, so a payment is never lost: an unfinished one
 * comes back at the next launch.
 */
async function settle(purchase: Purchase): Promise<PurchaseOutcome> {
  if (purchase.productId !== PRODUCT_ID) return { kind: 'nothing' };
  if (purchase.purchaseState === 'pending') return { kind: 'pending' };
  const receipt = purchase.purchaseToken;
  if (!receipt) return { kind: 'error' };
  const token = await tokenStore.get().catch(() => null);
  try {
    const result = Platform.OS === 'ios' ? await api.verifyApple(receipt, token) : await api.verifyGoogle(PRODUCT_ID, receipt, token);
    if (result.status === 'pending') return { kind: 'pending' };
    await finishTransaction({ purchase, isConsumable: false });
    return result.status === 'valid' ? { kind: 'purchased', plan: result.plan } : { kind: 'nothing' };
  } catch (error) {
    if (error instanceof ApiError && error.code === 'purchase_linked_elsewhere') {
      await finishTransaction({ purchase, isConsumable: false }).catch(() => {});
      return { kind: 'linked_elsewhere' };
    }
    if (error instanceof ApiError && (error.code === 'invalid_receipt' || error.code === 'wrong_product')) return { kind: 'error' };
    return { kind: 'retry_later' };
  }
}

export const purchases: PurchaseService = {
  // Purchases are checked by our server, so they need it.
  available: API_URL !== null,
  price: async () => {
    if (!(await connect())) return null;
    try {
      const products = (await fetchProducts({ skus: [PRODUCT_ID], type: 'in-app' })) as { id: string; displayPrice: string }[] | null;
      return products?.find((p) => p.id === PRODUCT_ID)?.displayPrice ?? null;
    } catch {
      return null;
    }
  },
  buyFullPlan: async () => {
    if (!(await connect())) return { kind: 'unavailable' };
    return new Promise<PurchaseOutcome>((resolve) => {
      waiting = resolve;
      requestPurchase({ request: { apple: { sku: PRODUCT_ID }, google: { skus: [PRODUCT_ID] } }, type: 'in-app' }).catch((error: unknown) => {
        waiting = null;
        resolve(isUserCancelledError(error) ? { kind: 'cancelled' } : { kind: 'error' });
      });
    });
  },
  restore: async ({ quiet = false } = {}) => {
    if (!(await connect())) return { kind: 'unavailable' };
    try {
      // On iOS, an explicit restore first syncs with the App Store (it may ask to sign in).
      if (!quiet && Platform.OS === 'ios') await restorePurchases();
      const owned = (await getAvailablePurchases()).filter((p) => p.productId === PRODUCT_ID);
      let outcome: PurchaseOutcome = { kind: 'nothing' };
      for (const purchase of owned) {
        outcome = await settle(purchase);
        if (outcome.kind === 'purchased') break;
      }
      return outcome;
    } catch (error) {
      return isUserCancelledError(error) ? { kind: 'cancelled' } : { kind: 'error' };
    }
  },
  onPurchase: (listener) => {
    listeners.add(listener);
    connect();
    return () => listeners.delete(listener);
  },
};
