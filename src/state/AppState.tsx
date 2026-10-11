import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { getLocales } from 'expo-localization';
import { FREE_PLAN, type Plan, type Trial } from '../services/access';
import { DEFAULT_ERROR_SOUND, DEFAULT_SUCCESS_SOUND, ERROR_SOUNDS, SUCCESS_SOUNDS, type ErrorSound, type SuccessSound } from '../services/feedbackSound';
import { applyReview, scheduleMisses, type ReviewQueue } from '../services/review';
import { applySetResult, migrateUnitResult, type UnitResult } from '../services/sets';
import { listening } from '../services/speech';
import type { ItemResponse, Lang, MockResult, Placement, SpeechAttempt, SpeechConsent } from '../types';
import { examConfig } from '../exams/current';

export type { UnitResult } from '../services/sets';

const STORAGE_KEY = 'toeic-quest/v1';

export interface AppData {
  lang: Lang;
  name: string;
  target: number;
  dailyGoalMin: number;
  onboarded: boolean;
  placement: Placement | null;
  xp: number;
  streak: number;
  lastActiveDay: string | null;
  xpByDay: Record<string, number>;
  units: Record<string, UnitResult>;
  /** Leitner box (0-4) per vocabulary word, with the next review day. */
  cards: Record<string, { box: number; due: string }>;
  /** First-try answers from lessons, used to keep the level estimate up to date. */
  practiceResponses: ItemResponse[];
  /** English voice chosen for listening, if the learner picked one. */
  voiceId: string | null;
  /** Sound effects: after an answer in lessons and reviews, and for a finished unit or a new level. */
  soundEffects: boolean;
  /** Which of the three success and error sounds the learner prefers. */
  successSound: SuccessSound;
  errorSound: ErrorSound;
  /** Exercises missed on first try, scheduled for spaced review. */
  reviewQueue: ReviewQueue;
  mockResults: MockResult[];
  /** Microphone choice for the Speaking track; null until the learner has been asked. */
  speechConsent: SpeechConsent | null;
  /** Read-aloud results: recognized text and indicators only, never audio. */
  speechAttempts: SpeechAttempt[];
  /** Free trial or full plan (see prompts/commercialisation.md). */
  plan: Plan;
  /** Content opened by the trial, fixed at the first placement test; null until then. */
  trial: Trial | null;
  /** Signed-in account (lot M3); the session token itself lives in the device's secure storage. */
  account: Account | null;
  /** Last time the server confirmed the plan (ISO date-time); null without an account. */
  planCheckedAt: string | null;
}

export interface Account {
  email: string;
}

export const XP_PER_MINUTE = 10;

export const dayKey = (d = new Date()): string => {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
};

const addDays = (key: string, n: number): string => {
  const [y, m, d] = key.split('-').map(Number);
  return dayKey(new Date(y, m - 1, d + n));
};

export const BOX_INTERVAL_DAYS = [0, 1, 3, 7, 14];

function defaultLang(): Lang {
  try {
    const code = getLocales()[0]?.languageCode;
    if (code === 'ar' || code === 'fr' || code === 'en' || code === 'es') return code;
  } catch {
    // Locale lookup is a nicety; fall back to French below.
  }
  return 'fr';
}

export const freshData = (): AppData => ({
  lang: defaultLang(),
  name: '',
  target: examConfig.defaultGoal,
  dailyGoalMin: 10,
  onboarded: false,
  placement: null,
  xp: 0,
  streak: 0,
  lastActiveDay: null,
  xpByDay: {},
  units: {},
  cards: {},
  practiceResponses: [],
  voiceId: null,
  soundEffects: true,
  successSound: DEFAULT_SUCCESS_SOUND,
  errorSound: DEFAULT_ERROR_SOUND,
  reviewQueue: {},
  mockResults: [],
  speechConsent: null,
  speechAttempts: [],
  plan: FREE_PLAN,
  trial: null,
  account: null,
  planCheckedAt: null,
});

export const MAX_PRACTICE_RESPONSES = 400;
const MAX_MOCK_RESULTS = 30;
const MAX_SPEECH_ATTEMPTS = 100;

/** Placements saved before the IRT engine have no section scores and must be retaken. */
function migrate(saved: Partial<AppData>): AppData {
  const data = { ...freshData(), ...saved };
  if (data.placement && !('sections' in data.placement)) data.placement = null;
  if (!SUCCESS_SOUNDS.includes(data.successSound)) data.successSound = DEFAULT_SUCCESS_SOUND;
  if (!ERROR_SOUNDS.includes(data.errorSound)) data.errorSound = DEFAULT_ERROR_SOUND;
  if (data.plan?.tier !== 'free' && data.plan?.tier !== 'full') data.plan = FREE_PLAN;
  if (data.account && typeof data.account.email !== 'string') data.account = null;
  if (data.trial && !(Array.isArray(data.trial.units) && Array.isArray(data.trial.speaking))) data.trial = null;
  data.units = Object.fromEntries(Object.entries(data.units).map(([id, r]) => [id, migrateUnitResult(r)]));
  return data;
}

interface AppContextValue {
  data: AppData;
  ready: boolean;
  update: (patch: Partial<AppData>) => void;
  addXp: (amount: number) => void;
  completeSet: (unitId: string, setId: string, accuracy: number, stars: number) => void;
  scheduleReview: (unitId: string, keys: string[]) => void;
  recordReview: (key: string, correct: boolean) => void;
  saveMockResult: (result: MockResult) => void;
  reviewCard: (wordId: string, known: boolean) => void;
  addPracticeResponses: (responses: ItemResponse[]) => void;
  setSpeechConsent: (granted: boolean) => void;
  recordSpeechAttempt: (attempt: SpeechAttempt) => void;
  /** Withdraws consent and deletes every speaking result. */
  clearSpeechData: () => void;
  reset: () => Promise<void>;
}

const AppContext = createContext<AppContextValue | null>(null);

/** Streak counts consecutive days with at least one earned XP. */
export function nextStreak(data: Pick<AppData, 'streak' | 'lastActiveDay'>, today: string): number {
  if (data.lastActiveDay === today) return data.streak;
  if (data.lastActiveDay === addDays(today, -1)) return data.streak + 1;
  return 1;
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<AppData>(freshData);
  const [ready, setReady] = useState(false);
  const loaded = useRef(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(STORAGE_KEY);
        if (raw && !cancelled) setData(migrate(JSON.parse(raw)));
      } catch (error) {
        console.warn('Could not read saved progress, starting fresh.', error);
      } finally {
        loaded.current = true;
        if (!cancelled) setReady(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!loaded.current) return;
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data)).catch((error) =>
      console.warn('Could not save progress.', error),
    );
  }, [data]);

  useEffect(() => listening.setPreferred(data.voiceId), [data.voiceId]);

  const update = useCallback((patch: Partial<AppData>) => setData((d) => ({ ...d, ...patch })), []);

  const addXp = useCallback((amount: number) => {
    setData((d) => {
      const today = dayKey();
      return {
        ...d,
        xp: d.xp + amount,
        streak: nextStreak(d, today),
        lastActiveDay: today,
        xpByDay: { ...d.xpByDay, [today]: (d.xpByDay[today] ?? 0) + amount },
      };
    });
  }, []);

  const completeSet = useCallback((unitId: string, setId: string, accuracy: number, stars: number) => {
    setData((d) => ({ ...d, units: { ...d.units, [unitId]: applySetResult(d.units[unitId], setId, accuracy, stars) } }));
  }, []);

  const scheduleReview = useCallback((unitId: string, keys: string[]) => {
    if (keys.length === 0) return;
    setData((d) => ({ ...d, reviewQueue: scheduleMisses(d.reviewQueue, unitId, keys, dayKey()) }));
  }, []);

  const recordReview = useCallback((key: string, correct: boolean) => {
    setData((d) => ({ ...d, reviewQueue: applyReview(d.reviewQueue, key, correct, dayKey()) }));
  }, []);

  const saveMockResult = useCallback((result: MockResult) => {
    setData((d) => ({ ...d, mockResults: [...d.mockResults, result].slice(-MAX_MOCK_RESULTS) }));
  }, []);

  const reviewCard = useCallback((wordId: string, known: boolean) => {
    setData((d) => {
      const today = dayKey();
      const box = known ? Math.min(4, (d.cards[wordId]?.box ?? 0) + 1) : 0;
      return {
        ...d,
        cards: { ...d.cards, [wordId]: { box, due: addDays(today, BOX_INTERVAL_DAYS[box]) } },
      };
    });
  }, []);

  const addPracticeResponses = useCallback((responses: ItemResponse[]) => {
    if (responses.length === 0) return;
    setData((d) => ({ ...d, practiceResponses: [...d.practiceResponses, ...responses].slice(-MAX_PRACTICE_RESPONSES) }));
  }, []);

  const setSpeechConsent = useCallback((granted: boolean) => {
    setData((d) => ({ ...d, speechConsent: { granted, date: dayKey() } }));
  }, []);

  const recordSpeechAttempt = useCallback((attempt: SpeechAttempt) => {
    setData((d) => ({ ...d, speechAttempts: [...d.speechAttempts, attempt].slice(-MAX_SPEECH_ATTEMPTS) }));
  }, []);

  const clearSpeechData = useCallback(() => {
    setData((d) => ({ ...d, speechConsent: null, speechAttempts: [] }));
  }, []);

  const reset = useCallback(async () => {
    await AsyncStorage.removeItem(STORAGE_KEY);
    setData({ ...freshData(), lang: data.lang });
  }, [data.lang]);

  const value = useMemo(
    () => ({
      data,
      ready,
      update,
      addXp,
      completeSet,
      scheduleReview,
      recordReview,
      saveMockResult,
      reviewCard,
      addPracticeResponses,
      setSpeechConsent,
      recordSpeechAttempt,
      clearSpeechData,
      reset,
    }),
    [data, ready, update, addXp, completeSet, scheduleReview, recordReview, saveMockResult, reviewCard, addPracticeResponses, setSpeechConsent, recordSpeechAttempt, clearSpeechData, reset],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used inside AppProvider');
  return ctx;
}
