import type { Exercise, McqItem, MockTest, ToeicPart } from '../../types';
import { x } from '../curriculum/build';

const PART_ORDER: ToeicPart[] = ['L2', 'L3', 'L4', 'R5', 'R6', 'R7'];

const mcq = (exercise: Exercise): McqItem => {
  if (exercise.kind !== 'mcq') throw new Error('Mock tests only contain multiple-choice items');
  return exercise.item;
};

/**
 * Builds a 30-minute mini mock test from authored items (written with the curriculum helpers, so
 * keys are shuffled the same way). Items are grouped by part in the official order.
 */
export function miniTest(n: number, exercises: Exercise[]): MockTest {
  return {
    id: `mini-${n}`,
    kind: 'mini',
    durationMin: 30,
    title: x(`TOEIC blanc mini n° ${n}`, `اختبار توييك تجريبي مصغّر رقم ${n}`, `Mini practice test ${n}`, `TOEIC de práctica mini n.º ${n}`),
    sections: sectionsOf(exercises),
  };
}

/** Full two-hour mock test (Parts 2 to 7; Part 1 needs real photographs). */
export function fullTest(n: number, exercises: Exercise[]): MockTest {
  return {
    id: `full-${n}`,
    kind: 'full',
    durationMin: 120,
    title: x(`TOEIC blanc complet n° ${n}`, `اختبار توييك تجريبي كامل رقم ${n}`, `Full practice test ${n}`, `TOEIC de práctica completo n.º ${n}`),
    sections: sectionsOf(exercises),
  };
}

function sectionsOf(exercises: Exercise[]) {
  const items = exercises.map(mcq);
  return PART_ORDER.map((part) => ({ part, items: items.filter((i) => i.part === part) })).filter((s) => s.items.length > 0);
}
