import type { Cefr, Section } from '../types';

import type { ExamConfig } from '../exams/config';
import { examConfig } from '../exams/current';

/**
 * Lowest score of each CEFR level, per section and for the whole exam, on the scale of the exam
 * of this build (TOEIC: ETS mapping study; B2 First: Cambridge English Scale).
 */
export const CEFR_CUTS = examConfig.scoring.cefrCuts;

/**
 * Section score for an ability value. The exam's anchors link the CEFR boundaries of the item
 * bank to its cut scores, so the app's levels and the reported scores stay aligned.
 */
export function scaledScore(section: Section, theta: number, config: ExamConfig = examConfig): number {
  const points = config.scoring.anchors[section];
  const { step } = config.scoring.section;
  if (theta <= points[0][0]) return points[0][1];
  for (let i = 1; i < points.length; i += 1) {
    const [t1, s1] = points[i];
    if (theta <= t1) {
      const [t0, s0] = points[i - 1];
      const raw = s0 + ((theta - t0) / (t1 - t0)) * (s1 - s0);
      return Math.round(raw / step) * step;
    }
  }
  return points[points.length - 1][1];
}

/** Whole-exam score from the two section scores: their sum (TOEIC) or their mean (Cambridge). */
export function combineScores(l: number, r: number, config: ExamConfig = examConfig): number {
  if (config.scoring.combine === 'sum') return l + r;
  const { step } = config.scoring.section;
  return Math.round((l + r) / 2 / step) * step;
}

/** Range of the whole-exam score: 10-990 for TOEIC, 122-190 for B2 First. */
export function totalRange(config: ExamConfig = examConfig): { min: number; max: number } {
  const { min, max } = config.scoring.section;
  return { min: combineScores(min, min, config), max: combineScores(max, max, config) };
}

export function cefrFor(scale: Section | 'total', score: number, config: ExamConfig = examConfig): Cefr {
  for (const [level, cut] of config.scoring.cefrCuts[scale]) if (score >= cut) return level;
  return 'A1';
}

/** Item difficulty band (1-6) written for each CEFR level; 6 is upper C1. */
export const levelToB = (level: number) => -2.25 + (level - 1) * 0.9;

export const thetaToLevel = (theta: number) => Math.min(6, Math.max(1, Math.round((theta + 2.25) / 0.9) + 1));

/** z-value for a two-sided 90% interval. */
export const Z90 = 1.645;

export const CEFR_ORDER: Cefr[] = ['A1', 'A2', 'B1', 'B2', 'C1'];
