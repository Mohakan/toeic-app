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

/** Contractions with a single full form. */
const FIXED: [RegExp, string][] = [
  [/\bwon't\b/g, 'will not'],
  [/\bshan't\b/g, 'shall not'],
  [/\bcan't\b/g, 'can not'],
  [/\bcannot\b/g, 'can not'],
  [/n't\b/g, ' not'],
  [/'ve\b/g, ' have'],
  [/'re\b/g, ' are'],
  [/'m\b/g, ' am'],
  [/'ll\b/g, ' will'],
];
/** Contractions with two possible full forms: 'd (would / had) and 's after a pronoun (is / has). */
const AMBIGUOUS: [RegExp, string[]][] = [
  [/'d\b/, [' would', ' had']],
  [/\b(he|she|it|that|there|who|what|where|here)'s\b/, [' is', ' has']],
];

/** Every full form of an answer, so "wouldn't" and "would not" are the same answer. */
function expansions(text: string): string[] {
  let forms = [FIXED.reduce((t, [pattern, full]) => t.replace(pattern, full), normalizeAnswer(text))];
  for (const [pattern, fulls] of AMBIGUOUS) {
    // Expanded one occurrence at a time; an answer has very few of them.
    for (let round = 0; round < 3 && forms.some((f) => pattern.test(f)); round += 1) {
      forms = forms.flatMap((f) => (pattern.test(f) ? fulls.map((full) => f.replace(pattern, (m) => m.replace(/'(d|s)$/, full))) : [f]));
    }
  }
  return forms.map((f) => f.replace(/\s+/g, ' ').trim());
}

/**
 * True when the typed answer is one of the accepted ones. A contraction and its full form are the
 * same answer ("wouldn't" = "would not", "he'd" = "he would" or "he had"): authors list one form,
 * learners may type either.
 */
export function isAcceptedAnswer(given: string, accepted: readonly string[]): boolean {
  if (normalizeAnswer(given).length === 0) return false;
  const typed = new Set(expansions(given));
  return accepted.some((a) => expansions(a).some((form) => typed.has(form)));
}

/** Words as the Cambridge exams count them: a contraction ("don't") counts as two words. */
export function countWords(text: string): number {
  const words = normalizeAnswer(text).split(' ').filter(Boolean);
  return words.reduce((n, w) => n + (/'(t|s|re|ve|ll|d|m)$/.test(w) ? 2 : 1), 0);
}
