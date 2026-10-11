import type { ExamPart, ItemResponse, LevelEstimate, McqItem, MockResult, MockTest, SkillScore } from '../types';
import { levelEstimate, paramsOf, sectionOf } from './placement';

export const mockItems = (mock: MockTest): McqItem[] => mock.sections.flatMap((s) => s.items);

export function remainingSeconds(durationMin: number, elapsedSec: number): number {
  return Math.max(0, durationMin * 60 - elapsedSec);
}

export function formatClock(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

/** Unanswered items count as incorrect, as on the real test. */
export function mockResponses(mock: MockTest, answers: Record<string, number>): ItemResponse[] {
  return mockItems(mock).map((item) => ({
    itemId: item.id,
    section: sectionOf(item.skill),
    skill: item.skill,
    level: item.level,
    params: paramsOf(item),
    correct: answers[item.id] === item.answer,
    source: 'mock' as const,
  }));
}

export interface MockReport {
  result: MockResult;
  estimate: LevelEstimate;
}

export function scoreMock(mock: MockTest, answers: Record<string, number>, timeUsedSec: number, now = new Date()): MockReport {
  const responses = mockResponses(mock, answers);
  const estimate = levelEstimate(responses);
  const byPart: Partial<Record<ExamPart, SkillScore>> = {};
  for (const section of mock.sections) {
    const score = byPart[section.part] ?? { correct: 0, total: 0 };
    section.items.forEach((item) => {
      score.total += 1;
      if (answers[item.id] === item.answer) score.correct += 1;
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
