import type { OpinionTopic } from '../../../types';
import { opinionsA1 } from './a1';
import { opinionsA2 } from './a2';
import { opinionsB1 } from './b1';
import { opinionsB2 } from './b2';
import { opinionsC1 } from './c1';
import { simulationOpinions } from '../simulations';

/** TOEIC Speaking task 11: 40 opinion topics (8 per CEFR band). */
export const opinionTopics: OpinionTopic[] = [...opinionsA1, ...opinionsA2, ...opinionsB1, ...opinionsB2, ...opinionsC1];

/** Practice topics and simulation topics, which are not listed for practice. */
export const opinionTopicById = Object.fromEntries([...opinionTopics, ...simulationOpinions].map((o) => [o.id, o])) as Record<string, OpinionTopic>;
