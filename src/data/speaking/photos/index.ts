import type { PhotoTask } from '../../../types';
import { simulationPhotos } from '../simulations';
import { photosA1 } from './a1';
import { photosA2 } from './a2';
import { photosB1 } from './b1';
import { photosB2 } from './b2';
import { photosC1 } from './c1';

/** TOEIC Speaking tasks 3-4: 22 photos to describe for practice (4 or 5 per CEFR band). */
export const photoTasks: PhotoTask[] = [...photosA1, ...photosA2, ...photosB1, ...photosB2, ...photosC1];

/** Practice photos and simulation photos, which are not listed for practice. */
export const photoTaskById = Object.fromEntries([...photoTasks, ...simulationPhotos].map((p) => [p.id, p])) as Record<string, PhotoTask>;
