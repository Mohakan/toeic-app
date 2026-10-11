import { describe, expect, it } from 'vitest';
import type { Unit } from '../types';
import { canOpenMock, canOpenSimulation, canOpenSpeaking, canOpenUnit, FREE_PLAN, makeTrial, speakingBand, type Plan, type SpeakingCatalog } from './access';

const unit = (id: string, level: number) => ({ id, level }) as Unit;
const units = [unit('a1-1', 1), unit('a1-2', 1), unit('a2-1', 2), unit('a2-2', 2), unit('b1-1', 3), unit('b1-2', 3), unit('b2-1', 4), unit('b2-2', 4), unit('c1-1', 5)];
const tasks = (prefix: string) => [1, 2, 3, 4, 5].flatMap((level) => [1, 2, 3].map((n) => ({ id: `${prefix}-${level}-${n}`, level })));
const speaking: SpeakingCatalog = { readAloud: tasks('ra'), photos: tasks('ph'), questions: tasks('rq'), documents: tasks('rd'), opinions: tasks('op') };
const FULL: Plan = { tier: 'full', source: 'store_ios', since: '2026-10-08' };

describe('makeTrial', () => {
  it('opens the 4 units that follow the measured level, as the path does', () => {
    // Path level 4 (B2): units of level <= 2 are covered by the test.
    expect(makeTrial(units, { level: 4 }, speaking).units).toEqual(['b1-1', 'b1-2', 'b2-1', 'b2-2']);
  });

  it('starts at A1 without a placement test, and always opens 4 units', () => {
    expect(makeTrial(units, null, speaking).units).toEqual(['a1-1', 'a1-2', 'a2-1', 'a2-2']);
    expect(makeTrial(units, { level: 6 }, speaking).units).toEqual(['b1-2', 'b2-1', 'b2-2', 'c1-1']);
  });

  it('opens one speaking set at the learner’s band: 2 texts, 2 photos, 1 set, 1 document, 1 opinion', () => {
    expect(makeTrial(units, { level: 3 }, speaking).speaking).toEqual(['ra-3-1', 'ra-3-2', 'ph-3-1', 'ph-3-2', 'rq-3-1', 'rd-3-1', 'op-3-1']);
    expect(speakingBand(6)).toBe(5);
    expect(speakingBand(null)).toBe(1);
  });
});

describe('access rules', () => {
  const trial = makeTrial(units, { level: 3 }, speaking);
  const free = { plan: FREE_PLAN, trial, started: [] as string[] };
  const full = { plan: FULL, trial, started: [] as string[] };

  it('limits the free plan to the trial content, the express mock test, and no simulation', () => {
    expect(canOpenUnit(free, 'a2-1')).toBe(true);
    expect(canOpenUnit(free, 'c1-1')).toBe(false);
    expect(canOpenMock(free, 'demo-mini')).toBe(true);
    expect(canOpenMock(free, 'full-1')).toBe(false);
    expect(canOpenSpeaking(free, 'ra-3-1')).toBe(true);
    expect(canOpenSpeaking(free, 'ra-3-3')).toBe(false);
    expect(canOpenSimulation(free)).toBe(false);
  });

  it('never takes away a unit the learner has already started', () => {
    expect(canOpenUnit({ ...free, started: ['c1-1'] }, 'c1-1')).toBe(true);
  });

  it('opens everything with the full plan', () => {
    expect(canOpenUnit(full, 'c1-1')).toBe(true);
    expect(canOpenMock(full, 'full-1')).toBe(true);
    expect(canOpenSpeaking(full, 'ra-5-3')).toBe(true);
    expect(canOpenSimulation(full)).toBe(true);
  });
});
