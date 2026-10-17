import type { Unit } from '../../../types';
import { fceU01 } from './units/u01';
import { fceU02 } from './units/u02';
import { fceU03 } from './units/u03';
import { fceU04 } from './units/u04';
import { fceU05 } from './units/u05';
import { fceU06 } from './units/u06';
import { fceU07 } from './units/u07';
import { fceU08 } from './units/u08';
import { fceU09 } from './units/u09';
import { fceU10 } from './units/u10';
import { fceU11 } from './units/u11';
import { fceU12 } from './units/u12';
import { fceU13 } from './units/u13';
import { fceU14 } from './units/u14';
import { fceU15 } from './units/u15';
import { fceU16 } from './units/u16';
import { fceU17 } from './units/u17';
import { fceU18 } from './units/u18';
import { fceU19 } from './units/u19';
import { fceU20 } from './units/u20';
import { fceU21 } from './units/u21';
import { fceU22 } from './units/u22';
import { fceU23 } from './units/u23';
import { fceU24 } from './units/u24';
import { fceU25 } from './units/u25';
import { fceU26 } from './units/u26';
import { fceU27 } from './units/u27';
import { fceU28 } from './units/u28';
import { fceU29 } from './units/u29';
import { fceU30 } from './units/u30';
import { fceU31 } from './units/u31';
import { fceU32 } from './units/u32';
import { fceU33 } from './units/u33';
import { fceU34 } from './units/u34';
import { fceU35 } from './units/u35';
import { fceU36 } from './units/u36';

/**
 * Toki Quest B2 learning path (Cambridge English B2 First), ordered from B1 to C1: the path opens a
 * CEFR band at a time (src/services/path.ts), so units are sorted by level, keeping their order
 * within a level. Units being written are null.
 */
export const b2FirstUnits: Unit[] = [
  fceU01, fceU02, fceU03, fceU04, fceU05, fceU06, fceU07, fceU08, fceU09, fceU10, fceU11, fceU12, fceU13, fceU14, fceU15, fceU16, fceU17, fceU18, fceU19, fceU20, fceU21, fceU22, fceU23, fceU24, fceU25, fceU26, fceU27, fceU28, fceU29, fceU30, fceU31, fceU32, fceU33, fceU34, fceU35, fceU36,
]
  .filter((u): u is Unit => u !== null)
  .map((u, index) => ({ u, index }))
  .sort((a, b) => a.u.level - b.u.level || a.index - b.index)
  .map(({ u }) => u);
