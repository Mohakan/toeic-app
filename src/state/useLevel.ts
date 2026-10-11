import { useMemo } from 'react';
import { levelEstimate } from '../services/placement';
import type { LevelEstimate, Placement } from '../types';
import { useApp } from './AppState';

export interface LevelView {
  start: Placement;
  /** Placement answers plus first-try lesson answers, re-estimated with the same IRT model. */
  current: LevelEstimate;
  target: number;
  /** Share of the distance from the starting score to the target already covered, 0..1. */
  progressToTarget: number;
  practiceAnswers: number;
}

export function useLevel(): LevelView | null {
  const { data } = useApp();
  const { placement, practiceResponses, target } = data;

  return useMemo(() => {
    if (!placement) return null;
    const current = practiceResponses.length > 0 ? levelEstimate([...placement.responses, ...practiceResponses]) : placement;
    const span = target - placement.total.score;
    const progressToTarget = span <= 0 ? 1 : Math.min(1, Math.max(0, (current.total.score - placement.total.score) / span));
    return { start: placement, current, target, progressToTarget, practiceAnswers: practiceResponses.length };
  }, [placement, practiceResponses, target]);
}
