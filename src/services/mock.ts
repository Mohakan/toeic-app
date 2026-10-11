import { isTyped, type ExamPart, type ItemResponse, type LevelEstimate, type MockItem, type MockResult, type MockTest, type SkillScore } from '../types';
import { levelEstimate, paramsOf, sectionOf } from './placement';
import { isAcceptedAnswer } from './typedAnswer';

export const mockItems = (mock: MockTest): MockItem[] => mock.sections.flatMap((s) => s.items);

/** An answer is an option index for a multiple-choice item and the typed text otherwise. */
export type MockAnswer = number | string;

export function isCorrectAnswer(item: MockItem, answer: MockAnswer | undefined): boolean {
  if (answer === undefined) return false;
  return isTyped(item) ? isAcceptedAnswer(String(answer), item.answers) : answer === item.answer;
}

/** The answer as the learner sees it: the chosen option or the typed text. */
export const answerText = (item: MockItem, answer: MockAnswer): string => (isTyped(item) ? String(answer) : item.options[Number(answer)]);

/** The answer that scores: the key option's index or the first accepted typed answer. */
export const keyAnswer = (item: MockItem): MockAnswer => (isTyped(item) ? item.answers[0] : item.answer);

/** The expected answer: the key option or the first accepted typed answer. */
export const keyText = (item: MockItem): string => (isTyped(item) ? item.answers[0] : item.options[item.answer]);

export function remainingSeconds(durationMin: number, elapsedSec: number): number {
  return Math.max(0, durationMin * 60 - elapsedSec);
}

export function formatClock(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

/** Unanswered items count as incorrect, as on the real test. */
export function mockResponses(mock: MockTest, answers: Record<string, MockAnswer>): ItemResponse[] {
  return mockItems(mock).map((item) => ({
    itemId: item.id,
    section: sectionOf(item.skill),
    skill: item.skill,
    level: item.level,
    params: paramsOf(item),
    correct: isCorrectAnswer(item, answers[item.id]),
    source: 'mock' as const,
  }));
}

export interface MockReport {
  result: MockResult;
  estimate: LevelEstimate;
}

export function scoreMock(mock: MockTest, answers: Record<string, MockAnswer>, timeUsedSec: number, now = new Date()): MockReport {
  const responses = mockResponses(mock, answers);
  const estimate = levelEstimate(responses);
  const byPart: Partial<Record<ExamPart, SkillScore>> = {};
  for (const section of mock.sections) {
    const score = byPart[section.part] ?? { correct: 0, total: 0 };
    section.items.forEach((item) => {
      score.total += 1;
      if (isCorrectAnswer(item, answers[item.id])) score.correct += 1;
    });
    byPart[section.part] = score;
  }
  const items = mockItems(mock);
  const measured = (s: 'L' | 'R') => items.some((i) => sectionOf(i.skill) === s);
  return {
    estimate,
    result: {
      mockId: mock.id,
      date: now.toISOString(),
      answered: items.filter((i) => answers[i.id] !== undefined).length,
      correct: responses.filter((r) => r.correct).length,
      total: items.length,
      timeUsedSec,
      byPart,
      listening: measured('L') ? estimate.sections.L.score : null,
      reading: measured('R') ? estimate.sections.R.score : null,
    },
  };
}
