import { it } from 'vitest';
import { assessmentBank } from '../src/data/assessment';
import { simulate } from '../src/services/simulation';

// Prints the recovery-study metrics: npm run simulate
it('prints recovery metrics', () => {
  const r = simulate(assessmentBank, 1000, 2026);
  const pct = (v: number) => `${Math.round(v * 100)}%`;
  console.log(
    [
      `candidates: ${r.candidates}, bank: ${assessmentBank.length} items, mean test length: ${r.meanItems.toFixed(1)}`,
      `correlation  L ${r.correlation.L.toFixed(3)}  R ${r.correlation.R.toFixed(3)}`,
      `RMSE (logit) L ${r.rmse.L.toFixed(3)}  R ${r.rmse.R.toFixed(3)}`,
      `bias         L ${r.bias.L.toFixed(3)}  R ${r.bias.R.toFixed(3)}`,
      `90% CI coverage L ${pct(r.coverage90.L)}  R ${pct(r.coverage90.R)}`,
      `CEFR exact ${pct(r.cefrExact)}, within one level ${pct(r.cefrAdjacent)}`,
    ].join('\n'),
  );
});
