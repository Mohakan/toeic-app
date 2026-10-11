import { describe, expect, it } from 'vitest';
import { match, read, unit, x } from '../data/curriculum/build';
import { vocabById } from '../data/vocab';
import type { UnitLesson } from '../types';
import { inBand, setWords, unitWords } from './unitWords';

const explain = x('Explication de test.', 'شرح للاختبار.', 'Test explanation.', 'Explicación de prueba.');
const lesson: UnitLesson = { goal: explain, points: [explain, explain], example: { en: 'Example sentence.', note: explain } };

describe('unit words', () => {
  const sample = unit(
    { id: 'test-unit', emoji: '🧪', level: 4, part: 'R7', title: explain, subtitle: explain, lesson },
    [
      read('t-r1', 'R7', 4, 'The audit showed that our cash flow improved after the merger.', 'What improved?', ['Cash flow', 'Sales', 'Prices', 'Costs'], explain),
      match('t-m1', ['invoice', 'budget'], explain),
    ],
  );

  it('keeps words of the unit band and the band below', () => {
    expect(inBand(vocabById['audit'], 4)).toBe(true);
    expect(inBand(vocabById['merger'], 4)).toBe(false);
    expect(inBand(vocabById['payment'], 4)).toBe(false);
  });

  it('collects matched words first, then band words found in the texts (inflections included)', () => {
    const words = setWords(sample.sets[0], 4);
    expect(words.slice(0, 2)).toEqual(['invoice', 'budget']);
    expect(words).toContain('audit');
    expect(words).toContain('cash-flow');
    expect(words).not.toContain('merger');
    expect(unitWords(sample)).toEqual(words);
  });
});
