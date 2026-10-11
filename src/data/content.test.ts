/// <reference types="node" />
import { existsSync, readdirSync } from 'fs';
import { join } from 'path';
import { describe, expect, it } from 'vitest';
import { allKeys, rawEntry } from '../i18n/strings';
import { paramsOf, sectionOf } from '../services/placement';
import { isTyped, type Lang, type Localized, type McqItem } from '../types';
import { assessmentBank } from './assessment';
import { FULL_TEST_BLUEPRINT, MINI_TEST_BLUEPRINT, mockTests } from './mock';
import { allExercises, exerciseKey, units } from './units';
import { vocab, vocabById } from './vocab';
import { inBand, unitWords } from '../services/unitWords';
import { contentStats } from './contentStats';
import { documentTasks, documentText, questionAudio } from './speaking/documents';
import { questionSets } from './speaking/questions';
import { readAloudTasks } from './speaking/readAloud';
import { connectorsUsed, describeFeatures, mentions } from '../services/responseFeedback';
import { photoCreditByFile, photoCredits } from './speaking/photos/credits';
import { photoTaskById, photoTasks } from './speaking/photos';
import { opinionTopics } from './speaking/opinions';
import { simulationDocuments, simulationOpinions, simulationPhotos, simulationQuestionSets, simulationReadAloud, simulations, simulationSteps } from './speaking/simulations';
import { readAloudById } from './speaking/readAloud';
import { questionSetById } from './speaking/questions';
import { documentTaskById } from './speaking/documents';
import { opinionTopicById } from './speaking/opinions';

const allReadAloud = [...readAloudTasks, ...simulationReadAloud];
const allQuestionSets = [...questionSets, ...simulationQuestionSets];
const allDocuments = [...documentTasks, ...simulationDocuments];
const allOpinions = [...opinionTopics, ...simulationOpinions];
const allPhotos = [...photoTasks, ...simulationPhotos];

/**
 * Content quality gate, run with `npm run content:check`. It must stay green after every batch.
 */
const LANGS: Lang[] = ['fr', 'ar', 'en', 'es'];
const exercises = allExercises.map((x) => x.exercise);
const lessonMcqs: McqItem[] = exercises.flatMap((e) => (e.kind === 'mcq' ? [e.item] : []));
// The TOEIC content only has multiple-choice items; typed items are checked with their exam's content.
const mockMcqs: McqItem[] = mockTests.filter((m) => !m.demo).flatMap((m) => m.sections.flatMap((s) => s.items.filter((i): i is McqItem => !isTyped(i))));
const allMcqs = [...assessmentBank, ...lessonMcqs, ...mockMcqs];

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const fingerprint = (i: McqItem) => norm(`${i.prompt} ${i.passage ?? ''} ${i.audio ?? ''}`);
const words = (s: string) => s.split(/\s+/).filter(Boolean).length;

/** Maximum Part 7 passage length (in words) for each CEFR band of the item. */
const MAX_PASSAGE_WORDS: Record<number, number> = { 1: 60, 2: 90, 3: 150, 4: 260, 5: 350, 6: 350 };

describe('multiple-choice items', () => {
  it('have a valid key, distinct options and explanations in every help language', () => {
    for (const item of allMcqs) {
      expect(item.answer, item.id).toBeGreaterThanOrEqual(0);
      expect(item.answer, item.id).toBeLessThan(item.options.length);
      expect(new Set(item.options).size, item.id).toBe(item.options.length);
      for (const lang of LANGS) expect(item.explain[lang].length, `${item.id}/${lang}`).toBeGreaterThan(10);
    }
  });

  it('follow the TOEIC format: 3 options in Part 2, 4 elsewhere (lessons and mock tests)', () => {
    for (const item of [...lessonMcqs, ...mockMcqs]) {
      expect(item.options.length, item.id).toBe(item.part === 'L2' ? 3 : 4);
    }
  });

  it('have audio for listening and a text for Parts 6 and 7, within the length limit', () => {
    for (const item of [...lessonMcqs, ...mockMcqs]) {
      if (item.skill === 'listening') expect(item.audio, item.id).toBeTruthy();
      if (item.part === 'R6' || item.part === 'R7') {
        expect(item.passage, item.id).toBeTruthy();
        expect(words(item.passage!), item.id).toBeLessThanOrEqual(MAX_PASSAGE_WORDS[item.level]);
      }
    }
  });

  it('have unique ids across the placement bank, lessons and mock tests', () => {
    const ids = [...allMcqs.map((i) => i.id), ...exercises.filter((e) => e.kind !== 'mcq').map(exerciseKey)];
    const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
    expect(dupes).toEqual([]);
  });

  it('never reuse a placement question in lessons or mock tests (keeps the placement test valid)', () => {
    const bank = new Set(assessmentBank.map(fingerprint));
    const leaks = [...lessonMcqs, ...mockMcqs].filter((i) => bank.has(fingerprint(i))).map((i) => i.id);
    expect(leaks).toEqual([]);
  });

  it('contain no duplicated question (same prompt and text)', () => {
    const seen = new Map<string, string>();
    const dupes: string[] = [];
    for (const item of [...lessonMcqs, ...mockMcqs]) {
      const k = fingerprint(item);
      if (seen.has(k)) dupes.push(`${item.id} = ${seen.get(k)}`);
      else seen.set(k, item.id);
    }
    expect(dupes).toEqual([]);
  });

  it('keep mock-test items unseen: no near-copy of a placement or lesson item (Parts 2 and 5)', () => {
    // Part 2 shares one prompt, so only its audio is compared; longer parts are checked by fingerprint above.
    const tokens = (i: McqItem) =>
      new Set(norm(i.part === 'L2' ? (i.audio ?? '') : `${i.prompt} ${i.audio ?? ''}`).split(' ').filter((w) => w.length > 2));
    const similarity = (a: Set<string>, b: Set<string>) => [...a].filter((w) => b.has(w)).length / new Set([...a, ...b]).size;
    const seen = [...assessmentBank, ...lessonMcqs].map((i) => ({ id: i.id, t: tokens(i) }));
    const near = mockMcqs
      .filter((m) => m.part === 'L2' || m.part === 'R5')
      .flatMap((m) => seen.filter((o) => similarity(tokens(m), o.t) >= 0.6).map((o) => `${m.id} ~ ${o.id}`));
    expect(near).toEqual([]);
  });

  it('spread the key over every option position', () => {
    for (const pool of [assessmentBank, lessonMcqs.filter((i) => i.options.length === 4)]) {
      const counts = [0, 0, 0, 0];
      pool.forEach((i) => (counts[i.answer] += 1));
      counts.forEach((c) => expect(c).toBeGreaterThanOrEqual(pool.length / 8));
    }
  });

  it('derive valid IRT parameters', () => {
    for (const item of allMcqs) {
      const p = paramsOf(item);
      expect(p.a, item.id).toBeGreaterThan(0);
      expect(p.c, item.id).toBeGreaterThanOrEqual(0);
      expect(p.c, item.id).toBeLessThan(0.5);
    }
  });
});

describe('placement bank', () => {
  it('covers every difficulty level in both sections', () => {
    for (let level = 1; level <= 6; level += 1) {
      const atLevel = assessmentBank.filter((i) => i.level === level);
      expect(atLevel.some((i) => sectionOf(i.skill) === 'L'), `L${level}`).toBe(true);
      expect(atLevel.filter((i) => sectionOf(i.skill) === 'R').length, `R${level}`).toBeGreaterThanOrEqual(3);
    }
  });
});

describe('learning path', () => {
  it('has unique units ordered from A1 to C1, at least 5 per level', () => {
    const ids = units.map((u) => u.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (let level = 1; level <= 5; level += 1) expect(units.filter((u) => u.level === level).length, `level ${level}`).toBeGreaterThanOrEqual(5);
    expect(units.map((u) => u.level)).toEqual([...units.map((u) => u.level)].sort((a, b) => a - b));
  });

  it('gives every unit a full lesson and non-empty, uniquely named sets', () => {
    const setIds = units.flatMap((u) => u.sets.map((s) => s.id));
    expect(new Set(setIds).size).toBe(setIds.length);
    for (const u of units) {
      expect(u.sets.length, u.id).toBeGreaterThanOrEqual(1);
      u.sets.forEach((s) => expect(s.exercises.length, s.id).toBeGreaterThanOrEqual(5));
      expect(u.lesson.points.length, u.id).toBeGreaterThanOrEqual(2);
      for (const lang of LANGS) {
        expect(u.title[lang].length, `${u.id}/${lang}`).toBeGreaterThan(2);
        expect(u.subtitle[lang].length, `${u.id}/${lang}`).toBeGreaterThan(2);
        expect(u.lesson.goal[lang].length, `${u.id}/${lang}`).toBeGreaterThan(10);
        expect(u.lesson.example.note[lang].length, `${u.id}/${lang}`).toBeGreaterThan(5);
        u.lesson.points.forEach((p) => expect(p[lang].length, `${u.id}/${lang}`).toBeGreaterThan(10));
      }
    }
  });

  it('explains every non-multiple-choice exercise in every help language', () => {
    for (const e of exercises) {
      if (e.kind === 'mcq' || e.kind === 'type') continue;
      for (const lang of LANGS) expect(e.explain[lang].length, e.id).toBeGreaterThan(10);
      if (e.kind === 'order') for (const lang of LANGS) expect(e.hint[lang].length, e.id).toBeGreaterThan(3);
    }
  });

  it('builds order exercises whose scramble is a real permutation of the answer', () => {
    for (const e of exercises) {
      if (e.kind !== 'order') continue;
      expect([...e.words].sort(), e.id).toEqual([...e.answer].sort());
      expect(e.words.join(' '), e.id).not.toBe(e.answer.join(' '));
    }
  });

  it('only references known vocabulary in matching exercises', () => {
    const known = new Set(vocab.map((w) => w.id));
    for (const e of exercises) if (e.kind === 'match') e.wordIds.forEach((id) => expect(known.has(id), `${e.id}: ${id}`).toBe(true));
  });

  it('reuse at least 10 words of their CEFR band in every unit', () => {
    for (const u of units) {
      const words = unitWords(u).filter((id) => inBand(vocabById[id], u.level));
      expect(words.length, u.id).toBeGreaterThanOrEqual(10);
    }
  });
});

describe('vocabulary', () => {
  it('has unique, fully translated words with a level and an English example', () => {
    expect(new Set(vocab.map((w) => w.id)).size).toBe(vocab.length);
    for (const w of vocab) {
      for (const lang of ['fr', 'ar', 'es'] as const) expect(w[lang].length, `${w.id}/${lang}`).toBeGreaterThan(1);
      expect(w.level, w.id).toBeGreaterThanOrEqual(1);
      expect(w.level, w.id).toBeLessThanOrEqual(5);
      expect(words(w.example), w.id).toBeGreaterThanOrEqual(6);
      expect(words(w.example), w.id).toBeLessThanOrEqual(14);
    }
  });

  it('meets the level and theme quotas of the 1,000-word plan', () => {
    const byLevel: Record<number, number> = {};
    const byTheme: Record<string, number> = {};
    for (const w of vocab) {
      byLevel[w.level] = (byLevel[w.level] ?? 0) + 1;
      byTheme[w.theme] = (byTheme[w.theme] ?? 0) + 1;
    }
    expect(vocab.length).toBeGreaterThanOrEqual(1000);
    expect(byLevel).toEqual({ 1: 100, 2: 150, 3: 250, 4: 300, 5: 200 });
    expect(Object.keys(byTheme)).toHaveLength(14);
    for (const [theme, n] of Object.entries(byTheme)) {
      expect(n, theme).toBeGreaterThanOrEqual(50);
      expect(n, theme).toBeLessThanOrEqual(90);
    }
  });

  it('has no duplicated English entry', () => {
    const en = vocab.map((w) => w.en.toLowerCase());
    expect(new Set(en).size).toBe(en.length);
  });
});

describe('mock tests', () => {
  it('match the official part distribution (demo tests excepted)', () => {
    for (const mock of mockTests.filter((m) => !m.demo)) {
      const blueprint = mock.kind === 'full' ? FULL_TEST_BLUEPRINT : MINI_TEST_BLUEPRINT;
      const counts: Record<string, number> = {};
      mock.sections.forEach((s) => (counts[s.part] = (counts[s.part] ?? 0) + s.items.length));
      expect(counts, mock.id).toEqual(blueprint);
    }
  });

  it('have unique ids, a duration and items whose part matches their section', () => {
    expect(new Set(mockTests.map((m) => m.id)).size).toBe(mockTests.length);
    for (const mock of mockTests) {
      expect(mock.durationMin, mock.id).toBeGreaterThan(0);
      mock.sections.forEach((s) => s.items.forEach((i) => expect(i.part, `${mock.id}/${i.id}`).toBe(s.part)));
      for (const lang of LANGS) expect(mock.title[lang].length, mock.id).toBeGreaterThan(3);
    }
  });
});

describe('interface strings', () => {
  it('exist in fr, ar, en and es', () => {
    for (const key of allKeys) {
      const entry = rawEntry(key);
      expect(entry.length, key).toBe(4);
      entry.forEach((text) => expect(text.length, key).toBeGreaterThan(0));
    }
  });
});

describe('editorial rules (cross-review)', () => {
  const quotesOut = (s: string) => s.replace(/«[^»]*»/g, '').replace(/“[^”]*”/g, '').replace(/"[^"]*"/g, '');
  const ARABIC = /[؀-ۿ]/;
  const texts: [string, Localized][] = [
    ...allMcqs.map((i) => [i.id, i.explain] as [string, Localized]),
    ...exercises.flatMap((e) => (e.kind === 'mcq' || e.kind === 'type' ? [] : [[e.id, e.explain] as [string, Localized]])),
    ...units.flatMap((u) => [[`${u.id}/goal`, u.lesson.goal], ...u.lesson.points.map((p, n) => [`${u.id}/point${n}`, p]), [`${u.id}/note`, u.lesson.example.note]] as [string, Localized][]),
  ];

  it('write each help language in its own script (Arabic only in the Arabic text)', () => {
    for (const [id, t] of texts) {
      expect(ARABIC.test(t.ar), `${id}/ar`).toBe(true);
      for (const lang of ['fr', 'en', 'es'] as const) expect(ARABIC.test(t[lang]), `${id}/${lang}`).toBe(false);
    }
  });

  it('address the learner informally in French and Spanish', () => {
    // Quotes, “rendez-vous” and translations of English formulas after “=” may contain “vous”.
    const own = (s: string) => quotesOut(s).replace(/rendez-vous/gi, '').replace(/=[^.;?!]*/g, '');
    for (const [id, t] of texts) {
      expect(/\b(vous|votre|vos)\b/i.test(own(t.fr)), `${id}/fr`).toBe(false);
      expect(/\busted(es)?\b/i.test(own(t.es)), `${id}/es`).toBe(false);
    }
  });

  it('mark speakers in conversations only, and keep audio easy to synthesize', () => {
    for (const i of allMcqs.filter((m) => m.audio)) {
      const lines = i.audio!.split('\n');
      if (i.part === 'L3') lines.forEach((l) => expect(l, i.id).toMatch(/^(W|M): /));
      else expect(/^(W|M): /m.test(i.audio!), i.id).toBe(false);
      expect(/e\.g\.|etc\.|i\.e\.|&|\/|#/.test(i.audio!), i.id).toBe(false);
    }
  });
});

describe('plan targets', () => {
  it('reach at least 60 hours of study and 1,000 words', () => {
    const stats = contentStats();
    expect(stats.hours.total).toBeGreaterThanOrEqual(60);
    expect(stats.words).toBeGreaterThanOrEqual(1000);
  });
});

describe('speaking: read-aloud texts', () => {
  it('have unique ids, a level and help texts in every language', () => {
    expect(new Set(allReadAloud.map((t) => t.id)).size).toBe(allReadAloud.length);
    for (const task of allReadAloud) {
      expect(task.level, task.id).toBeGreaterThanOrEqual(1);
      expect(task.level, task.id).toBeLessThanOrEqual(5);
      for (const lang of LANGS) {
        expect(task.topic[lang].length, `${task.id}/topic/${lang}`).toBeGreaterThan(3);
        expect(task.tip[lang].length, `${task.id}/tip/${lang}`).toBeGreaterThan(10);
      }
      expect(/[؀-ۿ]/.test(task.tip.ar), task.id).toBe(true);
    }
  });

  it('cover every CEFR band with 12 texts (60 in all)', () => {
    const byLevel: Record<number, number> = {};
    for (const t of readAloudTasks) byLevel[t.level] = (byLevel[t.level] ?? 0) + 1;
    expect(byLevel).toEqual({ 1: 12, 2: 12, 3: 12, 4: 12, 5: 12 });
  });

  it('follow the official length and stay fair to the recognizer (no digits or ambiguous abbreviations)', () => {
    for (const task of allReadAloud) {
      const n = words(task.text);
      expect(n, task.id).toBeGreaterThanOrEqual(40);
      expect(n, task.id).toBeLessThanOrEqual(60);
      expect(/\d|%|&|\b[ap]\.m\.|\be\.g\.|\betc\./i.test(task.text), task.id).toBe(false);
    }
  });
});

describe('speaking: questions (tasks 5-7)', () => {
  const questions = allQuestionSets.flatMap((set) => set.questions);

  it('have 30 sets, 6 per CEFR band, each with 3 questions timed 15 s, 15 s and 30 s', () => {
    const byLevel: Record<number, number> = {};
    for (const set of questionSets) byLevel[set.level] = (byLevel[set.level] ?? 0) + 1;
    expect(byLevel).toEqual({ 1: 6, 2: 6, 3: 6, 4: 6, 5: 6 });
    for (const set of allQuestionSets) expect(set.questions.map((q) => q.responseSec), set.id).toEqual([15, 15, 30]);
  });

  it('have unique ids and help texts in every language', () => {
    const ids = [...allQuestionSets.map((s) => s.id), ...questions.map((q) => q.id)];
    expect(new Set(ids).size).toBe(ids.length);
    for (const set of allQuestionSets) {
      for (const q of set.questions) expect(q.id.startsWith(`${set.id}-`), q.id).toBe(true);
      for (const lang of LANGS) {
        expect(set.topic[lang].length, `${set.id}/topic/${lang}`).toBeGreaterThan(3);
        expect(set.contextHelp[lang].length, `${set.id}/contextHelp/${lang}`).toBeGreaterThan(20);
        for (const q of set.questions) expect(q.tip[lang].length, `${q.id}/tip/${lang}`).toBeGreaterThan(10);
      }
      expect(/[؀-ۿ]/.test(set.contextHelp.ar), set.id).toBe(true);
      for (const q of set.questions) expect(/[؀-ۿ]/.test(q.tip.ar), q.id).toBe(true);
    }
  });

  it('ask real questions that the recognizer and the voice can handle (no digits)', () => {
    for (const set of allQuestionSets) expect(/\d|%|&/.test(set.context), set.id).toBe(false);
    for (const q of questions) {
      // A question (possibly followed by "Explain why."), or an instruction such as "Describe your perfect weekend."
      expect(/\?(\s+[A-Z][^?]*\.)?$|^(Describe|Tell|Explain|Talk)\b[^?]*\.$/.test(q.prompt.trim()), q.id).toBe(true);
      expect(/\d|%|&/.test(q.prompt + q.model), q.id).toBe(false);
    }
  });

  it('give a model answer that fits the time and mentions every expected idea', () => {
    for (const q of questions) {
      const n = words(q.model);
      if (q.responseSec === 15) {
        expect(n, q.id).toBeGreaterThanOrEqual(12);
        expect(n, q.id).toBeLessThanOrEqual(45);
      } else {
        expect(n, q.id).toBeGreaterThanOrEqual(35);
        expect(n, q.id).toBeLessThanOrEqual(85);
      }
      expect(q.keywords.length, q.id).toBeGreaterThanOrEqual(2);
      for (const k of q.keywords) expect(mentions(q.model, k), `${q.id}: ${k}`).toBe(true);
    }
  });
});

describe('speaking: all tasks', () => {
  it('have distinct titles within a level, so the Speaking list is not ambiguous', () => {
    const all = [...allReadAloud, ...allPhotos, ...allQuestionSets, ...allDocuments, ...allOpinions];
    const duplicates: string[] = [];
    for (const lang of LANGS) {
      const seen = new Map<string, string>();
      for (const task of all) {
        const key = `${task.level}:${task.topic[lang].toLowerCase()}`;
        if (seen.has(key)) duplicates.push(`${lang}: ${seen.get(key)} / ${task.id} "${task.topic[lang]}"`);
        seen.set(key, task.id);
      }
    }
    expect(duplicates).toEqual([]);
  });
});

describe('speaking: opinions (task 11)', () => {
  it('have 40 topics, 8 per CEFR band, with unique ids', () => {
    const byLevel: Record<number, number> = {};
    for (const o of opinionTopics) byLevel[o.level] = (byLevel[o.level] ?? 0) + 1;
    expect(byLevel).toEqual({ 1: 8, 2: 8, 3: 8, 4: 8, 5: 8 });
    expect(new Set(allOpinions.map((o) => o.id)).size).toBe(allOpinions.length);
    for (const o of allOpinions) expect(o.id.startsWith('op-'), o.id).toBe(true);
  });

  it('have help texts in every language', () => {
    for (const o of allOpinions) {
      for (const lang of LANGS) {
        expect(o.topic[lang].length, `${o.id}/topic/${lang}`).toBeGreaterThan(3);
        expect(o.promptHelp[lang].length, `${o.id}/promptHelp/${lang}`).toBeGreaterThan(20);
        expect(o.tip[lang].length, `${o.id}/tip/${lang}`).toBeGreaterThan(10);
      }
      expect(/[؀-ۿ]/.test(o.promptHelp.ar) && /[؀-ۿ]/.test(o.tip.ar), o.id).toBe(true);
    }
  });

  it('ask a question without digits, as the voice reads it aloud', () => {
    for (const o of allOpinions) {
      expect(o.prompt.includes('?'), o.id).toBe(true);
      expect(/\d|%|&/.test(o.prompt + o.model), o.id).toBe(false);
    }
  });

  it('give a one-minute model answer that shows how to argue', () => {
    for (const o of allOpinions) {
      const n = words(o.model);
      expect(n, o.id).toBeGreaterThanOrEqual(70);
      expect(n, o.id).toBeLessThanOrEqual(160);
      // At least five kinds of linking words: opinion, reason, example, addition, contrast, conclusion.
      const kinds = connectorsUsed(o.model).filter((c) => c.heard.length > 0).map((c) => c.kind);
      expect(kinds.length, `${o.id}: ${kinds.join(', ')}`).toBeGreaterThanOrEqual(5);
      expect(kinds, o.id).toContain('opinion');
      expect(kinds, o.id).toContain('example');
      expect(o.keywords.length, o.id).toBeGreaterThanOrEqual(2);
      for (const k of o.keywords) expect(mentions(o.model, k), `${o.id}: ${k}`).toBe(true);
    }
  });
});

describe('speaking: documents (tasks 8-10)', () => {
  const questions = allDocuments.flatMap((task) => task.questions);

  it('have 30 documents, 6 per CEFR band, each with 3 questions timed 15 s, 15 s and 30 s', () => {
    const byLevel: Record<number, number> = {};
    for (const task of documentTasks) byLevel[task.level] = (byLevel[task.level] ?? 0) + 1;
    expect(byLevel).toEqual({ 1: 6, 2: 6, 3: 6, 4: 6, 5: 6 });
    for (const task of allDocuments) expect(task.questions.map((q) => q.responseSec), task.id).toEqual([15, 15, 30]);
  });

  it('have unique ids and help texts in every language', () => {
    const ids = [...allDocuments.map((d) => d.id), ...questions.map((q) => q.id), ...allQuestionSets.map((s) => s.id)];
    expect(new Set(ids).size).toBe(ids.length);
    for (const task of allDocuments) {
      expect(task.id.startsWith('rd-'), task.id).toBe(true);
      for (const q of task.questions) expect(q.id.startsWith(`${task.id}-`), q.id).toBe(true);
      for (const lang of LANGS) {
        expect(task.topic[lang].length, `${task.id}/topic/${lang}`).toBeGreaterThan(3);
        expect(task.documentHelp[lang].length, `${task.id}/documentHelp/${lang}`).toBeGreaterThan(20);
        for (const q of task.questions) expect(q.tip[lang].length, `${q.id}/tip/${lang}`).toBeGreaterThan(10);
      }
      expect(/[؀-ۿ]/.test(task.documentHelp.ar), task.id).toBe(true);
      for (const q of task.questions) expect(/[؀-ۿ]/.test(q.tip.ar), q.id).toBe(true);
    }
  });

  it('show a real document: at least 4 rows of the same width, matching the header', () => {
    for (const { id, document: doc } of allDocuments) {
      expect(doc.rows.length, id).toBeGreaterThanOrEqual(4);
      const width = doc.header?.length ?? doc.rows[0].length;
      for (const r of doc.rows) expect(r.length, `${id}: ${r.join(' | ')}`).toBe(width);
    }
  });

  it('are heard as in the test: the caller first, the last question twice', () => {
    const task = documentTasks[0];
    const [q1, q2, q3] = task.questions.map((q) => q.prompt);
    expect(questionAudio(task, 0)).toBe(`${task.caller}\n${q1}`);
    expect(questionAudio(task, 1)).toBe(q2);
    expect(questionAudio(task, 2)).toBe(`${q3}\n${q3}`);
  });

  it('are spoken without digits, as questions', () => {
    for (const task of allDocuments) expect(/\d|%|&/.test(task.caller), task.id).toBe(false);
    for (const q of questions) {
      expect(/\?$/.test(q.prompt.trim()), q.id).toBe(true);
      expect(/\d|%|&/.test(q.prompt + q.model), q.id).toBe(false);
    }
  });

  it('expect information that is in the document and in the model answer, at the right length', () => {
    for (const task of allDocuments) {
      const text = documentText(task.document);
      for (const q of task.questions) {
        const n = words(q.model);
        expect(n, q.id).toBeGreaterThanOrEqual(q.responseSec === 15 ? 8 : 30);
        expect(n, q.id).toBeLessThanOrEqual(q.responseSec === 15 ? 45 : 85);
        expect(q.keywords.length, q.id).toBeGreaterThanOrEqual(2);
        for (const k of q.keywords) {
          expect(mentions(text, k), `${q.id}: "${k}" not in the document`).toBe(true);
          expect(mentions(q.model, k), `${q.id}: "${k}" not in the model`).toBe(true);
        }
      }
    }
  });
});

describe('speaking: simulations', () => {
  it('are 4, each with the 9 tasks that need no photo, all reachable by id', () => {
    expect(simulations.length).toBe(4);
    for (const sim of simulations) {
      const steps = simulationSteps(sim);
      expect(steps.map((st) => st.tasks), sim.id).toEqual(['1', '2', '3', '4', '5–7', '8–10', '11']);
      for (const st of steps) {
        const found =
          st.kind === 'read' ? readAloudById[st.id] : st.kind === 'photo' ? photoTaskById[st.id] : st.kind === 'opinion' ? opinionTopicById[st.id] : (questionSetById[st.id] ?? documentTaskById[st.id]);
        expect(found, `${sim.id}: ${st.id}`).toBeDefined();
      }
      expect(documentTaskById[sim.document.id], sim.id).toBe(sim.document);
      expect(questionSetById[sim.questions.id], sim.id).toBe(sim.questions);
    }
  });

  it('use content of their own, unseen in the practice lists', () => {
    const practice = new Set([...readAloudTasks, ...photoTasks, ...questionSets, ...documentTasks, ...opinionTopics].map((t) => t.id));
    const own = [...simulationReadAloud, ...simulationPhotos, ...simulationQuestionSets, ...simulationDocuments, ...simulationOpinions];
    for (const t of own) expect(practice.has(t.id), t.id).toBe(false);
    const texts = new Set([...readAloudTasks.map((t) => t.text), ...opinionTopics.map((o) => o.prompt)]);
    for (const t of simulationReadAloud) expect(texts.has(t.text), t.id).toBe(false);
    for (const o of simulationOpinions) expect(texts.has(o.prompt), o.id).toBe(false);
  });
});

describe('speaking: photos (tasks 3-4)', () => {
  const dir = join(__dirname, '../../assets/speaking-photos');

  it('have 22 practice photos (4 or 5 per CEFR band), and 2 more in each simulation', () => {
    const byLevel: Record<number, number> = {};
    for (const t of photoTasks) byLevel[t.level] = (byLevel[t.level] ?? 0) + 1;
    expect(byLevel).toEqual({ 1: 4, 2: 5, 3: 4, 4: 5, 5: 4 });
    expect(simulationPhotos.length).toBe(8);
    const ids = allPhotos.map((t) => t.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const id of ids) expect(id.startsWith('ph-'), id).toBe(true);
  });

  it('only use bundled photos that are credited, free of rights, and used once', () => {
    const files = readdirSync(dir).filter((f) => f.endsWith('.jpg'));
    expect(files.sort()).toEqual(photoCredits.map((c) => c.file).sort());
    for (const c of photoCredits) {
      expect(['CC0', 'Public domain'], c.file).toContain(c.license);
      expect(c.author.length, c.file).toBeGreaterThan(2);
      expect(c.source.startsWith('https://commons.wikimedia.org/wiki/File:'), c.file).toBe(true);
    }
    const used = allPhotos.map((t) => t.photo);
    expect(new Set(used).size, 'a photo is used twice').toBe(used.length);
    for (const t of allPhotos) {
      expect(photoCreditByFile[t.photo], `${t.id}: ${t.photo} has no credit`).toBeDefined();
      expect(existsSync(join(dir, t.photo)), t.photo).toBe(true);
    }
    expect(used.sort(), 'every downloaded photo is used').toEqual(files.sort());
  });

  it('have help texts and a description of the photo in every language', () => {
    for (const t of allPhotos) {
      for (const lang of LANGS) {
        expect(t.topic[lang].length, `${t.id}/topic/${lang}`).toBeGreaterThan(3);
        expect(t.alt[lang].length, `${t.id}/alt/${lang}`).toBeGreaterThan(40);
        expect(t.tip[lang].length, `${t.id}/tip/${lang}`).toBeGreaterThan(10);
      }
      expect(/[؀-ۿ]/.test(t.alt.ar) && /[؀-ۿ]/.test(t.tip.ar), t.id).toBe(true);
    }
  });

  it('give a thirty-second model that places things and names the expected ideas', () => {
    for (const t of allPhotos) {
      const n = words(t.model);
      expect(n, t.id).toBeGreaterThanOrEqual(40);
      expect(n, t.id).toBeLessThanOrEqual(80);
      expect(/\d|%|&/.test(t.model), t.id).toBe(false);
      const f = describeFeatures(t.model);
      expect(f.places.length, `${t.id}: no expression of place`).toBeGreaterThanOrEqual(1);
      expect(f.presentContinuous.length > 0 || /\bthere (is|are)\b/i.test(t.model), `${t.id}: no action or "there is"`).toBe(true);
      expect(t.keywords.length, t.id).toBeGreaterThanOrEqual(3);
      for (const k of t.keywords) expect(mentions(t.model, k), `${t.id}: ${k}`).toBe(true);
    }
  });
});
