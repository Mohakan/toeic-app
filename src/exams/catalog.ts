/**
 * The Toki Quest family: one code base, one store app per exam (see docs/multi-examens/plan.md).
 * A build picks its exam with EXPO_PUBLIC_EXAM (read by app.config.ts for the store identity and
 * inlined in the bundle for the app itself); without it, the build is the TOEIC app.
 *
 * Plain data only: app.config.ts imports this file, so it must not import React Native.
 */

export type ExamId = 'toeic' | 'b2First' | 'ieltsAcademic';

export interface ExamScale {
  min: number;
  max: number;
  step: number;
}

export interface ExamVariant {
  id: ExamId;
  /** 'live' can be built; 'planned' reserves the names and ids but has no content yet. */
  status: 'live' | 'planned';
  /**
   * Name under the icon and in the store. It never contains the exam's trademark (Apple 5.2.1,
   * Google Play metadata policy): the exam is named in the subtitle, with the notice below.
   */
  appName: string;
  /** EAS project slug. */
  slug: string;
  /** iOS bundle identifier and Android package. */
  bundleId: string;
  /** In-app purchase of the full plan. */
  productId: string;
  /** The exam as the store subtitle names it, with its mark. */
  examLabel: string;
  /** Owner of the exam's trademarks, for the "not affiliated" notice. */
  markOwner: string;
  /** Official score scale of the whole exam. */
  scale: ExamScale;
  /**
   * Icons made by scripts/make-icons.cjs for this app, with the background color of the Android
   * adaptive icon. Without it, the app uses the icons of app.json (TOEIC).
   */
  icons?: { dir: string; background: string };
}

export const EXAMS: Record<ExamId, ExamVariant> = {
  toeic: {
    id: 'toeic',
    status: 'live',
    appName: 'Toki Quest',
    slug: 'toki-quest',
    bundleId: 'app.tokiquest',
    productId: 'toki_quest_full',
    examLabel: 'TOEIC® Listening & Reading',
    markOwner: 'ETS',
    scale: { min: 10, max: 990, step: 5 },
  },
  b2First: {
    id: 'b2First',
    status: 'live',
    appName: 'Toki Quest B2',
    slug: 'toki-quest-b2',
    bundleId: 'app.tokiquest.b2',
    productId: 'toki_quest_b2_full',
    examLabel: 'Cambridge English B2 First',
    markOwner: 'Cambridge University Press & Assessment',
    // Cambridge English Scale; B2 First reports 122 to 190 and passes from 160.
    scale: { min: 122, max: 190, step: 1 },
    icons: { dir: './assets/b2', background: '#EFEDFF' },
  },
  ieltsAcademic: {
    id: 'ieltsAcademic',
    status: 'planned',
    appName: 'Toki Quest Academic',
    slug: 'toki-quest-academic',
    bundleId: 'app.tokiquest.academic',
    productId: 'toki_quest_academic_full',
    examLabel: 'IELTS™ Academic',
    markOwner: 'the British Council, IDP IELTS and Cambridge University Press & Assessment',
    // Overall band score, in half bands.
    scale: { min: 0, max: 9, step: 0.5 },
  },
};

/** The exam of a build, from the EXPO_PUBLIC_EXAM value; no value means the TOEIC app. */
export function examFrom(value: string | undefined): ExamVariant {
  const id = value && value.length > 0 ? value : 'toeic';
  if (!(id in EXAMS)) throw new Error(`Unknown exam "${id}". Expected one of: ${Object.keys(EXAMS).join(', ')}.`);
  return EXAMS[id as ExamId];
}
