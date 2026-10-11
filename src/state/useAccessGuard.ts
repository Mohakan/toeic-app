import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import type { PaywallReason, RootStackParamList } from '../navigation/types';

/**
 * Keeps a screen out of reach when its content is outside the learner's plan (a deep link, a
 * stale back stack): the screen is replaced by the offer. Returns whether the screen may render.
 */
export function useAccessGuard(allowed: boolean, reason: PaywallReason): boolean {
  const nav = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  useEffect(() => {
    if (!allowed) nav.replace('Paywall', { reason });
  }, [allowed, reason, nav]);
  return allowed;
}
