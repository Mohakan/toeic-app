import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Switch, View } from 'react-native';
import { ConfirmDialog } from '../components/ConfirmDialog';
import { LegalLinks } from '../components/LegalLinks';
import { AppText, Button, Card, Chip, Screen } from '../components/ui';
import { useI18n } from '../i18n';
import type { StringKey } from '../i18n/strings';
import type { RootStackParamList } from '../navigation/types';
import { ERROR_SOUNDS, SUCCESS_SOUNDS, type ErrorSound, type SoundName, type SuccessSound } from '../services/feedbackSound';
import { feedbackSounds } from '../services/feedbackSoundDevice';
import { listening, type EnglishVoice } from '../services/speech';
import { FREE_PLAN } from '../services/access';
import { useApp } from '../state/AppState';
import { useAccess } from '../state/useAccess';
import { useAccount } from '../state/useAccount';
import { colors, space } from '../theme';
import type { Lang } from '../types';

const LANGS: Lang[] = ['fr', 'ar', 'es', 'en'];
const GOALS = [550, 700, 800, 900];
const DAILY = [5, 10, 15];
const VOICE_SAMPLE = 'W: Excuse me, when does the next train to London leave?\nM: In about ten minutes, from platform four.';
const MAX_VOICES = 6;

export function ProfileScreen() {
  const nav = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { data, update, reset } = useApp();
  const { plan } = useAccess();
  const account = useAccount();
  const { t } = useI18n();
  const [confirmReset, setConfirmReset] = useState(false);
  const [voices, setVoices] = useState<EnglishVoice[] | null>(null);
  const { row } = useI18n();

  useEffect(() => {
    let alive = true;
    listening
      .voices()
      .then((v) => alive && setVoices(v))
      .catch((error) => {
        console.warn('Could not list speech voices.', error);
        if (alive) setVoices([]);
      });
    return () => {
      alive = false;
    };
  }, []);

  const activeVoice = voices?.find((v) => v.id === data.voiceId) ?? voices?.[0];

  return (
    <Screen>
      <View style={{ gap: space.lg }}>
        <AppText variant="h2">{data.name ? `${t('profile.title')} · ${data.name}` : t('profile.title')}</AppText>

        <Card style={{ gap: space.md, borderWidth: 2, borderColor: plan.tier === 'full' ? colors.success : colors.accent }}>
          <View style={[row, { alignItems: 'center', gap: space.sm }]}>
            <Ionicons name={plan.tier === 'full' ? 'ribbon' : 'gift'} size={24} color={plan.tier === 'full' ? colors.successDark : colors.accentDark} />
            <View style={{ flex: 1 }}>
              <AppText variant="small" color={colors.inkSoft}>
                {t('profile.plan')}
              </AppText>
              <AppText variant="h3">{t(plan.tier === 'full' ? 'profile.planFull' : 'profile.planFree')}</AppText>
            </View>
          </View>
          {plan.tier === 'full' ? null : (
            <>
              <AppText variant="small" color={colors.inkSoft}>
                {t('access.trialBanner')}
              </AppText>
              <Button label={t('access.seeFull')} icon="lock-open" compact onPress={() => nav.navigate('Paywall')} />
            </>
          )}
          {/* Development builds only: back to the trial after trying the full plan. */}
          {__DEV__ && data.plan.source === 'dev' ? (
            <Button label={t('profile.devFree')} icon="construct" variant="ghost" compact onPress={() => update({ plan: FREE_PLAN })} />
          ) : null}
        </Card>

        {account.available ? (
          <Card style={{ gap: space.md }}>
            <View style={[row, { alignItems: 'center', gap: space.sm }]}>
              <Ionicons name="person-circle" size={24} color={colors.primaryDark} />
              <AppText variant="h3" style={{ flex: 1 }}>
                {t('profile.account')}
              </AppText>
            </View>
            {account.account ? (
              <>
                <AppText color={colors.inkSoft}>{t('profile.signedAs', { email: account.account.email })}</AppText>
                <Button label={t('profile.signOut')} icon="log-out-outline" variant="secondary" compact onPress={account.signOut} />
                <Button label={t('profile.deleteAccount')} variant="ghost" compact onPress={() => nav.navigate('Account', { mode: 'delete' })} />
              </>
            ) : (
              <>
                <AppText color={colors.inkSoft}>{t('profile.noAccount')}</AppText>
                <Button label={t('acc.toSignup')} icon="person-add" compact onPress={() => nav.navigate('Account', { mode: 'signup' })} />
                <Button label={t('acc.toSignin')} variant="ghost" compact onPress={() => nav.navigate('Account', { mode: 'signin' })} />
              </>
            )}
          </Card>
        ) : null}

        <Card style={{ gap: space.md }}>
          <AppText variant="h3">{t('profile.language')}</AppText>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: space.sm }} accessibilityRole="radiogroup">
            {LANGS.map((l) => (
              <Chip key={l} label={t(`lang.${l}` as StringKey)} selected={data.lang === l} onPress={() => update({ lang: l })} />
            ))}
          </View>
        </Card>

        <Card style={{ gap: space.md }}>
          <AppText variant="h3">{t('profile.goal')}</AppText>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: space.sm }} accessibilityRole="radiogroup">
            {GOALS.map((g) => (
              <Chip key={g} label={String(g)} selected={data.target === g} onPress={() => update({ target: g })} />
            ))}
          </View>
        </Card>

        <Card style={{ gap: space.md }}>
          <AppText variant="h3">{t('profile.daily')}</AppText>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: space.sm }} accessibilityRole="radiogroup">
            {DAILY.map((m) => (
              <Chip key={m} label={`${m} ${t('common.min')}`} selected={data.dailyGoalMin === m} onPress={() => update({ dailyGoalMin: m })} />
            ))}
          </View>
        </Card>

        <Card style={{ gap: space.md }}>
          <AppText variant="h3">{t('profile.voice')}</AppText>
          {voices === null ? (
            <AppText variant="small" color={colors.inkSoft}>
              {t('common.loading')}
            </AppText>
          ) : voices.length === 0 ? (
            <View style={[row, { gap: space.sm }]}>
              <Ionicons name="alert-circle" size={20} color={colors.dangerDark} />
              <AppText variant="small" color={colors.dangerDark} style={{ flex: 1 }}>
                {t('profile.noVoice')}
              </AppText>
            </View>
          ) : (
            <>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: space.sm }} accessibilityRole="radiogroup">
                {voices.slice(0, MAX_VOICES).map((v) => (
                  <Chip
                    key={v.id}
                    label={`${v.name.replace(/^(Microsoft|Google)\s+/, '').replace(/\s*-\s*English.*$/, '')} · ${v.language}`}
                    selected={activeVoice?.id === v.id}
                    onPress={() => update({ voiceId: v.id })}
                  />
                ))}
              </View>
              <Button label={t('profile.voiceTest')} icon="volume-high" variant="secondary" compact onPress={() => listening.play(VOICE_SAMPLE, { voiceId: activeVoice?.id })} />
            </>
          )}
        </Card>

        <Card style={{ gap: space.md }}>
          <View style={[row, { alignItems: 'center', gap: space.md }]}>
            <View style={{ flex: 1, gap: 2 }}>
              <AppText variant="h3">{t('profile.sounds')}</AppText>
              <AppText variant="small" color={colors.inkSoft}>
                {t('profile.soundsSub')}
              </AppText>
            </View>
            <Switch
              accessibilityLabel={t('profile.sounds')}
              value={data.soundEffects}
              onValueChange={(on) => update({ soundEffects: on })}
              trackColor={{ false: colors.mist, true: colors.primary }}
              thumbColor={colors.white}
            />
          </View>
          <AppText variant="small" color={colors.inkSoft}>
            {t('profile.soundsChoose')}
          </AppText>
          {(
            [
              ['profile.soundSuccess', SUCCESS_SOUNDS, data.successSound, (s: string) => update({ successSound: s as SuccessSound }), 'success'],
              ['profile.soundError', ERROR_SOUNDS, data.errorSound, (s: string) => update({ errorSound: s as ErrorSound }), 'error'],
            ] as const
          ).map(([label, options, current, choose, prefix]) => (
            <View key={label} style={{ gap: space.sm }}>
              <AppText style={{ fontWeight: '700' }}>{t(label)}</AppText>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: space.sm }} accessibilityRole="radiogroup">
                {options.map((s) => (
                  <Chip
                    key={s}
                    icon="volume-medium"
                    label={t(`sound.${s}` as StringKey)}
                    selected={current === s}
                    onPress={() => {
                      choose(s);
                      // Always heard here, even with effects off, so the learner can compare.
                      feedbackSounds.play(`${prefix}-${s}` as SoundName);
                    }}
                  />
                ))}
              </View>
            </View>
          ))}
        </Card>

        <Button label={t('profile.retake')} icon="analytics" variant="secondary" onPress={() => nav.navigate('AssessIntro')} />
        <Button label={t('profile.reset')} icon="trash" variant="ghost" onPress={() => setConfirmReset(true)} />

        <View style={{ gap: space.xs }}>
          <AppText variant="label" color={colors.inkSoft} center>
            {t('legal.section').toUpperCase()}
          </AppText>
          <LegalLinks docs={['privacy', 'terms', 'notice']} />
        </View>
        <AppText variant="small" color={colors.inkSoft} center>
          {t('profile.privacy')}
        </AppText>
        <AppText variant="small" color={colors.inkSoft} center>
          {t('profile.about')}
        </AppText>
      </View>

      <ConfirmDialog
        visible={confirmReset}
        title={t('profile.reset')}
        message={t('profile.resetConfirm')}
        confirmLabel={t('profile.confirm')}
        cancelLabel={t('profile.cancel')}
        destructive
        onCancel={() => setConfirmReset(false)}
        onConfirm={async () => {
          setConfirmReset(false);
          // Erasing the device's data also signs it out.
          if (account.account) await account.signOut();
          await reset();
          nav.reset({ index: 0, routes: [{ name: 'Welcome' }] });
        }}
      />
    </Screen>
  );
}
