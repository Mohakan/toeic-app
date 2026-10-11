import { currentExam, examConfig } from '../../exams/current';
import { b2FirstMockTests } from '../exams/b2First/mock';
import type { ExamPart, McqItem, MockTest } from '../../types';
import { allExercises } from '../curriculum';
import { full1 } from './full-1';
import { full2 } from './full-2';
import { mini1 } from './mini-1';
import { mini2 } from './mini-2';
import { mini3 } from './mini-3';
import { mini4 } from './mini-4';
import { mini5 } from './mini-5';
import { mini6 } from './mini-6';

/** Items per part in a full test and a mini test, from the exam's configuration. */
export const FULL_TEST_BLUEPRINT = examConfig.blueprints.full;
export const MINI_TEST_BLUEPRINT = examConfig.blueprints.mini;

const lessonItems = (part: ExamPart, count: number): McqItem[] =>
  allExercises
    .flatMap(({ exercise }) => (exercise.kind === 'mcq' && exercise.item.part === part ? [exercise.item] : []))
    .sort((a, b) => a.level - b.level || a.id.localeCompare(b.id))
    .filter((_, i, list) => i % Math.max(1, Math.floor(list.length / count)) === 0)
    .slice(0, count);

/**
 * Demonstration test built from lesson items (never from the placement bank) so the mock-test
 * flow can be used before dedicated, unseen mock content is written.
 */
const demoMini: MockTest = {
  id: 'demo-mini',
  kind: 'mini',
  demo: true,
  durationMin: 15,
  title: {
    fr: 'TOEIC blanc express (démo)',
    ar: 'اختبار توييك تجريبي سريع (عرض)',
    en: 'Express practice test (demo)',
    es: 'TOEIC de práctica exprés (demo)',
  },
  sections: (
    [
      ['L2', 4],
      ['L3', 3],
      ['L4', 3],
      ['R5', 6],
      ['R6', 2],
      ['R7', 2],
    ] as [ExamPart, number][]
  ).map(([part, count]) => ({ part, items: lessonItems(part, count) })),
};

export const toeicMockTests: MockTest[] = [full1, full2, mini1, mini2, mini3, mini4, mini5, mini6, demoMini];

/** Mock tests of the exam of this build. */
export const mockTests: MockTest[] = currentExam.id === 'b2First' ? b2FirstMockTests : toeicMockTests;

export const mockById = Object.fromEntries(mockTests.map((m) => [m.id, m])) as Record<string, MockTest>;
