import { useCallback, useMemo } from 'react';
import type { FlexStyle, TextStyle } from 'react-native';
import { useApp } from '../state/AppState';
import type { Lang, Localized } from '../types';
import { translate, type StringKey } from './strings';

export function useI18n() {
  const { data } = useApp();
  const lang: Lang = data.lang;
  const isRTL = lang === 'ar';

  const t = useCallback(
    (key: StringKey, vars?: Record<string, string | number>) => translate(lang, key, vars),
    [lang],
  );
  const tx = useCallback((value: Localized) => value[lang], [lang]);

  return useMemo(
    () => ({
      lang,
      isRTL,
      t,
      tx,
      /** Horizontal row that flips with the reading direction. */
      row: { flexDirection: isRTL ? 'row-reverse' : 'row' } as FlexStyle,
      /** Text alignment at the start of the reading direction. */
      align: { textAlign: isRTL ? 'right' : 'left', writingDirection: isRTL ? 'rtl' : 'ltr' } as TextStyle,
      /** Name of a chevron icon pointing "forward" in the current direction. */
      forwardIcon: (isRTL ? 'chevron-back' : 'chevron-forward') as 'chevron-back' | 'chevron-forward',
      backIcon: (isRTL ? 'arrow-forward' : 'arrow-back') as 'arrow-back' | 'arrow-forward',
    }),
    [lang, isRTL, t, tx],
  );
}
