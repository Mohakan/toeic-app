import type { FastifyInstance } from 'fastify';
import { normalizeEmail } from '../auth.js';
import { dummyPasswordHash, verifyPassword } from '../crypto.js';
import type { Db } from '../db.js';
import { escape, html, langOf, page } from './webPay.js';

/**
 * Account deletion on the web, without the app (required by Google Play for apps with accounts).
 * The app itself offers the same in Profile > Delete my account.
 */
const TEXT = {
  fr: {
    title: 'Toki Quest · Supprimer mon compte',
    heading: 'Supprimer mon compte',
    intro: 'Ton e-mail, ton année de naissance et ton offre seront effacés de notre serveur. La progression enregistrée sur ton téléphone n’est pas concernée : elle disparaît en supprimant l’application. Les traces des achats sont gardées 10 ans pour la comptabilité, sans lien avec le compte.',
    email: 'E-mail',
    password: 'Mot de passe',
    submit: 'Supprimer définitivement',
    done: 'Ton compte a été supprimé.',
    forgot: 'Mot de passe oublié ? Utilise « Mot de passe oublié » dans l’application, ou écris-nous depuis l’adresse du compte.',
    other: 'العربية',
    errors: { invalid_credentials: 'E-mail ou mot de passe incorrect.', too_many_requests: 'Trop d’essais. Réessaie dans quelques minutes.', default: 'Une erreur est survenue. Réessaie plus tard.' },
  },
  ar: {
    title: 'Toki Quest · حذف حسابي',
    heading: 'حذف حسابي',
    intro: 'سيُحذف بريدك الإلكتروني وسنة ميلادك وعرضك من خادمنا. أما التقدّم المحفوظ على هاتفك فلا يتأثّر، ويزول بحذف التطبيق. وتُحفظ آثار المشتريات 10 سنوات للمحاسبة دون ربطها بالحساب.',
    email: 'البريد الإلكتروني',
    password: 'كلمة المرور',
    submit: 'حذف نهائي',
    done: 'تمّ حذف حسابك.',
    forgot: 'نسيت كلمة المرور؟ استخدم « نسيت كلمة المرور » في التطبيق، أو راسلنا من عنوان الحساب.',
    other: 'Français',
    errors: { invalid_credentials: 'البريد الإلكتروني أو كلمة المرور غير صحيحة.', too_many_requests: 'محاولات كثيرة. أعد المحاولة بعد دقائق.', default: 'حدث خطأ. أعد المحاولة لاحقًا.' },
  },
};

export function webAccountRoutes(app: FastifyInstance, { db, strict }: { db: Db; strict: object }) {
  app.get<{ Querystring: { lang?: string } }>('/account/delete', async (request, reply) => {
    const lang = langOf(request.query);
    const t = TEXT[lang];
    return html(
      reply,
      200,
      page(
        lang,
        `<p><a href="/account/delete?lang=${lang === 'ar' ? 'fr' : 'ar'}">${t.other}</a></p>
<h1>${escape(t.heading)}</h1>
<p>${escape(t.intro)}</p>
<form class="card" data-action="/web/account/delete" data-done="${escape(t.done)}" data-errors="${escape(JSON.stringify(t.errors))}">
  <label for="email">${escape(t.email)}</label>
  <input id="email" name="email" type="email" autocomplete="email" required maxlength="254">
  <label for="password">${escape(t.password)}</label>
  <input id="password" name="password" type="password" autocomplete="current-password" required maxlength="128">
  <button type="submit">${escape(t.submit)}</button>
  <p id="error" class="error" role="alert"></p>
</form>
<p class="muted">${escape(t.forgot)}</p>
<p class="muted"><a href="/legal/privacy?lang=${lang}">${lang === 'ar' ? 'سياسة الخصوصية' : 'Politique de confidentialité'}</a></p>`,
        true,
        t.title,
      ),
    );
  });

  app.post<{ Body: { email: string; password: string } }>(
    '/web/account/delete',
    {
      config: strict,
      schema: {
        body: { type: 'object', required: ['email', 'password'], additionalProperties: false, properties: { email: { type: 'string', maxLength: 254 }, password: { type: 'string', maxLength: 128 } } },
      },
    },
    async (request, reply) => {
      const user = (await db.query<{ id: string; password_hash: string }>('SELECT id, password_hash FROM users WHERE email = $1', [normalizeEmail(request.body.email)])).rows[0];
      const ok = await verifyPassword(request.body.password, user?.password_hash ?? (await dummyPasswordHash()));
      if (!user || !ok) return reply.code(401).send({ error: 'invalid_credentials' });
      await db.query('DELETE FROM users WHERE id = $1', [user.id]);
      return reply.code(204).send();
    },
  );
}
