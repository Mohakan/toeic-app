import { normalizeWords } from './alignment';

/**
 * Indicative feedback for TOEIC Speaking questions (tasks 5-7). It never produces a score: the
 * plan only allows a measured score for reading aloud. It checks that an answer was given, its
 * length, its pace, and which expected ideas (keywords) were mentioned.
 */

export interface KeywordResult {
  /** The keyword entry as written in the content ("weekend|saturday"). */
  keyword: string;
  /** First alternative, used for display. */
  label: string;
  found: boolean;
}

export interface ResponseFeedback {
  answered: boolean;
  words: number;
  wordsPerMinute: number | null;
  /** 'short' when the answer is much shorter than the time allows. */
  length: 'none' | 'short' | 'ok';
  keywords: KeywordResult[];
}

/**
 * Rough word count for a complete answer: about one word per second for the short questions,
 * and one and a half for the one-minute opinion, which should be a developed argument.
 */
export const minWords = (responseSec: number) => (responseSec <= 30 ? responseSec : Math.round(responseSec * 1.5));

/** Shortest answer for which a pace is reported. */
export const MIN_PACE_SECONDS = 5;

/** Light stemming so "visits", "visited" and "visiting" match "visit". */
export function stem(word: string): string {
  if (word.length <= 4) return word;
  for (const suffix of ['ing', 'ies', 'ed', 'es', 's']) {
    if (word.endsWith(suffix) && word.length - suffix.length >= 3) {
      const base = word.slice(0, -suffix.length);
      return suffix === 'ies' ? `${base}y` : base;
    }
  }
  return word;
}

function containsPhrase(tokens: string[], phrase: string[]): boolean {
  if (phrase.length === 0) return false;
  outer: for (let i = 0; i + phrase.length <= tokens.length; i++) {
    for (let j = 0; j < phrase.length; j++) if (tokens[i + j] !== phrase[j]) continue outer;
    return true;
  }
  return false;
}

/** True when the text mentions one of the alternatives of a keyword entry. */
export function mentions(text: string, keyword: string): boolean {
  const tokens = normalizeWords(text).map(stem);
  return keyword.split('|').some((alt) => containsPhrase(tokens, normalizeWords(alt).map(stem)));
}

export function assessResponse(transcript: string, responseSec: number, keywords: string[], durationSec?: number): ResponseFeedback {
  const words = normalizeWords(transcript).length;
  const answered = words >= 3;
  return {
    answered,
    words,
    // Below a few seconds the pace mostly reflects the recognizer's delays, not the speaker.
    wordsPerMinute: durationSec && durationSec >= MIN_PACE_SECONDS && words ? Math.round((words / durationSec) * 60) : null,
    length: !answered ? 'none' : words < minWords(responseSec) * 0.6 ? 'short' : 'ok',
    keywords: keywords.map((keyword) => ({ keyword, label: keyword.split('|')[0], found: mentions(transcript, keyword) })),
  };
}

/** Task 11 linking words, by role in an argument. Matched like keywords (light stemming, phrases). */
export const CONNECTORS = {
  opinion: ['i think', 'i believe', 'in my opinion', 'in my view', 'personally', 'i prefer', 'i would rather', 'agree', 'disagree'],
  reason: ['because', 'since', 'the reason', 'main reason', 'due to'],
  example: ['for example', 'for instance', 'such as', 'in my experience'],
  addition: ['in addition', 'also', 'moreover', 'furthermore', 'another', 'besides', 'what is more'],
  contrast: ['however', 'but', 'on the other hand', 'although', 'even though', 'nevertheless'],
  conclusion: ['in conclusion', 'that is why', 'to sum up', 'overall', 'for these reasons', 'all in all', 'as a result', 'therefore', 'consequently', 'so'],
} as const;

export type ConnectorKind = keyof typeof CONNECTORS;

export interface ConnectorResult {
  kind: ConnectorKind;
  /** The linking words of this kind that were heard, in the order of the list. */
  heard: string[];
}

export function connectorsUsed(text: string): ConnectorResult[] {
  return (Object.keys(CONNECTORS) as ConnectorKind[]).map((kind) => ({ kind, heard: CONNECTORS[kind].filter((c) => mentions(text, c)) }));
}

/** Task 11 response time; "short" is judged against the same one-word-per-second rule. */
export const OPINION_SECONDS = 60;

/** Tasks 3-4: expressions that place things in a photo. */
export const PLACE_PHRASES = ['in the foreground', 'in the background', 'in the middle', 'in the center', 'on the left', 'on the right', 'next to', 'behind', 'in front of', 'above', 'around', 'in the distance'];

export interface DescriptionFeatures {
  /** "is/are + -ing" forms heard, such as "is sitting" or "are walking". */
  presentContinuous: string[];
  /** Expressions of place heard, from PLACE_PHRASES. */
  places: string[];
}

/** Common adjectives in -ing, so that "the view is amazing" is not taken for a present continuous. */
const ING_ADJECTIVES = new Set(['interesting', 'amazing', 'boring', 'exciting', 'relaxing', 'surprising', 'tiring', 'charming', 'confusing', 'annoying', 'disappointing', 'outstanding']);

export function describeFeatures(text: string): DescriptionFeatures {
  const words = normalizeWords(text);
  const presentContinuous: string[] = [];
  words.forEach((w, i) => {
    const next = words[i + 1];
    if ((w === 'is' || w === 'are') && next && next.length > 4 && next.endsWith('ing') && !ING_ADJECTIVES.has(next) && !presentContinuous.includes(`${w} ${next}`)) presentContinuous.push(`${w} ${next}`);
  });
  return { presentContinuous, places: PLACE_PHRASES.filter((p) => mentions(text, p)) };
}

/** Tasks 3-4 response time. */
export const PHOTO_SECONDS = 30;
