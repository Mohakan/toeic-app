import { describe, expect, it } from 'vitest';
import { choosePlan, FREE_PLAN } from '../src/plan.js';

describe('choosePlan', () => {
  it('is free without any right', () => {
    expect(choosePlan([], [])).toEqual(FREE_PLAN);
  });

  it('prefers a permanent purchase over a partner enrolment', () => {
    const plan = choosePlan([{ source: 'store_ios', since: '2026-11-01', until: null }], [{ since: '2026-10-01', until: '2027-06-30' }]);
    expect(plan).toEqual({ tier: 'full', source: 'store_ios', since: '2026-11-01', validUntil: null });
  });

  it('keeps the right that lasts longest, then the oldest', () => {
    expect(choosePlan([{ source: 'grant', since: '2026-10-01', until: '2026-12-31' }], [{ since: '2026-10-05', until: '2027-06-30' }]).source).toBe('sabil');
    const a = choosePlan(
      [
        { source: 'web_tn', since: '2026-10-09', until: null },
        { source: 'store_android', since: '2026-10-02', until: null },
      ],
      [],
    );
    expect(a.source).toBe('store_android');
  });
});
