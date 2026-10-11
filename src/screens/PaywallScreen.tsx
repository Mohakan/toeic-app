import { Ionicons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { getLocales } from 'expo-localization';
import { useEffect, useMemo, useState } from 'react';
import { Pressable, View } from 'react-native';
import { AppText, Button, Card, Mascot, Screen } from '../components/ui';
import { useI18n } from '../i18n';
import type { StringKey } from '../i18n/strings';
import type { RootStackParamList } from '../navigation/types';
import { LegalLinks } from '../components/LegalLinks';
import { localPrice } from '../services/pricing';
import { purchases, type PurchaseOutcome } from '../services/purchases';
import { dayKey, useApp } from '../state/AppState';
import { useAccess } from '../state/useAccess';
import { usePurchaseOutcome } from '../state/usePurchases';
import { colors, radius, space } from '../theme';
import { examConfig } from '../exams/current';

type Props = NativeStackScreenProps<RootStackParamList, 'Paywall'>;

const BENEFITS: [keyof typeof Ionicons.glyphMap, StringKey][] = [
  ['map', 'pay.b.units'],
  ['document-text', 'pay.b.mocks'],
  ...(examConfig.toeicSpeaking
    ? ([
        ['mic', 'pay.b.speaking'],
        ['timer', 'pay.b.simulations'],
      ] as [keyof typeof Ionicons.glyphMap, StringKey][])
    : []),
  ['albums', 'pay.b.words'],
];

const NOTICES: Record<Exclude<PurchaseOutcome['kind'], 'purchased' | 'cancelled'>, StringKey> = {
  pending: 'pay.pending',
  nothing: 'pay.nothing',
  unavailable: 'pay.soon',
  retry_later: 'pay.retryLater',
  linked_elsewhere: 'pay.linkedElsewhere',
  error: 'pay.error',
};

/**
 * The offer of the full plan. Store rules apply here: the in-app purchase is the only way to pay,
 * and this screen never mentions any other payment channel or partner.
 */
export function PaywallScreen({ navigation, route }: Props) {
  const { update } = useApp();
  const { t, lang, row, backIcon } = useI18n();
  const [notice, setNotice] = useState<StringKey | null>(null);
  const fallback = useMemo(() => localPrice(getLocales()[0]?.regionCode, lang).label, [lang]);
  // The store's own price is the one that counts; the local estimate shows until it arrives.
  const [storePrice, setStorePrice] = useState<string | null>(null);
  const price = storePrice ?? fallback;
  const reason = route.params?.reason;
  const { full } = useAccess();
  const apply = usePurchaseOutcome();
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let alive = true;
    if (purchases.available) purchases.price().then((p) => alive && setStorePrice(p));
    return () => {
      alive = false;
    };
  }, []);

  const handle = async (action: () => Promise<PurchaseOutcome>, restoring: boolean) => {
    setBusy(true);
    setNotice(null);
    const outcome = await action();
    setBusy(false);
    apply(outcome);
    if (outcome.kind === 'purchased') return navigation.goBack();
    if (outcome.kind === 'cancelled') return;
    setNotice(NOTICES[outcome.kind === 'nothing' && !restoring ? 'error' : outcome.kind]);
  };

  // Offer in the hero band (Toki, title, the reason for the offer); the price card stands out in
  // Orange Soleil, the color of the one action on this screen.
  const hero = (
    <View style={{ gap: space.sm }}>
      <View style={row}>
        <Pressable accessibilityRole="button" accessibilityLabel={t('common.back')} onPress={() => navigation.goBack()} hitSlop={8} style={{ minWidth: 44, minHeight: 44, justifyContent: 'center' }}>
          <Ionicons name={backIcon} size={24} color={colors.ink} />
        </Pressable>
      </View>
      <View style={{ alignItems: 'center', gap: space.sm }}>
        <Mascot mood={full ? 'joy' : 'welcome'} size={88} />
        <AppText variant="title" center>
          {t(full ? 'pay.fullTitle' : 'pay.title')}
        </AppText>
        <AppText center>{t(full ? 'pay.fullSub' : reason ? (`pay.reason.${reason}` as StringKey) : 'pay.sub')}</AppText>
      </View>
    </View>
  );

  return (
    <Screen
      hero={hero}
      footer={
        full ? (
          <Button label={t('common.back')} onPress={() => navigation.goBack()} />
        ) : (
          <View style={{ gap: space.sm }}>
            <Button label={t('pay.cta', { p: price })} icon="lock-open" variant="play" disabled={busy} onPress={() => handle(purchases.buyFullPlan, false)} />
            <Button label={t('pay.restore')} variant="ghost" compact disabled={busy} onPress={() => handle(() => purchases.restore(), true)} />
          </View>
        )
      }
    >
      <View style={{ gap: space.lg }}>
        {!full ? (
          <View style={{ alignItems: 'center', gap: 2, backgroundColor: colors.white, borderWidth: 3, borderColor: colors.accent, borderBottomWidth: 6, borderRadius: radius.lg, padding: space.md }}>
            <AppText variant="title" style={{ fontWeight: '800' }}>
              {price}
            </AppText>
            <AppText variant="small" color={colors.inkSoft} center>
              {t('pay.once')}
            </AppText>
          </View>
        ) : null}

        <Card style={{ gap: space.md }}>
          {BENEFITS.map(([icon, key]) => (
            <View key={key} style={[row, { alignItems: 'center', gap: space.md }]}>
              <View style={{ width: 40, height: 40, borderRadius: radius.sm, backgroundColor: colors.primarySoft, alignItems: 'center', justifyContent: 'center' }}>
                <Ionicons name={icon} size={20} color={colors.primaryDark} />
              </View>
              <AppText style={{ flex: 1, fontWeight: '600' }}>{t(key)}</AppText>
              <Ionicons name="checkmark-circle" size={22} color={colors.successDark} />
            </View>
          ))}
        </Card>

        {!full ? (
          <View style={{ gap: space.xs }}>
            <AppText variant="small" color={colors.inkSoft} center>
              {t('legal.purchase')}
            </AppText>
            <LegalLinks />
          </View>
        ) : null}

        {notice ? (
          <View accessibilityLiveRegion="polite">
            <Card style={{ backgroundColor: colors.primarySoft, boxShadow: 'none' }}>
              <AppText>{t(notice)}</AppText>
            </Card>
          </View>
        ) : null}

        {/* Development builds only: a switch to try the full plan before purchases exist (lot M4). */}
        {__DEV__ && !full ? (
          <Button label={t('pay.devUnlock')} icon="construct" variant="secondary" compact onPress={() => update({ plan: { tier: 'full', source: 'dev', since: dayKey() } })} />
        ) : null}
      </View>
    </Screen>
  );
}
