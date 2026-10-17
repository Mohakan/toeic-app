import type { MockTest } from '../../../../types';
import { x } from '../../../curriculum/build';
import { b2Mock } from '../build';
import { fceFull1Listening } from './full-1-listening';
import { fceFull1Reading } from './full-1-reading';

/** Full mock test fce-full-1: Reading and Use of English (75 min) and Listening (about 40 min). */
export const fceFull1: MockTest = b2Mock(
  'fce-full-1',
  'full',
  115,
  x('B2 First blanc complet n° 1', 'اختبار B2 First تجريبي كامل رقم 1', 'Full practice test 1', 'B2 First de práctica completo n.º 1'),
  [...fceFull1Reading, ...fceFull1Listening],
);
