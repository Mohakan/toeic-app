import cors from '@fastify/cors';
import rateLimit from '@fastify/rate-limit';
import Fastify from 'fastify';
import { authenticate } from './auth.js';
import type { Db } from './db.js';
import type { Mailer } from './mailer.js';
import type { Config, StoreConfig } from './config.js';
import type { Providers } from './providers.js';
import { accountRoutes } from './routes/account.js';
import { legalRoutes } from './routes/legal.js';
import { partnerRoutes } from './routes/partner.js';
import { storeRoutes } from './routes/stores.js';
import { webAccountRoutes } from './routes/webAccount.js';
import { webPayRoutes } from './routes/webPay.js';

export interface AppOptions {
  db: Db;
  mailer: Mailer;
  corsOrigins?: string[];
  trustProxy?: boolean;
  logger?: false | { level: string };
  /** Requests per IP address and 15 minutes on sign-up, sign-in, codes and deletion. */
  strictLimit?: number;
  /** Payment services (lot M4); none by default. */
  providers?: Providers;
  stores?: StoreConfig;
  /** Partner API secrets (lot M5); the routes exist only when they are set. */
  sabil?: Config['sabil'];
  publicUrl?: string;
  /** Tests replace the clock. */
  now?: () => Date;
}

const NO_STORES: StoreConfig = { apple: null, google: null, konnect: null };

export async function buildApp({
  db,
  mailer,
  corsOrigins = [],
  trustProxy = false,
  logger = false,
  strictLimit = 10,
  providers = { apple: null, google: null, konnect: null },
  stores = NO_STORES,
  sabil = null,
  publicUrl = 'http://localhost:4000',
  now,
}: AppOptions) {
  const app = Fastify({
    // Tokens never reach the logs (request bodies are not logged).
    logger: logger && { ...logger, redact: ['req.headers.authorization'] },
    trustProxy,
    bodyLimit: 64 * 1024,
  });

  await app.register(cors, { origin: corsOrigins, methods: ['GET', 'POST', 'PATCH', 'DELETE'] });
  await app.register(rateLimit, { max: 120, timeWindow: '1 minute' });

  app.decorateRequest('user', null);
  app.addHook('onRequest', authenticate(db));

  app.setErrorHandler((error: { validation?: unknown; statusCode?: number }, request, reply) => {
    if (error.validation) return reply.code(400).send({ error: 'invalid_request' });
    if (error.statusCode === 429) return reply.code(429).send({ error: 'too_many_requests' });
    request.log.error(error);
    return reply.code(500).send({ error: 'server_error' });
  });

  app.get('/health', async () => ({ ok: true }));
  const strict = { rateLimit: { max: strictLimit, timeWindow: '15 minutes' } };
  accountRoutes(app, { db, mailer, now, strict });
  storeRoutes(app, { db, providers, stores });
  legalRoutes(app);
  webPayRoutes(app, { db, providers, stores, publicUrl, strict });
  webAccountRoutes(app, { db, strict });
  if (sabil) await partnerRoutes(app, { db, apiKey: sabil.apiKey, hmacSecret: sabil.hmacSecret, now });
  return app;
}
