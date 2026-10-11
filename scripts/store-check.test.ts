import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { expect, it } from 'vitest';

/**
 * Store listing limits (npm run store:check): every "**Field** (N)" line and every description
 * block in store/*.md must fit the store's character limit N.
 */
const LIMIT = /^\*\*(.+?)\*\* \(([^)]*)\)\s*:?\s*(.*)$/;

function fields(file: string) {
  const lines = readFileSync(join(__dirname, '../store', file), 'utf8').split('\n');
  const out: { name: string; limit: number; value: string }[] = [];
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(LIMIT);
    if (!m) continue;
    // "4 000", "4,000" or "100, séparés…": the digits before the first other character.
    const limit = Number((m[2].match(/^[\d\s  ,]+/)?.[0] ?? '').replace(/\D/g, ''));
    if (!limit) continue;
    let value = m[3].trim();
    if (!value && lines[i + 2]?.startsWith('```')) {
      const end = lines.indexOf('```', i + 3);
      value = lines.slice(i + 3, end).join('\n');
    }
    if (value && !value.startsWith('reprendre') && !value.startsWith('the ') && !value.startsWith('الوصف')) out.push({ name: m[1], limit, value });
  }
  return out;
}

it.each(['app-store.md', 'google-play.md'])('%s fits the store limits', (file) => {
  const found = fields(file);
  expect(found.length).toBeGreaterThan(5);
  for (const f of found) expect([...f.value].length, `${file} › ${f.name} (${[...f.value].length}/${f.limit})`).toBeLessThanOrEqual(f.limit);
  console.log(found.map((f) => `${file} › ${f.name}: ${[...f.value].length}/${f.limit}`).join('\n'));
});
