import { describe, expect, it } from 'vitest';
import { EXAM_STRINGS } from './examStrings';
import { allKeys, rawEntry } from './strings';

/** Screens that only exist in the TOEIC app (TOEIC Speaking tasks): their texts may name the TOEIC. */
const TOEIC_ONLY = /^(speak|ra|rq|photo|op|doc|sim|simulation|questions|readAloud|respond|opinion|consent)\.|^(welcome\.n\.speaking|pay\.b\.speaking|pay\.b\.simulations)$/;
const TOEIC_WORDING = /TOEIC|توييك|\bETS\b/;

describe('per-exam texts', () => {
  for (const [exam, overrides] of Object.entries(EXAM_STRINGS)) {
    it(`${exam}: every replaced text exists in the four help languages`, () => {
      for (const [key, entry] of Object.entries(overrides ?? {})) {
        expect(entry, key).toHaveLength(4);
        entry!.forEach((text) => expect(text.trim().length, key).toBeGreaterThan(0));
        expect(/[؀-ۿ]/.test(entry![1]) || entry![1] === entry![0], `${key}/ar`).toBe(true);
        expect(TOEIC_WORDING.test(entry!.join(' ')), `${key} still names the TOEIC`).toBe(false);
      }
    });

    it(`${exam}: no shared text naming the TOEIC is left in the app`, () => {
      const left = allKeys.filter((key) => !TOEIC_ONLY.test(key) && TOEIC_WORDING.test(rawEntry(key).join(' ')) && !(key in (overrides ?? {})));
      expect(left).toEqual([]);
    });
  }
});
