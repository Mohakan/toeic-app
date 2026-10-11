import { createHash, randomBytes, randomInt, scrypt, timingSafeEqual, type ScryptOptions } from 'node:crypto';

const scryptAsync = (password: string, salt: Buffer, keylen: number, options: ScryptOptions) =>
  new Promise<Buffer>((resolve, reject) => scrypt(password, salt, keylen, options, (err, key) => (err ? reject(err) : resolve(key))));

// scrypt with N = 2^15, r = 8, p = 1 (OWASP minimum is 2^17 with less memory; this uses 32 MiB).
const PARAMS = { N: 2 ** 15, r: 8, p: 1, maxmem: 64 * 1024 * 1024 };
const KEYLEN = 32;

/** Format: scrypt$N$r$p$salt$hash (base64url), so the parameters can change later. */
export async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(16);
  const key = await scryptAsync(password, salt, KEYLEN, PARAMS);
  return ['scrypt', PARAMS.N, PARAMS.r, PARAMS.p, salt.toString('base64url'), key.toString('base64url')].join('$');
}

export async function verifyPassword(password: string, stored: string): Promise<boolean> {
  const [kind, n, r, p, salt, hash] = stored.split('$');
  if (kind !== 'scrypt' || !salt || !hash) return false;
  const expected = Buffer.from(hash, 'base64url');
  const key = await scryptAsync(password, Buffer.from(salt, 'base64url'), expected.length, {
    N: Number(n),
    r: Number(r),
    p: Number(p),
    maxmem: PARAMS.maxmem,
  });
  return timingSafeEqual(key, expected);
}

/** A hash computed once, so a login for an unknown e-mail costs as much time as a real one. */
let dummyHash: Promise<string> | null = null;
export const dummyPasswordHash = () => (dummyHash ??= hashPassword('not-a-real-password'));

/** Session tokens: 256 random bits. Only their SHA-256 is stored. */
export const newToken = () => randomBytes(32).toString('base64url');
export const sha256 = (value: string) => createHash('sha256').update(value).digest('hex');

/** Password reset codes: 6 digits, typed by hand, with few attempts allowed. */
export const newResetCode = () => String(randomInt(0, 1_000_000)).padStart(6, '0');

export function sameHash(a: string, b: string): boolean {
  const x = Buffer.from(a, 'hex');
  const y = Buffer.from(b, 'hex');
  return x.length === y.length && timingSafeEqual(x, y);
}
