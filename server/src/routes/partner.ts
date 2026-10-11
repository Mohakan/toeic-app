import type { FastifyInstance, FastifyRequest } from 'fastify';
import { createHmac } from 'node:crypto';
import { normalizeEmail, validEmail } from '../auth.js';
import { sameHash, sha256 } from '../crypto.js';
import type { Db } from '../db.js';

/**
 * Partner API for Sabil (lot M5): Sabil sends its enrolled learners; an account with the same
 * e-mail gets the full plan (see plan.ts). Specification: docs/sabil-openapi.yaml.
 *
 * Every call carries the API key (Authorization: Bearer), a Unix timestamp (X-Timestamp, within
 * 5 minutes) and X-Signature = hex HMAC-SHA256(secret, "<timestamp>.<METHOD>.<path and query>.<raw body>").
 * A signature is accepted once, so a captured call cannot be replayed.
 */

export const SIGNATURE_WINDOW_S = 300;
export const BATCH_MAX = 500;
const SABIL_ID = '^[A-Za-z0-9._-]{1,64}$';
const DATE = '^\\d{4}-\\d{2}-\\d{2}$';

declare module 'fastify' {
  interface FastifyRequest {
    rawBody?: string;
    partnerCallId?: string;
  }
}

export const signPartnerCall = (secret: string, timestamp: string, method: string, path: string, body: string) =>
  createHmac('sha256', secret).update(`${timestamp}.${method.toUpperCase()}.${path}.${body}`).digest('hex');

interface AccountInput {
  email: string;
  firstName?: string | null;
  status?: 'active' | 'ended';
  validUntil?: string | null;
}

const ACCOUNT_PROPERTIES = {
  email: { type: 'string', maxLength: 254 },
  firstName: { type: ['string', 'null'], maxLength: 80 },
  status: { enum: ['active', 'ended'] },
  validUntil: { type: ['string', 'null'], pattern: DATE },
} as const;

const realDate = (d: string) => !Number.isNaN(Date.parse(`${d}T00:00:00Z`)) && new Date(`${d}T00:00:00Z`).toISOString().startsWith(d);

export function partnerRoutes(app: FastifyInstance, { db, apiKey, hmacSecret, now = () => new Date() }: { db: Db; apiKey: string; hmacSecret: string; now?: () => Date }) {
  return app.register(async (scope) => {
    // The signature covers the exact bytes received, so the JSON body is kept as text too.
    scope.addContentTypeParser('application/json', { parseAs: 'string', bodyLimit: 2 * 1024 * 1024 }, (request, body, done) => {
      request.rawBody = body as string;
      try {
        done(null, (body as string).length ? JSON.parse(body as string) : {});
      } catch {
        done(Object.assign(new Error('invalid json'), { statusCode: 400, validation: true }), undefined);
      }
    });

    const keyHash = sha256(apiKey);
    scope.addHook('preValidation', async (request: FastifyRequest, reply) => {
      const header = request.headers.authorization ?? '';
      const timestamp = String(request.headers['x-timestamp'] ?? '');
      const signature = String(request.headers['x-signature'] ?? '').toLowerCase();
      if (!header.startsWith('Bearer ') || !sameHash(sha256(header.slice(7)), keyHash)) return reply.code(401).send({ error: 'invalid_api_key' });
      const age = Math.abs(now().getTime() / 1000 - Number(timestamp));
      if (!/^\d{9,11}$/.test(timestamp) || !(age <= SIGNATURE_WINDOW_S)) return reply.code(401).send({ error: 'invalid_timestamp' });
      const expected = signPartnerCall(hmacSecret, timestamp, request.method, request.url, request.rawBody ?? '');
      if (!/^[0-9a-f]{64}$/.test(signature) || !sameHash(signature, expected)) return reply.code(401).send({ error: 'invalid_signature' });
      const { rows } = await db.query<{ id: string }>(
        `INSERT INTO partner_calls (partner, signature, method, path) VALUES ('sabil', $1, $2, $3) ON CONFLICT (signature) DO NOTHING RETURNING id`,
        [signature, request.method, request.url.slice(0, 300)],
      );
      if (!rows[0]) return reply.code(409).send({ error: 'replayed_request' });
      request.partnerCallId = rows[0].id;
    });
    // The journal keeps each call's outcome; maintenance.ts removes entries after 90 days.
    scope.addHook('onResponse', async (request, reply) => {
      if (!request.partnerCallId) return;
      await db.query('UPDATE partner_calls SET status = $2 WHERE id = $1', [request.partnerCallId, reply.statusCode]);
    });

    const save = async (sabilId: string, input: AccountInput) => {
      const email = normalizeEmail(input.email);
      if (!validEmail(email)) return { error: 'invalid_email' as const };
      if (input.validUntil && !realDate(input.validUntil)) return { error: 'invalid_date' as const };
      const { rows } = await db.query<{ sabil_id: string; email: string; status: string; valid_until: string | null }>(
        `INSERT INTO sabil_accounts (sabil_id, email, first_name, status, valid_until) VALUES ($1, $2, $3, $4, $5)
         ON CONFLICT (sabil_id) DO UPDATE SET email = EXCLUDED.email, first_name = EXCLUDED.first_name,
           status = EXCLUDED.status, valid_until = EXCLUDED.valid_until, updated_at = now()
         RETURNING sabil_id, email, status, valid_until::text`,
        [sabilId, email, input.firstName?.trim() || null, input.status ?? 'active', input.validUntil ?? null],
      );
      const r = rows[0];
      return { account: { sabilId: r.sabil_id, email: r.email, status: r.status, validUntil: r.valid_until } };
    };

    const limit = { rateLimit: { max: 600, timeWindow: '1 minute' } };

    scope.put<{ Params: { sabilId: string }; Body: AccountInput }>(
      '/partner/sabil/accounts/:sabilId',
      {
        config: limit,
        schema: {
          params: { type: 'object', properties: { sabilId: { type: 'string', pattern: SABIL_ID } } },
          body: { type: 'object', required: ['email'], additionalProperties: false, properties: ACCOUNT_PROPERTIES },
        },
      },
      async (request, reply) => {
        const result = await save(request.params.sabilId, request.body);
        if (result.error) return reply.code(400).send({ error: result.error });
        return result.account;
      },
    );

    scope.get<{ Params: { sabilId: string } }>(
      '/partner/sabil/accounts/:sabilId',
      { config: limit, schema: { params: { type: 'object', properties: { sabilId: { type: 'string', pattern: SABIL_ID } } } } },
      async (request, reply) => {
        const { rows } = await db.query<{ sabil_id: string; email: string; first_name: string | null; status: string; valid_until: string | null; updated_at: Date }>(
          'SELECT sabil_id, email, first_name, status, valid_until::text, updated_at FROM sabil_accounts WHERE sabil_id = $1',
          [request.params.sabilId],
        );
        const r = rows[0];
        if (!r) return reply.code(404).send({ error: 'not_found' });
        return { sabilId: r.sabil_id, email: r.email, firstName: r.first_name, status: r.status, validUntil: r.valid_until, updatedAt: r.updated_at.toISOString() };
      },
    );

    /** End of enrolment: now, or on `endsOn` (last day of access) when it is today or later. */
    scope.delete<{ Params: { sabilId: string }; Querystring: { endsOn?: string } }>(
      '/partner/sabil/accounts/:sabilId',
      {
        config: limit,
        schema: {
          params: { type: 'object', properties: { sabilId: { type: 'string', pattern: SABIL_ID } } },
          querystring: { type: 'object', additionalProperties: false, properties: { endsOn: { type: 'string', pattern: DATE } } },
        },
      },
      async (request, reply) => {
        const endsOn = request.query.endsOn;
        if (endsOn && !realDate(endsOn)) return reply.code(400).send({ error: 'invalid_date' });
        const today = now().toISOString().slice(0, 10);
        const later = endsOn !== undefined && endsOn >= today;
        const { rows } = await db.query(
          later
            ? `UPDATE sabil_accounts SET status = 'active', valid_until = $2, updated_at = now() WHERE sabil_id = $1 RETURNING sabil_id`
            : `UPDATE sabil_accounts SET status = 'ended', updated_at = now() WHERE sabil_id = $1 RETURNING sabil_id`,
          later ? [request.params.sabilId, endsOn] : [request.params.sabilId],
        );
        if (rows.length === 0) return reply.code(404).send({ error: 'not_found' });
        return reply.code(204).send();
      },
    );

    /** Initial import and resynchronisation: up to 500 accounts; each one succeeds or fails on its own. */
    scope.post<{ Body: { accounts: (AccountInput & { sabilId: string })[] } }>(
      '/partner/sabil/accounts::batch',
      {
        config: limit,
        schema: {
          body: {
            type: 'object',
            required: ['accounts'],
            additionalProperties: false,
            properties: { accounts: { type: 'array', minItems: 1, maxItems: BATCH_MAX, items: { type: 'object' } } },
          },
        },
      },
      async (request) => {
        const errors: { index: number; sabilId: string | null; error: string }[] = [];
        let upserted = 0;
        for (const [index, item] of request.body.accounts.entries()) {
          const sabilId = typeof item.sabilId === 'string' ? item.sabilId : null;
          const shapeOk =
            sabilId !== null &&
            new RegExp(SABIL_ID).test(sabilId) &&
            typeof item.email === 'string' &&
            item.email.length <= 254 &&
            (item.firstName === undefined || item.firstName === null || (typeof item.firstName === 'string' && item.firstName.length <= 80)) &&
            (item.status === undefined || item.status === 'active' || item.status === 'ended') &&
            (item.validUntil === undefined || item.validUntil === null || (typeof item.validUntil === 'string' && new RegExp(DATE).test(item.validUntil)));
          if (!shapeOk) {
            errors.push({ index, sabilId, error: 'invalid_account' });
            continue;
          }
          const result = await save(sabilId, item);
          if (result.error) errors.push({ index, sabilId, error: result.error });
          else upserted++;
        }
        return { received: request.body.accounts.length, upserted, errors };
      },
    );
  });
}
