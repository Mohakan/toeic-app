import type { FastifyReply, FastifyRequest } from 'fastify';
import { newToken, sha256 } from './crypto.js';
import type { Db } from './db.js';

/** Signed-in devices per account; a new sign-in beyond this ends the least recently used one. */
export const MAX_DEVICES = 3;
/** A device unused for this long must sign in again. */
export const SESSION_IDLE_DAYS = 180;

export interface AuthUser {
  userId: string;
  sessionId: string;
  email: string;
  lang: string;
}

declare module 'fastify' {
  interface FastifyRequest {
    user: AuthUser | null;
  }
}

export const normalizeEmail = (email: string) => email.trim().toLowerCase();

// Deliberately simple: one @, no spaces, a dot in the domain. The real check is the e-mail itself.
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const validEmail = (email: string) => email.length <= 254 && EMAIL.test(email);

export async function createSession(db: Db, userId: string, device: string | undefined): Promise<string> {
  const token = newToken();
  await db.query('INSERT INTO sessions (user_id, token_hash, device) VALUES ($1, $2, $3)', [userId, sha256(token), device?.slice(0, 80) ?? null]);
  await db.query('UPDATE users SET last_active_at = now() WHERE id = $1', [userId]);
  await db.query(
    `UPDATE sessions SET revoked_at = now()
      WHERE user_id = $1 AND revoked_at IS NULL
        AND id NOT IN (SELECT id FROM sessions WHERE user_id = $1 AND revoked_at IS NULL ORDER BY last_seen_at DESC, created_at DESC LIMIT $2)`,
    [userId, MAX_DEVICES],
  );
  return token;
}

/** Reads the bearer token; leaves `request.user` null when it is missing, unknown, revoked or idle. */
export function authenticate(db: Db) {
  return async (request: FastifyRequest) => {
    request.user = null;
    const header = request.headers.authorization;
    if (!header?.startsWith('Bearer ')) return;
    const { rows } = await db.query<{ session_id: string; user_id: string; email: string; lang: string; stale: boolean }>(
      `SELECT s.id AS session_id, u.id AS user_id, u.email, u.lang, s.last_seen_at < now() - interval '1 hour' AS stale
         FROM sessions s JOIN users u ON u.id = s.user_id
        WHERE s.token_hash = $1 AND s.revoked_at IS NULL AND s.last_seen_at > now() - make_interval(days => $2)`,
      [sha256(header.slice(7).trim()), SESSION_IDLE_DAYS],
    );
    const row = rows[0];
    if (!row) return;
    if (row.stale) {
      await db.query('UPDATE sessions SET last_seen_at = now() WHERE id = $1', [row.session_id]);
      await db.query('UPDATE users SET last_active_at = now() WHERE id = $1', [row.user_id]);
    }
    request.user = { userId: row.user_id, sessionId: row.session_id, email: row.email, lang: row.lang };
  };
}

export async function requireUser(request: FastifyRequest, reply: FastifyReply) {
  if (!request.user) return reply.code(401).send({ error: 'unauthorized' });
}
