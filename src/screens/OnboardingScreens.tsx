import { Ionicons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { getLocales } from 'expo-localization';
import { useEffect, useMemo, useState } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { AppText, Button, Card, Chip, Mascot, ProgressBar, Screen } from '../components/ui';
import { useI18n } from '../i18n';
import type { StringKey } from '../i18n/strings';
import type { RootStackParamList } from '../navigation/types';
import { API_URL } from '../services/api';
import { LegalLinks } from '../components/LegalLinks';
import { localPrice } from '../services/pricing';
import { purchases } from '../services/purchases';
import { useApp } from '../state/AppState';
import { colors, fonts, radius, space } from '../theme';
import type { Lang } from '../types';
import { examConfig } from '../exams/current';

const LANGS: Lang[] = ['fr', 'ar', 'es', 'en'];
const accountAvailable = API_URL !== null;

export function LanguageChips() {
  const { data, update } = useApp();
  const { t } = useI18n();
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: space.sm }} accessibilityRole="radiogroup">
      {LANGS.map((l) => (
        <Chip key={l} label={t(`lang.${l}` as StringKey)} selected={data.lang === l} onPress={() => update({ lang: l })} />
      ))}
    </View>
  );
}

/**
 * The landing screen: Toki and his promise, what the free trial and the full plan contain, and a
 * single call to action. Partners and payment channels other than the stores are never named here.
 */
export function WelcomeScreen({ navigation }: NativeStackScreenProps<RootStackParamList, 'Welcome'>) {
  const { t, lang, row } = useI18n();
  const estimate = useMemo(() => localPrice(getLocales()[0]?.regionCode, lang).label, [lang]);
  // The store's price, as soon as it is known, so the landing never shows a different one.
  const [storePrice, setStorePrice] = useState<string | null>(null);
  useEffect(() => {
    let alive = true;
    if (purchases.available) purchases.price().then((p) => alive && setStorePrice(p));
    return () => {
      alive = false;
    };
  }, []);
  const price = storePrice ?? estimate;
  const numbers: [keyof typeof Ionicons.glyphMap, StringKey][] = [
    ['map', 'welcome.n.units'],
    ['albums', 'welcome.n.words'],
    ['timer', 'welcome.n.mocks'],
    ...(examConfig.toeicSpeaking ? ([['mic', 'welcome.n.speaking']] as [keyof typeof Ionicons.glyphMap, StringKey][]) : []),
  ];
  const offers: { title: StringKey; price: string; note: StringKey; items: StringKey[]; accent: boolean }[] = [
    { title: 'welcome.free', price: t('welcome.freePrice'), note: 'welcome.freeNote', items: ['welcome.free.1', 'welcome.free.2', 'welcome.free.3', 'welcome.free.4'], accent: false },
    { title: 'welcome.full', price, note: 'pay.once', items: ['welcome.full.1', 'welcome.full.2', 'welcome.full.3', 'welcome.full.4'], accent: true },
  ];
  return (
    <Screen
      footer={
        <View style={{ gap: space.sm }}>
          <Button label={t('welcome.cta')} icon="play" variant="play" onPress={() => navigation.navigate('Onboarding')} />
          {accountAvailable ? <Button label={t('acc.toSignin')} variant="ghost" compact onPress={() => navigation.navigate('Account', { mode: 'signin', next: 'onboarding' })} /> : null}
        </View>
      }
    >
      <View style={{ gap: space.lg, paddingTop: space.md }}>
        <View style={{ alignItems: 'center', gap: space.sm }}>
          <View style={styles.bubble}>
            <AppText center style={{ fontWeight: '600' }}>
              {t('welcome.toki')}
            </AppText>
          </View>
          <Mascot size={120} mood="welcome" />
          <AppText variant="label" color={colors.primaryDark} center>
            {t('app.name').toUpperCase()}
          </AppText>
        </View>
        <AppText variant="title" center>
          {t('welcome.slogan')}
        </AppText>
        <AppText variant="body" color={colors.inkSoft} center>
          {t('welcome.sub')}
        </AppText>

        <View style={[row, { flexWrap: 'wrap', gap: space.sm }]}>
          {numbers.map(([icon, key]) => (
            <View key={key} style={[row, styles.number]}>
              <Ionicons name={icon} size={20} color={colors.primaryDark} />
              <AppText variant="small" style={{ flex: 1, fontWeight: '700' }}>
                {t(key)}
              </AppText>
            </View>
          ))}
        </View>

        <View style={{ gap: space.md }}>
          <AppText variant="h3">{t('welcome.offers')}</AppText>
          {offers.map((offer) => (
            <Card key={offer.title} style={[{ gap: space.sm }, offer.accent && { borderWidth: 2, borderColor: colors.accent }]}>
              <View style={[row, { alignItems: 'baseline', justifyContent: 'space-between', gap: space.sm }]}>
                <AppText variant="h3" style={{ flexShrink: 1 }}>
                  {t(offer.title)}
                </AppText>
                <AppText variant="h2" color={offer.accent ? colors.accentDark : colors.primaryDark}>
                  {offer.price}
                </AppText>
              </View>
              <AppText variant="small" color={colors.inkSoft}>
                {t(offer.note)}
              </AppText>
              {offer.items.map((key) => (
                <View key={key} style={[row, { alignItems: 'flex-start', gap: space.sm }]}>
                  <Ionicons name="checkmark-circle" size={20} color={offer.accent ? colors.accentDark : colors.successDark} />
                  <AppText style={{ flex: 1 }}>{t(key)}</AppText>
                </View>
              ))}
            </Card>
          ))}
        </View>

        <View style={{ gap: space.sm }}>
          <AppText variant="label" color={colors.inkSoft}>
            {t('welcome.lang').toUpperCase()}
          </AppText>
          <LanguageChips />
        </View>
        <LegalLinks docs={['privacy', 'terms', 'notice']} />
      </View>
    </Screen>
  );
}

/** Score goals on the scale of the exam of this build. */
const GOALS = examConfig.goals;
const DAILY = [5, 10, 15] as const;
const TOTAL_STEPS = 3;

export function OnboardingScreen({ navigation }: NativeStackScreenProps<RootStackParamList, 'Onboarding'>) {
  const { data, update } = useApp();
  const { t, row, align, backIcon } = useI18n();
  const [step, setStep] = useState(1);
  const [name, setName] = useState(data.name);
  const [error, setError] = useState(false);

  const next = () => {
    if (step === 1) {
      const clean = name.trim();
      if (!clean) {
        setError(true);
        return;
      }
      update({ name: clean });
    }
    if (step < TOTAL_STEPS) setStep(step + 1);
    // With a server, the account is offered before the placement test (it can wait).
    else if (accountAvailable && !data.account) navigation.navigate('Account', { mode: 'signup', next: 'assess' });
    else navigation.navigate('AssessIntro');
  };
  const back = () => (step > 1 ? setStep(step - 1) : navigation.goBack());

  return (
    <Screen
      footer={<Button label={t('common.next')} onPress={next} />}
    >
      <View style={{ gap: space.lg }}>
        <View style={[row, { alignItems: 'center', gap: space.md }]}>
          <Pressable accessibilityRole="button" accessibilityLabel={t('common.back')} onPress={back} style={styles.back} hitSlop={8}>
            <Ionicons name={backIcon} size={24} color={colors.ink} />
          </Pressable>
          <View style={{ flex: 1 }}>
            <ProgressBar value={step / TOTAL_STEPS} color={colors.primary} label={t('onb.step', { n: step, total: TOTAL_STEPS })} />
          </View>
        </View>
        <AppText variant="small" color={colors.inkSoft}>
          {t('onb.step', { n: step, total: TOTAL_STEPS })}
        </AppText>

        {step === 1 ? (
          <View style={{ gap: space.md }}>
            <Mascot mood="think" />
            <AppText variant="title">{t('onb.name.title')}</AppText>
            <AppText color={colors.inkSoft}>{t('onb.name.sub')}</AppText>
            <TextInput
              value={name}
              onChangeText={(v) => {
                setName(v);
                setError(false);
              }}
              placeholder={t('onb.name.placeholder')}
              placeholderTextColor={colors.inkSoft}
              accessibilityLabel={t('onb.name.placeholder')}
              maxLength={24}
              autoCapitalize="words"
              autoComplete="given-name"
              returnKeyType="next"
              onSubmitEditing={next}
              style={[styles.input, align, error && { borderColor: colors.danger }]}
            />
            {error ? (
              <View style={[row, { gap: 6, alignItems: 'center' }]} accessibilityLiveRegion="polite">
                <Ionicons name="alert-circle" size={18} color={colors.dangerDark} />
                <AppText variant="small" color={colors.dangerDark}>
                  {t('onb.name.error')}
                </AppText>
              </View>
            ) : null}
          </View>
        ) : null}

        {step === 2 ? (
          <View style={{ gap: space.md }}>
            <AppText variant="title">{t('onb.goal.title')}</AppText>
            <AppText color={colors.inkSoft}>{t('onb.goal.sub')}</AppText>
            {GOALS.map((g) => (
              <ChoiceRow
                key={g}
                selected={data.target === g}
                title={String(g)}
                subtitle={t(`goal.${g}` as StringKey)}
                onPress={() => update({ target: g })}
              />
            ))}
          </View>
        ) : null}

        {step === 3 ? (
          <View style={{ gap: space.md }}>
            <AppText variant="title">{t('onb.daily.title')}</AppText>
            <AppText color={colors.inkSoft}>{t('onb.daily.sub')}</AppText>
            {DAILY.map((m) => (
              <ChoiceRow
                key={m}
                selected={data.dailyGoalMin === m}
                title={`${m} ${t('common.min')}`}
                subtitle={t(`daily.${m}` as StringKey)}
                onPress={() => update({ dailyGoalMin: m })}
              />
            ))}
          </View>
        ) : null}
      </View>
    </Screen>
  );
}

export function ChoiceRow({ title, subtitle, selected, onPress }: { title: string; subtitle: string; selected: boolean; onPress: () => void }) {
  const { row } = useI18n();
  return (
    <Pressable
      accessibilityRole="radio"
      accessibilityState={{ selected }}
      accessibilityLabel={`${title}, ${subtitle}`}
      onPress={onPress}
      style={[
        styles.choice,
        row,
        selected && { borderColor: colors.primary, backgroundColor: colors.primarySoft },
      ]}
    >
      <View style={{ flex: 1 }}>
        <AppText variant="h2">{title}</AppText>
        <AppText variant="small" color={colors.inkSoft}>
          {subtitle}
        </AppText>
      </View>
      <Ionicons
        name={selected ? 'radio-button-on' : 'radio-button-off'}
        size={26}
        color={selected ? colors.primaryDark : colors.inkSoft}
      />
    </Pressable>
  );
}

export function AssessIntroScreen({ navigation }: NativeStackScreenProps<RootStackParamList, 'AssessIntro'>) {
  const { t, row, backIcon } = useI18n();
  const points: [keyof typeof Ionicons.glyphMap, StringKey][] = [
    ['time', 'assess.intro.b1'],
    ['library', 'assess.intro.b2'],
    ['happy', 'assess.intro.b3'],
    ['help-circle', 'assess.intro.b4'],
    ['volume-high', 'assess.intro.sound'],
  ];
  return (
    <Screen footer={<Button label={t('assess.intro.cta')} icon="rocket" onPress={() => navigation.replace('Assessment')} />}>
      <View style={{ gap: space.lg }}>
        <View style={row}>
          <Pressable accessibilityRole="button" accessibilityLabel={t('common.back')} onPress={() => navigation.goBack()} style={styles.back} hitSlop={8}>
            <Ionicons name={backIcon} size={24} color={colors.ink} />
          </Pressable>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Mascot size={96} />
        </View>
        <AppText variant="title" center>
          {t('assess.intro.title')}
        </AppText>
        <AppText color={colors.inkSoft} center>
          {t('assess.intro.sub')}
        </AppText>
        <Card style={{ gap: space.md }}>
          {points.map(([icon, key]) => (
            <View key={key} style={[row, { alignItems: 'center', gap: space.md }]}>
              <Ionicons name={icon} size={22} color={colors.primaryDark} />
              <AppText style={{ flex: 1 }}>{t(key)}</AppText>
            </View>
          ))}
        </Card>
        <Card style={{ gap: space.sm, backgroundColor: colors.primarySoft, boxShadow: 'none' }}>
          <View style={[row, { alignItems: 'center', gap: space.sm }]}>
            <Ionicons name="flask" size={20} color={colors.ink} />
            <AppText style={{ flex: 1 }}>{t('assess.intro.science')}</AppText>
          </View>
          <Button label={t('assess.intro.how')} variant="ghost" compact onPress={() => navigation.navigate('Method')} />
        </Card>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  bubble: {
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    borderWidth: 2,
    borderColor: colors.primarySoft,
    paddingHorizontal: space.md,
    paddingVertical: space.sm,
    maxWidth: 300,
  },
  number: {
    alignItems: 'center',
    gap: space.sm,
    flexGrow: 1,
    flexBasis: '45%',
    minHeight: 56,
    backgroundColor: colors.primarySoft,
    borderRadius: radius.md,
    paddingHorizontal: space.md,
    paddingVertical: space.sm,
  },
  back: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    minHeight: 60,
    borderRadius: radius.md,
    borderWidth: 2,
    borderColor: colors.line,
    backgroundColor: colors.white,
    paddingHorizontal: space.md,
    fontSize: 20,
    fontFamily: fonts[700],
    color: colors.ink,
  },
  choice: {
    alignItems: 'center',
    gap: space.md,
    minHeight: 72,
    borderRadius: radius.lg,
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: colors.line,
    backgroundColor: colors.white,
    padding: space.md,
  },
});
