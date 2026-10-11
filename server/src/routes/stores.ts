import type { FastifyInstance } from 'fastify';
import type { StoreConfig } from '../config.js';
import type { Db } from '../db.js';
import { planFor } from '../plan.js';
import type { Providers } from '../providers.js';
import { LinkedElsewhereError, planFromPurchase, recordPurchase, setPurchaseStatus, type PurchaseRecord } from '../purchases.js';

/**
 * In-app purchases (lot M4). The app sends what the store gave it; the server checks it with Apple
 * or Google before opening anything. The app finishes the store transaction only after this answer.
 */
export function storeRoutes(app: FastifyInstance, { db, providers, stores }: { db: Db; providers: Providers; stores: StoreConfig }) {
  const answer = async (record: PurchaseRecord, userId: string | null, email: string | null) => {
    const { status, since } = await recordPurchase(db, record, userId);
    return { status, plan: userId && email ? await planFor(db, userId, email) : planFromPurchase(record.source, status, since) };
  };

  const linked = (error: unknown) => error instanceof LinkedElsewhereError;

  app.post<{ Body: { signedTransaction: string } }>(
    '/purchases/apple',
    { schema: { body: { type: 'object', required: ['signedTransaction'], additionalProperties: false, properties: { signedTransaction: { type: 'string', minLength: 20, maxLength: 20_000 } } } } },
    async (request, reply) => {
      if (!providers.apple || !stores.apple) return reply.code(503).send({ error: 'store_unavailable' });
      let tx;
      try {
        tx = await providers.apple.transaction(request.body.signedTransaction);
      } catch (error) {
        request.log.warn({ err: error }, 'Apple transaction rejected');
        return reply.code(400).send({ error: 'invalid_receipt' });
      }
      if (tx.bundleId !== stores.apple.bundleId || tx.productId !== stores.apple.productId || !tx.originalTransactionId) return reply.code(400).send({ error: 'wrong_product' });
      try {
        return await answer(
          {
            source: 'store_ios',
            transactionId: tx.originalTransactionId,
            productId: tx.productId,
            status: tx.revoked ? 'revoked' : 'valid',
            environment: tx.environment,
            amountMilli: tx.amountMilli,
            currency: tx.currency,
          },
          request.user?.userId ?? null,
          request.user?.email ?? null,
        );
      } catch (error) {
        if (linked(error)) return reply.code(409).send({ error: 'purchase_linked_elsewhere' });
        throw error;
      }
    },
  );

  app.post<{ Body: { productId: string; purchaseToken: string } }>(
    '/purchases/google',
    {
      schema: {
        body: {
          type: 'object',
          required: ['productId', 'purchaseToken'],
          additionalProperties: false,
          properties: { productId: { type: 'string', maxLength: 150 }, purchaseToken: { type: 'string', minLength: 10, maxLength: 4096 } },
        },
      },
    },
    async (request, reply) => {
      if (!providers.google || !stores.google) return reply.code(503).send({ error: 'store_unavailable' });
      if (request.body.productId !== stores.google.productId) return reply.code(400).send({ error: 'wrong_product' });
      const purchase = await providers.google.product(request.body.productId, request.body.purchaseToken);
      if (!purchase) return reply.code(400).send({ error: 'invalid_receipt' });
      try {
        return await answer(
          {
            source: 'store_android',
            transactionId: request.body.purchaseToken,
            productId: request.body.productId,
            status: purchase.state === 'purchased' ? 'valid' : purchase.state === 'pending' ? 'pending' : 'revoked',
            environment: purchase.test ? 'Test' : 'Production',
            orderId: purchase.orderId,
          },
          request.user?.userId ?? null,
          request.user?.email ?? null,
        );
      } catch (error) {
        if (linked(error)) return reply.code(409).send({ error: 'purchase_linked_elsewhere' });
        throw error;
      }
    },
  );

  /** App Store Server Notifications V2: refunds and revocations close the plan; a reversed refund reopens it. */
  app.post<{ Body: { signedPayload: string } }>(
    '/webhooks/apple',
    { schema: { body: { type: 'object', required: ['signedPayload'], properties: { signedPayload: { type: 'string', maxLength: 100_000 } } } } },
    async (request, reply) => {
      if (!providers.apple) return reply.code(503).send({ error: 'store_unavailable' });
      let notification;
      try {
        notification = await providers.apple.notification(request.body.signedPayload);
      } catch (error) {
        request.log.warn({ err: error }, 'Apple notification rejected');
        return reply.code(400).send({ error: 'invalid_signature' });
      }
      const tx = notification.transaction;
      const status = { REFUND: 'refunded', REVOKE: 'revoked', REFUND_REVERSED: 'valid' }[notification.type] as 'refunded' | 'revoked' | 'valid' | undefined;
      if (tx && status) await setPurchaseStatus(db, 'store_ios', tx.originalTransactionId, status);
      request.log.info({ type: notification.type }, 'Apple notification');
      return reply.code(200).send({ ok: true });
    },
  );

  /** Google Play real-time developer notifications, pushed by Pub/Sub: voided (refunded) and canceled purchases. */
  app.post<{ Body: { message?: { data?: string } } }>('/webhooks/google', async (request, reply) => {
    if (!providers.google) return reply.code(503).send({ error: 'store_unavailable' });
    if (!(await providers.google.verifyPush(request.headers.authorization))) return reply.code(401).send({ error: 'unauthorized' });
    let event: { voidedPurchaseNotification?: { purchaseToken?: string }; oneTimeProductNotification?: { notificationType?: number; purchaseToken?: string } };
    try {
      event = JSON.parse(Buffer.from(request.body?.message?.data ?? '', 'base64').toString('utf8'));
    } catch {
      return reply.code(400).send({ error: 'invalid_request' });
    }
    const voided = event.voidedPurchaseNotification?.purchaseToken;
    if (voided) await setPurchaseStatus(db, 'store_android', voided, 'refunded');
    // ONE_TIME_PRODUCT_CANCELED (2): a pending purchase that was never paid.
    const oneTime = event.oneTimeProductNotification;
    if (oneTime?.notificationType === 2 && oneTime.purchaseToken) await setPurchaseStatus(db, 'store_android', oneTime.purchaseToken, 'failed');
    // Pub/Sub retries anything but a 2xx.
    return reply.code(204).send();
  });
}
