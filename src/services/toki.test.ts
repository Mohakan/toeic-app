import { describe, expect, it } from 'vitest';
import { tokiStage } from './toki';

describe('tokiStage', () => {
  it('follows the score thresholds of the brief', () => {
    expect(tokiStage(10)).toBe('chick');
    expect(tokiStage(299)).toBe('chick');
    expect(tokiStage(300)).toBe('apprentice');
    expect(tokiStage(549)).toBe('apprentice');
    expect(tokiStage(550)).toBe('pro');
    expect(tokiStage(784)).toBe('pro');
    expect(tokiStage(785)).toBe('pilot');
    expect(tokiStage(899)).toBe('pilot');
    expect(tokiStage(900)).toBe('golden');
    expect(tokiStage(990)).toBe('golden');
  });

  it('shows the standard look before the first estimate', () => {
    expect(tokiStage(null)).toBe('apprentice');
    expect(tokiStage(undefined)).toBe('apprentice');
  });
});
