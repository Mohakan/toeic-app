import type { Cefr, Section } from '../types';

/**
 * TOEIC Listening & Reading scaled-score cut scores for CEFR levels, from the ETS mapping
 * study (Tannenbaum & Wylie, 2008, as published by ETS). Totals follow the same study.
 */
export const CEFR_CUTS: Record<Section | 'total', [Cefr, number][]> = {
  L: [['C1', 490], ['B2', 400], ['B1', 275], ['A2', 110]],
  R: [['C1', 455], ['B2', 385], ['B1', 275], ['A2', 115]],
  total: [['C1', 945], ['B2', 785], ['B1', 550], ['A2', 225]],
};

/**
 * Ability values where the item bank places each CEFR boundary (midpoints between the
 * difficulty bands of items written for adjacent levels). Linking theta to the ETS cuts
 * through these anchors keeps the app's levels and the reported scaled scores aligned.
 */
const ANCHORS: Record<Section, [theta: number, score: number][]> = {
  L: [[-3.5, 5], [-1.8, 110], [-0.9, 275], [0, 400], [0.9, 490], [1.6, 495]],
  R: [[-3.5, 5], [-1.8, 115], [-0.9, 275], [0, 385], [0.9, 455], [2.0, 495]],
};

export function scaledScore(section: Section, theta: number): number {
  const points = ANCHORS[section];
  if (theta <= points[0][0]) return points[0][1];
  for (let i = 1; i < points.length; i += 1) {
    const [t1, s1] = points[i];
    if (theta <= t1) {
      const [t0, s0] = points[i - 1];
      const raw = s0 + ((theta - t0) / (t1 - t0)) * (s1 - s0);
      return Math.round(raw / 5) * 5;
    }
  }
  return points[points.length - 1][1];
}

export function cefrFor(scale: Section | 'total', score: number): Cefr {
  for (const [level, cut] of CEFR_CUTS[scale]) if (score >= cut) return level;
  return 'A1';
}

/** Item difficulty band (1-6) written for each CEFR level; 6 is upper C1. */
export const levelToB = (level: number) => -2.25 + (level - 1) * 0.9;

export const thetaToLevel = (theta: number) => Math.min(6, Math.max(1, Math.round((theta + 2.25) / 0.9) + 1));

/** z-value for a two-sided 90% interval. */
export const Z90 = 1.645;

export const CEFR_ORDER: Cefr[] = ['A1', 'A2', 'B1', 'B2', 'C1'];
