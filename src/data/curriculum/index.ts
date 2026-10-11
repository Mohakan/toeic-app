import type { Unit } from '../../types';
import { indexUnits } from '../unitIndex';
import { a1Units } from './a1';
import { a2Units } from './a2';
import { b1Units } from './b1';
import { b2Units } from './b2';
import { c1Units } from './c1';

export { exerciseKey } from '../unitIndex';
export type { LocatedExercise } from '../unitIndex';

/** TOEIC learning path, ordered from A1 to C1. */
export const toeicUnits: Unit[] = [...a1Units, ...a2Units, ...b1Units, ...b2Units, ...c1Units];

export const { units, unitById, allExercises, exerciseByKey } = indexUnits(toeicUnits);
