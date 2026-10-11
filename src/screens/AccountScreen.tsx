import { Ionicons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import { Pressable, StyleSheet, Switch, TextInput, View, type TextInputProps } from 'react-native';
import { AppText, Button, Card, Mascot, Screen } from '../components/ui';
import { useI18n } from '../i18n';
import type { StringKey } from '../i18n/strings';
import type { AccountMode, RootStackParamList } from '../navigation/types';
import { ApiError } from '../services/api';
import { useAccount } from '../state/useAccount';
import { LegalLinks } from '../components/LegalLinks';
import { colors, radius, space } from '../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'Account'>;

/** Below this age a parent must agree to the account; the server checks it too. */
const PARENTAL_CONSENT_AGE = 15;
/** Accounts start at 13: with the birth year only, 14 by year (the server applies the same rule). */
const MIN_ACCOUNT_AGE_BY_YEAR = 14;
const MIN_PASSWORD = 8;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ERRORS: Record<string, StringKey> = {
  invalid_email: 'acc.err.invalid_email',
  email_taken: 'acc.err.email_taken',
  invalid_credentials: 'acc.err.invalid_credentials',
  invalid_birth_year: 'acc.err.invalid_birth_year',
  too_young: 'acc.err.too_young',
  parental_consent_required: 'acc.err.parental_consent_required',
  invalid_code: 'acc.err.invalid_code',
  too_many_requests: 'acc.err.too_many_requests',
  network: 'acc.err.network',
  mail_unavailable: 'acc.err.mail_unavailable',
};

const TITLES: Record<AccountMode, [StringKey, StringKey]> = {
  signup: ['acc.signup.title', 'acc.signup.sub'],
  signin: ['acc.signin.title', 'acc.signin.sub'],
  forgot: ['acc.forgot.title', 'acc.forgot.sub'],
  reset: ['acc.reset.title', 'acc.reset.sub'],
  delete: ['acc.delete.title', 'acc.delete.sub'],
};

/** Sign-up, sign-in, password reset by e-mailed code, and account deletion, in one screen. */
export function AccountScreen({ navigation, route }: Props) {
  const { t, row, backIcon } = useI18n();
  const account = useAccount();
  const next = route.params.next;
  const [mode, setMode] = useState<AccountMode>(route.params.mode);
  const [email, setEmail] = useState(account.account?.email ?? '');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [birthYear, setBirthYear] = useState('');
  const [parentOk, setParentOk] = useState(false);
  const [code, setCode] = useState('');
  const [error, setError] = useState<StringKey | null>(null);
  const [busy, setBusy] = useState(false);

  const year = new Date().getFullYear();
  const birth = Number(birthYear);
  const minor = birthYear.length === 4 && year - birth < PARENTAL_CONSENT_AGE;
  const switchTo = (m: AccountMode) => {
    setMode(m);
    setError(null);
    setPassword('');
  };

  const done = () => {
    if (next === 'assess') navigation.replace('AssessIntro');
    else if (next === 'onboarding') navigation.replace('Onboarding');
    else navigation.goBack();
  };

  /** Checks what the device can check, then calls the server and shows its answer. */
  const submit = async () => {
    const cleanEmail = email.trim();
    if (mode !== 'delete' && !EMAIL.test(cleanEmail)) return setError('acc.err.invalid_email');
    const newPassword = mode === 'signup' || mode === 'reset';
    if (newPassword && password.length < MIN_PASSWORD) return setError('acc.err.short_password');
    if (mode === 'signup' && (birthYear.length !== 4 || birth < year - 100 || birth > year)) return setError('acc.err.invalid_birth_year');
    if (mode === 'signup' && year - birth < MIN_ACCOUNT_AGE_BY_YEAR) return setError('acc.err.too_young');
    if (mode === 'signup' && minor && !parentOk) return setError('acc.err.parental_consent_required');
    if (mode === 'reset' && !/^\d{6}$/.test(code)) return setError('acc.err.invalid_code');
    setBusy(true);
    setError(null);
    try {
      if (mode === 'signup') await account.signUp({ email: cleanEmail, password, birthYear: birth, parentalConsent: minor ? parentOk : undefined });
      else if (mode === 'signin') await account.signIn(cleanEmail, password);
      else if (mode === 'forgot') {
        await account.forgotPassword(cleanEmail);
        setBusy(false);
        return switchTo('reset');
      } else if (mode === 'reset') await account.resetPassword(cleanEmail, code, password);
      else await account.deleteAccount(password);
      done();
    } catch (e) {
      setError((e instanceof ApiError && ERRORS[e.code]) || 'acc.err.server');
    }
    setBusy(false);
  };

  const [title, sub] = TITLES[mode];
  const cta = ({ signup: 'acc.create', signin: 'acc.signinCta', forgot: 'acc.sendCode', reset: 'acc.resetCta', delete: 'acc.deleteCta' } as const)[mode];

  return (
    <Screen
      footer={
        <View style={{ gap: space.sm }}>
          <Button label={t(cta)} variant={mode === 'delete' ? 'danger' : 'primary'} disabled={busy} onPress={submit} />
          {mode === 'signup' && next === 'assess' ? <Button label={t('acc.later')} variant="ghost" compact onPress={done} /> : null}
        </View>
      }
    >
      <View style={{ gap: space.lg }}>
        <View style={row}>
          <Pressable accessibilityRole="button" accessibilityLabel={t('common.back')} onPress={() => navigation.goBack()} hitSlop={8} style={styles.back}>
            <Ionicons name={backIcon} size={24} color={colors.ink} />
          </Pressable>
        </View>
        <View style={{ alignItems: 'center', gap: space.sm }}>
          <Mascot mood={mode === 'delete' ? 'encourage' : 'welcome'} size={80} />
          <AppText variant="title" center>
            {t(title)}
          </AppText>
          <AppText color={colors.inkSoft} center>
            {t(sub, { email: email.trim() })}
          </AppText>
        </View>

        <View style={{ gap: space.md }}>
          {mode !== 'delete' ? (
            <Field
              label={t('acc.email')}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              autoComplete="email"
              textContentType="emailAddress"
              editable={mode !== 'reset'}
              maxLength={254}
            />
          ) : null}
          {mode === 'reset' ? (
            <Field label={t('acc.code')} value={code} onChangeText={(v) => setCode(v.replace(/\D/g, ''))} keyboardType="number-pad" autoComplete="one-time-code" textContentType="oneTimeCode" maxLength={6} />
          ) : null}
          {mode !== 'forgot' ? (
            <View style={{ gap: 6 }}>
              <Field
                label={t(mode === 'reset' ? 'acc.newPassword' : 'acc.password')}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                autoCorrect={false}
                autoComplete={mode === 'signup' || mode === 'reset' ? 'new-password' : 'current-password'}
                textContentType={mode === 'signup' || mode === 'reset' ? 'newPassword' : 'password'}
                maxLength={128}
                onSubmitEditing={submit}
              />
              <View style={[row, { justifyContent: 'space-between', alignItems: 'center' }]}>
                <AppText variant="small" color={colors.inkSoft}>
                  {mode === 'signup' || mode === 'reset' ? t('acc.passwordHint') : ''}
                </AppText>
                <Button label={t(showPassword ? 'acc.hide' : 'acc.show')} variant="ghost" compact onPress={() => setShowPassword(!showPassword)} />
              </View>
            </View>
          ) : null}
          {mode === 'signup' ? (
            <Field label={t('acc.birthYear')} value={birthYear} onChangeText={(v) => setBirthYear(v.replace(/\D/g, ''))} keyboardType="number-pad" autoComplete="birthdate-year" maxLength={4} />
          ) : null}
          {mode === 'signup' && minor ? (
            <Card style={{ gap: space.sm, backgroundColor: colors.accentSoft, boxShadow: 'none' }}>
              <AppText variant="small">{t('acc.parentWhy')}</AppText>
              <View style={[row, { alignItems: 'center', gap: space.md }]}>
                <AppText style={{ flex: 1 }}>{t('acc.parent')}</AppText>
                <Switch
                  accessibilityLabel={t('acc.parent')}
                  value={parentOk}
                  onValueChange={setParentOk}
                  trackColor={{ false: colors.mist, true: colors.primary }}
                  thumbColor={colors.white}
                />
              </View>
            </Card>
          ) : null}
        </View>

        {error ? (
          <View accessibilityLiveRegion="polite">
            <Card style={{ backgroundColor: colors.dangerSoft, boxShadow: 'none' }}>
              <AppText color={colors.dangerDark}>{t(error)}</AppText>
            </Card>
          </View>
        ) : null}

        {mode === 'signup' ? (
          <View style={{ gap: space.xs }}>
            <AppText variant="small" color={colors.inkSoft} center>
              {t('acc.privacy')}
            </AppText>
            <AppText variant="small" color={colors.inkSoft} center>
              {t('legal.signup')}
            </AppText>
            <LegalLinks />
          </View>
        ) : null}

        <View style={{ gap: space.xs, alignItems: 'center' }}>
          {mode === 'signup' ? <Button label={t('acc.toSignin')} variant="ghost" compact onPress={() => switchTo('signin')} /> : null}
          {mode === 'signin' ? (
            <>
              <Button label={t('acc.toForgot')} variant="ghost" compact onPress={() => switchTo('forgot')} />
              <Button label={t('acc.toSignup')} variant="ghost" compact onPress={() => switchTo('signup')} />
            </>
          ) : null}
          {mode === 'reset' ? <Button label={t('acc.resend')} variant="ghost" compact onPress={() => switchTo('forgot')} /> : null}
        </View>
      </View>
    </Screen>
  );
}

function Field({ label, ...input }: { label: string } & TextInputProps) {
  const { align } = useI18n();
  return (
    <View style={{ gap: 6 }}>
      <AppText variant="label" color={colors.inkSoft}>
        {label.toUpperCase()}
      </AppText>
      <TextInput accessibilityLabel={label} placeholderTextColor={colors.inkSoft} style={[styles.input, align, input.editable === false && { backgroundColor: colors.bg }]} {...input} />
    </View>
  );
}

const styles = StyleSheet.create({
  back: { minWidth: 44, minHeight: 44, justifyContent: 'center' },
  input: {
    minHeight: 56,
    borderRadius: radius.md,
    borderWidth: 2,
    borderColor: colors.line,
    backgroundColor: colors.white,
    paddingHorizontal: space.md,
    fontSize: 18,
    fontWeight: '600',
    color: colors.ink,
  },
});
