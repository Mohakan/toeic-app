import { mkdirSync } from 'node:fs';
import { loadConfig } from './config.js';
import { pgliteDb, postgresDb, type Db } from './db.js';

/** PostgreSQL when TOEIC_DATABASE_URL is set, otherwise PGlite on disk (development). */
export async function openDb(config = loadConfig()): Promise<Db> {
  if (config.databaseUrl) return postgresDb(config.databaseUrl);
  mkdirSync(config.pgliteDir, { recursive: true });
  return pgliteDb(config.pgliteDir);
}
