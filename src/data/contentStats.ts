import type { Exercise, ToeicPart } from '../types';
import { mockTests } from './mock';
import { documentTasks } from './speaking/documents';
import { opinionTopics } from './speaking/opinions';
import { photoTasks } from './speaking/photos';
import { simulations } from './speaking/simulations';
import { speakingQuestions } from './speaking/questions';
import { readAloudTasks } from './speaking/readAloud';
import { allExercises, units } from './units';
import { vocab } from './vocab';

/**
 * Study-time model behind `npm run content:stats`. Each assumption is explicit so the 60-hour goal
 * is measured the same way every time content is added.
 */
export const TIME_MODEL = {
  minutesByPart: { L2: 1, L3: 2, L4: 2, R5: 1, R6: 1.5, R7: 1.5 } as Record<ToeicPart, number>,
  orderMinutes: 1,
  matchMinutes: 2,
  /** Reading time of a Part 6/7 text, counted once per distinct text (several questions can share one). */
  passageMinutesPer50Words: 0.25,
  /** Missed exercises replayed at the end of a lesson. */
  retryShare: 0.2,
  /** Exercises coming back in the spaced review queue. */
  reviewShare: 0.12,
  lessonMinutes: 3,
  vocabSecondsPerWord: 25,
  /** TOEIC Speaking track, counted apart from the 60 hours of Listening & Reading. */
  speakingMinutes: { readAloud: 3, photo: 2, question: 1.5, document: 2, opinion: 3, simulation: 20 },
};

const exerciseMinutes = (e: Exercise): number => {
  if (e.kind === 'order') return TIME_MODEL.orderMinutes;
  if (e.kind === 'match') return TIME_MODEL.matchMinutes;
  return TIME_MODEL.minutesByPart[e.item.part];
};

const wordCount = (s: string) => s.split(/\s+/).filter(Boolean).length;

export interface ContentStats {
  hours: { lessons: number; exercises: number; retries: number; review: number; mocks: number; vocab: number; total: number };
  units: number;
  unitsByLevel: Record<number, number>;
  sets: number;
  exercises: number;
  exercisesByLevel: Record<number, number>;
  exercisesByPart: Record<string, number>;
  mockTests: { full: number; mini: number; demo: number; items: number };
  words: number;
  wordsByLevel: Record<number, number>;
  wordsByTheme: Record<string, number>;
  speaking: { readAloud: number; photos: number; questions: number; documentQuestions: number; opinions: number; simulations: number; hours: number };
}

const tally = <T,>(list: T[], key: (x: T) => string | number) =>
  list.reduce<Record<string, number>>((acc, x) => {
    const k = String(key(x));
    acc[k] = (acc[k] ?? 0) + 1;
    return acc;
  }, {});

const documentQuestions = documentTasks.flatMap((task) => task.questions);

export function contentStats(): ContentStats {
  const exercises = allExercises.map((x) => x.exercise);
  const passages = new Set(exercises.flatMap((e) => (e.kind === 'mcq' && e.item.passage && e.item.skill !== 'listening' ? [e.item.passage] : [])));
  const passageMinutes = [...passages].reduce((m, p) => m + (wordCount(p) / 50) * TIME_MODEL.passageMinutesPer50Words, 0);
  const exerciseMin = exercises.reduce((m, e) => m + exerciseMinutes(e), 0) + passageMinutes;
  const realMocks = mockTests.filter((m) => !m.demo);

  const hours = {
    lessons: (units.length * TIME_MODEL.lessonMinutes) / 60,
    exercises: exerciseMin / 60,
    retries: (exerciseMin * TIME_MODEL.retryShare) / 60,
    review: (exerciseMin * TIME_MODEL.reviewShare) / 60,
    mocks: realMocks.reduce((m, t) => m + t.durationMin, 0) / 60,
    vocab: (vocab.length * TIME_MODEL.vocabSecondsPerWord) / 3600,
    total: 0,
  };
  hours.total = hours.lessons + hours.exercises + hours.retries + hours.review + hours.mocks + hours.vocab;

  return {
    hours,
    units: units.length,
    unitsByLevel: tally(units, (u) => u.level) as unknown as Record<number, number>,
    sets: units.reduce((n, u) => n + u.sets.length, 0),
    exercises: exercises.length,
    exercisesByLevel: tally(allExercises, (x) => (x.exercise.kind === 'mcq' ? x.exercise.item.level : x.unit.level)) as unknown as Record<number, number>,
    exercisesByPart: tally(exercises, (e) => (e.kind === 'mcq' ? e.item.part : e.kind)),
    mockTests: {
      full: realMocks.filter((m) => m.kind === 'full').length,
      mini: realMocks.filter((m) => m.kind === 'mini').length,
      demo: mockTests.length - realMocks.length,
      items: realMocks.reduce((n, m) => n + m.sections.reduce((k, s) => k + s.items.length, 0), 0),
    },
    words: vocab.length,
    wordsByLevel: tally(vocab, (w) => w.level) as unknown as Record<number, number>,
    wordsByTheme: tally(vocab, (w) => w.theme),
    speaking: {
      readAloud: readAloudTasks.length,
      photos: photoTasks.length,
      questions: speakingQuestions.length,
      documentQuestions: documentQuestions.length,
      opinions: opinionTopics.length,
      simulations: simulations.length,
      hours:
        (readAloudTasks.length * TIME_MODEL.speakingMinutes.readAloud +
          photoTasks.length * TIME_MODEL.speakingMinutes.photo +
          speakingQuestions.length * TIME_MODEL.speakingMinutes.question +
          documentQuestions.length * TIME_MODEL.speakingMinutes.document +
          opinionTopics.length * TIME_MODEL.speakingMinutes.opinion +
          simulations.length * TIME_MODEL.speakingMinutes.simulation) /
        60,
    },
  };
}
