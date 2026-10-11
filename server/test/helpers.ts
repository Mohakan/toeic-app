import { buildApp, type AppOptions } from '../src/app.js';
import { pgliteDb, type Db } from '../src/db.js';
import { migrate } from '../src/migrations.js';

export const YEAR = new Date().getUTCFullYear();
export const PASSWORD = 'correct horse battery';

export async function testDb(): Promise<Db> {
  const db = await pgliteDb();
  await migrate(db);
  return db;
}

export const testApp = (db: Db, options: Partial<AppOptions> = {}) => buildApp({ db, mailer: { send: async () => {} }, strictLimit: 1000, ...options });

export type TestApp = Awaited<ReturnType<typeof testApp>>;

export async function signUp(app: TestApp, email: string): Promise<string> {
  const res = await app.inject({ method: 'POST', url: '/auth/signup', payload: { email, password: PASSWORD, birthYear: YEAR - 25 } });
  if (res.statusCode !== 201) throw new Error(`sign-up failed: ${res.body}`);
  return res.json().token;
}

export const bearer = (token?: string) => (token ? { authorization: `Bearer ${token}` } : {});

export const planOf = async (app: TestApp, token: string) => (await app.inject({ method: 'GET', url: '/me', headers: bearer(token) })).json().plan;
