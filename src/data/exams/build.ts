import type { ExamPart, Exercise, Localized, McqItem, MockItem, Skill, TypedItem } from '../../types';
import { withShuffledOptions } from '../shuffle';

/**
 * Authoring helpers for the exams after TOEIC (B2 First, then IELTS). As in the TOEIC curriculum,
 * the FIRST option of a shuffled multiple-choice item is the key; fixed-order items give the key
 * explicitly; typed items list every accepted answer, the usual one first.
 */
type Options = [key: string, ...distractors: string[]];

interface Extra {
  passage?: string;
  audio?: string;
}

/** Multiple choice with shuffled options (a random guess succeeds once in `options.length`). */
export function mc(id: string, part: ExamPart, skill: Skill, level: number, prompt: string, options: Options, explain: Localized, extra: Extra = {}): Exercise {
  const item: McqItem = { id, skill, part, level, prompt, options, answer: 0, explain, irt: { c: 1 / options.length }, ...extra };
  return { kind: 'mcq', item: withShuffledOptions(item) };
}

/**
 * Multiple choice whose options keep their order: sentences A-G of a gapped text, sections of a
 * multiple-matching text, True / False / Not Given.
 */
export function fixed(id: string, part: ExamPart, skill: Skill, level: number, prompt: string, options: string[], answer: number, explain: Localized, extra: Extra = {}): Exercise {
  if (answer < 0 || answer >= options.length) throw new Error(`${id}: the key must be one of the ${options.length} options`);
  return { kind: 'mcq', item: { id, skill, part, level, prompt, options, answer, explain, fixedOrder: true, irt: { c: 1 / options.length }, ...extra } };
}

/** True / False / Not Given statement about a passage. */
export function tfng(id: string, part: ExamPart, level: number, passage: string, statement: string, answer: 'True' | 'False' | 'Not Given', explain: Localized): Exercise {
  const options = ['True', 'False', 'Not Given'];
  return fixed(id, part, 'reading', level, statement, options, options.indexOf(answer), explain, { passage });
}

interface TypedExtra extends Extra {
  lead?: string;
  cue?: string;
  maxWords?: number;
}

/** Typed answer; guessing is next to impossible, hence no lower asymptote. */
export function typed(id: string, part: ExamPart, skill: Skill, level: number, prompt: string, answers: [string, ...string[]], explain: Localized, extra: TypedExtra = {}): Exercise {
  const item: TypedItem = { id, skill, part, level, prompt, answers, explain, irt: { c: 0 }, ...extra };
  return { kind: 'type', item };
}

/** The item of an exercise, for mock tests (which only hold multiple-choice and typed items). */
export function mockItem(exercise: Exercise): MockItem {
  if (exercise.kind === 'mcq' || exercise.kind === 'type') return exercise.item;
  throw new Error(`Mock tests only hold multiple-choice and typed items, got ${exercise.kind}`);
}
