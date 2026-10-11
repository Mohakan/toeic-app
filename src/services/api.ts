import type { Plan } from './access';
import { currentExam } from '../exams/current';

/**
 * Client of the Toki Quest server (server/). Without EXPO_PUBLIC_API_URL, accounts are not offered
 * and the app works as before, on the device only.
 */
export const API_URL: string | null = process.env.EXPO_PUBLIC_API_URL?.replace(/\/+$/, '') || null;

const TIMEOUT_MS = 12_000;

/** `code` is the server's error code, or 'network' when the server could not be reached. */
export class ApiError extends Error {
  constructor(
    readonly code: string,
    readonly status: number,
  ) {
    super(code);
  }
}

export interface Profile {
  user: { email: string; birthYear: number; lang: string; devices: number };
  plan: Plan;
}
export type Session = Profile & { token: string };

async function call<T>(method: 'GET' | 'POST' | 'PATCH' | 'DELETE', path: string, body?: object, token?: string | null): Promise<T> {
  if (!API_URL) throw new ApiError('network', 0);
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  let res: Response;
  try {
    res = await fetch(`${API_URL}${path}`, {
      method,
      headers: {
        // Each app of the family has its own plan: the server answers for this app's exam.
        'x-toki-exam': currentExam.id,
        ...(body ? { 'content-type': 'application/json' } : {}),
        ...(token ? { authorization: `Bearer ${token}` } : {}),
      },
      body: body ? JSON.stringify(body) : undefined,
      signal: controller.signal,
    });
  } catch {
    throw new ApiError('network', 0);
  } finally {
    clearTimeout(timer);
  }
  if (res.status === 204) return undefined as T;
  const json = await res.json().catch(() => null);
  if (!res.ok) throw new ApiError(typeof json?.error === 'string' ? json.error : 'server_error', res.status);
  return json as T;
}

export interface SignUpInput {
  email: string;
  password: string;
  birthYear: number;
  parentalConsent?: boolean;
  lang: string;
  device: string;
}

export const api = {
  signUp: (input: SignUpInput) => call<Session>('POST', '/auth/signup', input),
  signIn: (email: string, password: string, device: string) => call<Session>('POST', '/auth/login', { email, password, device }),
  signOut: (token: string) => call<void>('POST', '/auth/logout', undefined, token),
  forgotPassword: (email: string) => call<void>('POST', '/auth/password/forgot', { email }),
  resetPassword: (email: string, code: string, password: string, device: string) => call<Session>('POST', '/auth/password/reset', { email, code, password, device }),
  me: (token: string) => call<Profile>('GET', '/me', undefined, token),
  setLang: (token: string, lang: string) => call<void>('PATCH', '/me', { lang }, token),
  deleteAccount: (token: string, password: string) => call<void>('DELETE', '/me', { password }, token),
  /** Store receipts, checked by the server with Apple or Google; the token attaches the purchase to the account. */
  verifyApple: (signedTransaction: string, token: string | null) => call<Verification>('POST', '/purchases/apple', { signedTransaction }, token),
  verifyGoogle: (productId: string, purchaseToken: string, token: string | null) => call<Verification>('POST', '/purchases/google', { productId, purchaseToken }, token),
};

export interface Verification {
  status: 'pending' | 'valid' | 'refunded' | 'revoked' | 'failed';
  plan: Plan;
}
