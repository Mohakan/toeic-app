import type { B2Part, Cefr, ExamPart, Section, ToeicPart } from '../types';
import type { ExamId } from './catalog';

/** Mascot stages, from the brief (src/services/toki.ts). */
export type TokiStage = 'chick' | 'apprentice' | 'pro' | 'pilot' | 'golden';

/**
 * Everything the app needs to know about the exam it prepares for. Content (units, tests,
 * placement bank) is chosen separately, in src/data/examContent.ts.
 */
export interface ExamConfig {
  id: ExamId;
  /** Parts in the order of the real exam; each belongs to a measured section. */
  parts: { id: ExamPart; section: Section }[];
  /** Items per part in a full and a mini mock test. */
  blueprints: { full: Partial<Record<ExamPart, number>>; mini: Partial<Record<ExamPart, number>> };
  scoring: {
    /** Section scale, reported in steps of `step`. */
    section: { min: number; max: number; step: number };
    /** The whole-exam score is the sum of the two sections (TOEIC) or their mean (Cambridge). */
    combine: 'sum' | 'mean';
    /**
     * Ability values linked to the section scale. The CEFR boundaries of the item bank sit at
     * theta -1.8 (A2), -0.9 (B1), 0 (B2) and 0.9 (C1): anchors put the exam's cut scores there.
     */
    anchors: Record<Section, [theta: number, score: number][]>;
    /** Lowest score of each CEFR level, highest level first. */
    cefrCuts: Record<Section | 'total', [Cefr, number][]>;
  };
  /** Score goals offered at onboarding; the first one above the default is preselected. */
  goals: number[];
  defaultGoal: number;
  /** Lowest estimated total score of each mascot stage. */
  tokiStages: { stage: TokiStage; from: number }[];
  /** The TOEIC Speaking & Writing tasks (read aloud, photos, opinions…) only exist in the TOEIC app. */
  toeicSpeaking: boolean;
  /** Mock tests open in the free trial. */
  freeMockIds: string[];
  /**
   * Identity of the app within the family: the color of the hero band (Encre text on it must
   * reach AA, checked in theme.test.ts) and what Toki wears around his neck.
   */
  brand: { hero: string; accessory: 'headset' | 'scarf' };
}

const TOEIC_PARTS: { id: ToeicPart; section: Section }[] = [
  { id: 'L2', section: 'L' },
  { id: 'L3', section: 'L' },
  { id: 'L4', section: 'L' },
  { id: 'R5', section: 'R' },
  { id: 'R6', section: 'R' },
  { id: 'R7', section: 'R' },
];

export const TOEIC_CONFIG: ExamConfig = {
  id: 'toeic',
  parts: TOEIC_PARTS,
  // A full test without Part 1 (photographs need real images); a 30-minute mini test.
  blueprints: {
    full: { L2: 25, L3: 39, L4: 30, R5: 30, R6: 16, R7: 54 },
    mini: { L2: 7, L3: 9, L4: 8, R5: 8, R6: 4, R7: 14 },
  },
  scoring: {
    section: { min: 5, max: 495, step: 5 },
    combine: 'sum',
    anchors: {
      L: [[-3.5, 5], [-1.8, 110], [-0.9, 275], [0, 400], [0.9, 490], [1.6, 495]],
      R: [[-3.5, 5], [-1.8, 115], [-0.9, 275], [0, 385], [0.9, 455], [2.0, 495]],
    },
    // ETS mapping study (Tannenbaum & Wylie, 2008, as published by ETS).
    cefrCuts: {
      L: [['C1', 490], ['B2', 400], ['B1', 275], ['A2', 110]],
      R: [['C1', 455], ['B2', 385], ['B1', 275], ['A2', 115]],
      total: [['C1', 945], ['B2', 785], ['B1', 550], ['A2', 225]],
    },
  },
  goals: [550, 700, 800, 900],
  defaultGoal: 700,
  // Roughly the TOEIC certificate levels (785 is the L&R "gold" level).
  tokiStages: [
    { stage: 'chick', from: 10 },
    { stage: 'apprentice', from: 300 },
    { stage: 'pro', from: 550 },
    { stage: 'pilot', from: 785 },
    { stage: 'golden', from: 900 },
  ],
  toeicSpeaking: true,
  freeMockIds: ['demo-mini'],
  // Bleu Ciel Toki; the headset recalls the Listening part.
  brand: { hero: '#2E9BF0', accessory: 'headset' },
};

const B2_PARTS: { id: B2Part; section: Section }[] = [
  { id: 'RU1', section: 'R' },
  { id: 'RU2', section: 'R' },
  { id: 'RU3', section: 'R' },
  { id: 'RU4', section: 'R' },
  { id: 'RU5', section: 'R' },
  { id: 'RU6', section: 'R' },
  { id: 'RU7', section: 'R' },
  { id: 'LI1', section: 'L' },
  { id: 'LI2', section: 'L' },
  { id: 'LI3', section: 'L' },
  { id: 'LI4', section: 'L' },
];

/**
 * Cambridge English Scale. B2 First reports 122 to 190 per paper and overall (the mean of the
 * papers); 140-159 is B1, 160-179 B2 (pass, grades C and B) and 180-190 C1 (grade A).
 */
export const B2_FIRST_CONFIG: ExamConfig = {
  id: 'b2First',
  parts: B2_PARTS,
  // Reading and Use of English and Listening as on the real exam; the mini test keeps one task per part.
  blueprints: {
    full: { RU1: 8, RU2: 8, RU3: 8, RU4: 6, RU5: 6, RU6: 6, RU7: 10, LI1: 8, LI2: 10, LI3: 5, LI4: 7 },
    mini: { RU1: 4, RU2: 4, RU3: 4, RU4: 3, RU5: 3, RU6: 3, RU7: 4, LI1: 4, LI2: 4, LI3: 3, LI4: 3 },
  },
  scoring: {
    section: { min: 122, max: 190, step: 1 },
    combine: 'mean',
    anchors: {
      L: [[-2.7, 122], [-0.9, 140], [0, 160], [0.9, 180], [1.4, 190]],
      R: [[-2.7, 122], [-0.9, 140], [0, 160], [0.9, 180], [1.4, 190]],
    },
    cefrCuts: {
      L: [['C1', 180], ['B2', 160], ['B1', 140], ['A2', 122]],
      R: [['C1', 180], ['B2', 160], ['B1', 140], ['A2', 122]],
      total: [['C1', 180], ['B2', 160], ['B1', 140], ['A2', 122]],
    },
  },
  // Pass (grade C), grade B, grade A.
  goals: [160, 173, 180],
  defaultGoal: 160,
  tokiStages: [
    { stage: 'chick', from: 122 },
    { stage: 'apprentice', from: 140 },
    { stage: 'pro', from: 160 },
    { stage: 'pilot', from: 173 },
    { stage: 'golden', from: 180 },
  ],
  toeicSpeaking: false,
  freeMockIds: ['fce-mini-1'],
  // Lavande (derived, 5.6:1 with Encre); a student scarf for an exam taken at school or university.
  brand: { hero: '#9B8CFF', accessory: 'scarf' },
};

export const EXAM_CONFIGS: Partial<Record<ExamId, ExamConfig>> = { toeic: TOEIC_CONFIG, b2First: B2_FIRST_CONFIG };

export function configFor(id: ExamId): ExamConfig {
  const config = EXAM_CONFIGS[id];
  if (!config) throw new Error(`No configuration for the exam "${id}" yet.`);
  return config;
}
