import type { SpeakingSimulation } from '../../../types';
import { simulation1 } from './s1';
import { simulation2 } from './s2';
import { simulation3 } from './s3';
import { simulation4 } from './s4';

/** Four timed simulations of the TOEIC Speaking test (its 11 tasks), with content of their own. */
export const simulations: SpeakingSimulation[] = [simulation1, simulation2, simulation3, simulation4];

export const simulationById = Object.fromEntries(simulations.map((s) => [s.id, s])) as Record<string, SpeakingSimulation>;

export const simulationReadAloud = simulations.flatMap((s) => s.readAloud);
export const simulationPhotos = simulations.flatMap((s) => s.photos);
export const simulationQuestionSets = simulations.map((s) => s.questions);
export const simulationDocuments = simulations.map((s) => s.document);
export const simulationOpinions = simulations.map((s) => s.opinion);

/** Official numbering of the tasks: 1-2 (read aloud), 3-4 (photos), 5-7, 8-10 and 11. */
export type SimulationStep =
  | { kind: 'read'; id: string; tasks: string }
  | { kind: 'photo'; id: string; tasks: string }
  | { kind: 'respond'; id: string; tasks: string }
  | { kind: 'opinion'; id: string; tasks: string };

export function simulationSteps(sim: SpeakingSimulation): SimulationStep[] {
  return [
    { kind: 'read', id: sim.readAloud[0].id, tasks: '1' },
    { kind: 'read', id: sim.readAloud[1].id, tasks: '2' },
    { kind: 'photo', id: sim.photos[0].id, tasks: '3' },
    { kind: 'photo', id: sim.photos[1].id, tasks: '4' },
    { kind: 'respond', id: sim.questions.id, tasks: '5–7' },
    { kind: 'respond', id: sim.document.id, tasks: '8–10' },
    { kind: 'opinion', id: sim.opinion.id, tasks: '11' },
  ];
}
