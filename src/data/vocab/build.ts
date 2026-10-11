import type { VocabTheme, VocabWord } from '../../types';

export type Row = [id: string, en: string, emoji: string, fr: string, ar: string, es: string, example: string, level: number];

export const theme = (name: VocabTheme, rows: Row[]): VocabWord[] =>
  rows.map(([id, en, emoji, fr, ar, es, example, level]) => ({ id, en, emoji, fr, ar, es, example, theme: name, level }));
