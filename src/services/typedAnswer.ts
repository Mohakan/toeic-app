/**
 * Typed answers are compared loosely on form and strictly on spelling: case, repeated spaces,
 * curly quotes and a final full stop do not matter, a wrong letter does (as on the real exams,
 * where spelling must be correct).
 */
export function normalizeAnswer(text: string): string {
  return text
    .normalize('NFC')
    .replace(/[’‘`´]/g, "'")
    .replace(/[“”]/g, '"')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/[.!?,;:]+$/, '')
    .trim();
}

export function isAcceptedAnswer(given: string, accepted: readonly string[]): boolean {
  const g = normalizeAnswer(given);
  return g.length > 0 && accepted.some((a) => normalizeAnswer(a) === g);
}

/** Words as the Cambridge exams count them: a contraction ("don't") counts as two words. */
export function countWords(text: string): number {
  const words = normalizeAnswer(text).split(' ').filter(Boolean);
  return words.reduce((n, w) => n + (/'(t|s|re|ve|ll|d|m)$/.test(w) ? 2 : 1), 0);
}
