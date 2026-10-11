import { describe, expect, it } from 'vitest';
import { simulations } from '../data/speaking/simulations';
import type { SpeechAttempt } from '../types';
import { lastRunId, simulationReport } from './simulationReport';

const sim = simulations[0];
const base = { date: '2026-10-07', durationSec: 30, transcript: 'x', wordsPerMinute: 100 };

describe('simulationReport', () => {
  it('keeps only the attempts of the run and groups them by step', () => {
    const attempts: SpeechAttempt[] = [
      { ...base, kind: 'read', taskId: sim.readAloud[0].id, accuracy: 0.9, missed: [], runId: 'r1' },
      // Same text, another run: ignored.
      { ...base, kind: 'read', taskId: sim.readAloud[1].id, accuracy: 0.5, missed: [], runId: 'r0' },
      { ...base, kind: 'respond', taskId: sim.questions.questions[0].id, words: 20, keywordsFound: 2, keywordsTotal: 2, runId: 'r1' },
      { ...base, kind: 'respond', taskId: sim.questions.questions[2].id, words: 40, keywordsFound: 1, keywordsTotal: 3, runId: 'r1' },
      { ...base, kind: 'respond', taskId: sim.opinion.id, words: 90, keywordsFound: 2, keywordsTotal: 3, connectorsFound: 5, runId: 'r1' },
    ];
    const report = simulationReport(sim, attempts, 'r1');
    expect(report.map((r) => r.step.tasks)).toEqual(['1', '2', '3', '4', '5–7', '8–10', '11']);
    expect(report[0].kind === 'read' && report[0].attempt?.accuracy).toBe(0.9);
    expect(report[1].kind === 'read' && report[1].attempt).toBeNull();
    const questions = report[4];
    expect(questions.kind === 'respond' && [questions.answered, questions.total, questions.ideasFound]).toEqual([2, 3, 3]);
    const ideasTotal = sim.questions.questions.reduce((n, q) => n + q.keywords.length, 0);
    expect(questions.kind === 'respond' && questions.ideasTotal).toBe(ideasTotal);
    const document = report[5];
    expect(document.kind === 'respond' && document.answered).toBe(0);
    expect(report[6].kind === 'opinion' && report[6].attempt?.connectorsFound).toBe(5);
    expect(report[2].kind === 'photo' && report[2].attempt).toBeNull();
  });
});

describe('lastRunId', () => {
  it('finds the most recent run of this simulation only', () => {
    const at = (taskId: string, runId?: string): SpeechAttempt => ({ ...base, kind: 'respond', taskId, words: 5, keywordsFound: 0, keywordsTotal: 2, runId });
    const older = (1000).toString(36);
    const newer = (99999).toString(36);
    const attempts = [at(sim.opinion.id, older), at(sim.document.questions[1].id, newer), at(simulations[1].opinion.id, (999999).toString(36)), at(sim.opinion.id)];
    expect(lastRunId(sim, attempts)).toBe(newer);
    expect(lastRunId(simulations[2], attempts)).toBeNull();
  });
});
