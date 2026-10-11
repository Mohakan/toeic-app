import { describe, expect, it } from 'vitest';
import { alignWords, markText, normalizeWords, scoreReading, spellNumber } from './alignment';

describe('normalizeWords', () => {
  it('lowercases, removes punctuation and handles typographic apostrophes', () => {
    expect(normalizeWords('Welcome, everyone! It’s great to see you.')).toEqual(['welcome', 'everyone', 'it', 'is', 'great', 'to', 'see', 'you']);
  });

  it('spells digits the way they are read', () => {
    expect(normalizeWords('Room 214 opens at 9')).toEqual(['room', 'two', 'hundred', 'fourteen', 'opens', 'at', 'nine']);
    expect(normalizeWords('2,500 visitors')).toEqual(['two', 'thousand', 'five', 'hundred', 'visitors']);
    expect(spellNumber(45)).toEqual(['forty', 'five']);
  });

  it('expands contractions and splits hyphens and percentages', () => {
    expect(normalizeWords("We're on the ground-floor; sales rose 8%.")).toEqual(['we', 'are', 'on', 'the', 'ground', 'floor', 'sales', 'rose', 'eight', 'percent']);
  });

  it('drops accents, as recognizers write “cafe” for “café”', () => {
    expect(normalizeWords('A small café in Gabès')).toEqual(['a', 'small', 'cafe', 'in', 'gabes']);
  });

  it('makes text and transcript comparable even when written differently', () => {
    expect(normalizeWords('Ms. Kefi’s office, floor 3')).toEqual(normalizeWords('ms kefis office floor three'));
  });
});

describe('alignWords', () => {
  it('marks a perfect reading as all ok', () => {
    const ops = alignWords(['the', 'meeting', 'starts'], ['the', 'meeting', 'starts']);
    expect(ops.every((o) => o.kind === 'ok')).toBe(true);
  });

  it('detects missed, misread and extra words', () => {
    const ops = alignWords(['please', 'take', 'a', 'seat', 'here'], ['please', 'tick', 'a', 'uh', 'seat']);
    expect(ops).toEqual([
      { kind: 'ok', expected: 'please' },
      { kind: 'wrong', expected: 'take', heard: 'tick' },
      { kind: 'ok', expected: 'a' },
      { kind: 'extra', heard: 'uh' },
      { kind: 'ok', expected: 'seat' },
      { kind: 'missed', expected: 'here' },
    ]);
  });

  it('handles empty inputs', () => {
    expect(alignWords([], [])).toEqual([]);
    expect(alignWords(['hello'], [])).toEqual([{ kind: 'missed', expected: 'hello' }]);
    expect(alignWords([], ['hello'])).toEqual([{ kind: 'extra', heard: 'hello' }]);
  });
});

describe('scoreReading', () => {
  const text = 'Thank you for calling Atlas Bank. Our offices are open from eight to five.';

  it('gives full accuracy to a faithful transcript, whatever its punctuation and case', () => {
    const s = scoreReading(text, 'thank you for calling atlas bank our offices are open from 8 to 5', 30);
    expect(s.accuracy).toBe(1);
    expect(s.expectedWords).toBe(14);
    expect(s.wordsPerMinute).toBe(28);
    expect(scoreReading(text, 'thank you for calling', 2).wordsPerMinute).toBeNull();
  });

  it('does not penalize extra words but counts missed ones', () => {
    const s = scoreReading(text, 'thank you um for calling atlas bank our offices are open from eight');
    expect(s.correctWords).toBe(12);
    expect(s.accuracy).toBeCloseTo(12 / 14);
    expect(s.wordsPerMinute).toBeNull();
  });

  it('scores zero when nothing was heard', () => {
    expect(scoreReading(text, '').accuracy).toBe(0);
  });
});

describe('markText', () => {
  it('maps alignment results back to the displayed words', () => {
    const text = 'Please take a seat here.';
    const marks = markText(text, scoreReading(text, 'please tick a seat').ops);
    expect(marks).toEqual([
      { word: 'Please', status: 'ok' },
      { word: 'take', status: 'wrong', heard: 'tick' },
      { word: 'a', status: 'ok' },
      { word: 'seat', status: 'ok' },
      { word: 'here.', status: 'missed' },
    ]);
  });

  it('keeps multi-word tokens (numbers, contractions) on one displayed word', () => {
    const text = 'We’re in Room 214.';
    const marks = markText(text, scoreReading(text, 'we are in room two hundred').ops);
    expect(marks.map((m) => m.status)).toEqual(['ok', 'ok', 'ok', 'missed']);
  });
});
