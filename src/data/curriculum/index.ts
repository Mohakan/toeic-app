import type { Exercise, ExerciseSet, Unit } from '../../types';
import { a1Units } from './a1';
import { a2Units } from './a2';
import { b1Units } from './b1';
import { b2Units } from './b2';
import { c1Units } from './c1';

/** Full learning path, ordered from A1 to C1. */
export const units: Unit[] = [...a1Units, ...a2Units, ...b1Units, ...b2Units, ...c1Units];

export const unitById = Object.fromEntries(units.map((u) => [u.id, u])) as Record<string, Unit>;

export const exerciseKey = (e: Exercise): string => (e.kind === 'mcq' ? e.item.id : e.id);

export interface LocatedExercise {
  unit: Unit;
  set: ExerciseSet;
  exercise: Exercise;
}

export const allExercises: LocatedExercise[] = units.flatMap((unit) =>
  unit.sets.flatMap((set) => set.exercises.map((exercise) => ({ unit, set, exercise }))),
);

export const exerciseByKey = Object.fromEntries(allExercises.map((x) => [exerciseKey(x.exercise), x])) as Record<
  string,
  LocatedExercise
>;
