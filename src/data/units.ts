import { currentExam } from '../exams/current';
import { toeicUnits } from './curriculum';
import { b2FirstUnits } from './exams/b2First/curriculum';
import { indexUnits } from './unitIndex';

export { exerciseKey } from './unitIndex';
export type { LocatedExercise } from './unitIndex';

/**
 * Learning path of the exam of this build. The TOEIC path lives in ./curriculum, the others in
 * ./exams/<exam>/; screens and services only import from here.
 */
export const { units, unitById, allExercises, exerciseByKey } = indexUnits(currentExam.id === 'b2First' ? b2FirstUnits : toeicUnits);
