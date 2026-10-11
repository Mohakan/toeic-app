import { simulationSteps, type SimulationStep } from '../data/speaking/simulations';
import type { ReadAloudAttempt, ResponseAttempt, SpeakingSimulation, SpeechAttempt } from '../types';

/** What the report says about one step of a simulation run. Never a score out of 200. */
export type StepReport =
  | { step: SimulationStep; kind: 'read'; attempt: ReadAloudAttempt | null }
  | { step: SimulationStep; kind: 'respond'; answered: number; total: number; ideasFound: number; ideasTotal: number }
  | { step: SimulationStep; kind: 'photo'; attempt: ResponseAttempt | null }
  | { step: SimulationStep; kind: 'opinion'; attempt: ResponseAttempt | null };

/** Groups the attempts of one run (same runId) by step of the simulation. */
export function simulationReport(sim: SpeakingSimulation, attempts: SpeechAttempt[], runId: string): StepReport[] {
  const own = attempts.filter((a) => a.runId === runId);
  const questionsOf = (id: string) => (sim.questions.id === id ? sim.questions.questions : sim.document.questions);
  return simulationSteps(sim).map((step): StepReport => {
    if (step.kind === 'read') {
      const attempt = own.find((a): a is ReadAloudAttempt => a.kind !== 'respond' && a.taskId === step.id) ?? null;
      return { step, kind: 'read', attempt };
    }
    if (step.kind === 'photo' || step.kind === 'opinion') {
      const attempt = own.find((a): a is ResponseAttempt => a.kind === 'respond' && a.taskId === step.id) ?? null;
      return step.kind === 'photo' ? { step, kind: 'photo', attempt } : { step, kind: 'opinion', attempt };
    }
    const questions = questionsOf(step.id);
    const answers = questions.flatMap((q) => own.filter((a): a is ResponseAttempt => a.kind === 'respond' && a.taskId === q.id).slice(0, 1));
    return {
      step,
      kind: 'respond',
      answered: answers.length,
      total: questions.length,
      ideasFound: answers.reduce((n, a) => n + a.keywordsFound, 0),
      // Unanswered questions count too: their expected ideas were not given.
      ideasTotal: questions.reduce((n, q) => n + q.keywords.length, 0),
    };
  });
}

/** The most recent run of a simulation, or null. Run ids are increasing timestamps in base 36. */
export function lastRunId(sim: SpeakingSimulation, attempts: SpeechAttempt[]): string | null {
  const ids = new Set(simulationSteps(sim).flatMap((s) => [s.id, ...(s.id === sim.questions.id ? sim.questions.questions : s.id === sim.document.id ? sim.document.questions : []).map((q) => q.id)]));
  const runs = attempts.flatMap((a) => (a.runId && ids.has(a.taskId) ? [a.runId] : []));
  return runs.length ? runs.reduce((a, b) => (parseInt(b, 36) > parseInt(a, 36) ? b : a)) : null;
}
