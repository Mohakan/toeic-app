import type { Unit } from '../../../types';
import { a2Announcements } from './a2-announcements';
import { a2Comparatives } from './a2-comparatives';
import { a2Emails } from './a2-emails';
import { a2Modals } from './a2-modals';
import { a2OfficeLife } from './a2-office-life';
import { a2Phone } from './a2-phone';
import { a2Plans } from './a2-plans';
import { a2Prepositions } from './a2-prepositions';
import { a2Quantifiers } from './a2-quantifiers';
import { a2Schedules } from './a2-schedules';
import { a2Tenses } from './a2-tenses';
import { a2Travel } from './a2-travel';

/** Grammar first, then vocabulary and the listening and reading situations that use it. */
export const a2Units: Unit[] = [
  a2Tenses,
  a2Modals,
  a2Quantifiers,
  a2Prepositions,
  a2Comparatives,
  a2Plans,
  a2OfficeLife,
  a2Travel,
  a2Phone,
  a2Schedules,
  a2Announcements,
  a2Emails,
];
