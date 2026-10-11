import { useMemo } from 'react';
import { documentTasks } from '../data/speaking/documents';
import { opinionTopics } from '../data/speaking/opinions';
import { photoTasks } from '../data/speaking/photos';
import { questionSets } from '../data/speaking/questions';
import { readAloudTasks } from '../data/speaking/readAloud';
import { units } from '../data/units';
import { canOpenMock, canOpenSimulation, canOpenSpeaking, canOpenUnit, isFull, makeTrial, type AccessInput, type SpeakingCatalog, type Trial } from '../services/access';
import { planInForce } from '../services/planCache';
import type { Placement } from '../types';
import { useApp } from './AppState';

export const speakingCatalog: SpeakingCatalog = {
  readAloud: readAloudTasks,
  photos: photoTasks,
  questions: questionSets,
  documents: documentTasks,
  opinions: opinionTopics,
};

/** Trial content for a placement result (A1 without a test). */
export const trialFor = (placement: Pick<Placement, 'level'> | null): Trial => makeTrial(units, placement, speakingCatalog);

/** What the learner can open now. Until the first placement test is saved, the trial follows the current placement. */
export function useAccess() {
  const { data } = useApp();
  return useMemo(() => {
    const plan = planInForce(data.plan, data.planCheckedAt, !!data.account, new Date());
    const input: AccessInput = {
      plan,
      trial: data.trial ?? trialFor(data.placement),
      started: Object.keys(data.units),
    };
    return {
      full: isFull(plan),
      plan,
      trial: input.trial,
      unit: (id: string) => canOpenUnit(input, id),
      mock: (id: string) => canOpenMock(input, id),
      speaking: (id: string) => canOpenSpeaking(input, id),
      simulation: () => canOpenSimulation(input),
    };
  }, [data.plan, data.planCheckedAt, data.account, data.trial, data.placement, data.units]);
}
