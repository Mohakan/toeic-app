import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { it } from 'vitest';
import { LEGAL_LANGS, legalHtml, missingPublisherFields, type LegalDoc } from '../src/data/legal';

/** Writes the legal pages the server publishes under /legal/ (npm run legal:export). */
it('exports the legal pages', () => {
  const dir = join(__dirname, '../server/public/legal');
  mkdirSync(dir, { recursive: true });
  const docs: LegalDoc[] = ['privacy', 'terms', 'notice', 'sale'];
  for (const doc of docs) for (const lang of LEGAL_LANGS) writeFileSync(join(dir, `${doc}.${lang}.html`), legalHtml(doc, lang));
  const missing = missingPublisherFields();
  console.log(`${docs.length * LEGAL_LANGS.length} pages written to server/public/legal.${missing.length ? ` Publisher fields to complete: ${missing.join(', ')}.` : ''}`);
});
