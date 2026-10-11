import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { simulationById, simulationSteps } from '../data/speaking/simulations';
import type { RootStackParamList, SimRun } from './types';

type Nav = NativeStackNavigationProp<RootStackParamList>;

/**
 * Opens step `step` of a simulation, or its report after the last step. `replace` keeps a single
 * screen of the run in the stack, so "back" always leaves the simulation.
 */
export function goToSimStep(navigation: Nav, simId: string, runId: string, step: number) {
  const sim = simulationById[simId];
  const steps = sim ? simulationSteps(sim) : [];
  const next = steps[step];
  const run: SimRun = { simId, runId, step };
  if (!next) navigation.replace('Simulation', { simId, runId });
  else if (next.kind === 'read') navigation.replace('ReadAloud', { taskId: next.id, sim: run });
  else if (next.kind === 'photo') navigation.replace('Photo', { photoId: next.id, sim: run });
  else if (next.kind === 'opinion') navigation.replace('Opinion', { topicId: next.id, sim: run });
  else navigation.replace('Respond', { setId: next.id, sim: run });
}

export const nextSimStep = (navigation: Nav, run: SimRun) => goToSimStep(navigation, run.simId, run.runId, run.step + 1);
