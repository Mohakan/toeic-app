/**
 * Toki, the falcon mascot, grows with the learner's estimated TOEIC score (10 to 990). The
 * thresholds follow the brief, roughly the TOEIC certificate levels (785 is the L&R "gold" level).
 */
export type TokiStage = 'chick' | 'apprentice' | 'pro' | 'pilot' | 'golden';

export const TOKI_STAGES: { stage: TokiStage; from: number }[] = [
  { stage: 'chick', from: 10 },
  { stage: 'apprentice', from: 300 },
  { stage: 'pro', from: 550 },
  { stage: 'pilot', from: 785 },
  { stage: 'golden', from: 900 },
];

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
