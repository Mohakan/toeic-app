import type { ExamId } from '../exams/catalog';
import type { StringKey } from './strings';

type Entry = readonly [fr: string, ar: string, en: string, es: string];

/**
 * Texts that differ from one app of the family to another (the exam's name, its parts, the
 * content figures). A key listed here replaces the shared text in that app only; the TOEIC app
 * uses the shared texts of strings.ts.
 */
export const EXAM_STRINGS: Partial<Record<ExamId, Partial<Record<StringKey, Entry>>>> = {
  b2First: {},
};
