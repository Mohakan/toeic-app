import { fullTest } from './build';
import { full1Listening } from './full-1-listening';
import { full1Reading } from './full-1-reading';

export const full1 = fullTest(1, [...full1Listening, ...full1Reading]);
