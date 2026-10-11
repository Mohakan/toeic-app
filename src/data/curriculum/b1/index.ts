import type { Unit } from '../../../types';
import { b1Announcements } from './b1-announcements';
import { b1Connectors } from './b1-connectors';
import { b1Conversations } from './b1-conversations';
import { b1CustomerService } from './b1-customer-service';
import { b1Future } from './b1-future';
import { b1GerundInfinitive } from './b1-gerund-infinitive';
import { b1Hr } from './b1-hr';
import { b1PresentPerfect } from './b1-present-perfect';
import { b1ReadingNotices } from './b1-reading-notices';
import { b1Relatives } from './b1-relatives';
import { b1TextCompletion } from './b1-text-completion';
import { b1WordForms } from './b1-word-forms';

/** Grammar first, then the listening and reading situations that use it. */
export const b1Units: Unit[] = [
  b1PresentPerfect,
  b1Future,
  b1GerundInfinitive,
  b1WordForms,
  b1Relatives,
  b1Connectors,
  b1Conversations,
  b1Announcements,
  b1TextCompletion,
  b1ReadingNotices,
  b1Hr,
  b1CustomerService,
];
