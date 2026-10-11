import type { MockTest } from '../../../types';
import { fceMini1 } from './mocks/mini-1';
import { fceMini2 } from './mocks/mini-2';

/** Toki Quest B2 mock tests. */
export const b2FirstMockTests: MockTest[] = [fceMini1, fceMini2].filter((m): m is MockTest => m !== null);
