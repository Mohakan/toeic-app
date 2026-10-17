import { describe, expect, it } from 'vitest';
import { B2_FIRST_CONFIG } from '../../../exams/config';
import { countWords } from '../../../services/typedAnswer';
import { isTyped, type Exercise, type Lang, type Localized, type McqItem, type MockItem, type TypedItem } from '../../../types';
import { toeicAssessmentBank } from '../../assessment';
import { allExercises as toeicExercises } from '../../curriculum';
import { toeicMockTests } from '../../mock';
import { exerciseKey } from '../../unitIndex';
import { b2FirstAssessmentBank } from './assessment';
import { b2FirstUnits } from './curriculum';
import { b2FirstMockTests } from './mock';

/**
 * Quality gate of the Toki Quest B2 content (Cambridge English B2 First), run with npm test.
 * Format rules per part: docs/multi-examens/b2-contenu.md.
 */
const LANGS: Lang[] = ['fr', 'ar', 'en', 'es'];
const ARABIC = /[؀-ۿ]/;
const B2_PARTS = new Set(B2_FIRST_CONFIG.parts.map((p) => p.id));
const OPTION_COUNT: Partial<Record<string, [min: number, max: number]>> = {
  RU1: [4, 4],
  RU5: [4, 4],
  // 7 sentences for 6 gaps in the real exam; a shorter mini-test text keeps 2 extra sentences.
  RU6: [5, 8],
  RU7: [4, 6],
  LI1: [3, 3],
  LI3: [5, 8],
  LI4: [3, 3],
};

const exercises: Exercise[] = b2FirstUnits.flatMap((u) => u.sets.flatMap((s) => s.exercises));
const lessonItems: MockItem[] = exercises.flatMap((e) => (e.kind === 'mcq' || e.kind === 'type' ? [e.item] : []));
const mockItems: MockItem[] = b2FirstMockTests.flatMap((m) => m.sections.flatMap((s) => s.items));
const allItems: MockItem[] = [...b2FirstAssessmentBank, ...lessonItems, ...mockItems];

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const fingerprint = (i: { prompt: string; passage?: string; audio?: string; lead?: string }) => norm(`${i.lead ?? ''} ${i.prompt} ${i.passage ?? ''} ${i.audio ?? ''}`);

/**
 * Key word transformation: the key word must appear unchanged. A contraction after it keeps it
 * (SHOULD → "shouldn't", MUST → "must've"); contracting the key word itself changes it
 * (WOULD → "he'd") and is not accepted.
 */
function containsKeyWord(answer: string, cue: string): boolean {
  const key = cue.toLowerCase();
  const words = answer.toLowerCase().replace(/[’‘]/g, "'").split(/\s+/);
  return words.some((raw) => {
    const w = raw.replace(/[^a-z']/g, '');
    // The key word itself, followed or not by a contracted word ("must've", "shouldn't").
    return w === key || w.startsWith(`${key}'`) || w === `${key}n't` || (key === 'can' && w === "can't") || (key === 'will' && w === "won't");
  });
}

function checkExplain(id: string, explain: Localized) {
  for (const lang of LANGS) expect.soft(explain[lang]?.length ?? 0, `${id}/${lang}`).toBeGreaterThan(10);
  expect.soft(ARABIC.test(explain.ar), `${id}/ar is in Arabic`).toBe(true);
}

describe('Toki Quest B2 content', () => {
  it('has a path, a placement bank and mock tests', () => {
    expect.soft(b2FirstUnits.length).toBeGreaterThanOrEqual(12);
    expect.soft(b2FirstAssessmentBank.length).toBeGreaterThanOrEqual(48);
    expect.soft(b2FirstMockTests.length).toBeGreaterThanOrEqual(4);
    expect.soft(b2FirstMockTests.filter((m) => m.kind === 'full').length).toBeGreaterThanOrEqual(2);
  });

  it('uses unique ids, all starting with "fce-"', () => {
    const ids = [...b2FirstUnits.map((u) => u.id), ...exercises.map(exerciseKey), ...b2FirstAssessmentBank.map((i) => i.id), ...mockItems.map((i) => i.id), ...b2FirstMockTests.map((m) => m.id)];
    const seen = new Set<string>();
    for (const id of ids) {
      expect.soft(id.startsWith('fce-'), id).toBe(true);
      expect.soft(seen.has(id), `duplicate id ${id}`).toBe(false);
      seen.add(id);
    }
  });

  it('writes every unit for B1 to C1, with a complete mini-lesson and three sets of at least 8 exercises', () => {
    for (const u of b2FirstUnits) {
      expect.soft(u.level >= 3 && u.level <= 5, u.id).toBe(true);
      expect.soft(u.sets.length, u.id).toBeGreaterThanOrEqual(3);
      for (const set of u.sets) expect.soft(set.exercises.length, set.id).toBeGreaterThanOrEqual(8);
      checkExplain(`${u.id}/title`, u.title);
      checkExplain(`${u.id}/goal`, u.lesson.goal);
      expect.soft(u.lesson.points.length, u.id).toBeGreaterThanOrEqual(3);
      u.lesson.points.forEach((p, n) => checkExplain(`${u.id}/point${n}`, p));
      expect.soft(u.lesson.example.en.length, u.id).toBeGreaterThan(10);
      checkExplain(`${u.id}/note`, u.lesson.example.note);
      for (const e of u.sets.flatMap((s) => s.exercises)) {
        if (e.kind === 'match') throw new Error(`${e.id}: matching exercises use the TOEIC word list, not B2 content`);
        if (e.kind === 'order') checkExplain(e.id, e.explain);
      }
    }
  });

  it('only uses B2 First parts, with the number of options of the real exam', () => {
    for (const item of allItems) {
      expect.soft(B2_PARTS.has(item.part), `${item.id}: ${item.part}`).toBe(true);
      expect.soft(item.level >= 1 && item.level <= 6, item.id).toBe(true);
      checkExplain(item.id, item.explain);
      if (item.skill === 'listening') expect.soft(item.audio?.length ?? 0, `${item.id} needs a script`).toBeGreaterThan(20);
      if (['RU5', 'RU6', 'RU7'].includes(item.part)) expect.soft(item.passage?.length ?? 0, `${item.id} needs a text`).toBeGreaterThan(80);
      if (isTyped(item)) continue;
      const range = OPTION_COUNT[item.part];
      expect.soft(range, `${item.id}: ${item.part} is not a multiple-choice part`).toBeDefined();
      expect.soft(item.options.length >= range![0] && item.options.length <= range![1], `${item.id}: ${item.options.length} options`).toBe(true);
      expect.soft(item.answer >= 0 && item.answer < item.options.length, item.id).toBe(true);
      expect.soft(new Set(item.options.map(norm)).size, `${item.id}: distinct options`).toBe(item.options.length);
    }
  });

  it('gives typed items a gap and answers in the format of their part', () => {
    const typed = allItems.filter(isTyped) as TypedItem[];
    expect.soft(typed.length).toBeGreaterThan(40);
    for (const item of typed) {
      expect.soft(item.prompt.includes('___'), `${item.id}: "___" marks the gap`).toBe(true);
      expect.soft(new Set(item.answers.map(norm)).size, `${item.id}: distinct answers`).toBe(item.answers.length);
      for (const answer of item.answers) {
        expect.soft(answer.trim().length, item.id).toBeGreaterThan(0);
        if (item.part === 'RU2' || item.part === 'RU3') expect.soft(answer.trim().split(/\s+/).length, `${item.id}: one word`).toBe(1);
        if (item.part === 'RU4') {
          const n = countWords(answer);
          expect.soft(n >= 2 && n <= 5, `${item.id}: "${answer}" has ${n} words`).toBe(true);
          expect.soft(containsKeyWord(answer, item.cue ?? ''), `${item.id}: "${answer}" must contain ${item.cue} unchanged`).toBe(true);
        }
        if (item.part === 'LI2') {
          expect.soft(countWords(answer), `${item.id}: short answer`).toBeLessThanOrEqual(3);
          expect.soft(norm(item.audio ?? '').includes(norm(answer)), `${item.id}: "${answer}" is heard in the recording`).toBe(true);
        }
      }
      if (item.part === 'RU3') {
        expect.soft(item.cue && item.cue === item.cue.toUpperCase(), `${item.id}: stem in capitals`).toBeTruthy();
        expect.soft(norm(item.answers[0]) !== norm(item.cue!), `${item.id}: the answer changes the stem`).toBe(true);
      }
      if (item.part === 'RU4') expect.soft(item.lead && item.cue, `${item.id}: first sentence and key word`).toBeTruthy();
    }
  });

  it('keeps the placement bank to multiple choice, spread over levels and both sections', () => {
    for (const item of b2FirstAssessmentBank) expect.soft(isTyped(item), item.id).toBe(false);
    for (let level = 1; level <= 6; level += 1) {
      expect.soft(b2FirstAssessmentBank.filter((i) => i.level === level).length, `level ${level}`).toBeGreaterThanOrEqual(6);
    }
    expect.soft(b2FirstAssessmentBank.filter((i) => i.skill === 'listening').length).toBeGreaterThanOrEqual(12);
  });

  it('builds mini mock tests on the B2 First blueprint', () => {
    for (const mock of b2FirstMockTests) {
      const count = Object.fromEntries(mock.sections.map((s) => [s.part, s.items.length]));
      expect.soft(count, mock.id).toEqual(mock.kind === 'mini' ? B2_FIRST_CONFIG.blueprints.mini : B2_FIRST_CONFIG.blueprints.full);
    }
  });

  it('gives full mock tests the texts of the real exam: one shared text or recording per part', () => {
    const shared = ['RU1', 'RU2', 'RU3', 'RU5', 'RU6', 'RU7', 'LI2', 'LI3', 'LI4'];
    for (const mock of b2FirstMockTests.filter((m) => m.kind === 'full')) {
      for (const section of mock.sections.filter((s) => shared.includes(s.part))) {
        const texts = new Set(section.items.map((i) => (i.skill === 'listening' ? i.audio : i.passage)));
        expect.soft(texts.size, `${mock.id} ${section.part}`).toBe(1);
      }
      // Listening Part 1: eight separate extracts.
      const li1 = mock.sections.find((s) => s.part === 'LI1')?.items ?? [];
      expect.soft(new Set(li1.map((i) => i.audio)).size, `${mock.id} LI1`).toBe(li1.length);
    }
  });

  it('never reuses a question between the bank, the lessons and the mock tests, nor from the TOEIC app', () => {
    const toeic = new Set([
      ...toeicAssessmentBank.map(fingerprint),
      ...toeicExercises.flatMap(({ exercise: e }) => (e.kind === 'mcq' ? [fingerprint(e.item)] : [])),
      ...toeicMockTests.flatMap((m) => m.sections.flatMap((s) => s.items.map((i) => fingerprint(i as McqItem)))),
    ]);
    const seen = new Map<string, string>();
    for (const item of allItems) {
      const f = fingerprint(item);
      expect.soft(toeic.has(f), `${item.id} repeats a TOEIC item`).toBe(false);
      const other = seen.get(f);
      expect.soft(other, `${item.id} repeats ${other}`).toBeUndefined();
      seen.set(f, item.id);
    }
  });
});
