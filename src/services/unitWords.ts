import { vocab } from '../data/vocab';
import type { ExerciseSet, Unit, VocabWord } from '../types';

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const patterns = new Map(vocab.map((w) => [w.id, new RegExp(`\\b${escape(w.en)}(s|es|ed|d|ing)?\\b`, 'i')]));

/** A unit reuses words of its own CEFR band and of the band just below it. */
export const inBand = (word: VocabWord, level: number) => word.level <= level && word.level >= level - 1;

function textOf(set: ExerciseSet): string {
  return set.exercises
    .flatMap((e) =>
      e.kind === 'mcq' ? [e.item.prompt, e.item.passage ?? '', e.item.audio ?? '', ...e.item.options] : e.kind === 'order' ? [e.answer.join(' ')] : [],
    )
    .join('\n');
}

/**
 * Vocabulary practiced in a set: words of the unit's band that appear in its texts, plus the words of
 * its matching exercises. These enter the learner's word deck when the set is completed.
 */
export function setWords(set: ExerciseSet, level: number): string[] {
  const text = textOf(set);
  const found = vocab.filter((w) => inBand(w, level) && patterns.get(w.id)!.test(text)).map((w) => w.id);
  const matched = set.exercises.flatMap((e) => (e.kind === 'match' ? e.wordIds : []));
  return [...new Set([...matched, ...found])];
}

export const unitWords = (unit: Unit): string[] => [...new Set(unit.sets.flatMap((s) => setWords(s, unit.level)))];
