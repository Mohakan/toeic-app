import type { ReviewEntry } from '../types';

/** Days before the next review for Leitner boxes 0-4. */
export const REVIEW_INTERVALS = [1, 3, 7, 14, 30];

/** Exercises served in one review session, so a session stays short. */
export const REVIEW_SESSION_SIZE = 10;

export type ReviewQueue = Record<string, ReviewEntry>;

export function addDays(day: string, n: number): string {
  const [y, m, d] = day.split('-').map(Number);
  const date = new Date(y, m - 1, d + n);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

/** Exercises missed on first try enter box 0 and come back the next day. */
export function scheduleMisses(queue: ReviewQueue, unitId: string, keys: string[], today: string): ReviewQueue {
  const next = { ...queue };
  for (const key of keys) next[key] = { key, unitId, box: 0, due: addDays(today, REVIEW_INTERVALS[0]) };
  return next;
}

/**
 * A correct review moves the exercise up one box; after the last box it leaves the queue.
 * A wrong review sends it back to box 0.
 */
export function applyReview(queue: ReviewQueue, key: string, correct: boolean, today: string): ReviewQueue {
  const entry = queue[key];
  if (!entry) return queue;
  const next = { ...queue };
  if (correct && entry.box >= REVIEW_INTERVALS.length - 1) {
    delete next[key];
    return next;
  }
  const box = correct ? entry.box + 1 : 0;
  next[key] = { ...entry, box, due: addDays(today, REVIEW_INTERVALS[box]) };
  return next;
}

export function dueEntries(queue: ReviewQueue, today: string): ReviewEntry[] {
  return Object.values(queue)
    .filter((e) => e.due <= today)
    .sort((a, b) => a.due.localeCompare(b.due) || a.box - b.box || a.key.localeCompare(b.key));
}
