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

/** Toki Quest B2 learning path (Cambridge English B2 First), ordered from B1 to C1. */
export const b2FirstUnits: Unit[] = [fceU01, fceU02, fceU03, fceU04, fceU05, fceU06, fceU07, fceU08, fceU09, fceU10, fceU11, fceU12].filter(
  (u): u is Unit => u !== null,
);
