import { ar } from './ar';
import { en } from './en';
import { fr } from './fr';
import { LEGAL_UPDATED, PUBLISHER, type Publisher } from './publisher';
import type { LegalDoc, LegalLang, LegalText, LegalTexts } from './types';

export { APP_LEGAL_DOCS, type LegalDoc, type LegalLang, type LegalSection, type LegalText } from './types';
export { LEGAL_UPDATED, missingPublisherFields, PUBLISHER } from './publisher';

const TEXTS: Record<LegalLang, LegalTexts> = { fr, ar, en };
export const LEGAL_LANGS: LegalLang[] = ['fr', 'ar', 'en'];

const TO_COMPLETE: Record<LegalLang, string> = { fr: '[à compléter]', ar: '[يُستكمل]', en: '[to be completed]' };
const PENDING: Record<LegalLang, string> = { fr: 'en cours', ar: 'قيد الإنجاز', en: 'in progress' };

/** The help language's version; Spanish readers get the English one. */
export const legalLang = (lang: string): LegalLang => (lang === 'fr' || lang === 'ar' ? lang : 'en');

export function legalText(doc: LegalDoc, lang: LegalLang, publisher: Publisher = PUBLISHER): LegalText {
  return TEXTS[lang][doc]((key) => {
    const value = publisher[key];
    return value === 'pending' ? PENDING[lang] : (value ?? TO_COMPLETE[lang]);
  });
}

const escape = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
const UPDATED: Record<LegalLang, string> = { fr: 'Mise à jour', ar: 'آخر تحديث', en: 'Updated' };
const OTHER: Record<LegalLang, string> = { fr: 'Français', ar: 'العربية', en: 'English' };

/** The same text as a standalone web page (published by the server under /legal/). */
export function legalHtml(doc: LegalDoc, lang: LegalLang, publisher: Publisher = PUBLISHER): string {
  const text = legalText(doc, lang, publisher);
  const sections = text.sections
    .map((s) => {
      const items = s.body.map((p) => (p.startsWith('• ') ? `<li>${escape(p.slice(2))}</li>` : `<p>${escape(p)}</p>`)).join('\n');
      return `<h2>${escape(s.title)}</h2>\n${items.replace(/(?:<li>[\s\S]*?<\/li>\n?)+/g, (list) => `<ul>${list}</ul>`)}`;
    })
    .join('\n');
  const langs = LEGAL_LANGS.filter((l) => l !== lang)
    .map((l) => `<a href="/legal/${doc}?lang=${l}" hreflang="${l}">${OTHER[l]}</a>`)
    .join(' · ');
  return `<!doctype html>
<html lang="${lang}" dir="${lang === 'ar' ? 'rtl' : 'ltr'}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Toki Quest · ${escape(text.title)}</title>
<style>
body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", sans-serif; background: #F5F9FD; color: #16324F; line-height: 1.6; }
main { max-width: 720px; margin: 0 auto; padding: 32px 16px 64px; }
h1 { font-size: 28px; margin: 0 0 4px; }
h2 { font-size: 19px; margin: 28px 0 8px; }
.muted { color: #4D6680; font-size: 14px; }
a { color: #1D74C9; }
</style>
</head>
<body><main>
<p class="muted">${langs}</p>
<h1>${escape(text.title)}</h1>
<p class="muted">Toki Quest · ${UPDATED[lang]} : ${LEGAL_UPDATED}</p>
${sections}
</main></body>
</html>
`;
}
