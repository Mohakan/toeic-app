import { describe, expect, it } from 'vitest';
import { units } from '../data/units';
import { unitStatuses } from './path';
import { applySetResult, migrateUnitResult, nextSetIndex, PASS_THRESHOLD } from './sets';

describe('learning path', () => {
  it('starts at the first unit and opens its whole band without a placement', () => {
    const s = unitStatuses(units, {}, null);
    expect(s[units[0].id]).toBe('current');
    for (const u of units.slice(1)) expect(s[u.id]).toBe(u.level === units[0].level ? 'available' : 'locked');
  });

  it('marks bands clearly below the placement as covered and starts just below the level', () => {
    const s = unitStatuses(units, {}, { level: 4 });
    for (const u of units) if (u.level <= 2) expect(s[u.id]).toBe('skipped');
    const current = units.find((u) => s[u.id] === 'current')!;
    expect(current.level).toBe(3);
    expect(units.filter((u) => u.level >= 4).every((u) => s[u.id] === 'locked')).toBe(true);
  });

  it('unlocks the next band once every unit of the current band is passed', () => {
    const band = units.filter((u) => u.level === 1);
    const results = Object.fromEntries(band.map((u) => [u.id, applySetResult(undefined, u.sets[0].id, 0.9, 3)]));
    const current = units.find((u) => unitStatuses(units, results, null)[u.id] === 'current')!;
    expect(current.level).toBe(2);
  });

  it('keeps a unit open when the set was below the pass threshold', () => {
    const u = units[0];
    const results = { [u.id]: applySetResult(undefined, u.sets[0].id, PASS_THRESHOLD - 0.1, 1) };
    expect(unitStatuses(units, results, null)[u.id]).toBe('current');
  });
});

describe('exercise sets', () => {
  const unit = { ...units[0], sets: [0, 1, 2].map((i) => ({ id: `u-s${i + 1}`, exercises: units[0].sets[0].exercises })) };

  it('serves unplayed sets first, then rotates', () => {
    expect(nextSetIndex(unit, undefined)).toBe(0);
    let r = applySetResult(undefined, 'u-s1', 0.5, 1);
    expect(nextSetIndex(unit, r)).toBe(1);
    r = applySetResult(r, 'u-s2', 0.8, 2);
    expect(nextSetIndex(unit, r)).toBe(2);
    r = applySetResult(r, 'u-s3', 0.9, 3);
    expect(r.setsDone).toEqual(['u-s1', 'u-s2', 'u-s3']);
    expect(nextSetIndex(unit, r)).toBe(r.attempts % 3);
  });

  it('keeps the best stars and accuracy and never un-passes a unit', () => {
    let r = applySetResult(undefined, 'u-s1', 0.9, 3);
    r = applySetResult(r, 'u-s2', 0.4, 1);
    expect(r.passed).toBe(true);
    expect(r.stars).toBe(3);
    expect(r.accuracy).toBe(0.9);
  });

  it('keeps results saved before sets existed as completed', () => {
    const r = migrateUnitResult({ stars: 2, accuracy: 0.6 });
    expect(r.passed).toBe(true);
    expect(r.setsDone).toEqual([]);
  });
});
