import { describe, expect, it } from 'vitest';
import { localPrice } from './pricing';

describe('localPrice', () => {
  it('shows 20 DT in Tunisia, in the help language', () => {
    expect(localPrice('TN', 'fr')).toEqual({ amount: 20, currency: 'TND', label: '20 DT' });
    expect(localPrice('tn', 'ar').label).toBe('20 د.ت');
    expect(localPrice('TN', 'en').label).toBe('TND 20');
  });

  it('shows 9 $ everywhere else, or when the region is unknown', () => {
    expect(localPrice('FR', 'fr')).toEqual({ amount: 9, currency: 'USD', label: '9 $' });
    expect(localPrice(null, 'en').label).toBe('$9');
    expect(localPrice(undefined, 'es').label).toBe('9 $');
  });
});
