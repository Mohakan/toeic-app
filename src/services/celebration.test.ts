import { describe, expect, it } from 'vitest';
import { celebrationFor } from './celebration';

describe('celebrationFor', () => {
  it('celebrates a unit validated for the first time', () => {
    expect(celebrationFor({ wasPassed: false, nowPassed: true, levelBefore: 'A2', levelAfter: 'A2' })).toBe('unitComplete');
  });

  it('does not celebrate a unit again, or a failed set', () => {
    expect(celebrationFor({ wasPassed: true, nowPassed: true, levelBefore: 'A2', levelAfter: 'A2' })).toBeNull();
    expect(celebrationFor({ wasPassed: false, nowPassed: false, levelBefore: null, levelAfter: null })).toBeNull();
  });

  it('celebrates a higher estimated level, and only that when both happen', () => {
    expect(celebrationFor({ wasPassed: true, nowPassed: true, levelBefore: 'A2', levelAfter: 'B1' })).toBe('levelUp');
    expect(celebrationFor({ wasPassed: false, nowPassed: true, levelBefore: 'B1', levelAfter: 'B2' })).toBe('levelUp');
  });

  it('never celebrates a lower level or a missing estimate', () => {
    expect(celebrationFor({ wasPassed: true, nowPassed: true, levelBefore: 'B1', levelAfter: 'A2' })).toBeNull();
    expect(celebrationFor({ wasPassed: true, nowPassed: true, levelBefore: null, levelAfter: 'B1' })).toBeNull();
  });
});
