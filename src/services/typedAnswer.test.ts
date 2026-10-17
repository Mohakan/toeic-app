import { describe, expect, it } from 'vitest';
import { fixed, mc, mockItem, tfng, typed } from '../data/exams/build';
import { x } from '../data/curriculum/build';
import type { MockTest } from '../types';
import { isCorrectAnswer, keyAnswer, scoreMock } from './mock';
import { countWords, isAcceptedAnswer, normalizeAnswer } from './typedAnswer';

const EXPLAIN = x('Explication de test.', 'شرح للاختبار.', 'Test explanation.', 'Explicación de prueba.');

describe('typed answers', () => {
  it('ignores case, spaces, curly apostrophes and final punctuation, not spelling', () => {
    expect(normalizeAnswer('  Wouldn’t   Have  ')).toBe("wouldn't have");
    expect(isAcceptedAnswer('Unless.', ['unless'])).toBe(true);
    expect(isAcceptedAnswer('IN SPITE', ['in spite'])).toBe(true);
    expect(isAcceptedAnswer('unles', ['unless'])).toBe(false);
    expect(isAcceptedAnswer('   ', ['unless'])).toBe(false);
  });

  it('accepts a contraction for its full form and the other way round', () => {
    expect(isAcceptedAnswer('wish he would not keep', ['wish he wouldn’t keep'])).toBe(true);
    expect(isAcceptedAnswer("needn't have bought", ['need not have bought'])).toBe(true);
    expect(isAcceptedAnswer('he would phone her', ['he’d phone her'])).toBe(true);
    expect(isAcceptedAnswer('she had left', ["she'd left"])).toBe(true);
    expect(isAcceptedAnswer('it has been', ["it's been"])).toBe(true);
    expect(isAcceptedAnswer('cannot', ["can't"])).toBe(true);
    expect(isAcceptedAnswer('will not', ["won't"])).toBe(true);
    // A different word is still wrong.
    expect(isAcceptedAnswer('he will phone her', ['he’d phone her'])).toBe(false);
    expect(isAcceptedAnswer("Ali's car", ['Ali car'])).toBe(false);
  });

  it('accepts a number in figures for the number in words, as Cambridge does', () => {
    expect(isAcceptedAnswer('12 weeks', ['twelve weeks'])).toBe(true);
    expect(isAcceptedAnswer('four', ['4'])).toBe(true);
    expect(isAcceptedAnswer('25', ['twenty-five'])).toBe(true);
    expect(isAcceptedAnswer('fourteen', ['four'])).toBe(false);
    expect(isAcceptedAnswer('someone', ['some 1'])).toBe(false);
    expect(isAcceptedAnswer('13 weeks', ['twelve weeks'])).toBe(false);
  });

  it('counts a contraction as two words, as Cambridge does', () => {
    expect(countWords("wasn't able to")).toBe(4);
    expect(countWords('had been told')).toBe(3);
    expect(countWords('')).toBe(0);
  });
});

describe('exam item builders', () => {
  it('keeps the authored order of fixed-order items and the key they name', () => {
    const e = tfng('t1', 'RU5', 4, 'The museum opens at nine.', 'The museum opens at ten.', 'False', EXPLAIN);
    expect(e.kind).toBe('mcq');
    if (e.kind !== 'mcq') return;
    expect(e.item.options).toEqual(['True', 'False', 'Not Given']);
    expect(e.item.answer).toBe(1);
    expect(() => fixed('t2', 'RU6', 'reading', 4, '?', ['A', 'B'], 2, EXPLAIN)).toThrow();
  });

  it('still shuffles ordinary multiple choice, keeping the key', () => {
    const e = mc('m1', 'RU1', 'vocab', 4, 'pick', ['key', 'b', 'c', 'd'], EXPLAIN);
    if (e.kind !== 'mcq') throw new Error('mcq expected');
    expect(e.item.options[e.item.answer]).toBe('key');
    expect(e.item.irt?.c).toBe(0.25);
  });

  it('scores typed items in mock tests', () => {
    const t = mockItem(typed('w1', 'RU3', 'vocab', 4, 'Her ___ was clear.', ['explanation'], EXPLAIN, { cue: 'explain' }));
    const m = mockItem(mc('m2', 'RU1', 'vocab', 4, 'pick', ['key', 'b', 'c', 'd'], EXPLAIN));
    expect(isCorrectAnswer(t, 'Explanation')).toBe(true);
    expect(isCorrectAnswer(t, 'explaination')).toBe(false);
    expect(isCorrectAnswer(t, undefined)).toBe(false);
    const mock: MockTest = { id: 'x', kind: 'mini', title: EXPLAIN, durationMin: 5, sections: [{ part: 'RU3', items: [t] }, { part: 'RU1', items: [m] }] };
    const { result } = scoreMock(mock, { w1: keyAnswer(t), m2: keyAnswer(m) }, 60);
    expect(result.correct).toBe(2);
    expect(result.byPart.RU3).toEqual({ correct: 1, total: 1 });
  });
});
