/// <reference types="node" />
import { readFileSync } from 'fs';
import { join } from 'path';
import { describe, expect, it } from 'vitest';
import { PRODUCT_ID } from '../services/purchases';
import { EXAMS, examFrom } from './catalog';

const appJson = JSON.parse(readFileSync(join(__dirname, '../../app.json'), 'utf8')).expo;
const variants = Object.values(EXAMS);

describe('exam catalog', () => {
  it('builds the TOEIC app by default, with the identity already published in app.json', () => {
    const toeic = examFrom(undefined);
    expect(toeic.id).toBe('toeic');
    expect(examFrom('')).toBe(toeic);
    expect(toeic.status).toBe('live');
    expect(toeic.appName).toBe(appJson.name);
    expect(toeic.slug).toBe(appJson.slug);
    expect(toeic.bundleId).toBe(appJson.ios.bundleIdentifier);
    expect(toeic.bundleId).toBe(appJson.android.package);
    // The product already configured on the stores and on the server (server/src/config.ts).
    expect(toeic.productId).toBe('toki_quest_full');
    expect(PRODUCT_ID).toBe('toki_quest_full');
  });

  it('rejects an unknown exam', () => {
    expect(() => examFrom('ielts')).toThrow(/Unknown exam/);
  });

  it('gives every app its own store identifiers', () => {
    for (const key of ['slug', 'bundleId', 'productId'] as const) {
      expect(new Set(variants.map((v) => v[key])).size, key).toBe(variants.length);
    }
  });

  it('keeps third-party exam marks out of app names (they belong in the subtitle)', () => {
    for (const v of variants) expect(v.appName, v.id).not.toMatch(/TOEIC|IELTS|Cambridge|First|ETS/i);
  });

  it('declares a coherent score scale', () => {
    for (const v of variants) {
      expect(v.scale.max, v.id).toBeGreaterThan(v.scale.min);
      expect(Number.isInteger((v.scale.max - v.scale.min) / v.scale.step), v.id).toBe(true);
    }
  });
});
