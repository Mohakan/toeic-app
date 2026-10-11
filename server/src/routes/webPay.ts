import type { FastifyInstance, FastifyReply } from 'fastify';
import { randomUUID } from 'node:crypto';
import { normalizeEmail } from '../auth.js';
import type { StoreConfig } from '../config.js';
import { dummyPasswordHash, verifyPassword } from '../crypto.js';
import type { Db } from '../db.js';
import { planFor } from '../plan.js';
import type { Providers } from '../providers.js';
import { setPurchaseStatus, type PurchaseStatus } from '../purchases.js';

/**
 * Web payment for Tunisia (lot M4), on the website only: the app never links to it (store rules).
 * The learner signs in with the app account, pays on Konnect, and Konnect calls the webhook, which
 * checks the payment with Konnect itself before opening the full plan.
 */

type PageLang = 'fr' | 'ar';

const TEXT = {
  fr: {
    title: 'Toki Quest · Plan complet',
    heading: 'Passe au plan complet',
    intro: 'Les 60 unités, les 8 TOEIC blancs, tout l’oral et les simulations, en un seul paiement. Connecte-toi avec le compte de l’application.',
    email: 'E-mail',
    password: 'Mot de passe',
    pay: 'Payer {price}',
    methods: 'Carte bancaire, e-Dinar ou portefeuille Konnect.',
    other: 'العربية',
    sale: 'Conditions de vente',
    privacy: 'Confidentialité',
    errors: {
      invalid_credentials: 'E-mail ou mot de passe incorrect.',
      already_full: 'Ce compte a déjà le plan complet.',
      too_many_requests: 'Trop d’essais. Réessaie dans quelques minutes.',
      payment_unavailable: 'Le paiement est momentanément indisponible.',
      default: 'Une erreur est survenue. Réessaie plus tard.',
    },
    done: {
      valid: 'Paiement confirmé ! Le plan complet est actif : ouvre Toki Quest et connecte-toi avec le même e-mail.',
      pending: 'Paiement en attente de confirmation. Recharge cette page dans un instant.',
      failed: 'Le paiement n’a pas abouti. Tu peux réessayer.',
      unknown: 'Paiement introuvable.',
    },
    retry: 'Revenir au paiement',
  },
  ar: {
    title: 'Toki Quest · الخطة الكاملة',
    heading: 'انتقل إلى الخطة الكاملة',
    intro: 'الوحدات الستون واختبارات التوييك التجريبية الثمانية والشفوي كاملًا والمحاكاة، بدفعة واحدة. سجّل الدخول بحساب التطبيق.',
    email: 'البريد الإلكتروني',
    password: 'كلمة المرور',
    pay: 'ادفع {price}',
    methods: 'بطاقة بنكية أو e-Dinar أو محفظة Konnect.',
    other: 'Français',
    sale: 'شروط البيع',
    privacy: 'الخصوصية',
    errors: {
      invalid_credentials: 'البريد الإلكتروني أو كلمة المرور غير صحيحة.',
      already_full: 'لهذا الحساب الخطة الكاملة بالفعل.',
      too_many_requests: 'محاولات كثيرة. أعد المحاولة بعد دقائق.',
      payment_unavailable: 'الدفع غير متاح مؤقتًا.',
      default: 'حدث خطأ. أعد المحاولة لاحقًا.',
    },
    done: {
      valid: 'تمّ تأكيد الدفع! الخطة الكاملة مفعّلة: افتح Toki Quest وسجّل الدخول بنفس البريد الإلكتروني.',
      pending: 'الدفع في انتظار التأكيد. أعد تحميل الصفحة بعد لحظات.',
      failed: 'لم يكتمل الدفع. يمكنك إعادة المحاولة.',
      unknown: 'لم يُعثر على هذا الدفع.',
    },
    retry: 'العودة إلى الدفع',
  },
};

export const escape = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
const priceLabel = (millimes: number, lang: PageLang) => (lang === 'ar' ? `${millimes / 1000} د.ت` : `${millimes / 1000} DT`);

const STYLE = `
  :root { --sky: #2F9BF0; --ink: #16324F; --soft: #E7F3FE; --sun: #FF8A1F; --bg: #F5F9FD; --danger: #B8323A; }
  * { box-sizing: border-box; }
  body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", sans-serif; background: var(--bg); color: var(--ink); }
  main { max-width: 440px; margin: 0 auto; padding: 32px 16px; }
  h1 { font-size: 28px; margin: 0 0 12px; }
  p { line-height: 1.5; }
  .card { background: #fff; border-radius: 24px; padding: 20px; box-shadow: 0 2px 10px rgba(22, 50, 79, .08); }
  label { display: block; font-weight: 700; font-size: 13px; margin: 14px 0 6px; }
  input { width: 100%; min-height: 52px; border: 2px solid #D5E3F0; border-radius: 16px; padding: 0 14px; font-size: 17px; }
  button { width: 100%; min-height: 56px; margin-top: 20px; border: 0; border-radius: 18px; background: var(--sun); color: var(--ink); font-size: 18px; font-weight: 800; cursor: pointer; }
  button[disabled] { opacity: .6; }
  .error { color: var(--danger); min-height: 1.5em; }
  .muted { color: #4D6680; font-size: 14px; }
  a { color: var(--sky); }
`;

export function page(lang: PageLang, body: string, script = false, title = TEXT[lang].title) {
  return `<!doctype html>
<html lang="${lang}" dir="${lang === 'ar' ? 'rtl' : 'ltr'}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escape(title)}</title>
<style>${STYLE}</style>
</head>
<body><main>${body}</main>${script ? '<script src="/pay/app.js"></script>' : ''}</body>
</html>`;
}

/**
 * The forms' script (payment, account deletion): posts e-mail and password to the form's
 * data-action; goes to the payment link if one comes back, otherwise shows data-done.
 */
const SCRIPT = `
const form = document.querySelector('form[data-action]');
const error = document.getElementById('error');
const messages = JSON.parse(form.dataset.errors);
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const button = form.querySelector('button');
  button.disabled = true;
  error.textContent = '';
  try {
    const res = await fetch(form.dataset.action, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email: form.email.value, password: form.password.value }),
    });
    const json = await res.json().catch(() => ({}));
    if (res.ok && json.payUrl) { location.assign(json.payUrl); return; }
    if (res.ok) { form.replaceChildren(Object.assign(document.createElement('p'), { textContent: form.dataset.done })); return; }
    error.textContent = messages[json.error] || messages.default;
  } catch {
    error.textContent = messages.default;
  }
  button.disabled = false;
});
`;

const HEADERS = {
  'content-security-policy': "default-src 'none'; script-src 'self'; style-src 'unsafe-inline'; connect-src 'self'; form-action 'self'; frame-ancestors 'none'; base-uri 'none'",
  'referrer-policy': 'no-referrer',
  'x-content-type-options': 'nosniff',
};

export const html = (reply: FastifyReply, code: number, body: string) => reply.code(code).headers(HEADERS).type('text/html; charset=utf-8').send(body);
export type { PageLang };
export const langOf = (q: { lang?: string }): PageLang => (q.lang === 'ar' ? 'ar' : 'fr');

export function webPayRoutes(
  app: FastifyInstance,
  { db, providers, stores, publicUrl, strict }: { db: Db; providers: Providers; stores: StoreConfig; publicUrl: string; strict: object },
) {
  const price = stores.konnect?.priceMillimes ?? 20_000;

  app.get<{ Querystring: { lang?: string } }>('/pay', async (request, reply) => {
    const lang = langOf(request.query);
    const t = TEXT[lang];
    return html(
      reply,
      200,
      page(
        lang,
        `<p><a href="/pay?lang=${lang === 'ar' ? 'fr' : 'ar'}">${t.other}</a></p>
<h1>${escape(t.heading)}</h1>
<p>${escape(t.intro)}</p>
<form id="pay" class="card" data-action="/web/checkout" data-errors="${escape(JSON.stringify(t.errors))}">
  <label for="email">${escape(t.email)}</label>
  <input id="email" name="email" type="email" autocomplete="email" required maxlength="254">
  <label for="password">${escape(t.password)}</label>
  <input id="password" name="password" type="password" autocomplete="current-password" required maxlength="128">
  <button type="submit">${escape(t.pay.replace('{price}', priceLabel(price, lang)))}</button>
  <p id="error" class="error" role="alert"></p>
  <p class="muted">${escape(t.methods)}</p>
</form>
<p class="muted"><a href="/legal/sale?lang=${lang}">${escape(t.sale)}</a> · <a href="/legal/privacy?lang=${lang}">${escape(t.privacy)}</a></p>`,
        true,
      ),
    );
  });

  app.get('/pay/app.js', async (_request, reply) => reply.headers(HEADERS).type('text/javascript; charset=utf-8').send(SCRIPT));

  app.post<{ Body: { email: string; password: string } }>(
    '/web/checkout',
    {
      config: strict,
      schema: {
        body: { type: 'object', required: ['email', 'password'], additionalProperties: false, properties: { email: { type: 'string', maxLength: 254 }, password: { type: 'string', maxLength: 128 } } },
      },
    },
    async (request, reply) => {
      const email = normalizeEmail(request.body.email);
      const user = (await db.query<{ id: string; email: string; password_hash: string }>('SELECT id, email, password_hash FROM users WHERE email = $1', [email])).rows[0];
      const ok = await verifyPassword(request.body.password, user?.password_hash ?? (await dummyPasswordHash()));
      if (!user || !ok) return reply.code(401).send({ error: 'invalid_credentials' });
      if ((await planFor(db, user.id, user.email)).tier === 'full') return reply.code(409).send({ error: 'already_full' });
      if (!providers.konnect) return reply.code(503).send({ error: 'payment_unavailable' });
      const orderId = randomUUID();
      let payment;
      try {
        payment = await providers.konnect.init({
          amountMillimes: price,
          orderId,
          email: user.email,
          webhookUrl: `${publicUrl}/webhooks/konnect`,
          description: 'Toki Quest - plan complet',
        });
      } catch (error) {
        request.log.error({ err: error }, 'Konnect payment could not start');
        return reply.code(503).send({ error: 'payment_unavailable' });
      }
      await db.query(
        `INSERT INTO purchases (user_id, source, product_id, transaction_id, order_id, status, amount_milli, currency)
         VALUES ($1, 'web_tn', 'full_plan', $2, $3, 'pending', $4, 'TND')`,
        [user.id, payment.ref, orderId, price],
      );
      return { payUrl: payment.payUrl };
    },
  );

  /** Called by Konnect, and the payer's browser is sent here too: check with Konnect, then show the result. */
  app.get<{ Querystring: { payment_ref?: string } }>('/webhooks/konnect', async (request, reply) => {
    const ref = request.query.payment_ref ?? '';
    if (!/^[A-Za-z0-9_-]{6,64}$/.test(ref)) return reply.code(400).send({ error: 'invalid_request' });
    const purchase = (await db.query<{ status: PurchaseStatus; amount_milli: number }>(`SELECT status, amount_milli FROM purchases WHERE source = 'web_tn' AND transaction_id = $1`, [ref])).rows[0];
    if (!purchase) return reply.code(404).send({ error: 'not_found' });
    if (purchase.status === 'pending' && providers.konnect) {
      try {
        const payment = await providers.konnect.status(ref);
        if (payment.state === 'completed' && payment.currency === 'TND' && payment.amountMillimes >= purchase.amount_milli) await setPurchaseStatus(db, 'web_tn', ref, 'valid');
        else if (payment.state === 'failed') await setPurchaseStatus(db, 'web_tn', ref, 'failed');
      } catch (error) {
        // Konnect will call again, and the result page shows "pending" meanwhile.
        request.log.error({ err: error }, 'Konnect payment check failed');
      }
    }
    return reply.redirect(`/pay/done?ref=${encodeURIComponent(ref)}`, 302);
  });

  app.get<{ Querystring: { ref?: string; lang?: string } }>('/pay/done', async (request, reply) => {
    const lang = langOf(request.query);
    const t = TEXT[lang];
    const ref = request.query.ref ?? '';
    const purchase = /^[A-Za-z0-9_-]{6,64}$/.test(ref)
      ? (await db.query<{ status: PurchaseStatus }>(`SELECT status FROM purchases WHERE source = 'web_tn' AND transaction_id = $1`, [ref])).rows[0]
      : undefined;
    const state = !purchase ? 'unknown' : purchase.status === 'valid' ? 'valid' : purchase.status === 'pending' ? 'pending' : 'failed';
    const retry = state === 'valid' || state === 'pending' ? '' : `<p><a href="/pay?lang=${lang}">${escape(t.retry)}</a></p>`;
    return html(reply, purchase ? 200 : 404, page(lang, `<h1>${escape(t.heading)}</h1><div class="card"><p>${escape(t.done[state])}</p></div>${retry}`));
  });
}
