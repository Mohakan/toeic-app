import type { ReadAloudTask } from '../../../types';
import { readAloudA1 } from './a1';
import { readAloudA2 } from './a2';
import { readAloudB1 } from './b1';
import { readAloudB2 } from './b2';
import { readAloudC1 } from './c1';
import { simulationReadAloud } from '../simulations';

/**
 * Read-aloud texts (TOEIC Speaking, tasks 1-2), 12 per CEFR band. Numbers and times are written as
 * words and abbreviations such as "a.m." are avoided: recognizers write them in several ways, which
 * would make the word-by-word comparison unfair. Invented brand names are kept simple for the same reason.
 */
export const readAloudTasks: ReadAloudTask[] = [...readAloudA1, ...readAloudA2, ...readAloudB1, ...readAloudB2, ...readAloudC1];

/** Practice texts and simulation texts, which are not listed for practice. */
export const readAloudById = Object.fromEntries([...readAloudTasks, ...simulationReadAloud].map((t) => [t.id, t])) as Record<string, ReadAloudTask>;
