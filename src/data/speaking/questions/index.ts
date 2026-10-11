import type { QuestionSet, SpeakingQuestion } from '../../../types';
import { questionsA1 } from './a1';
import { questionsA2 } from './a2';
import { questionsB1 } from './b1';
import { questionsB2 } from './b2';
import { questionsC1 } from './c1';
import { simulationQuestionSets } from '../simulations';

/** TOEIC Speaking tasks 5-7: 30 scenarios of 3 questions (6 per CEFR band). */
export const questionSets: QuestionSet[] = [...questionsA1, ...questionsA2, ...questionsB1, ...questionsB2, ...questionsC1];

/** Practice sets and simulation sets, which are not listed for practice. */
export const questionSetById = Object.fromEntries([...questionSets, ...simulationQuestionSets].map((s) => [s.id, s])) as Record<string, QuestionSet>;

export const speakingQuestions: SpeakingQuestion[] = questionSets.flatMap((s) => s.questions);
