import type { Cefr, McqItem, Section } from '../types';
import { PRIOR_MEAN, PRIOR_SD, probability } from './irt';
import { applyAnswer, initialState, isComplete, paramsOf, sectionOf, selectNext, summarize } from './placement';
import { cefrFor, CEFR_ORDER, scaledScore } from './scoring';

/** Small seeded generator (mulberry32) so simulation results are reproducible. */
export function seededRandom(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function normal(random: () => number): number {
  const u = Math.max(random(), 1e-12);
  const v = random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

export interface SimulationReport {
  candidates: number;
  meanItems: number;
  /** Pearson correlation between true and estimated ability, per section. */
  correlation: Record<Section, number>;
  rmse: Record<Section, number>;
  bias: Record<Section, number>;
  /** Share of candidates whose true ability falls inside the reported 90% interval. */
  coverage90: Record<Section, number>;
  /** Share of candidates placed at their true CEFR level (exact) and within one level. */
  cefrExact: number;
  cefrAdjacent: number;
}

const pearson = (x: number[], y: number[]) => {
  const n = x.length;
  const mx = x.reduce((s, v) => s + v, 0) / n;
  const my = y.reduce((s, v) => s + v, 0) / n;
  let sxy = 0;
  let sxx = 0;
  let syy = 0;
  for (let i = 0; i < n; i += 1) {
    sxy += (x[i] - mx) * (y[i] - my);
    sxx += (x[i] - mx) ** 2;
    syy += (y[i] - my) ** 2;
  }
  return sxy / Math.sqrt(sxx * syy);
};

/**
 * Monte-Carlo recovery study, the standard way to check a CAT design: simulated candidates with a
 * known true ability take the test, answering according to the IRT model, and the estimates are
 * compared with the truth. It validates the algorithm under the model; it does not replace a
 * calibration study with real candidates.
 */
export function simulate(bank: McqItem[], candidates = 300, seed = 2026): SimulationReport {
  const random = seededRandom(seed);
  const truth: Record<Section, number[]> = { L: [], R: [] };
  const est: Record<Section, number[]> = { L: [], R: [] };
  const covered: Record<Section, number> = { L: 0, R: 0 };
  let items = 0;
  let exact = 0;
  let adjacent = 0;

  for (let c = 0; c < candidates; c += 1) {
    const general = normal(random);
    // Candidates are drawn from the app's audience (the ability prior), not from a population centered
    // on the B1/B2 boundary: that earlier choice hid the upward bias for average learners.
    // Listening and reading abilities are strongly but not perfectly correlated.
    const z = (): number => 0.85 * general + Math.sqrt(1 - 0.85 ** 2) * normal(random);
    const trueTheta: Record<Section, number> = { L: PRIOR_MEAN + PRIOR_SD * z(), R: PRIOR_MEAN + PRIOR_SD * z() };
    let state = initialState();
    while (!isComplete(state, bank)) {
      const item = selectNext(state, bank, random);
      if (!item) break;
      const p = probability(trueTheta[sectionOf(item.skill)], paramsOf(item));
      state = applyAnswer(state, item, { correct: random() < p });
    }
    const result = summarize(state);
    items += result.answered;
    for (const s of ['L', 'R'] as Section[]) {
      const r = result.sections[s];
      truth[s].push(trueTheta[s]);
      est[s].push(r.theta);
      if (Math.abs(trueTheta[s] - r.theta) <= 1.645 * r.se) covered[s] += 1;
    }
    const trueCefr: Cefr = cefrFor('total', scaledScore('L', trueTheta.L) + scaledScore('R', trueTheta.R));
    const gap = Math.abs(CEFR_ORDER.indexOf(trueCefr) - CEFR_ORDER.indexOf(result.cefr));
    if (gap === 0) exact += 1;
    if (gap <= 1) adjacent += 1;
  }

  const per = (fn: (s: Section) => number) => ({ L: fn('L'), R: fn('R') });
  return {
    candidates,
    meanItems: items / candidates,
    correlation: per((s) => pearson(truth[s], est[s])),
    rmse: per((s) => Math.sqrt(truth[s].reduce((sum, t, i) => sum + (t - est[s][i]) ** 2, 0) / candidates)),
    bias: per((s) => est[s].reduce((sum, e, i) => sum + (e - truth[s][i]), 0) / candidates),
    coverage90: per((s) => covered[s] / candidates),
    cefrExact: exact / candidates,
    cefrAdjacent: adjacent / candidates,
  };
}
