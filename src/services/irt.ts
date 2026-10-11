/**
 * Item Response Theory primitives: three-parameter logistic model (Birnbaum, 1968),
 * Fisher information, and Expected A Posteriori estimation (Bock & Mislevy, 1982).
 */

/** Scaling constant that makes the logistic curve match the normal ogive. */
export const D = 1.702;

export interface IrtParams {
  /** Discrimination: how sharply the item separates weaker from stronger candidates. */
  a: number;
  /** Difficulty, on the ability scale (logits, population mean 0, SD 1). */
  b: number;
  /** Lower asymptote: probability of a correct answer by guessing. */
  c: number;
}

export interface Observation {
  params: IrtParams;
  correct: boolean;
}

export interface Estimate {
  theta: number;
  se: number;
}

/** Quadrature grid from -4 to +4 in steps of 0.1. */
export const GRID: number[] = Array.from({ length: 81 }, (_, i) => -4 + i * 0.1);

/**
 * Ability prior: the expected level of the app's learners before any answer. θ = 0 is the B1/B2
 * boundary of the item bank (785 on the TOEIC scale), far above the typical starting level of the
 * target audience (students and young professionals preparing a first TOEIC). Centering the prior
 * there pulled weak and average learners upwards. It is centered on the low B1 band instead (θ ≈ -0.9,
 * about 550), with a wide spread so that strong learners are still reached.
 */
export const PRIOR_MEAN = -0.9;
export const PRIOR_SD = 1.2;

const PRIOR: number[] = GRID.map((t) => Math.exp(-((t - PRIOR_MEAN) ** 2) / (2 * PRIOR_SD ** 2)));

export function probability(theta: number, { a, b, c }: IrtParams): number {
  return c + (1 - c) / (1 + Math.exp(-D * a * (theta - b)));
}

export function information(theta: number, params: IrtParams): number {
  const p = probability(theta, params);
  const ratio = (p - params.c) / (1 - params.c);
  return (D * params.a) ** 2 * ((1 - p) / p) * ratio * ratio;
}

export function posterior(observations: Observation[]): number[] {
  const weights = PRIOR.map((prior, i) => {
    let w = prior;
    for (const o of observations) {
      const p = probability(GRID[i], o.params);
      w *= o.correct ? p : 1 - p;
    }
    return w;
  });
  const total = weights.reduce((s, w) => s + w, 0);
  return weights.map((w) => w / total);
}

/** EAP estimate with the posterior standard deviation as its standard error. */
export function estimate(observations: Observation[]): Estimate {
  const post = posterior(observations);
  const theta = post.reduce((s, w, i) => s + w * GRID[i], 0);
  const variance = post.reduce((s, w, i) => s + w * (GRID[i] - theta) ** 2, 0);
  return { theta, se: Math.sqrt(variance) };
}

/** Marginal reliability implied by a standard error, for a population spread of PRIOR_SD. */
export const reliabilityFromSe = (se: number) => Math.max(0, 1 - (se * se) / (PRIOR_SD * PRIOR_SD));
