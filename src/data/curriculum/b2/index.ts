import type { Unit } from '../../../types';
import { b2PerfectPassive } from './b2-perfect-passive';
import { b2Connectors } from './b2-connectors';
import { b2Conditionals } from './b2-conditionals';
import { b2ReportedSpeech } from './b2-reported-speech';
import { b2PastModals } from './b2-past-modals';
import { b2Part2Traps } from './b2-part2-traps';
import { b2SpeakerIntent } from './b2-speaker-intent';
import { b2MultiPassages } from './b2-multi-passages';
import { b2NewsArticles } from './b2-news-articles';
import { b2FinanceMarketing } from './b2-finance-marketing';
import { b2ContractsLogistics } from './b2-contracts-logistics';
import { b2Part6 } from './b2-part6';

export const b2Units: Unit[] = [
  b2PerfectPassive,
  b2Connectors,
  b2Conditionals,
  b2ReportedSpeech,
  b2PastModals,
  b2Part2Traps,
  b2SpeakerIntent,
  b2MultiPassages,
  b2NewsArticles,
  b2FinanceMarketing,
  b2ContractsLogistics,
  b2Part6,
];
