import type { Unit } from '../../../types';
import { a1BeHave } from './a1-be-have';
import { a1Conversations } from './a1-conversations';
import { a1Messages } from './a1-messages';
import { a1Office } from './a1-office';
import { a1PresentSimple } from './a1-present-simple';
import { a1Pronouns } from './a1-pronouns';
import { a1Questions } from './a1-questions';
import { a1Requests } from './a1-requests';
import { a1Shopping } from './a1-shopping';
import { a1Signs } from './a1-signs';
import { a1ThereIs } from './a1-there-is';
import { a1Time } from './a1-time';

/** Ordered from the most basic structures to short exchanges. */
export const a1Units: Unit[] = [
  a1Office,
  a1BeHave,
  a1PresentSimple,
  a1ThereIs,
  a1Pronouns,
  a1Time,
  a1Questions,
  a1Requests,
  a1Shopping,
  a1Signs,
  a1Messages,
  a1Conversations,
];
