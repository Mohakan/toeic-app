/**
 * Who publishes the app, for the legal notice, the terms and the privacy policy. Everything left at
 * null shows as "to complete" in the texts: fill these in before publishing (see store/conformite.md).
 */
export interface Publisher {
  /** Company name, or the individual's name. */
  name: string | null;
  /** Legal form and share capital, for example "SARL au capital de 10 000 DT". */
  legalForm: string | null;
  address: string | null;
  /** Registre national des entreprises (Tunisia) or equivalent. */
  registration: string | null;
  /** Matricule fiscal. */
  taxId: string | null;
  /** Director of publication. */
  director: string | null;
  contactEmail: string | null;
  /** Address for personal-data requests (may be the same). */
  privacyEmail: string | null;
  /** Host of the server: name, address and country. */
  host: string | null;
  /** E-mail delivery provider (password codes). */
  mailProvider: string | null;
  /** INPDP declaration or authorization number, once obtained; 'pending' while the declaration is in progress. */
  inpdpNumber: string | 'pending' | null;
}

// Company details as published by the same company on its other website (checked 2026-10-08).
// Contact addresses must be Toki Quest's own: an address on the partner's domain would name it in the app.
export const PUBLISHER: Publisher = {
  name: 'EliteBox',
  legalForm: 'SUARL au capital de 5 000 DT',
  address: 'Avenue Habib Khanfir, 3041 Sfax, Tunisie',
  registration: '1770372T',
  taxId: '1770372T/A/M/000',
  director: 'Zoubeir KANOUN, gérant',
  contactEmail: 'support@elitebox-consulting.com',
  privacyEmail: 'support@elitebox-consulting.com',
  host: 'Contabo GmbH, Welfenstrasse 22, 81541 Munich, Allemagne',
  mailProvider: 'Contabo GmbH',
  inpdpNumber: 'pending',
};

/** Date of the current version of the three texts. */
export const LEGAL_UPDATED = '2026-10-08';

export const missingPublisherFields = (p: Publisher = PUBLISHER) => (Object.keys(p) as (keyof Publisher)[]).filter((k) => p[k] === null);
