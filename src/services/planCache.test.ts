import { describe, expect, it } from 'vitest';
import { FREE_PLAN, type Plan } from './access';
import { mergeServerPlan, planAfterSignOut, planInForce } from './planCache';

const FULL: Plan = { tier: 'full', source: 'store_ios', since: '2026-10-01', validUntil: null };
const DEV: Plan = { tier: 'full', source: 'dev', since: '2026-10-01' };
const NOW = new Date('2026-10-08T12:00:00Z');

describe('planInForce', () => {
  it('applies a plan checked recently', () => {
    expect(planInForce(FULL, '2026-10-07T12:00:00Z', true, NOW)).toBe(FULL);
  });

  it('falls back to the trial after 30 days offline, signed out, or never checked', () => {
    const web: Plan = { tier: 'full', source: 'web_tn', since: '2026-10-01', validUntil: null };
    expect(planInForce(FULL, '2026-09-07T11:00:00Z', true, NOW)).toEqual(FREE_PLAN);
    expect(planInForce(web, '2026-10-07T12:00:00Z', false, NOW)).toEqual(FREE_PLAN);
    expect(planInForce(FULL, null, true, NOW)).toEqual(FREE_PLAN);
    expect(planInForce(FULL, 'garbage', true, NOW)).toEqual(FREE_PLAN);
  });

  it('ends a time-limited plan after its last day', () => {
    const sabil: Plan = { tier: 'full', source: 'sabil', since: '2026-09-01', validUntil: '2026-10-08' };
    expect(planInForce(sabil, '2026-10-01T00:00:00Z', true, NOW)).toBe(sabil);
    expect(planInForce(sabil, '2026-10-01T00:00:00Z', true, new Date('2026-10-09T08:00:00Z'))).toEqual(FREE_PLAN);
  });

  it('keeps a store purchase without an account, within the same 30 days', () => {
    expect(planInForce(FULL, '2026-10-07T12:00:00Z', false, NOW)).toBe(FULL);
    expect(planInForce(FULL, '2026-09-01T12:00:00Z', false, NOW)).toEqual(FREE_PLAN);
  });

  it('leaves the development plan alone', () => {
    expect(planInForce(DEV, null, false, NOW)).toBe(DEV);
  });
});

describe('server answers and signing out', () => {
  it('takes the server plan, but keeps a development plan the server does not know', () => {
    expect(mergeServerPlan(FREE_PLAN, FULL)).toBe(FULL);
    expect(mergeServerPlan(FULL, FREE_PLAN)).toBe(FREE_PLAN);
    expect(mergeServerPlan(DEV, FREE_PLAN)).toBe(DEV);
    expect(mergeServerPlan(DEV, FULL)).toBe(FULL);
  });

  it('returns to the trial when signing out, except for a store purchase made on the device', () => {
    expect(planAfterSignOut({ tier: 'full', source: 'sabil', since: '2026-10-01', validUntil: '2027-06-30' })).toEqual(FREE_PLAN);
    expect(planAfterSignOut(FULL)).toBe(FULL);
    expect(planAfterSignOut(DEV)).toBe(DEV);
  });
});
