import type { Unit } from '../types';

/** Share of first-try correct answers needed to validate a unit. */
export const PASS_THRESHOLD = 0.7;

export interface UnitProgress {
  setsDone: string[];
  attempts: number;
}

export interface UnitResult extends UnitProgress {
  /** Best stars and first-try accuracy over all attempts. */
  stars: number;
  accuracy: number;
  /** The unit counts as completed once one set reaches PASS_THRESHOLD. */
  passed: boolean;
}

export function applySetResult(prev: UnitResult | undefined, setId: string, accuracy: number, stars: number): UnitResult {
  return {
    stars: Math.max(prev?.stars ?? 0, stars),
    accuracy: Math.max(prev?.accuracy ?? 0, accuracy),
    passed: (prev?.passed ?? false) || accuracy >= PASS_THRESHOLD,
    setsDone: prev?.setsDone.includes(setId) ? prev.setsDone : [...(prev?.setsDone ?? []), setId],
    attempts: (prev?.attempts ?? 0) + 1,
  };
}

/** Results saved before exercise sets existed only meant "completed": keep them completed. */
export function migrateUnitResult(saved: Partial<UnitResult>): UnitResult {
  return {
    stars: saved.stars ?? 1,
    accuracy: saved.accuracy ?? 0,
    passed: saved.passed ?? true,
    setsDone: saved.setsDone ?? [],
    attempts: saved.attempts ?? 1,
  };
}

/** First set never played; once all are played, sets rotate with each new attempt. */
export function nextSetIndex(unit: Unit, progress: UnitProgress | undefined): number {
  if (!progress) return 0;
  const fresh = unit.sets.findIndex((s) => !progress.setsDone.includes(s.id));
  return fresh >= 0 ? fresh : progress.attempts % unit.sets.length;
}
