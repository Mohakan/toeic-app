import type { UnitResult } from './sets';
import type { Placement, Unit } from '../types';

export type UnitStatus = 'done' | 'skipped' | 'current' | 'available' | 'locked';

/**
 * Units clearly below the placement level are covered by the test. The first remaining unit is
 * the recommended one; the other units of the same CEFR band are open too, so learners keep some
 * autonomy, while higher bands stay locked until the current band is finished.
 */
export function unitStatuses(
  units: Unit[],
  results: Record<string, UnitResult>,
  placement: Pick<Placement, 'level'> | null,
): Record<string, UnitStatus> {
  const statuses: Record<string, UnitStatus> = {};
  let currentLevel: number | null = null;
  for (const unit of units) {
    if (results[unit.id]?.passed) {
      statuses[unit.id] = 'done';
    } else if (placement && unit.level <= placement.level - 2) {
      statuses[unit.id] = 'skipped';
    } else if (currentLevel === null) {
      statuses[unit.id] = 'current';
      currentLevel = unit.level;
    } else {
      statuses[unit.id] = unit.level <= currentLevel ? 'available' : 'locked';
    }
  }
  return statuses;
}

export function starsFor(accuracy: number): number {
  if (accuracy >= 0.9) return 3;
  if (accuracy >= 0.7) return 2;
  return 1;
}
