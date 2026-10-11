/**
 * Access rights (see prompts/commercialisation.md). The free trial is complete but limited: the
 * placement test, the express mock test, 4 Listening & Reading units from the learner's level and
 * one speaking set at that level. The full plan opens everything. Pure functions: the data comes in
 * as arguments, so the rules are fully tested.
 */
import type { Placement, Unit } from '../types';

export type Tier = 'free' | 'full';

/** How the full plan was obtained; 'dev' is the test switch, only available in development builds. */
export type PlanSource = 'store_ios' | 'store_android' | 'web_tn' | 'sabil' | 'grant' | 'dev';

export interface Plan {
  tier: Tier;
  source: PlanSource | null;
  since: string | null;
  /** Last day of a time-limited plan (partner enrolment); absent or null when it does not end. */
  validUntil?: string | null;
}

export const FREE_PLAN: Plan = { tier: 'free', source: null, since: null };

/** The content opened by the trial, fixed at the first placement test so retaking it opens nothing new. */
export interface Trial {
  units: string[];
  speaking: string[];
}

export const TRIAL_UNIT_COUNT = 4;
/** "TOEIC blanc express": 20 questions. */
export const FREE_MOCK_IDS = ['demo-mini'];

/** Speaking content of a band, in the order shown to the learner. */
export interface SpeakingCatalog {
  readAloud: { id: string; level: number }[];
  photos: { id: string; level: number }[];
  questions: { id: string; level: number }[];
  documents: { id: string; level: number }[];
  opinions: { id: string; level: number }[];
}

/** One speaking set: 2 texts to read, 2 photos, 1 question set, 1 document, 1 opinion. */
const SPEAKING_TRIAL: [keyof SpeakingCatalog, number][] = [
  ['readAloud', 2],
  ['photos', 2],
  ['questions', 1],
  ['documents', 1],
  ['opinions', 1],
];

/** Speaking content is written for CEFR bands 1 (A1) to 5 (C1); the path has a sixth, upper-C1 band. */
export const speakingBand = (pathLevel: number | null | undefined) => Math.min(5, Math.max(1, pathLevel ?? 1));

export function makeTrial(units: Unit[], placement: Pick<Placement, 'level'> | null, speaking: SpeakingCatalog): Trial {
  // Same rule as the path: units clearly below the measured level are covered by the test.
  const open = units.filter((u) => !placement || u.level > placement.level - 2);
  const band = speakingBand(placement?.level);
  return {
    // A very strong learner may have fewer than 4 units left above the level: the trial then opens the last 4.
    units: (open.length >= TRIAL_UNIT_COUNT ? open.slice(0, TRIAL_UNIT_COUNT) : units.slice(-TRIAL_UNIT_COUNT)).map((u) => u.id),
    speaking: SPEAKING_TRIAL.flatMap(([kind, count]) =>
      speaking[kind]
        .filter((t) => t.level === band)
        .slice(0, count)
        .map((t) => t.id),
    ),
  };
}

export interface AccessInput {
  plan: Plan;
  trial: Trial;
  /** Units the learner has already played: never taken away. */
  started: string[];
}

export const isFull = (plan: Plan) => plan.tier === 'full';

export function canOpenUnit({ plan, trial, started }: AccessInput, unitId: string): boolean {
  return isFull(plan) || trial.units.includes(unitId) || started.includes(unitId);
}

export function canOpenMock({ plan }: AccessInput, mockId: string): boolean {
  return isFull(plan) || FREE_MOCK_IDS.includes(mockId);
}

/** A speaking task or set: read-aloud text, photo, question set, document or opinion topic. */
export function canOpenSpeaking({ plan, trial }: AccessInput, taskId: string): boolean {
  return isFull(plan) || trial.speaking.includes(taskId);
}

export function canOpenSimulation({ plan }: AccessInput): boolean {
  return isFull(plan);
}
