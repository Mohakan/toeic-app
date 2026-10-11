import { examConfig } from '../exams/current';
import type { TokiStage } from '../exams/config';

export type { TokiStage };

/**
 * Toki, the falcon mascot, grows with the learner's estimated score. Each exam sets the
 * thresholds on its own scale (TOEIC: the brief, roughly the certificate levels; B2 First: the
 * Cambridge grades), in src/exams/config.ts.
 */
export const TOKI_STAGES = examConfig.tokiStages;

/** Stage for an estimated score; without an estimate yet, Toki shows his standard look. */
export function tokiStage(score: number | null | undefined): TokiStage {
  if (score === null || score === undefined || Number.isNaN(score)) return 'apprentice';
  let stage: TokiStage = 'chick';
  for (const s of TOKI_STAGES) if (score >= s.from) stage = s.stage;
  return stage;
}

/** The expressions drawn so far, mapped to moments of the app (brief, "Personnalité et expressions"). */
export type TokiExpression =
  /** Home, navigation. */
  | 'neutral'
  /** Right answer, success. */
  | 'joy'
  /** Wrong answer or failed set: never mocking. */
  | 'encourage'
  /** Hint, difficult question. */
  | 'think'
  /** Onboarding: waves and winks. */
  | 'welcome';
