import { examFrom } from './catalog';
import { configFor } from './config';

/** The exam this build prepares for. EXPO_PUBLIC_EXAM is inlined at build time. */
export const currentExam = examFrom(process.env.EXPO_PUBLIC_EXAM);

/** Parts, scoring and goals of the exam of this build. */
export const examConfig = configFor(currentExam.id);
