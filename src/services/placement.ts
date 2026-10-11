import type {
  ItemParams,
  ItemResponse,
  LevelEstimate,
  McqItem,
  Placement,
  Section,
  SectionResult,
  Skill,
  SkillScore,
} from '../types';
import { estimate, information, PRIOR_SD, type Estimate } from './irt';
import { cefrFor, levelToB, scaledScore, thetaToLevel, Z90 } from './scoring';

/**
 * Computerized adaptive test (CAT) settings. The test stops once both sections are measured
 * with a standard error at or below TARGET_SE (reliability around 0.84), or at MAX_ITEMS.
 * The first version (10-24 items, SE 0.45) was too short: simulations showed it stopped at the
 * maximum almost every time, with a spread of about ±70 points on the total.
 */
export const CAT = {
  MIN_ITEMS: 16,
  MAX_ITEMS: 30,
  MIN_PER_SECTION: 6,
  TARGET_SE: 0.4,
  /** Pick randomly among the top-k most informative items to limit item exposure. */
  RANDOMESQUE_K: 2,
} as const;

/** Reading blueprint, close to the share of TOEIC Parts 5-7 devoted to each skill. */
const READING_BLUEPRINT: Partial<Record<Skill, number>> = { grammar: 0.4, vocab: 0.25, reading: 0.35 };

const SKILLS: Skill[] = ['grammar', 'vocab', 'reading', 'listening'];
const SECTIONS: Section[] = ['L', 'R'];

export const sectionOf = (skill: Skill): Section => (skill === 'listening' ? 'L' : 'R');

/**
 * Provisional parameters set by item writers from the target level. They must be replaced by
 * values calibrated on pilot data before scores are used for high-stakes decisions.
 */
export function paramsOf(item: Pick<McqItem, 'level' | 'irt'>): ItemParams {
  // Four options: a random guess is right one time in four.
  return { a: 1.0, b: levelToB(item.level), c: 0.25, ...item.irt };
}

export interface CatState {
  responses: ItemResponse[];
}

export const initialState = (): CatState => ({ responses: [] });

export function sectionEstimate(responses: ItemResponse[], section: Section): Estimate {
  return estimate(responses.filter((r) => r.section === section).map((r) => ({ params: r.params, correct: r.correct })));
}

export function applyAnswer(
  state: CatState,
  item: McqItem,
  answer: { correct: boolean; dontKnow?: boolean },
  source: ItemResponse['source'] = 'placement',
): CatState {
  const section = sectionOf(item.skill);
  // "I don't know" is scored as incorrect: under the 3PL model its likelihood has the same shape
  // as a wrong answer, but it removes the chance of a lucky guess inflating the estimate.
  const response: ItemResponse = {
    itemId: item.id,
    section,
    skill: item.skill,
    level: item.level,
    params: paramsOf(item),
    correct: answer.correct && !answer.dontKnow,
    dontKnow: answer.dontKnow || undefined,
    source,
  };
  const responses = [...state.responses, response];
  const est = sectionEstimate(responses, section);
  response.thetaAfter = est.theta;
  response.seAfter = est.se;
  return { responses };
}

const countBy = <K extends string>(responses: ItemResponse[], key: (r: ItemResponse) => K) =>
  responses.reduce<Partial<Record<K, number>>>((acc, r) => {
    const k = key(r);
    acc[k] = (acc[k] ?? 0) + 1;
    return acc;
  }, {});

/** Section to measure next: the one whose ability is currently the least precise. */
function nextSection(state: CatState, available: McqItem[]): Section | null {
  const open = SECTIONS.filter((s) => available.some((i) => sectionOf(i.skill) === s));
  if (open.length === 0) return null;
  const counts = countBy(state.responses, (r) => r.section);
  const under = open.filter((s) => (counts[s] ?? 0) < CAT.MIN_PER_SECTION);
  const pool = under.length > 0 ? under : open;
  return [...pool].sort((a, b) => {
    const seDiff = sectionEstimate(state.responses, b).se - sectionEstimate(state.responses, a).se;
    return Math.abs(seDiff) > 1e-6 ? seDiff : (counts[a] ?? 0) - (counts[b] ?? 0);
  })[0];
}

/** Content balancing (Kingsbury & Zara, 1989): the reading sub-skill furthest below its quota. */
function nextReadingSkill(state: CatState, candidates: McqItem[]): Skill | null {
  const reading = state.responses.filter((r) => r.section === 'R');
  const counts = countBy(reading, (r) => r.skill);
  const n = reading.length + 1;
  const open = (Object.keys(READING_BLUEPRINT) as Skill[]).filter((s) => candidates.some((i) => i.skill === s));
  if (open.length === 0) return null;
  return open.sort((a, b) => (READING_BLUEPRINT[b]! * n - (counts[b] ?? 0)) - (READING_BLUEPRINT[a]! * n - (counts[a] ?? 0)))[0];
}

/**
 * Maximum Fisher information selection at the current ability estimate. The first item of each
 * section is chosen slightly below the estimate as a gentle warm-up.
 */
export function selectNext(state: CatState, bank: McqItem[], random: () => number = () => 0): McqItem | null {
  const used = new Set(state.responses.map((r) => r.itemId));
  const available = bank.filter((i) => !used.has(i.id));
  const section = nextSection(state, available);
  if (!section) return null;

  let candidates = available.filter((i) => sectionOf(i.skill) === section);
  if (section === 'R') {
    const skill = nextReadingSkill(state, candidates);
    if (skill) candidates = candidates.filter((i) => i.skill === skill);
  }

  const answeredInSection = state.responses.filter((r) => r.section === section).length;
  const { theta } = sectionEstimate(state.responses, section);
  const target = answeredInSection === 0 ? theta - 0.6 : theta;
  const ranked = [...candidates].sort(
    (x, y) => information(target, paramsOf(y)) - information(target, paramsOf(x)) || x.id.localeCompare(y.id),
  );
  const k = Math.min(CAT.RANDOMESQUE_K, ranked.length);
  return ranked[Math.min(k - 1, Math.floor(random() * k))];
}

/** Sections the bank can measure (listening is left out when no English voice is available). */
export const sectionsIn = (bank: McqItem[]): Section[] => SECTIONS.filter((s) => bank.some((i) => sectionOf(i.skill) === s));

export function isComplete(state: CatState, bank: McqItem[]): boolean {
  const n = state.responses.length;
  if (n >= CAT.MAX_ITEMS) return true;
  if (selectNext(state, bank) === null) return true;
  if (n < CAT.MIN_ITEMS) return false;
  return sectionsIn(bank).every((s) => {
    const count = state.responses.filter((r) => r.section === s).length;
    return count >= CAT.MIN_PER_SECTION && sectionEstimate(state.responses, s).se <= CAT.TARGET_SE;
  });
}

/** Progress of measurement precision, from the prior (SE = PRIOR_SD) to the target SE, 0..1. */
export function precision(state: CatState, bank: McqItem[]): number {
  const perSection = sectionsIn(bank).map((s) => {
    const se = sectionEstimate(state.responses, s).se;
    return Math.min(1, Math.max(0, (PRIOR_SD - se) / (PRIOR_SD - CAT.TARGET_SE)));
  });
  const byPrecision = Math.min(...perSection);
  const byLength = state.responses.length / CAT.MAX_ITEMS;
  return Math.min(1, Math.max(byPrecision, byLength));
}

function sectionResult(responses: ItemResponse[], section: Section): SectionResult {
  const own = responses.filter((r) => r.section === section);
  const { theta, se } = sectionEstimate(responses, section);
  const score = scaledScore(section, theta);
  return {
    theta,
    se,
    score,
    low: scaledScore(section, theta - Z90 * se),
    high: scaledScore(section, theta + Z90 * se),
    cefr: cefrFor(section, score),
    answered: own.length,
    correct: own.filter((r) => r.correct).length,
  };
}

export function levelEstimate(responses: ItemResponse[]): LevelEstimate {
  const L = sectionResult(responses, 'L');
  const R = sectionResult(responses, 'R');
  const measured = [L, R].filter((r) => r.answered > 0);
  const score = L.score + R.score;
  // With a single measured section, its own CEFR level is the honest summary.
  const cefr = measured.length === 1 ? measured[0].cefr : cefrFor('total', score);
  const thetas = (measured.length > 0 ? measured : [L, R]).map((r) => r.theta);
  return {
    sections: { L, R },
    total: { score, low: L.low + R.low, high: L.high + R.high },
    cefr,
    level: thetaToLevel(thetas.reduce((a, b) => a + b, 0) / thetas.length),
  };
}

export function summarize(state: CatState, now = new Date()): Placement {
  const bySkill = Object.fromEntries(SKILLS.map((s) => [s, { correct: 0, total: 0 } as SkillScore])) as Record<Skill, SkillScore>;
  state.responses.forEach((r) => {
    bySkill[r.skill].total += 1;
    if (r.correct) bySkill[r.skill].correct += 1;
  });
  return {
    ...levelEstimate(state.responses),
    date: now.toISOString(),
    answered: state.responses.length,
    dontKnow: state.responses.filter((r) => r.dontKnow).length,
    bySkill,
    responses: state.responses,
  };
}

/**
 * Per-skill ability from the items of that skill only. In an adaptive test the share of correct
 * answers is close to 50% for everyone by design, so skills are compared on ability, not on raw
 * percentages. With few items per skill these estimates are indicative only.
 */
export function skillEstimate(responses: ItemResponse[], skill: Skill): Estimate & { answered: number } {
  const own = responses.filter((r) => r.skill === skill);
  return { ...estimate(own.map((r) => ({ params: r.params, correct: r.correct }))), answered: own.length };
}

/** Skills ordered from weakest to strongest ability; skills with fewer than two answers are ignored. */
export function weakestSkills(responses: ItemResponse[], count = 2): Skill[] {
  return SKILLS.map((s) => ({ s, est: skillEstimate(responses, s) }))
    .filter(({ est }) => est.answered >= 2)
    .sort((x, y) => x.est.theta - y.est.theta)
    .slice(0, count)
    .map(({ s }) => s);
}

export const ratio = (s: SkillScore) => (s.total === 0 ? 0 : s.correct / s.total);
