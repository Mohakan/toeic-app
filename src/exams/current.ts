import { examFrom } from './catalog';

/** The exam this build prepares for. EXPO_PUBLIC_EXAM is inlined at build time. */
export const currentExam = examFrom(process.env.EXPO_PUBLIC_EXAM);
