import { describe, expect, it } from 'vitest';
import { assessResponse, connectorsUsed, describeFeatures, mentions, stem } from './responseFeedback';

describe('stem', () => {
  it('matches common inflections without over-cutting short words', () => {
    expect(stem('visits')).toBe('visit');
    expect(stem('visited')).toBe('visit');
    expect(stem('visiting')).toBe('visit');
    expect(stem('cities')).toBe('city');
    expect(stem('bus')).toBe('bus');
    expect(stem('news')).toBe('news');
  });
});

describe('mentions', () => {
  it('accepts any alternative, including multi-word phrases and inflections', () => {
    expect(mentions('I usually go there on Saturdays.', 'weekend|saturday|sunday')).toBe(true);
    expect(mentions('It takes about twenty minutes by bus', 'by bus|by car|on foot')).toBe(true);
    expect(mentions('I take the bus', 'by bus|by car')).toBe(false);
    expect(mentions('I visited my parents', 'visit')).toBe(true);
  });

  it('works with digits written by the recognizer', () => {
    expect(mentions('about 20 minutes', 'twenty minutes|half an hour')).toBe(true);
  });
});

describe('assessResponse', () => {
  it('reports a full answer with its keywords and pace', () => {
    const f = assessResponse('I usually go to the gym on weekends because it helps me relax after work', 15, ['weekend|saturday', 'because|since', 'relax|stress'], 12);
    expect(f.answered).toBe(true);
    expect(f.words).toBe(15);
    expect(f.length).toBe('ok');
    expect(f.wordsPerMinute).toBe(75);
    expect(assessResponse('I usually go to the gym', 15, [], 2).wordsPerMinute).toBeNull();
    expect(f.keywords.map((k) => k.found)).toEqual([true, true, true]);
    expect(f.keywords[0].label).toBe('weekend');
  });

  it('flags a short answer and the missing ideas, without any score', () => {
    const f = assessResponse('yes I like it', 30, ['because', 'example|for instance']);
    expect(f.length).toBe('short');
    expect(f.keywords.every((k) => !k.found)).toBe(true);
    expect(f).not.toHaveProperty('score');
  });

  it('treats silence or one or two words as no answer', () => {
    expect(assessResponse('', 15, ['x']).length).toBe('none');
    expect(assessResponse('um yes', 15, ['x']).answered).toBe(false);
  });
});

describe('length of a one-minute opinion', () => {
  it('expects a developed answer: 36 words in 60 s is short', () => {
    const answer = Array.from({ length: 36 }, () => 'word').join(' ');
    expect(assessResponse(answer, 60, []).length).toBe('short');
    expect(assessResponse(`${answer} ${answer}`, 60, []).length).toBe('ok');
  });
});

describe('connectorsUsed', () => {
  it('finds the linking words of an argument, by kind', () => {
    const used = connectorsUsed("In my opinion, it's useful because it saves time. For example, I study on the bus. However, it's tiring, so I take breaks.");
    const byKind = Object.fromEntries(used.map((u) => [u.kind, u.heard]));
    expect(byKind.opinion).toEqual(['in my opinion']);
    expect(byKind.reason).toEqual(['because']);
    expect(byKind.example).toEqual(['for example']);
    expect(byKind.contrast).toEqual(['however']);
    expect(byKind.conclusion).toEqual(['so']);
    expect(byKind.addition).toEqual([]);
  });

  it('does not see a connector inside another word', () => {
    expect(connectorsUsed('The soup is also good').find((u) => u.kind === 'conclusion')!.heard).toEqual([]);
  });
});

describe('describeFeatures', () => {
  it('finds the present continuous and the expressions of place of a photo description', () => {
    const f = describeFeatures("In the foreground, a man is sitting on a bench. Two women are walking behind him. There's a bus on the left. The building is interesting.");
    expect(f.presentContinuous).toEqual(['is sitting', 'are walking']);
    expect(f.places).toEqual(['in the foreground', 'on the left', 'behind']);
  });
});
