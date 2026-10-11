import type { Exercise, Localized, Skill, ToeicPart, Unit, UnitLesson } from '../../types';
import { withShuffledOptions } from '../shuffle';

export const x = (fr: string, ar: string, en: string, es: string): Localized => ({ fr, ar, en, es });

/**
 * Authoring helpers. In every multiple-choice item the FIRST option is the key; options are then
 * moved to a stable pseudo-random order so the key position is not predictable.
 */
type Options = [key: string, ...distractors: string[]];

export function q(id: string, skill: Skill, part: ToeicPart, level: number, prompt: string, options: Options, explain: Localized): Exercise {
  return { kind: 'mcq', item: withShuffledOptions({ id, skill, part, level, prompt, options, answer: 0, explain }) };
}

/** Grammar item (TOEIC Part 5). */
export const g = (id: string, level: number, prompt: string, options: Options, explain: Localized) =>
  q(id, 'grammar', 'R5', level, prompt, options, explain);

/** Vocabulary item (TOEIC Part 5). */
export const v = (id: string, level: number, prompt: string, options: Options, explain: Localized) =>
  q(id, 'vocab', 'R5', level, prompt, options, explain);

/** Reading item on a passage (Part 6 text completion or Part 7 comprehension). */
export function read(id: string, part: 'R6' | 'R7', level: number, passage: string, prompt: string, options: Options, explain: Localized): Exercise {
  const skill: Skill = part === 'R6' ? 'grammar' : 'reading';
  return { kind: 'mcq', item: withShuffledOptions({ id, skill, part, level, passage, prompt, options, answer: 0, explain }) };
}

/** Listening item. Use "W:" / "M:" line prefixes for conversations. */
export function listen(id: string, part: 'L2' | 'L3' | 'L4', level: number, audio: string, prompt: string, options: Options, explain: Localized): Exercise {
  return { kind: 'mcq', item: withShuffledOptions({ id, skill: 'listening', part, level, audio, prompt, options, answer: 0, explain }) };
}

/** Attaches a table or schedule to a listening item (Parts 3 and 4 "look at the graphic"). */
export function withGraphic(exercise: Exercise, graphic: string): Exercise {
  if (exercise.kind !== 'mcq') throw new Error(`withGraphic expects a multiple-choice item, got ${exercise.kind}`);
  return { ...exercise, item: { ...exercise.item, passage: graphic } };
}

/** Same-prompt helper for Part 2 question-response items. */
export const respond = (id: string, level: number, audio: string, options: Options, explain: Localized) =>
  listen(id, 'L2', level, audio, 'Choose the best response.', options, explain);

/** Sentence-building exercise; the words are scrambled deterministically and never in order. */
export function order(id: string, sentence: string, hint: Localized, explain: Localized): Exercise {
  const answer = sentence.split(' ');
  const n = answer.length;
  // Interleave from both ends (e.g. 0, n-1, 1, n-2...) then rotate: always a non-identity permutation.
  const idx: number[] = [];
  for (let lo = 0, hi = n - 1; lo <= hi; lo += 1, hi -= 1) {
    idx.push(hi);
    if (lo !== hi) idx.push(lo);
  }
  const words = idx.map((i) => answer[i]);
  return { kind: 'order', id, answer, words, hint, explain };
}

export const match = (id: string, wordIds: string[], explain: Localized): Exercise => ({ kind: 'match', id, wordIds, explain });

export function lesson(goal: Localized, points: Localized[], example: string, note: Localized): UnitLesson {
  return { goal, points, example: { en: example, note } };
}

/** A unit with one or more exercise sets; set ids are derived from the unit id (u-s1, u-s2…). */
export function unit(spec: Omit<Unit, 'sets'>, ...sets: Exercise[][]): Unit {
  return { ...spec, sets: sets.map((exercises, i) => ({ id: `${spec.id}-s${i + 1}`, exercises })) };
}
