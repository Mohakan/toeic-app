import type { FastifyInstance } from 'fastify';
import { createSession, normalizeEmail, requireUser, validEmail } from '../auth.js';
import { dummyPasswordHash, hashPassword, newResetCode, sameHash, sha256, verifyPassword } from '../crypto.js';
import type { Db } from '../db.js';
import { LANGS, resetMail, type Lang, type Mailer } from '../mailer.js';
import { planFor } from '../plan.js';

/** Below this age, a parent must agree to the account (Tunisian law 2004-63 and GDPR art. 8 allow 13 to 16). */
export const PARENTAL_CONSENT_AGE = 15;
/**
 * Accounts start at 13 (COPPA, store family policies). With the birth year only, the learner must be
 * at least 14 by year so that nobody under 13 gets through; younger learners use the app without an account.
 */
export const MIN_ACCOUNT_AGE_BY_YEAR = 14;
export const RESET_CODE_MINUTES = 30;
export const RESET_MAX_ATTEMPTS = 5;
const PASSWORD = { type: 'string', minLength: 8, maxLength: 128 } as const;
const EMAIL = { type: 'string', minLength: 3, maxLength: 254 } as const;
const DEVICE = { type: 'string', maxLength: 80 } as const;


interface UserRow {
  id: string;
  email: string;
  password_hash: string;
  birth_year: number;
  lang: Lang;
  created_at: Date;
}

/** `strict` is the tighter rate limit for sign-in attempts and codes; the global limit protects the rest. */
export function accountRoutes(
  app: FastifyInstance,
  { db, mailer, strict, now = () => new Date() }: { db: Db; mailer: Mailer; strict: { rateLimit: { max: number; timeWindow: string } }; now?: () => Date },
) {
  const profile = async (user: Pick<UserRow, 'id' | 'email' | 'birth_year' | 'lang'>) => {
    const { rows } = await db.query<{ n: number }>('SELECT count(*)::int AS n FROM sessions WHERE user_id = $1 AND revoked_at IS NULL', [user.id]);
    return {
      user: { email: user.email, birthYear: user.birth_year, lang: user.lang, devices: rows[0].n },
      plan: await planFor(db, user.id, user.email),
    };
  };
  const findUser = async (email: string) => (await db.query<UserRow>('SELECT * FROM users WHERE email = $1', [email])).rows[0];

  app.post<{ Body: { email: string; password: string; birthYear: number; parentalConsent?: boolean; lang?: Lang; device?: string } }>(
    '/auth/signup',
    {
      config: strict,
      schema: {
        body: {
          type: 'object',
          required: ['email', 'password', 'birthYear'],
          additionalProperties: false,
          properties: { email: EMAIL, password: PASSWORD, birthYear: { type: 'integer' }, parentalConsent: { type: 'boolean' }, lang: { enum: LANGS }, device: DEVICE },
        },
      },
    },
    async (request, reply) => {
      const { password, birthYear, parentalConsent, lang = 'fr', device } = request.body;
      const email = normalizeEmail(request.body.email);
      if (!validEmail(email)) return reply.code(400).send({ error: 'invalid_email' });
      const year = now().getUTCFullYear();
      if (birthYear < year - 100 || birthYear > year) return reply.code(400).send({ error: 'invalid_birth_year' });
      if (year - birthYear < MIN_ACCOUNT_AGE_BY_YEAR) return reply.code(400).send({ error: 'too_young' });
      // Age from the year alone: a learner who turns 15 this year counts as 15.
      const minor = year - birthYear < PARENTAL_CONSENT_AGE;
      if (minor && parentalConsent !== true) return reply.code(400).send({ error: 'parental_consent_required' });
      const hash = await hashPassword(password);
      const { rows } = await db.query<UserRow>(
        `INSERT INTO users (email, password_hash, birth_year, parental_consent_at, lang)
         VALUES ($1, $2, $3, $4, $5) ON CONFLICT (email) DO NOTHING RETURNING *`,
        [email, hash, birthYear, minor ? now() : null, lang],
      );
      const user = rows[0];
      if (!user) return reply.code(409).send({ error: 'email_taken' });
      const token = await createSession(db, user.id, device);
      return reply.code(201).send({ token, ...(await profile(user)) });
    },
  );

  app.post<{ Body: { email: string; password: string; device?: string } }>(
    '/auth/login',
    {
      config: strict,
      schema: {
        body: { type: 'object', required: ['email', 'password'], additionalProperties: false, properties: { email: EMAIL, password: { type: 'string', maxLength: 128 }, device: DEVICE } },
      },
    },
    async (request, reply) => {
      const user = await findUser(normalizeEmail(request.body.email));
      // The same answer and about the same time whether the e-mail exists or not.
      const ok = await verifyPassword(request.body.password, user?.password_hash ?? (await dummyPasswordHash()));
      if (!user || !ok) return reply.code(401).send({ error: 'invalid_credentials' });
      const token = await createSession(db, user.id, request.body.device);
      return { token, ...(await profile(user)) };
    },
  );

  app.post('/auth/logout', { preHandler: requireUser }, async (request, reply) => {
    await db.query('UPDATE sessions SET revoked_at = now() WHERE id = $1', [request.user!.sessionId]);
    return reply.code(204).send();
  });

  app.post<{ Body: { email: string } }>(
    '/auth/password/forgot',
    { config: strict, schema: { body: { type: 'object', required: ['email'], additionalProperties: false, properties: { email: EMAIL } } } },
    async (request, reply) => {
      const user = await findUser(normalizeEmail(request.body.email));
      if (user) {
        const code = newResetCode();
        await db.query('UPDATE password_resets SET used_at = now() WHERE user_id = $1 AND used_at IS NULL', [user.id]);
        await db.query('INSERT INTO password_resets (user_id, code_hash, expires_at) VALUES ($1, $2, $3)', [
          user.id,
          sha256(`${user.id}:${code}`),
          new Date(now().getTime() + RESET_CODE_MINUTES * 60_000),
        ]);
        try {
          await mailer.send(resetMail(user.email, user.lang, code));
        } catch (error) {
          request.log.error({ err: error }, 'password reset e-mail failed');
          return reply.code(503).send({ error: 'mail_unavailable' });
        }
      }
      // Never reveals whether an account exists.
      return reply.code(204).send();
    },
  );

  app.post<{ Body: { email: string; code: string; password: string; device?: string } }>(
    '/auth/password/reset',
    {
      config: strict,
      schema: {
        body: {
          type: 'object',
          required: ['email', 'code', 'password'],
          additionalProperties: false,
          properties: { email: EMAIL, code: { type: 'string', pattern: '^[0-9]{6}$' }, password: PASSWORD, device: DEVICE },
        },
      },
    },
    async (request, reply) => {
      const user = await findUser(normalizeEmail(request.body.email));
      const { rows } = user
        ? await db.query<{ id: string; code_hash: string; attempts: number }>(
            'SELECT id, code_hash, attempts FROM password_resets WHERE user_id = $1 AND used_at IS NULL AND expires_at > $2 ORDER BY created_at DESC LIMIT 1',
            [user.id, now()],
          )
        : { rows: [] };
      const reset = rows[0];
      if (!user || !reset || reset.attempts >= RESET_MAX_ATTEMPTS) return reply.code(400).send({ error: 'invalid_code' });
      if (!sameHash(reset.code_hash, sha256(`${user.id}:${request.body.code}`))) {
        await db.query('UPDATE password_resets SET attempts = attempts + 1 WHERE id = $1', [reset.id]);
        return reply.code(400).send({ error: 'invalid_code' });
      }
      await db.query('UPDATE password_resets SET used_at = now() WHERE id = $1', [reset.id]);
      await db.query('UPDATE users SET password_hash = $2 WHERE id = $1', [user.id, await hashPassword(request.body.password)]);
      // A new password signs every device out.
      await db.query('UPDATE sessions SET revoked_at = now() WHERE user_id = $1 AND revoked_at IS NULL', [user.id]);
      const token = await createSession(db, user.id, request.body.device);
      return { token, ...(await profile(user)) };
    },
  );

  app.get('/me', { preHandler: requireUser }, async (request) => {
    const user = (await db.query<UserRow>('SELECT * FROM users WHERE id = $1', [request.user!.userId])).rows[0];
    return profile(user);
  });

  app.patch<{ Body: { lang: Lang } }>(
    '/me',
    { preHandler: requireUser, schema: { body: { type: 'object', required: ['lang'], additionalProperties: false, properties: { lang: { enum: LANGS } } } } },
    async (request, reply) => {
      await db.query('UPDATE users SET lang = $2 WHERE id = $1', [request.user!.userId, request.body.lang]);
      return reply.code(204).send();
    },
  );

  /** Deletes the account and its sessions and rights. Payment records stay, without the account. */
  app.delete<{ Body: { password: string } }>(
    '/me',
    {
      config: strict,
      preHandler: requireUser,
      schema: { body: { type: 'object', required: ['password'], additionalProperties: false, properties: { password: { type: 'string', maxLength: 128 } } } },
    },
    async (request, reply) => {
      const user = (await db.query<UserRow>('SELECT * FROM users WHERE id = $1', [request.user!.userId])).rows[0];
      if (!(await verifyPassword(request.body.password, user.password_hash))) return reply.code(401).send({ error: 'invalid_credentials' });
      await db.query('DELETE FROM users WHERE id = $1', [user.id]);
      return reply.code(204).send();
    },
  );
}
