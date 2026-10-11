/**
 * Word-level alignment between a text read aloud and what the speech recognizer heard.
 * Pure functions only: no recognizer, no UI, so the scoring rules are fully tested.
 */

export type AlignmentOp =
  /** Expected word recognized as is. */
  | { kind: 'ok'; expected: string }
  /** Expected word not heard at all. */
  | { kind: 'missed'; expected: string }
  /** Expected word heard as a different word (often a pronunciation issue). */
  | { kind: 'wrong'; expected: string; heard: string }
  /** Word heard that is not in the text (hesitation, repetition). */
  | { kind: 'extra'; heard: string };

export interface ReadingScore {
  ops: AlignmentOp[];
  expectedWords: number;
  correctWords: number;
  /** Share of the expected words recognized, 0 to 1. */
  accuracy: number;
  /** Words actually heard per minute, or null when the duration is unknown. */
  wordsPerMinute: number | null;
}

const ONES = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const TENS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

/** Spells 0 to 9,999 as recognizers and readers say it ("2024" → "two thousand twenty four"). */
export function spellNumber(n: number): string[] {
  if (!Number.isInteger(n) || n < 0 || n > 9999) return [String(n)];
  if (n < 20) return [ONES[n]];
  if (n < 100) return [TENS[Math.floor(n / 10)], ...(n % 10 ? [ONES[n % 10]] : [])];
  if (n < 1000) return [ONES[Math.floor(n / 100)], 'hundred', ...(n % 100 ? spellNumber(n % 100) : [])];
  return [...spellNumber(Math.floor(n / 1000)), 'thousand', ...(n % 1000 ? spellNumber(n % 1000) : [])];
}

const CONTRACTIONS: Record<string, string> = {
  "i'm": 'i am', "you're": 'you are', "we're": 'we are', "they're": 'they are', "it's": 'it is', "that's": 'that is',
  "there's": 'there is', "he's": 'he is', "she's": 'she is', "i've": 'i have', "we've": 'we have', "you've": 'you have',
  "they've": 'they have', "i'll": 'i will', "we'll": 'we will', "you'll": 'you will', "they'll": 'they will', "it'll": 'it will',
  "i'd": 'i would', "we'd": 'we would', "you'd": 'you would', "they'd": 'they would', "don't": 'do not', "doesn't": 'does not',
  "didn't": 'did not', "can't": 'cannot', "won't": 'will not', "isn't": 'is not', "aren't": 'are not', "wasn't": 'was not',
  "weren't": 'were not', "haven't": 'have not', "hasn't": 'has not', "shouldn't": 'should not', "wouldn't": 'would not',
  "couldn't": 'could not', "let's": 'let us',
};

/**
 * Normalizes a text into comparable words: lowercase, typographic apostrophes, contractions and
 * digits expanded, punctuation removed. Applied identically to the text and to the transcript.
 */
export function normalizeWords(text: string): string[] {
  const words = text
    .toLowerCase()
    // "café", "Zitouna Gold’s": accents are dropped so the text matches what recognizers write.
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[’‘`]/g, "'")
    .replace(/(\d),(\d{3})/g, '$1$2')
    .replace(/%/g, ' percent ')
    .replace(/[-–—/]/g, ' ')
    .replace(/[^a-z0-9'\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);
  return words.flatMap((w) => {
    const word = w.replace(/^'+|'+$/g, '');
    if (!word) return [];
    if (CONTRACTIONS[word]) return CONTRACTIONS[word].split(' ');
    if (/^\d+$/.test(word)) return spellNumber(Number(word));
    return [word.replace(/'s$/, 's').replace(/'/g, '')];
  });
}

type Step = 'match' | 'sub' | 'del' | 'ins';
interface Cell {
  cost: number;
  matches: number;
  step: Step | null;
}

/**
 * Levenshtein alignment on words. Among alignments of equal cost it keeps the one with the most
 * matched words, which is the fairest reading of a learner's attempt (a hesitation plus a skipped
 * word, rather than a chain of "misread" words).
 */
export function alignWords(expected: string[], heard: string[]): AlignmentOp[] {
  const n = expected.length;
  const m = heard.length;
  const grid: Cell[][] = Array.from({ length: n + 1 }, () => Array.from({ length: m + 1 }, () => ({ cost: 0, matches: 0, step: null })));
  for (let i = 1; i <= n; i++) grid[i][0] = { cost: i, matches: 0, step: 'del' };
  for (let j = 1; j <= m; j++) grid[0][j] = { cost: j, matches: 0, step: 'ins' };
  const better = (a: Cell, b: Cell) => a.cost < b.cost || (a.cost === b.cost && a.matches > b.matches);
  for (let i = 1; i <= n; i++)
    for (let j = 1; j <= m; j++) {
      const same = expected[i - 1] === heard[j - 1];
      const diag = grid[i - 1][j - 1];
      const candidates: Cell[] = [
        { cost: diag.cost + (same ? 0 : 1), matches: diag.matches + (same ? 1 : 0), step: same ? 'match' : 'sub' },
        { cost: grid[i - 1][j].cost + 1, matches: grid[i - 1][j].matches, step: 'del' },
        { cost: grid[i][j - 1].cost + 1, matches: grid[i][j - 1].matches, step: 'ins' },
      ];
      grid[i][j] = candidates.reduce((best, c) => (better(c, best) ? c : best));
    }
  const ops: AlignmentOp[] = [];
  let i = n;
  let j = m;
  while (i > 0 || j > 0) {
    const step = grid[i][j].step;
    if (step === 'match') {
      ops.push({ kind: 'ok', expected: expected[i - 1] });
      i--;
      j--;
    } else if (step === 'sub') {
      ops.push({ kind: 'wrong', expected: expected[i - 1], heard: heard[j - 1] });
      i--;
      j--;
    } else if (step === 'del') {
      ops.push({ kind: 'missed', expected: expected[i - 1] });
      i--;
    } else {
      ops.push({ kind: 'extra', heard: heard[j - 1] });
      j--;
    }
  }
  return ops.reverse();
}

/** Scores a read-aloud attempt. Extra words do not lower the accuracy; they are only shown. */
export function scoreReading(text: string, transcript: string, durationSec?: number): ReadingScore {
  const expected = normalizeWords(text);
  const heard = normalizeWords(transcript);
  const ops = alignWords(expected, heard);
  const correctWords = ops.filter((o) => o.kind === 'ok').length;
  return {
    ops,
    expectedWords: expected.length,
    correctWords,
    accuracy: expected.length ? correctWords / expected.length : 0,
    // Below a few seconds the pace mostly reflects the recognizer's delays, not the reader.
    wordsPerMinute: durationSec && durationSec >= 5 && heard.length ? Math.round((heard.length / durationSec) * 60) : null,
  };
}

/**
 * Maps each word of the original text (as displayed) to its alignment status, so the screen can
 * highlight missed or misread words in the text the learner actually read.
 */
export function markText(text: string, ops: AlignmentOp[]): { word: string; status: 'ok' | 'missed' | 'wrong'; heard?: string }[] {
  const queue = ops.filter((o) => o.kind !== 'extra');
  let k = 0;
  return text
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => {
      const parts = normalizeWords(word);
      if (parts.length === 0) return { word, status: 'ok' as const };
      const slice = queue.slice(k, k + parts.length);
      k += parts.length;
      const bad = slice.find((o) => o.kind !== 'ok');
      if (!bad) return { word, status: 'ok' as const };
      return bad.kind === 'wrong' ? { word, status: 'wrong' as const, heard: bad.heard } : { word, status: 'missed' as const };
    });
}
