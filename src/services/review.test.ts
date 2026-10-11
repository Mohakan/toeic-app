import { describe, expect, it } from 'vitest';
import { mockTests } from '../data/mock';
import { formatClock, mockItems, remainingSeconds, scoreMock } from './mock';
import { addDays, applyReview, dueEntries, REVIEW_INTERVALS, scheduleMisses } from './review';

const today = '2026-10-06';

describe('spaced review of missed exercises', () => {
  it('schedules a missed exercise for the next day', () => {
    const q = scheduleMisses({}, 'a1-office', ['k1'], today);
    expect(q.k1).toMatchObject({ box: 0, due: '2026-10-07', unitId: 'a1-office' });
    expect(dueEntries(q, today)).toEqual([]);
    expect(dueEntries(q, '2026-10-07').map((e) => e.key)).toEqual(['k1']);
  });

  it('moves up the boxes on success and leaves the queue after the last one', () => {
    let q = scheduleMisses({}, 'u', ['k1'], today);
    let day = today;
    for (let box = 1; box < REVIEW_INTERVALS.length; box += 1) {
      day = q.k1.due;
      q = applyReview(q, 'k1', true, day);
      expect(q.k1.box).toBe(box);
      expect(q.k1.due).toBe(addDays(day, REVIEW_INTERVALS[box]));
    }
    q = applyReview(q, 'k1', true, q.k1.due);
    expect(q.k1).toBeUndefined();
  });

  it('goes back to box 0 on a new mistake', () => {
    let q = scheduleMisses({}, 'u', ['k1'], today);
    q = applyReview(q, 'k1', true, '2026-10-07');
    q = applyReview(q, 'k1', false, '2026-10-10');
    expect(q.k1).toMatchObject({ box: 0, due: '2026-10-11' });
  });

  it('lists due exercises oldest first', () => {
    let q = scheduleMisses({}, 'u', ['b'], '2026-10-01');
    q = scheduleMisses(q, 'u', ['a'], '2026-10-03');
    expect(dueEntries(q, today).map((e) => e.key)).toEqual(['b', 'a']);
  });
});

describe('mock tests', () => {
  const mock = mockTests[0];
  const items = mockItems(mock);

  it('counts down and formats the clock', () => {
    expect(remainingSeconds(15, 0)).toBe(900);
    expect(remainingSeconds(15, 1000)).toBe(0);
    expect(formatClock(605)).toBe('10:05');
  });

  it('scores a perfect test higher than an empty one, with unanswered items counted wrong', () => {
    const perfect = scoreMock(mock, Object.fromEntries(items.map((i) => [i.id, i.answer])), 600);
    const empty = scoreMock(mock, {}, 600);
    expect(perfect.result.correct).toBe(items.length);
    expect(empty.result.correct).toBe(0);
    expect(empty.result.answered).toBe(0);
    expect(perfect.estimate.total.score).toBeGreaterThan(empty.estimate.total.score);
  });

  it('reports results by part', () => {
    const { result } = scoreMock(mock, Object.fromEntries(items.map((i) => [i.id, i.answer])), 60);
    const total = Object.values(result.byPart).reduce((s, p) => s + p!.total, 0);
    expect(total).toBe(items.length);
    for (const section of mock.sections) expect(result.byPart[section.part]!.correct).toBe(result.byPart[section.part]!.total);
  });
});
