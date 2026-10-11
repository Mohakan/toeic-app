/**
 * The apps of the Toki Quest family (one per exam, see the app's src/exams/catalog.ts). Each app
 * sells its own full plan, so rights and purchases are kept per exam.
 */
export const EXAM_IDS = ['toeic', 'b2First', 'ieltsAcademic'] as const;

export type ExamId = (typeof EXAM_IDS)[number];

export const isExamId = (value: unknown): value is ExamId => typeof value === 'string' && (EXAM_IDS as readonly string[]).includes(value);

/** The app says which exam it prepares for in this header; requests without it come from the TOEIC app. */
export const EXAM_HEADER = 'x-toki-exam';

export function examOfRequest(headers: Record<string, string | string[] | undefined>): ExamId {
  const value = headers[EXAM_HEADER];
  return isExamId(value) ? value : 'toeic';
}
