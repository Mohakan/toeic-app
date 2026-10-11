import type { Lang } from '../types';

/**
 * Price of the full plan shown before the stores are wired (lot M4): 20 DT in Tunisia, 9 $
 * elsewhere, a one-time payment. Once in-app purchases exist, the price returned by the store wins.
 */
export interface LocalPrice {
  amount: number;
  currency: 'TND' | 'USD';
  label: string;
}

export function localPrice(regionCode: string | null | undefined, lang: Lang): LocalPrice {
  if ((regionCode ?? '').toUpperCase() === 'TN') {
    return { amount: 20, currency: 'TND', label: lang === 'ar' ? '20 د.ت' : lang === 'en' ? 'TND 20' : '20 DT' };
  }
  return { amount: 9, currency: 'USD', label: lang === 'en' ? '$9' : '9 $' };
}
