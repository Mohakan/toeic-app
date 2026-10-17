import type { MockTest } from '../../../../types';
import { x } from '../../../curriculum/build';
import { b2Mock } from '../build';
import { fceFull2Listening } from './full-2-listening';
import { fceFull2Reading } from './full-2-reading';

/** Full mock test fce-full-2: Reading and Use of English (75 min) and Listening (about 40 min). */
export const fceFull2: MockTest = b2Mock(
  'fce-full-2',
  'full',
  115,
  x('B2 First blanc complet n° 2', 'اختبار B2 First تجريبي كامل رقم 2', 'Full practice test 2', 'B2 First de práctica completo n.º 2'),
  [...fceFull2Reading, ...fceFull2Listening],
);
