import { buildApp } from './app.js';
import { loadConfig } from './config.js';
import { logMailer, smtpMailer } from './mailer.js';
import { migrate } from './migrations.js';
import { openDb } from './open.js';
import { scheduleMaintenance } from './maintenance.js';
import { providersFrom } from './providers.js';

const config = loadConfig();
const db = await openDb(config);
const applied = await migrate(db);
const app = await buildApp({
  db,
  mailer: config.smtpUrl ? smtpMailer(config.smtpUrl, config.mailFrom) : logMailer((line) => app.log.info(line)),
  corsOrigins: config.corsOrigins,
  trustProxy: config.trustProxy,
  logger: { level: config.production ? 'info' : 'debug' },
  providers: providersFrom(config.stores),
  stores: config.stores,
  sabil: config.sabil,
  publicUrl: config.publicUrl,
});
app.log.info(`${applied} migration(s) applied; database: ${config.databaseUrl ? 'PostgreSQL' : `PGlite (${config.pgliteDir})`}`);
app.log.info(
  `App Store: ${config.stores.apple ? 'on' : 'off'}; Google Play: ${config.stores.google ? 'on' : 'off'}; Konnect: ${config.stores.konnect ? 'on' : 'off'}; Sabil API: ${config.sabil ? 'on' : 'off'}`,
);

const stopMaintenance = scheduleMaintenance(db, (line) => app.log.info(line));

const stop = async () => {
  stopMaintenance();
  await app.close();
  await db.close();
  process.exit(0);
};
process.on('SIGINT', stop);
process.on('SIGTERM', stop);
await app.listen({ host: config.host, port: config.port });
