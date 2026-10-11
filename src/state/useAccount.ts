import { useCallback, useEffect, useMemo, useRef } from 'react';
import { AppState as RNAppState, Platform } from 'react-native';
import { api, API_URL, ApiError, type Session } from '../services/api';
import { mergeServerPlan, planAfterSignOut } from '../services/planCache';
import { purchases } from '../services/purchases';
import { tokenStore } from '../services/tokenStore';
import { useApp } from './AppState';

/** How often the plan is checked again while the app is open or comes back to the foreground. */
const REFRESH_MS = 60 * 60 * 1000;
const DEVICE = `${Platform.OS} app`;

/** Accounts on the Toki Quest server. Progress stays on the device; the server knows the e-mail, birth year and plan. */
export function useAccount() {
  const { data, update } = useApp();
  const plan = data.plan;

  const signedIn = useCallback(
    async (session: Session) => {
      await tokenStore.set(session.token);
      update({ account: { email: session.user.email }, plan: mergeServerPlan(plan, session.plan), planCheckedAt: new Date().toISOString() });
      // A store purchase made before signing in is attached to the account now.
      if (purchases.available)
        purchases.restore({ quiet: true }).then((outcome) => {
          if (outcome.kind === 'purchased') update({ plan: outcome.plan, planCheckedAt: new Date().toISOString() });
        });
    },
    [plan, update],
  );

  const forget = useCallback(async () => {
    await tokenStore.clear().catch(() => {});
    update({ account: null, plan: planAfterSignOut(plan), planCheckedAt: null });
  }, [plan, update]);

  return useMemo(
    () => ({
      available: API_URL !== null,
      account: data.account,
      signUp: async (input: { email: string; password: string; birthYear: number; parentalConsent?: boolean }) =>
        signedIn(await api.signUp({ ...input, lang: data.lang, device: DEVICE })),
      signIn: async (email: string, password: string) => signedIn(await api.signIn(email, password, DEVICE)),
      forgotPassword: (email: string) => api.forgotPassword(email),
      resetPassword: async (email: string, code: string, password: string) => signedIn(await api.resetPassword(email, code, password, DEVICE)),
      /** Ends the session on the server when it can; the device forgets it in any case. */
      signOut: async () => {
        const token = await tokenStore.get().catch(() => null);
        if (token) await api.signOut(token).catch(() => {});
        await forget();
      },
      deleteAccount: async (password: string) => {
        const token = await tokenStore.get();
        if (!token) return forget();
        await api.deleteAccount(token, password);
        await forget();
      },
      forget,
    }),
    [data.account, data.lang, signedIn, forget],
  );
}

/**
 * Keeps the cached plan up to date: at launch, when the app returns to the foreground (at most
 * hourly), and when the help language changes. A revoked session signs the device out.
 */
export function AccountSync() {
  const { data, ready, update } = useApp();
  const { forget } = useAccount();
  const lastCheck = useRef(0);
  const state = useRef({ plan: data.plan, account: data.account, forget, update });
  useEffect(() => {
    state.current = { plan: data.plan, account: data.account, forget, update };
  });

  const refresh = useCallback(async (force: boolean) => {
    const { account } = state.current;
    if (!API_URL || !account || (!force && Date.now() - lastCheck.current < REFRESH_MS)) return;
    lastCheck.current = Date.now();
    const token = await tokenStore.get().catch(() => null);
    if (!token) return state.current.forget();
    try {
      const profile = await api.me(token);
      state.current.update({ plan: mergeServerPlan(state.current.plan, profile.plan), planCheckedAt: new Date().toISOString() });
    } catch (error) {
      if (error instanceof ApiError && error.status === 401) await state.current.forget();
      // Offline or server error: the cached plan stays in force (see planInForce).
    }
  }, []);

  const signedIn = ready && !!data.account;
  useEffect(() => {
    if (!signedIn) return;
    refresh(true);
    const sub = RNAppState.addEventListener('change', (s) => s === 'active' && refresh(false));
    return () => sub.remove();
  }, [signedIn, refresh]);

  const lang = data.lang;
  const firstLang = useRef(true);
  useEffect(() => {
    if (!signedIn) return;
    if (firstLang.current) {
      firstLang.current = false;
      return;
    }
    tokenStore
      .get()
      .then((token) => (token ? api.setLang(token, lang) : undefined))
      .catch(() => {});
  }, [lang, signedIn]);

  return null;
}
