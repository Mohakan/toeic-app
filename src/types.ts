export type Lang = 'fr' | 'ar' | 'en' | 'es';
export type Localized = Record<Lang, string>;

export type Skill = 'grammar' | 'vocab' | 'reading' | 'listening';
export type Cefr = 'A1' | 'A2' | 'B1' | 'B2' | 'C1';

/** TOEIC section a question is modelled on (L = Listening, R = Reading). */
export type ToeicPart = 'L2' | 'L3' | 'L4' | 'R5' | 'R6' | 'R7';

/**
 * Cambridge English B2 First: Reading and Use of English Parts 1-7 (RU1-RU7) and Listening
 * Parts 1-4 (LI1-LI4). Writing and Speaking are not modelled yet.
 */
export type B2Part = 'RU1' | 'RU2' | 'RU3' | 'RU4' | 'RU5' | 'RU6' | 'RU7' | 'LI1' | 'LI2' | 'LI3' | 'LI4';

/** A part of any exam of the Toki Quest family; each exam lists its own in src/exams/config.ts. */
export type ExamPart = ToeicPart | B2Part;

export interface McqItem {
  id: string;
  skill: Skill;
  part: ExamPart;
  /** 1 (A1) to 6 (C1+) */
  level: number;
  prompt: string;
  passage?: string;
  /** Text read aloud by speech synthesis for listening items. */
  audio?: string;
  options: string[];
  answer: number;
  explain: Localized;
  /** Overrides the provisional IRT parameters derived from `level`. */
  irt?: Partial<ItemParams>;
}

export type VocabTheme =
  | 'office'
  | 'hr'
  | 'travel'
  | 'finance'
  | 'marketing'
  | 'purchasing'
  | 'production'
  | 'technology'
  | 'dining'
  | 'events'
  | 'health'
  | 'property'
  | 'legal'
  | 'environment';

export interface VocabWord {
  id: string;
  en: string;
  emoji: string;
  fr: string;
  ar: string;
  es: string;
  example: string;
  theme: VocabTheme;
  /** CEFR band 1 (A1) to 5 (C1). */
  level: number;
}

/** Short lesson shown before the exercises of a unit. */
export interface UnitLesson {
  goal: Localized;
  points: Localized[];
  example: { en: string; note: Localized };
}

export type Exercise =
  | { kind: 'mcq'; item: McqItem }
  | { kind: 'order'; id: string; words: string[]; answer: string[]; hint: Localized; explain: Localized }
  | { kind: 'match'; id: string; wordIds: string[]; explain: Localized };

export interface Unit {
  id: string;
  emoji: string;
  /** CEFR band the unit is written for: 1 (A1) to 5 (C1). */
  level: number;
  title: Localized;
  subtitle: Localized;
  part: string;
  lesson: UnitLesson;
  /** Alternative exercise sets on the same skill; replaying a unit serves the next set. */
  sets: ExerciseSet[];
}

export interface ExerciseSet {
  id: string;
  exercises: Exercise[];
}

/** Leitner entry for an exercise missed on first try. */
export interface ReviewEntry {
  key: string;
  unitId: string;
  /** 0-4, mapped to 1, 3, 7, 14 and 30 days. */
  box: number;
  due: string;
}

export interface MockTest {
  id: string;
  kind: 'full' | 'mini';
  title: Localized;
  durationMin: number;
  /** Assembled from lesson items to exercise the feature until dedicated mock content exists. */
  demo?: boolean;
  sections: { part: ExamPart; items: McqItem[] }[];
}

export interface MockResult {
  mockId: string;
  date: string;
  answered: number;
  correct: number;
  total: number;
  timeUsedSec: number;
  byPart: Partial<Record<ExamPart, SkillScore>>;
  listening: number | null;
  reading: number | null;
}

export interface SkillScore {
  correct: number;
  total: number;
}

/**
 * The two measured sections. TOEIC reports them as Listening and Reading (5-495 each); B2 First
 * maps them to its Listening and Reading and Use of English papers (Cambridge English Scale).
 */
export type Section = 'L' | 'R';

export interface ItemParams {
  a: number;
  b: number;
  c: number;
}

export interface ItemResponse {
  itemId: string;
  section: Section;
  skill: Skill;
  level: number;
  params: ItemParams;
  correct: boolean;
  /** The learner chose "I don't know" instead of guessing. */
  dontKnow?: boolean;
  source: 'placement' | 'practice' | 'review' | 'mock';
  /** Ability estimate and standard error for the section right after this answer. */
  thetaAfter?: number;
  seAfter?: number;
}

export interface SectionResult {
  theta: number;
  se: number;
  score: number;
  /** 90% confidence interval on the scaled score. */
  low: number;
  high: number;
  cefr: Cefr;
  answered: number;
  correct: number;
}

export interface LevelEstimate {
  sections: Record<Section, SectionResult>;
  total: { score: number; low: number; high: number };
  cefr: Cefr;
  /** Path level 1-6 derived from the mean section ability. */
  level: number;
}

export interface Placement extends LevelEstimate {
  date: string;
  answered: number;
  dontKnow: number;
  bySkill: Record<Skill, SkillScore>;
  responses: ItemResponse[];
}

/** TOEIC Speaking, tasks 1-2: read a short text aloud (45 s to prepare, 45 s to read). */
export interface ReadAloudTask {
  id: string;
  /** CEFR band 1 (A1) to 5 (C1). */
  level: number;
  topic: Localized;
  /** About 40 to 60 words, numbers written as words so the scoring stays fair. */
  text: string;
  tip: Localized;
}

/** Explicit choice about the microphone, asked before its first use. */
export interface SpeechConsent {
  granted: boolean;
  date: string;
}

/** TOEIC Speaking, tasks 5-7: one scenario, then three questions (3 s to prepare; 15 s, 15 s, 30 s to answer). */
export interface QuestionSet {
  id: string;
  /** CEFR band 1 (A1) to 5 (C1). */
  level: number;
  topic: Localized;
  /** Scenario read aloud in English, as in the test. */
  context: string;
  /** The same scenario explained in the help language. */
  contextHelp: Localized;
  questions: SpeakingQuestion[];
}

export interface SpeakingQuestion {
  id: string;
  /** Read aloud and shown on screen. */
  prompt: string;
  responseSec: 15 | 30;
  /** A sample answer that would score well, in English. */
  model: string;
  /** Expected content; each entry may list alternatives separated by "|" ("weekend|saturday"). */
  keywords: string[];
  /** How to build the answer, in the help language. */
  tip: Localized;
}

/** A schedule, agenda or itinerary shown on screen in TOEIC Speaking tasks 8-10. */
export interface SpeakingDocument {
  title: string;
  /** Date, place or organizer, under the title. */
  subtitle?: string;
  /** Column titles, when the table needs them. */
  header?: string[];
  /** Table rows, usually [time, item] or [time, item, detail]. */
  rows: string[][];
  /** Price, registration or other note under the table. */
  note?: string;
}

/**
 * TOEIC Speaking, tasks 8-10: 45 seconds to read a document, then a caller asks three questions
 * that are only heard (3 s to prepare; 15 s, 15 s, 30 s to answer; the last one is heard twice).
 */
export interface DocumentTask {
  id: string;
  /** CEFR band 1 (A1) to 5 (C1). */
  level: number;
  topic: Localized;
  document: SpeakingDocument;
  /** What the document is and who calls, in the help language. */
  documentHelp: Localized;
  /** The caller's introduction, heard before the first question. */
  caller: string;
  /** Keywords are pieces of information taken from the document (time, place, price, name). */
  questions: SpeakingQuestion[];
}

/** TOEIC Speaking, task 11: 45 seconds to prepare, 60 seconds to give and support an opinion. */
export interface OpinionTopic {
  id: string;
  /** CEFR band 1 (A1) to 5 (C1). */
  level: number;
  topic: Localized;
  /** Shown on screen and read aloud, in English. */
  prompt: string;
  /** The same question explained in the help language. */
  promptHelp: Localized;
  /** A sample answer of about one minute, in English. */
  model: string;
  /** Ideas or vocabulary expected on this topic; alternatives separated by "|". */
  keywords: string[];
  tip: Localized;
}

/** Where a photo comes from. Only CC0 or public-domain photos are used, and every one is credited. */
export interface PhotoCredit {
  /** File name in assets/speaking-photos. */
  file: string;
  /** Title of the file on Wikimedia Commons. */
  title: string;
  /** Commons description page. */
  source: string;
  author: string;
  license: 'CC0' | 'Public domain';
  /** Size of the bundled file, in pixels. */
  width: number;
  height: number;
}

/** TOEIC Speaking, tasks 3-4: 45 seconds to prepare, 30 seconds to describe a photo. */
export interface PhotoTask {
  id: string;
  /** CEFR band 1 (A1) to 5 (C1). */
  level: number;
  topic: Localized;
  /** File name in assets/speaking-photos; its credit is in the photo registry. */
  photo: string;
  /** What the photo shows, for learners who cannot see it, in the help language. */
  alt: Localized;
  /** A sample description of about 30 seconds, in English. */
  model: string;
  /** People, actions, places and objects expected in the description; alternatives separated by "|". */
  keywords: string[];
  tip: Localized;
}

/**
 * A timed TOEIC Speaking simulation: the 11 tasks in the official order. Its content is used
 * nowhere else, so the learner meets it for the first time.
 */
export interface SpeakingSimulation {
  id: string;
  title: Localized;
  /** Tasks 1-2. */
  readAloud: [ReadAloudTask, ReadAloudTask];
  /** Tasks 3-4. */
  photos: [PhotoTask, PhotoTask];
  /** Tasks 5-7. */
  questions: QuestionSet;
  /** Tasks 8-10. */
  document: DocumentTask;
  /** Task 11. */
  opinion: OpinionTopic;
}

/** What is kept of a speaking attempt: text and indicators only, never the audio. */
export type SpeechAttempt = ReadAloudAttempt | ResponseAttempt;

export interface ReadAloudAttempt {
  /** Absent in attempts saved before the Speaking questions existed. */
  kind?: 'read';
  taskId: string;
  date: string;
  durationSec: number;
  transcript: string;
  accuracy: number;
  wordsPerMinute: number | null;
  missed: string[];
  /** Set when the attempt was made during a simulation. */
  runId?: string;
}

/** Answer to a question: indicative feedback only, never a score. */
export interface ResponseAttempt {
  kind: 'respond';
  /** Question id. */
  taskId: string;
  date: string;
  durationSec: number;
  transcript: string;
  words: number;
  wordsPerMinute: number | null;
  keywordsFound: number;
  keywordsTotal: number;
  /** Task 11: how many kinds of linking words were used (opinion, reason, example...). */
  connectorsFound?: number;
  /** Set when the attempt was made during a simulation. */
  runId?: string;
}
