import { fullTest } from './build';
import { full2Listening } from './full-2-listening';
import { full2Reading } from './full-2-reading';

export const full2 = fullTest(2, [...full2Listening, ...full2Reading]);
