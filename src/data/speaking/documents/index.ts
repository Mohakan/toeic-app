import type { DocumentTask, SpeakingDocument } from '../../../types';
import { documentsA1 } from './a1';
import { documentsA2 } from './a2';
import { documentsB1 } from './b1';
import { documentsB2 } from './b2';
import { documentsC1 } from './c1';
import { simulationDocuments } from '../simulations';

/** TOEIC Speaking tasks 8-10: 30 documents with 3 questions each (6 per CEFR band). */
export const documentTasks: DocumentTask[] = [...documentsA1, ...documentsA2, ...documentsB1, ...documentsB2, ...documentsC1];

/** Practice documents and simulation documents, which are not listed for practice. */
export const documentTaskById = Object.fromEntries([...documentTasks, ...simulationDocuments].map((d) => [d.id, d])) as Record<string, DocumentTask>;

/**
 * What is heard for question `index`, one line per utterance: the caller introduces themself
 * before the first question, and the last question is heard twice, as in the test.
 */
export function questionAudio(task: DocumentTask, index: number): string {
  const prompt = task.questions[index].prompt;
  const lines = [index === 0 ? task.caller : '', prompt, index === task.questions.length - 1 ? prompt : ''];
  return lines.filter(Boolean).join('\n');
}

/** Every piece of text of a document, as one string (for checks and keyword matching). */
export const documentText = (doc: SpeakingDocument) => [doc.title, doc.subtitle ?? '', ...(doc.header ?? []), ...doc.rows.flat(), doc.note ?? ''].join(' \n ');
