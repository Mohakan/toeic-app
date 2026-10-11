export interface StoreConfig {
  apple: { bundleId: string; appAppleId: number | null; productId: string; rootCertFiles: string[] } | null;
  google: { packageName: string; productId: string; serviceAccountFile: string; pubsubAudience: string | null; pubsubServiceAccount: string | null } | null;
  konnect: { apiUrl: string; apiKey: string; walletId: string; priceMillimes: number } | null;
}

export interface Config {
  production: boolean;
  host: string;
  port: number;
  /** PostgreSQL in production. Without it, PGlite keeps the data in `pgliteDir`. */
  databaseUrl: string | null;
  pgliteDir: string;
  smtpUrl: string | null;
  mailFrom: string;
  /** Origins allowed to call the API from a browser (the web build of the app). */
  corsOrigins: string[];
  /** Behind a reverse proxy, so rate limits see the client's address. */
  trustProxy: boolean;
  /** Public address of this server, for payment webhooks and the web payment page. */
  publicUrl: string;
  stores: StoreConfig;
  /** Partner API (lot M5); disabled until both secrets are set. */
  sabil: { apiKey: string; hmacSecret: string } | null;
}

const list = (value: string | undefined) =>
  (value ?? '')
    .split(',')
    .map((v) => v.trim())
    .filter(Boolean);

export function loadConfig(env: NodeJS.ProcessEnv = process.env): Config {
  const production = env.NODE_ENV === 'production';
  const port = Number(env.PORT ?? 4000);
  const config: Config = {
    production,
    host: env.HOST ?? (production ? '0.0.0.0' : '127.0.0.1'),
    port,
    // A generic DATABASE_URL is ignored on purpose: it may belong to another project on the machine.
    databaseUrl: env.TOEIC_DATABASE_URL || null,
    pgliteDir: env.PGLITE_DIR ?? './.data/pglite',
    smtpUrl: env.SMTP_URL || null,
    mailFrom: env.MAIL_FROM ?? 'Toki Quest <no-reply@tokiquest.app>',
    corsOrigins: list(env.CORS_ORIGINS ?? (production ? '' : 'http://localhost:8081')),
    trustProxy: env.TRUST_PROXY === '1',
    publicUrl: (env.PUBLIC_URL ?? `http://localhost:${port}`).replace(/\/+$/, ''),
    stores: {
      apple: env.APPLE_BUNDLE_ID
        ? {
            bundleId: env.APPLE_BUNDLE_ID,
            appAppleId: env.APPLE_APP_ID ? Number(env.APPLE_APP_ID) : null,
            productId: env.APPLE_PRODUCT_ID ?? 'toki_quest_full',
            rootCertFiles: list(env.APPLE_ROOT_CERTS),
          }
        : null,
      google:
        env.GOOGLE_PACKAGE_NAME && env.GOOGLE_SERVICE_ACCOUNT_FILE
          ? {
              packageName: env.GOOGLE_PACKAGE_NAME,
              productId: env.GOOGLE_PRODUCT_ID ?? 'toki_quest_full',
              serviceAccountFile: env.GOOGLE_SERVICE_ACCOUNT_FILE,
              pubsubAudience: env.GOOGLE_PUBSUB_AUDIENCE || null,
              pubsubServiceAccount: env.GOOGLE_PUBSUB_SERVICE_ACCOUNT || null,
            }
          : null,
      konnect:
        env.KONNECT_API_KEY && env.KONNECT_WALLET_ID
          ? {
              apiUrl: (env.KONNECT_API_URL ?? 'https://api.sandbox.konnect.network/api/v2').replace(/\/+$/, ''),
              apiKey: env.KONNECT_API_KEY,
              walletId: env.KONNECT_WALLET_ID,
              priceMillimes: Number(env.WEB_TN_PRICE_MILLIMES ?? 20_000),
            }
          : null,
    },
    sabil: env.SABIL_API_KEY && env.SABIL_HMAC_SECRET ? { apiKey: env.SABIL_API_KEY, hmacSecret: env.SABIL_HMAC_SECRET } : null,
  };
  if (production && !config.databaseUrl) throw new Error('TOEIC_DATABASE_URL is required in production.');
  if (production && !config.smtpUrl) throw new Error('SMTP_URL is required in production (password reset e-mails).');
  if (production && !config.publicUrl.startsWith('https://')) throw new Error('PUBLIC_URL must be an https:// address in production.');
  if (config.stores.apple && config.stores.apple.rootCertFiles.length === 0) throw new Error('APPLE_ROOT_CERTS must list the Apple root certificate files.');
  if (production && config.stores.apple && !config.stores.apple.appAppleId) throw new Error('APPLE_APP_ID is required in production.');
  if (config.sabil && config.sabil.hmacSecret.length < 32) throw new Error('SABIL_HMAC_SECRET must be at least 32 characters.');
  return config;
}
