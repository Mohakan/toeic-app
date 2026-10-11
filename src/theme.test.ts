import { describe, expect, it } from 'vitest';
import { EXAM_CONFIGS } from './exams/config';
import { colors, fontFamilyFor } from './theme';

/** WCAG relative luminance and contrast ratio. */
const luminance = (hex: string) => {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const contrast = (a: string, b: string) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};

describe('Toki palette', () => {
  it('keeps the colors of the brief', () => {
    expect(colors.primary).toBe('#2E9BF0');
    expect(colors.primaryDark).toBe('#14427A');
    expect(colors.accent).toBe('#FF8A1F');
    expect(colors.accentSoft).toBe('#FFD3A8');
    expect(colors.gold).toBe('#FFC93C');
    expect(colors.bg).toBe('#F4F8FC');
    expect(colors.mist).toBe('#A9B8C9');
    expect(colors.ink).toBe('#1C2430');
    expect(colors.success).toBe('#2BC48A');
    expect(colors.danger).toBe('#F2545B');
  });

  it('reaches the AA contrast (4.5:1) for every text color on the light backgrounds', () => {
    const texts = [colors.ink, colors.inkSoft, colors.primaryDark, colors.successDark, colors.dangerDark, colors.accentDark, colors.goldDark];
    for (const bg of [colors.bg, colors.card]) for (const fg of texts) expect(contrast(fg, bg), `${fg} on ${bg}`).toBeGreaterThanOrEqual(4.5);
    // Help cards in Pêche and soft tints.
    for (const bg of [colors.accentSoft, colors.primarySoft, colors.successSoft, colors.dangerSoft]) expect(contrast(colors.ink, bg), bg).toBeGreaterThanOrEqual(4.5);
  });

  it('reaches AA for button labels: Encre on bright buttons, white on Bleu Nuit', () => {
    for (const bg of [colors.primary, colors.accent, colors.success, colors.danger]) expect(contrast(colors.ink, bg), bg).toBeGreaterThanOrEqual(4.5);
    expect(contrast(colors.white, colors.primaryDark)).toBeGreaterThanOrEqual(4.5);
    // Why white is not used on the bright buttons.
    expect(contrast(colors.white, colors.primary)).toBeLessThan(4.5);
  });
});

describe('Rubik typeface', () => {
  it('maps every fontWeight to a bundled Rubik file', () => {
    expect(fontFamilyFor(undefined)).toBe('Rubik_400Regular');
    expect(fontFamilyFor('normal')).toBe('Rubik_400Regular');
    expect(fontFamilyFor('bold')).toBe('Rubik_700Bold');
    expect(fontFamilyFor('600')).toBe('Rubik_600SemiBold');
    expect(fontFamilyFor(300)).toBe('Rubik_300Light');
    // 900 and 100 are not bundled: the nearest bundled weight is used.
    expect(fontFamilyFor('900')).toBe('Rubik_800ExtraBold');
    expect(fontFamilyFor('100')).toBe('Rubik_300Light');
  });

  it('keeps Encre readable on the Bleu Ciel hero band and the white stat tiles', () => {
    expect(contrast(colors.ink, colors.primary)).toBeGreaterThanOrEqual(4.5);
    // Every app of the family: Encre on its own hero color.
    for (const config of Object.values(EXAM_CONFIGS)) expect(contrast(colors.ink, config.brand.hero), config.id).toBeGreaterThanOrEqual(4.5);
    expect(contrast(colors.inkSoft, colors.white)).toBeGreaterThanOrEqual(4.5);
    expect(contrast(colors.white, colors.primaryDark)).toBeGreaterThanOrEqual(4.5);
  });
});
