import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { APP_LEGAL_DOCS, LEGAL_LANGS, legalHtml, legalText, type LegalDoc } from '.';
import type { Publisher } from './publisher';

const DOCS: LegalDoc[] = ['privacy', 'terms', 'notice', 'sale'];
const FULL: Publisher = {
  name: 'Éditeur',
  legalForm: 'SARL',
  address: 'Tunis',
  registration: 'R1',
  taxId: 'T1',
  director: 'D',
  contactEmail: 'c@example.com',
  privacyEmail: 'p@example.com',
  host: 'H',
  mailProvider: 'M',
  inpdpNumber: 'N1',
};

describe('legal texts', () => {
  it('have the same sections in every language', () => {
    for (const doc of DOCS) {
      const counts = LEGAL_LANGS.map((lang) => legalText(doc, lang).sections.map((s) => s.body.length));
      for (const c of counts) expect(c).toEqual(counts[0]);
    }
  });

  it('show every missing publisher field, and nothing once all are filled', () => {
    const empty = Object.fromEntries(Object.keys(FULL).map((k) => [k, null])) as unknown as Publisher;
    expect(legalText('notice', 'fr', empty).sections[0].body.join(' ')).toContain('[à compléter]');
    expect(legalText('privacy', 'ar', { ...FULL, inpdpNumber: 'pending' }).sections.flatMap((s) => s.body).join(' ')).toContain('قيد الإنجاز');
    for (const doc of DOCS) for (const lang of LEGAL_LANGS) expect(JSON.stringify(legalText(doc, lang, FULL))).not.toMatch(/\[(à compléter|يُستكمل|to be completed)\]/);
  });

  it('never mention the training partner by name, nor payment outside the app in the texts shown in the app', () => {
    for (const doc of APP_LEGAL_DOCS)
      for (const lang of LEGAL_LANGS) {
        const text = JSON.stringify(legalText(doc, lang));
        expect(text).not.toMatch(/\bsabil\b/i);
        // The app's terms must not point to another way to pay (store rules); the privacy policy names the provider only.
        if (doc === 'terms') expect(text).not.toMatch(/konnect|20 ?DT|20 TND|site web|website|الموقع/i);
      }
  });

  it('match the pages published by the server (run npm run legal:export after a change)', () => {
    for (const doc of DOCS)
      for (const lang of LEGAL_LANGS) {
        const file = join(__dirname, '../../../server/public/legal', `${doc}.${lang}.html`);
        expect(readFileSync(file, 'utf8'), `${doc}.${lang}.html is out of date`).toBe(legalHtml(doc, lang));
      }
  });
});
