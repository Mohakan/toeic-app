import type { Exercise, ExerciseSet, Unit } from '../types';

export const exerciseKey = (e: Exercise): string => (e.kind === 'mcq' ? e.item.id : e.id);

export interface LocatedExercise {
  unit: Unit;
  set: ExerciseSet;
  exercise: Exercise;
}

/** Lookups over a learning path, shared by every exam. */
export function indexUnits(units: Unit[]) {
  const unitById = Object.fromEntries(units.map((u) => [u.id, u])) as Record<string, Unit>;
  const allExercises: LocatedExercise[] = units.flatMap((unit) =>
    unit.sets.flatMap((set) => set.exercises.map((exercise) => ({ unit, set, exercise }))),
  );
  const exerciseByKey = Object.fromEntries(allExercises.map((x) => [exerciseKey(x.exercise), x])) as Record<string, LocatedExercise>;
  return { units, unitById, allExercises, exerciseByKey };
}
