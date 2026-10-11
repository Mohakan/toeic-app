import { describe, expect, it } from 'vitest';
import { assessmentBank } from '../data/assessment';
import type { McqItem } from '../types';
import { estimate, information, PRIOR_SD, probability } from './irt';
import {
  applyAnswer,
  CAT,
  initialState,
  isComplete,
  paramsOf,
  sectionOf,
  selectNext,
  summarize,
  type CatState,
} from './placement';
import { cefrFor, scaledScore } from './scoring';
import { simulate } from './simulation';

function runTest(policy: (item: McqItem) => boolean | 'idk'): CatState {
  let state = initialState();
  while (!isComplete(state, assessmentBank)) {
    const item = selectNext(state, assessmentBank);
    if (!item) break;
    const answer = policy(item);
    state = applyAnswer(state, item, answer === 'idk' ? { correct: false, dontKnow: true } : { correct: answer });
  }
  return state;
}

describe('IRT model', () => {
  const params = { a: 1, b: 0, c: 0.2 };

  it('gives the guessing floor to very weak candidates and approaches 1 for strong ones', () => {
    expect(probability(-6, params)).toBeCloseTo(0.2, 2);
    expect(probability(6, params)).toBeGreaterThan(0.99);
    expect(probability(0, params)).toBeCloseTo(0.6, 5);
  });

  it('is most informative near the item difficulty', () => {
    expect(information(0.1, params)).toBeGreaterThan(information(-2, params));
    expect(information(0.1, params)).toBeGreaterThan(information(2, params));
  });

  it('shrinks the standard error as evidence accumulates', () => {
    const one = estimate([{ params, correct: true }]);
    const many = estimate(Array.from({ length: 10 }, (_, i) => ({ params: { ...params, b: -1 + i * 0.2 }, correct: i < 5 })));
    expect(one.se).toBeLessThan(PRIOR_SD);
    expect(many.se).toBeLessThan(one.se);
  });
});

describe('scaled scores and CEFR (ETS cut scores)', () => {
  it('maps ability to 5-495 per section, monotonically', () => {
    let prev = 0;
    for (let t = -4; t <= 4; t += 0.1) {
      const s = scaledScore('L', t);
      expect(s).toBeGreaterThanOrEqual(prev);
      expect(s).toBeGreaterThanOrEqual(5);
      expect(s).toBeLessThanOrEqual(495);
      prev = s;
    }
  });

  it('uses the published TOEIC cut scores', () => {
    expect(cefrFor('L', 275)).toBe('B1');
    expect(cefrFor('L', 270)).toBe('A2');
    expect(cefrFor('R', 385)).toBe('B2');
    expect(cefrFor('total', 785)).toBe('B2');
    expect(cefrFor('total', 945)).toBe('C1');
  });
});

describe('adaptive placement test', () => {
  it('places a candidate who answers everything correctly at C1', () => {
    const p = summarize(runTest(() => true));
    expect(p.cefr).toBe('C1');
    expect(p.total.score).toBeGreaterThan(900);
  });

  it('places a candidate who answers everything wrong at A1', () => {
    const p = summarize(runTest(() => false));
    expect(p.cefr).toBe('A1');
    expect(p.total.score).toBeLessThan(250);
  });

  it('measures listening and reading separately', () => {
    const p = summarize(runTest((item) => sectionOf(item.skill) === 'R'));
    expect(p.sections.R.score).toBeGreaterThan(p.sections.L.score + 150);
  });

  it('never repeats an item, respects length limits and covers both sections', () => {
    const state = runTest((item) => item.level <= 3);
    const ids = state.responses.map((r) => r.itemId);
    expect(new Set(ids).size).toBe(ids.length);
    expect(ids.length).toBeLessThanOrEqual(CAT.MAX_ITEMS);
    expect(ids.length).toBeGreaterThanOrEqual(CAT.MIN_ITEMS);
    expect(state.responses.filter((r) => r.section === 'L').length).toBeGreaterThanOrEqual(CAT.MIN_PER_SECTION);
    expect(state.responses.filter((r) => r.section === 'R').length).toBeGreaterThanOrEqual(CAT.MIN_PER_SECTION);
  });

  it('scores "I don\'t know" as incorrect', () => {
    const wrong = summarize(runTest(() => false));
    const idk = summarize(runTest(() => 'idk'));
    expect(idk.total.score).toBe(wrong.total.score);
    expect(idk.dontKnow).toBe(idk.answered);
  });

  it('does not reward always choosing the same option', () => {
    for (let position = 0; position < 4; position += 1) {
      const p = summarize(runTest((item) => item.answer === position));
      expect(p.total.score).toBeLessThan(785);
    }
  });

  it('reports a confidence interval that contains the score', () => {
    const p = summarize(runTest((item) => item.level <= 4));
    for (const s of [p.sections.L, p.sections.R]) {
      expect(s.low).toBeLessThanOrEqual(s.score);
      expect(s.high).toBeGreaterThanOrEqual(s.score);
    }
  });
});

describe('recovery simulation (validity of the CAT under the IRT model)', () => {
  const report = simulate(assessmentBank, 300, 7);

  it('recovers true ability with high correlation', () => {
    expect(report.correlation.L).toBeGreaterThan(0.85);
    expect(report.correlation.R).toBeGreaterThan(0.85);
  });

  it('keeps estimation error low and unbiased', () => {
    // Relative to the spread of the simulated population (PRIOR_SD), so the rule does not depend on its scale.
    expect(report.rmse.L / PRIOR_SD).toBeLessThan(0.5);
    expect(report.rmse.R / PRIOR_SD).toBeLessThan(0.5);
    expect(Math.abs(report.bias.L)).toBeLessThan(0.15);
    expect(Math.abs(report.bias.R)).toBeLessThan(0.15);
  });

  it('reports honest 90% intervals', () => {
    expect(report.coverage90.L).toBeGreaterThan(0.82);
    expect(report.coverage90.R).toBeGreaterThan(0.82);
  });

  it('places nearly everyone within one CEFR level of the truth', () => {
    expect(report.cefrAdjacent).toBeGreaterThan(0.95);
    expect(report.meanItems).toBeLessThanOrEqual(CAT.MAX_ITEMS);
  });
});
