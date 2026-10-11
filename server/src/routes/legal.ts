import type { FastifyInstance } from 'fastify';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

/**
 * Legal pages (privacy policy, terms, legal notice, web sale conditions), generated from the app's
 * texts by `npm run legal:export` at the project root. The store listings link to /legal/privacy.
 */
const DOCS = ['privacy', 'terms', 'notice', 'sale'] as const;
const LANGS = ['fr', 'ar', 'en'] as const;
const DIR = fileURLToPath(new URL('../../public/legal/', import.meta.url));

const HEADERS = {
  'content-security-policy': "default-src 'none'; style-src 'unsafe-inline'; frame-ancestors 'none'; base-uri 'none'",
  'x-content-type-options': 'nosniff',
  'cache-control': 'public, max-age=3600',
};

export function legalRoutes(app: FastifyInstance) {
  const pages = new Map<string, string>();
  for (const doc of DOCS)
    for (const lang of LANGS) {
      const file = `${DIR}${doc}.${lang}.html`;
      if (existsSync(file)) pages.set(`${doc}.${lang}`, readFileSync(file, 'utf8'));
    }

  app.get<{ Params: { doc: string }; Querystring: { lang?: string } }>('/legal/:doc', async (request, reply) => {
    const lang = LANGS.find((l) => l === request.query.lang) ?? preferred(request.headers['accept-language']);
    const page = pages.get(`${request.params.doc}.${lang}`);
    if (!page) return reply.code(404).send({ error: 'not_found' });
    return reply.headers(HEADERS).type('text/html; charset=utf-8').send(page);
  });
}

/** French by default; Arabic or English when the browser prefers them. */
function preferred(header: string | undefined): (typeof LANGS)[number] {
  const first = (header ?? '').split(',')[0]?.trim().slice(0, 2).toLowerCase();
  return first === 'ar' || first === 'en' ? first : 'fr';
}
