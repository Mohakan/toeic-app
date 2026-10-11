import { B2_FIRST_CONFIG } from '../../../exams/config';
import type { Exercise, Localized, MockTest } from '../../../types';
import { fixed, mc, mockItem, typed } from '../build';

/**
 * Authoring helpers for Toki Quest B2, one per part of Cambridge English B2 First.
 * Shuffled multiple choice: the FIRST option is the key. Fixed-order items (RU6, RU7, LI3): the
 * key is given by its index. Typed items: every accepted answer, the usual one first.
 * Writing guide: docs/multi-examens/b2-contenu.md.
 */
type Options = [key: string, ...distractors: string[]];
type Answers = [string, ...string[]];

/** Reading and Use of English Part 1: multiple-choice cloze (4 options, a word or phrase). */
export const ru1 = (id: string, level: number, prompt: string, options: Options, explain: Localized, passage?: string): Exercise =>
  mc(id, 'RU1', 'vocab', level, prompt, options, explain, { passage });

/** Part 2: open cloze, one word per gap (articles, prepositions, auxiliaries, linkers…). */
export const ru2 = (id: string, level: number, prompt: string, answers: Answers, explain: Localized, passage?: string): Exercise =>
  typed(id, 'RU2', 'grammar', level, prompt, answers, explain, { passage, maxWords: 1 });

/** Part 3: word formation; `cue` is the stem given in capitals. */
export const ru3 = (id: string, level: number, prompt: string, cue: string, answers: Answers, explain: Localized): Exercise =>
  typed(id, 'RU3', 'vocab', level, prompt, answers, explain, { cue, maxWords: 1 });

/** Part 4: key word transformation, 2 to 5 words including the unchanged key word. */
export const ru4 = (id: string, level: number, lead: string, cue: string, prompt: string, answers: Answers, explain: Localized): Exercise =>
  typed(id, 'RU4', 'grammar', level, prompt, answers, explain, { lead, cue, maxWords: 5 });

/** Part 5: multiple choice on a text (4 options). */
export const ru5 = (id: string, level: number, passage: string, prompt: string, options: Options, explain: Localized): Exercise =>
  mc(id, 'RU5', 'reading', level, prompt, options, explain, { passage });

/** Part 6: gapped text; the sentences keep their order (A, B, C…) and `answer` is the right one. */
export const ru6 = (id: string, level: number, passage: string, prompt: string, sentences: string[], answer: number, explain: Localized): Exercise =>
  fixed(id, 'RU6', 'reading', level, prompt, sentences, answer, explain, { passage });

/** Part 7: multiple matching; the options are the sections of the text (A, B, C…), in order. */
export const ru7 = (id: string, level: number, passage: string, prompt: string, sections: string[], answer: number, explain: Localized): Exercise =>
  fixed(id, 'RU7', 'reading', level, prompt, sections, answer, explain, { passage });

/** Listening Part 1: short extract, 3 options. Use "W:" / "M:" line prefixes for dialogues. */
export const li1 = (id: string, level: number, audio: string, prompt: string, options: Options, explain: Localized): Exercise =>
  mc(id, 'LI1', 'listening', level, prompt, options, explain, { audio });

/** Listening Part 2: sentence completion with a word or short phrase heard in the recording. */
export const li2 = (id: string, level: number, audio: string, prompt: string, answers: Answers, explain: Localized): Exercise =>
  typed(id, 'LI2', 'listening', level, prompt, answers, explain, { audio, maxWords: 3 });

/** Listening Part 3: multiple matching; the options (statements A-H) keep their order. */
export const li3 = (id: string, level: number, audio: string, prompt: string, options: string[], answer: number, explain: Localized): Exercise =>
  fixed(id, 'LI3', 'listening', level, prompt, options, answer, explain, { audio });

/** Listening Part 4: interview or talk, 3 options. */
export const li4 = (id: string, level: number, audio: string, prompt: string, options: Options, explain: Localized): Exercise =>
  mc(id, 'LI4', 'listening', level, prompt, options, explain, { audio });

/** A B2 First mock test; items are grouped by part, in the order of the real exam. */
export function b2Mock(id: string, kind: 'mini' | 'full', durationMin: number, title: Localized, exercises: Exercise[]): MockTest {
  const items = exercises.map(mockItem);
  const sections = B2_FIRST_CONFIG.parts
    .map(({ id: part }) => ({ part, items: items.filter((i) => i.part === part) }))
    .filter((s) => s.items.length > 0);
  return { id, kind, durationMin, title, sections };
}
