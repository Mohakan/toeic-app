import { it } from 'vitest';
import { assessmentBank } from '../src/data/assessment';
import { probability } from '../src/services/irt';
import { applyAnswer, initialState, isComplete, paramsOf, selectNext, summarize } from '../src/services/placement';
import { scaledScore } from '../src/services/scoring';

// npm run placement:sim — simulated learners of known ability take the adaptive placement test.
// `shift` makes the real items easier than their written level says (b_true = b - shift), to see
// what happens if item difficulty was over-estimated by the writers.

function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function run(trueTheta: number, shift: number, rand: () => number) {
  let state = initialState();
  for (;;) {
    const item = selectNext(state, assessmentBank, rand);
    if (!item) break;
    const p = paramsOf(item);
    const correct = rand() < probability(trueTheta, { ...p, b: p.b - shift });
    state = applyAnswer(state, item, { correct });
    if (isComplete(state, assessmentBank)) break;
  }
  return summarize(state);
}

it('prints the bias of the placement test', { timeout: 120000 }, () => {
  const rand = mulberry32(7);
  const rows: string[] = ['true theta | true total | shift | mean est. total | bias | SD | items'];
  for (const shift of [0, 0.5, 1]) {
    for (const theta of [-1.5, -0.9, -0.45, 0, 0.5]) {
      const runs = Array.from({ length: 300 }, () => run(theta, shift, rand));
      const est = runs.map((r) => r.total.score);
      const mean = est.reduce((a, b) => a + b, 0) / est.length;
      const sd = Math.sqrt(est.reduce((a, b) => a + (b - mean) ** 2, 0) / est.length);
      const truth = scaledScore('L', theta) + scaledScore('R', theta);
      const items = runs.reduce((a, r) => a + r.answered, 0) / runs.length;
      rows.push(`${theta.toFixed(2).padStart(5)} | ${String(truth).padStart(4)} | ${shift} | ${mean.toFixed(0).padStart(4)} | ${(mean - truth).toFixed(0).padStart(4)} | ${sd.toFixed(0).padStart(3)} | ${items.toFixed(1)}`);
    }
  }
  console.log(rows.join('\n'));
});
