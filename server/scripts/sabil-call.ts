/**
 * Sends one signed call to the partner API, as Sabil would: for tests and for the test environment.
 *   SABIL_API_KEY=... SABIL_HMAC_SECRET=... npm run sabil:call -- PUT /partner/sabil/accounts/S-1 '{"email":"eleve@example.com"}'
 *   npm run sabil:call -- GET /partner/sabil/accounts/S-1
 * The server address comes from SABIL_TARGET (default http://127.0.0.1:4000).
 */
import { signPartnerCall } from '../src/routes/partner.js';

const [method = '', path = '', body = ''] = process.argv.slice(2);
const key = process.env.SABIL_API_KEY;
const secret = process.env.SABIL_HMAC_SECRET;
const target = (process.env.SABIL_TARGET ?? 'http://127.0.0.1:4000').replace(/\/+$/, '');

if (!['GET', 'PUT', 'POST', 'DELETE'].includes(method.toUpperCase()) || !path.startsWith('/partner/') || !key || !secret) {
  console.error('Usage: SABIL_API_KEY=... SABIL_HMAC_SECRET=... npm run sabil:call -- <GET|PUT|POST|DELETE> /partner/sabil/... [json body]');
  process.exit(1);
}

const timestamp = String(Math.floor(Date.now() / 1000));
const res = await fetch(`${target}${path}`, {
  method: method.toUpperCase(),
  headers: {
    authorization: `Bearer ${key}`,
    'x-timestamp': timestamp,
    'x-signature': signPartnerCall(secret, timestamp, method, path, body),
    ...(body ? { 'content-type': 'application/json' } : {}),
  },
  body: body || undefined,
});
console.log(res.status, await res.text());
