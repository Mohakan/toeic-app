import pg from 'pg';

/** The few database operations the server needs, so PostgreSQL and PGlite are interchangeable. */
export interface Db {
  query<T = Record<string, unknown>>(sql: string, params?: unknown[]): Promise<{ rows: T[] }>;
  /** Runs several statements at once (migrations). */
  exec(sql: string): Promise<void>;
  close(): Promise<void>;
}

/** Production: a PostgreSQL connection pool. */
export function postgresDb(connectionString: string): Db {
  const pool = new pg.Pool({ connectionString, max: 10 });
  return {
    query: async <T>(sql: string, params?: unknown[]) => ({ rows: (await pool.query(sql, params)).rows as T[] }),
    exec: async (sql) => {
      await pool.query(sql);
    },
    close: () => pool.end(),
  };
}

/**
 * Development and tests: PGlite, PostgreSQL compiled to WebAssembly. With a directory the data is
 * kept on disk; without one it lives in memory.
 */
export async function pgliteDb(dir?: string): Promise<Db> {
  const { PGlite } = await import('@electric-sql/pglite');
  const db = new PGlite(dir);
  await db.waitReady;
  return {
    query: async <T>(sql: string, params?: unknown[]) => {
      const result = await db.query<T>(sql, params as unknown[]);
      return { rows: result.rows };
    },
    exec: async (sql) => {
      await db.exec(sql);
    },
    close: () => db.close(),
  };
}
