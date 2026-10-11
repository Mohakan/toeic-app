import type { Publisher } from './publisher';

/** `sale`: web sale conditions, published on the website only (never shown in the app: store rules). */
export type LegalDoc = 'privacy' | 'terms' | 'notice' | 'sale';
export const APP_LEGAL_DOCS = ['privacy', 'terms', 'notice'] as const;
export type LegalLang = 'fr' | 'ar' | 'en';

/** A paragraph; one starting with "• " is shown as a list item. */
export interface LegalSection {
  title: string;
  body: string[];
}

export interface LegalText {
  title: string;
  sections: LegalSection[];
}

/** Writes a publisher field, or a visible "to complete" mark when it is still missing. */
export type Fill = (value: keyof Publisher) => string;

export type LegalTexts = Record<LegalDoc, (fill: Fill) => LegalText>;
