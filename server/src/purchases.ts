import type { Db } from './db.js';
import type { ExamId } from './exams.js';
import type { Plan } from './plan.js';

export type PurchaseSource = 'store_ios' | 'store_android' | 'web_tn';
export type PurchaseStatus = 'pending' | 'valid' | 'refunded' | 'revoked' | 'failed';

export interface PurchaseRecord {
  source: PurchaseSource;
  /** Apple: original transaction id; Google: purchase token; Konnect: payment reference. */
  transactionId: string;
  productId: string;
  /** The app the purchase was made in; it opens the full plan of that exam only. */
  exam: ExamId;
  status: PurchaseStatus;
  environment?: string | null;
  orderId?: string | null;
  amountMilli?: number | null;
  currency?: string | null;
}

/** A store purchase already attached to another Toki Quest account. */
export class LinkedElsewhereError extends Error {
  constructor() {
    super('purchase_linked_elsewhere');
  }
}

/**
 * Saves a verified purchase (idempotent: the same transaction updates the same row) and, when the
 * learner is signed in, attaches it to the account. A purchase made without an account can be
 * attached later, by restoring it once signed in.
 */
export async function recordPurchase(db: Db, record: PurchaseRecord, userId: string | null): Promise<{ status: PurchaseStatus; since: string }> {
  const { rows } = await db.query<{ user_id: string | null; status: PurchaseStatus; since: string }>(
    `INSERT INTO purchases (source, transaction_id, product_id, status, environment, order_id, amount_milli, currency, user_id, exam)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
     ON CONFLICT (source, transaction_id) DO UPDATE SET
       -- A receipt sent again after a refund must not reopen the plan: only the store's
       -- notification (setPurchaseStatus) can reverse a refund or a revocation.
       status = CASE WHEN purchases.status IN ('refunded', 'revoked') THEN purchases.status ELSE EXCLUDED.status END,
       environment = COALESCE(EXCLUDED.environment, purchases.environment),
       order_id = COALESCE(EXCLUDED.order_id, purchases.order_id),
       updated_at = now()
     RETURNING user_id, status, to_char(created_at AT TIME ZONE 'UTC', 'YYYY-MM-DD') AS since`,
    [
      record.source,
      record.transactionId,
      record.productId,
      record.status,
      record.environment ?? null,
      record.orderId ?? null,
      record.amountMilli ?? null,
      record.currency ?? null,
      userId,
      record.exam,
    ],
  );
  const row = rows[0];
  if (userId && row.user_id && row.user_id !== userId) throw new LinkedElsewhereError();
  if (userId && !row.user_id) await db.query('UPDATE purchases SET user_id = $3 WHERE source = $1 AND transaction_id = $2', [record.source, record.transactionId, userId]);
  await syncEntitlement(db, record.source, record.transactionId);
  return { status: row.status, since: row.since };
}

/** Refunds, revocations and payment confirmations reported by the stores or Konnect. */
export async function setPurchaseStatus(db: Db, source: PurchaseSource, transactionId: string, status: PurchaseStatus): Promise<boolean> {
  const { rows } = await db.query('UPDATE purchases SET status = $3, updated_at = now() WHERE source = $1 AND transaction_id = $2 RETURNING id', [source, transactionId, status]);
  if (rows.length === 0) return false;
  await syncEntitlement(db, source, transactionId);
  return true;
}

/** Keeps the account's right in line with the purchase: valid opens the full plan, the rest closes it. */
async function syncEntitlement(db: Db, source: PurchaseSource, transactionId: string) {
  const { rows } = await db.query<{ user_id: string | null; status: PurchaseStatus; exam: ExamId }>('SELECT user_id, status, exam FROM purchases WHERE source = $1 AND transaction_id = $2', [source, transactionId]);
  const purchase = rows[0];
  if (!purchase?.user_id) return;
  if (purchase.status === 'valid') {
    await db.query(
      `INSERT INTO entitlements (user_id, source, external_ref, exam) VALUES ($1, $2, $3, $4)
       ON CONFLICT (source, external_ref) DO UPDATE SET status = 'active', user_id = EXCLUDED.user_id`,
      [purchase.user_id, source, transactionId, purchase.exam],
    );
  } else {
    const status = purchase.status === 'refunded' ? 'refunded' : 'revoked';
    await db.query('UPDATE entitlements SET status = $3 WHERE source = $1 AND external_ref = $2', [source, transactionId, status]);
  }
}

/** The plan a purchase gives on its own, for a learner without an account. */
export const planFromPurchase = (source: PurchaseSource, status: PurchaseStatus, since: string): Plan =>
  status === 'valid' ? { tier: 'full', source, since, validUntil: null } : { tier: 'free', source: null, since: null, validUntil: null };
