import type { Exercise, ItemResponse } from '../types';
import { paramsOf, sectionOf } from './placement';
import { levelToB } from './scoring';

/**
 * First-try lesson and review answers feed the same IRT estimate as the placement test.
 * `unitLevel` is used for sentence-building items, which carry no level of their own.
 */
export function practiceResponse(
  e: Exercise,
  correct: boolean,
  unitLevel: number,
  source: ItemResponse['source'] = 'practice',
): ItemResponse | null {
  if (e.kind === 'mcq') {
    return { itemId: e.item.id, section: sectionOf(e.item.skill), skill: e.item.skill, level: e.item.level, params: paramsOf(e.item), correct, source };
  }
  if (e.kind === 'order') {
    // Building a sentence leaves almost no room for guessing, hence a near-zero lower asymptote.
    return { itemId: e.id, section: 'R', skill: 'grammar', level: unitLevel, params: { a: 1, b: levelToB(unitLevel), c: 0.02 }, correct, source };
  }
  return null;
}
