import { describe, expect, it } from 'vitest';
import { cefrFor, combineScores, scaledScore, totalRange } from '../services/scoring';
import { B2_FIRST_CONFIG, EXAM_CONFIGS, TOEIC_CONFIG } from './config';
import { examConfig } from './current';

const configs = Object.values(EXAM_CONFIGS);

describe('exam configurations', () => {
  it('uses TOEIC when no exam is chosen', () => {
    expect(examConfig).toBe(TOEIC_CONFIG);
    expect(totalRange()).toEqual({ min: 10, max: 990 });
  });

  it('only plans mock tests on the exam’s own parts', () => {
    for (const config of configs) {
      const parts = new Set(config.parts.map((p) => p.id));
      for (const blueprint of [config.blueprints.full, config.blueprints.mini]) {
        for (const part of Object.keys(blueprint)) expect(parts.has(part as never), `${config.id}/${part}`).toBe(true);
      }
    }
  });

  it('keeps goals, mascot stages and cut scores inside the scale, in increasing order', () => {
    for (const config of configs) {
      const { min, max } = totalRange(config);
      expect(config.goals).toContain(config.defaultGoal);
      for (const list of [config.goals, config.tokiStages.map((s) => s.from)]) {
        expect([...list].sort((a, b) => a - b), config.id).toEqual(list);
        for (const v of list) expect(v >= min && v <= max, `${config.id}: ${v}`).toBe(true);
      }
      for (const cuts of Object.values(config.scoring.cefrCuts)) {
        const values = cuts.map(([, v]) => v);
        expect([...values].sort((a, b) => b - a), config.id).toEqual(values);
      }
    }
  });

  it('maps the CEFR boundaries of the item bank to the Cambridge English Scale cut scores', () => {
    const c = B2_FIRST_CONFIG;
    expect(totalRange(c)).toEqual({ min: 122, max: 190 });
    expect(scaledScore('R', -0.9, c)).toBe(140);
    expect(scaledScore('R', 0, c)).toBe(160);
    expect(scaledScore('L', 0.9, c)).toBe(180);
    expect(scaledScore('L', 5, c)).toBe(190);
    expect(scaledScore('L', -5, c)).toBe(122);
    // The overall score is the mean of the papers.
    expect(combineScores(160, 171, c)).toBe(166);
    expect(cefrFor('total', 159, c)).toBe('B1');
    expect(cefrFor('total', 160, c)).toBe('B2');
    expect(cefrFor('total', 180, c)).toBe('C1');
  });
});
