import type { Plan } from './access';

/**
 * Purchase of the full plan: a one-time, non-consumable in-app purchase on the App Store and
 * Google Play (purchases.native.ts). The web build cannot buy. Store rules: inside the app, the
 * in-app purchase is the only way to pay, and nothing points to the web payment.
 */
export const PRODUCT_ID = 'toki_quest_full';

export type PurchaseOutcome =
  | { kind: 'purchased'; plan: Plan }
  | {
      kind:
        | 'cancelled'
        /** Android: paid in cash or by a slow method; the plan opens once Google confirms it. */
        | 'pending'
        /** Nothing to restore. */
        | 'nothing'
        | 'unavailable'
        /** The store took the payment but the server could not confirm it yet; retried at the next launch. */
        | 'retry_later'
        /** This store purchase belongs to another Toki Quest account. */
        | 'linked_elsewhere'
        | 'error';
    };

export interface PurchaseService {
  available: boolean;
  /** The store's price, formatted for the learner's country; null when unknown. */
  price(): Promise<string | null>;
  buyFullPlan(): Promise<PurchaseOutcome>;
  /** `quiet`: at launch, without asking the store to sign in. */
  restore(options?: { quiet?: boolean }): Promise<PurchaseOutcome>;
  /** Purchases that complete outside a request (interrupted, approved later, pending). */
  onPurchase(listener: (outcome: PurchaseOutcome) => void): () => void;
}

export const purchases: PurchaseService = {
  available: false,
  price: async () => null,
  buyFullPlan: async () => ({ kind: 'unavailable' }),
  restore: async () => ({ kind: 'unavailable' }),
  onPurchase: () => () => {},
};
