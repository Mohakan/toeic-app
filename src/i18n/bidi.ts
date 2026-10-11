/**
 * Bidirectional text: Arabic help texts often quote English («I largely agree, as long as…»).
 * Punctuation such as "…", "." or a closing quote is neutral for the Unicode bidi algorithm, so
 * between English and Arabic it takes the paragraph direction and jumps to the wrong side.
 * Wrapping each Latin run in a left-to-right isolate (LRI … PDI) keeps it in one piece.
 */

const LRI = '⁦';
const PDI = '⁩';

/** Letters and digits that start or end a Latin run (accented Latin letters included). */
const EDGE = 'A-Za-z0-9À-ɏ';
/** What may appear inside a run: spaces and the punctuation of an English quotation. */
const INSIDE = `${EDGE}\\s'’.,!?;:\\-–—/()“”"+%&=…`;
/** A run may end with a letter, a digit or closing punctuation that belongs to the English text. */
const END = `${EDGE}.…?!)”"’%`;

const LATIN_RUN = new RegExp(`[${EDGE}](?:[${INSIDE}]*[${END}])?`, 'g');

/** Wraps every Latin run of a right-to-left text in an LTR isolate. Text without Latin runs is unchanged. */
export function isolateLatin(text: string): string {
  if (!text.includes(LRI)) {
    return text.replace(LATIN_RUN, (run: string, offset: number) => {
      // A final ".", "?" or "!" belongs to the quotation only when a closing quote follows;
      // otherwise it ends the Arabic sentence and must stay outside the isolate.
      const next = text[offset + run.length] ?? '';
      const tail = /[.?!]$/.test(run) && !/[»”"’]/.test(next) ? run.match(/[.?!]+$/)![0] : '';
      const body = tail ? run.slice(0, -tail.length) : run;
      return `${LRI}${body}${PDI}${tail}`;
    });
  }
  return text; // already isolated: the marks are only ever added here
}
