import type { Cefr } from '../types';
import { CEFR_ORDER } from './scoring';

/** What the end of a lesson set celebrates, if anything. A level-up outranks a finished unit. */
export type Celebration = 'levelUp' | 'unitComplete' | null;

export function celebrationFor({
  wasPassed,
  nowPassed,
  levelBefore,
  levelAfter,
}: {
  /** The unit was already validated before this set. */
  wasPassed: boolean;
  nowPassed: boolean;
  /** Estimated CEFR level before and after the set's answers (null without a placement test). */
  levelBefore: Cefr | null;
  levelAfter: Cefr | null;
}): Celebration {
  if (levelBefore && levelAfter && CEFR_ORDER.indexOf(levelAfter) > CEFR_ORDER.indexOf(levelBefore)) return 'levelUp';
  if (nowPassed && !wasPassed) return 'unitComplete';
  return null;
}
