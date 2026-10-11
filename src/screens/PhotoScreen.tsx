import { Ionicons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Image, Pressable, View } from 'react-native';
import { SimBanner } from '../components/SimBanner';
import { AppText, Button, Card, EnglishText, Screen } from '../components/ui';
import { photoTaskById } from '../data/speaking/photos';
import { photoCreditByFile } from '../data/speaking/photos/credits';
import { photoSources } from '../data/speaking/photos/sources';
import { useI18n } from '../i18n';
import type { StringKey } from '../i18n/strings';
import { nextSimStep } from '../navigation/simulation';
import type { RootStackParamList } from '../navigation/types';
import type { RecognitionErrorCode } from '../services/recognition';
import { assessResponse, describeFeatures, minWords, PHOTO_SECONDS } from '../services/responseFeedback';
import { listening } from '../services/speech';
import { dayKey, useApp } from '../state/AppState';
import { useAccess } from '../state/useAccess';
import { useAccessGuard } from '../state/useAccessGuard';
import { useSpeechCapture, type CaptureResult } from '../state/useSpeechCapture';
import { colors, radius, space } from '../theme';
import { ERROR_KEYS } from './ReadAloudScreen';

type Props = NativeStackScreenProps<RootStackParamList, 'Photo'>;
/** 'failed': the microphone could not be opened, or nothing was heard; nothing is saved. */
type Phase = 'intro' | 'prep' | 'answer' | 'analyzing' | 'summary' | 'failed';

/** Official timing of TOEIC Speaking tasks 3-4. */
const PREP_SECONDS = 45;

/** Tasks 3-4: describe a photo. Indicative feedback only, never a score. */
export function PhotoScreen({ navigation, route }: Props) {
  const task = photoTaskById[route.params.photoId];
  const sim = route.params.sim;
  const credit = task ? photoCreditByFile[task.photo] : undefined;
  const { data, recordSpeechAttempt } = useApp();
  const access = useAccess();
  const allowed = useAccessGuard(sim ? access.simulation() : access.speaking(route.params.photoId), 'speaking');
  const { t, tx, row, backIcon } = useI18n();
  const [phase, setPhase] = useState<Phase>('intro');
  const [seconds, setSeconds] = useState(PREP_SECONDS);
  const [result, setResult] = useState<CaptureResult | null>(null);
  const [lastError, setLastError] = useState<RecognitionErrorCode | null>(null);

  const finish = useCallback(
    (capture: CaptureResult) => {
      if (!task) return;
      const feedback = assessResponse(capture.transcript, PHOTO_SECONDS, task.keywords, capture.durationSec);
      setResult(capture);
      if (!feedback.answered) {
        if (sim) nextSimStep(navigation, sim);
        else setPhase('failed');
        return;
      }
      recordSpeechAttempt({
        kind: 'respond',
        taskId: task.id,
        date: dayKey(),
        durationSec: capture.durationSec,
        transcript: capture.transcript,
        words: feedback.words,
        wordsPerMinute: feedback.wordsPerMinute,
        keywordsFound: feedback.keywords.filter((k) => k.found).length,
        keywordsTotal: feedback.keywords.length,
        runId: sim?.runId,
      });
      if (sim) nextSimStep(navigation, sim);
      else setPhase('summary');
    },
    [task, recordSpeechAttempt, sim, navigation],
  );

  const capture = useSpeechCapture(finish);
  const { transcript, error } = capture;

  useEffect(() => {
    if (error) setLastError(error);
  }, [error]);

  const speak = useCallback(async () => {
    listening.stop();
    if (!(await capture.start())) {
      setPhase('failed');
      return;
    }
    setSeconds(PHOTO_SECONDS);
    setPhase('answer');
  }, [capture]);

  const stop = useCallback(() => {
    setPhase('analyzing');
    capture.stop();
  }, [capture]);

  useEffect(() => {
    if (phase !== 'prep' && phase !== 'answer') return;
    const id = setInterval(() => setSeconds((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, [phase]);

  useEffect(() => {
    if (seconds > 0) return;
    if (phase === 'prep') speak();
    else if (phase === 'answer') stop();
  }, [seconds, phase, speak, stop]);

  useEffect(() => () => listening.stop(), []);

  // In a simulation, the preparation time starts at once, without the introduction.
  const beginRef = useRef<() => void>(() => {});
  const autoStarted = useRef(false);
  useEffect(() => {
    if (!sim || autoStarted.current || !data.speechConsent?.granted) return;
    autoStarted.current = true;
    beginRef.current();
  });

  const feedback = useMemo(() => (task && result ? assessResponse(result.transcript, PHOTO_SECONDS, task.keywords, result.durationSec) : null), [task, result]);
  const features = useMemo(() => (result ? describeFeatures(result.transcript) : null), [result]);

  if (!task || !credit || !allowed) return null;

  if (!data.speechConsent?.granted) {
    return (
      <Screen footer={<Button label={t('common.back')} onPress={() => navigation.goBack()} />}>
        <AppText>{t('speak.declined')}</AppText>
      </Screen>
    );
  }

  const begin = () => {
    capture.reset();
    setLastError(null);
    setResult(null);
    setSeconds(PREP_SECONDS);
    setPhase('prep');
  };
  beginRef.current = begin;

  const footer =
    phase === 'intro' ? (
      <Button label={t('op.start')} icon="time-outline" onPress={begin} />
    ) : phase === 'prep' ? (
      <Button label={t('op.speakNow')} icon="mic" onPress={speak} />
    ) : phase === 'answer' ? (
      <Button label={t('ra.stop')} icon="stop" variant="danger" onPress={stop} />
    ) : phase === 'failed' ? (
      <Button label={t('ra.again')} icon="refresh" onPress={begin} />
    ) : phase === 'summary' ? (
      <View style={[row, { gap: space.sm }]}>
        <View style={{ flex: 1 }}>
          <Button label={t('common.back')} variant="secondary" onPress={() => navigation.goBack()} />
        </View>
        <View style={{ flex: 1 }}>
          <Button label={t('ra.again')} icon="refresh" onPress={begin} />
        </View>
      </View>
    ) : undefined;

  const photo = (
    <View style={{ gap: 4 }}>
      {/* The ratio is set on a wrapper: on the web, an Image does not keep aspectRatio by itself. */}
      <View style={{ width: '100%', aspectRatio: credit.width / credit.height, borderRadius: radius.md, overflow: 'hidden', backgroundColor: colors.line }}>
        <Image source={photoSources[task.photo]} accessible accessibilityLabel={tx(task.alt)} resizeMode="contain" style={{ width: '100%', height: '100%' }} />
      </View>
      <Pressable accessibilityRole="link" onPress={() => navigation.navigate('PhotoCredits')} hitSlop={6}>
        <AppText variant="small" color={colors.inkSoft}>
          {t('ph.credit', { a: credit.author, l: t(`ph.license.${credit.license}` as StringKey) })}
        </AppText>
      </Pressable>
    </View>
  );

  const counter = (label: string, items: string[], hint: StringKey) => (
    <View style={{ gap: 2 }}>
      <View style={[row, { alignItems: 'center', gap: space.sm }]}>
        <Ionicons name={items.length ? 'checkmark-circle' : 'close-circle'} size={18} color={items.length ? colors.primaryDark : colors.inkSoft} />
        <AppText variant="small" style={{ fontWeight: '700', flex: 1 }}>
          {label}
        </AppText>
      </View>
      {items.length ? (
        <EnglishText variant="small" color={colors.inkSoft}>
          {items.join(' · ')}
        </EnglishText>
      ) : (
        <AppText variant="small" color={colors.accentDark}>
          {t(hint)}
        </AppText>
      )}
    </View>
  );

  return (
    <Screen footer={footer}>
      <View style={{ gap: space.lg }}>
        {sim ? <SimBanner run={sim} /> : null}
        <View style={[row, { alignItems: 'center', gap: space.sm }]}>
          <Pressable accessibilityRole="button" accessibilityLabel={t('common.back')} onPress={() => navigation.goBack()} hitSlop={8} style={{ minWidth: 44, minHeight: 44, justifyContent: 'center' }}>
            <Ionicons name={backIcon} size={24} color={colors.ink} />
          </Pressable>
          <View style={{ flex: 1 }}>
            <AppText variant="label" color={colors.inkSoft}>
              {t('speak.photo').toUpperCase()}
            </AppText>
            <AppText variant="h3">{tx(task.topic)}</AppText>
          </View>
        </View>

        {phase === 'prep' || phase === 'answer' || phase === 'analyzing' ? (
          <View style={[row, { alignItems: 'center', gap: space.sm }]} accessibilityLiveRegion="polite">
            <Ionicons name={phase === 'answer' ? 'mic' : phase === 'prep' ? 'time-outline' : 'hourglass-outline'} size={20} color={phase === 'answer' ? colors.dangerDark : colors.primaryDark} />
            <AppText style={{ fontWeight: '700' }} color={phase === 'answer' ? colors.dangerDark : colors.primaryDark}>
              {phase === 'prep' ? t('ph.prep', { s: seconds }) : phase === 'answer' ? t('rq.answer', { s: seconds }) : t('ra.analyzing')}
            </AppText>
          </View>
        ) : null}

        {photo}

        {(phase === 'intro' || phase === 'prep') && !sim ? (
          <Card style={{ gap: space.xs }}>
            <AppText variant="label" color={colors.inkSoft}>
              {t('ph.plan').toUpperCase()}
            </AppText>
            {t('ph.planSteps')
              .split(' · ')
              .map((step) => (
                <AppText key={step} variant="small">
                  {step}
                </AppText>
              ))}
          </Card>
        ) : null}

        {phase === 'answer' || phase === 'analyzing' ? (
          <Card style={{ gap: space.sm }}>
            <AppText variant="label" color={colors.inkSoft}>
              {t('ra.heard').toUpperCase()}
            </AppText>
            <EnglishText variant="body" color={transcript ? colors.ink : colors.inkSoft}>
              {transcript || '…'}
            </EnglishText>
          </Card>
        ) : null}

        {phase === 'failed' ? (
          <Card style={{ backgroundColor: colors.dangerSoft }}>
            <AppText>{t(lastError && ERROR_KEYS[lastError] ? ERROR_KEYS[lastError]! : 'ra.nothing')}</AppText>
          </Card>
        ) : null}

        {phase === 'summary' && feedback && features && result ? (
          <>
            <View style={{ gap: space.xs }}>
              <AppText variant="h3">{t('rq.summary')}</AppText>
              <AppText variant="small" color={colors.inkSoft}>
                {t('ph.indicative')}
              </AppText>
            </View>

            <Card style={{ gap: space.sm }}>
              <AppText variant="label" color={colors.inkSoft}>
                {t('rq.yourAnswer').toUpperCase()}
              </AppText>
              <EnglishText variant="body">{result.transcript}</EnglishText>
              <AppText variant="small" color={feedback.length === 'short' ? colors.accentDark : colors.primaryDark} style={{ fontWeight: '700' }}>
                {feedback.length === 'short' ? t('rq.short', { n: feedback.words, s: PHOTO_SECONDS, m: minWords(PHOTO_SECONDS) }) : t('rq.lengthOk', { n: feedback.words })}
              </AppText>
              {feedback.wordsPerMinute !== null ? (
                <AppText variant="small" color={colors.inkSoft}>
                  {t('rq.wpm', { n: feedback.wordsPerMinute })}
                </AppText>
              ) : null}
            </Card>

            <Card style={{ gap: space.md }}>
              {counter(t('ph.continuous', { n: features.presentContinuous.length }), features.presentContinuous, 'ph.continuousHint')}
              {counter(t('ph.places', { n: features.places.length }), features.places, 'ph.placesHint')}
            </Card>

            <Card style={{ gap: space.sm }}>
              <AppText variant="label" color={colors.inkSoft}>
                {t('ph.elements').toUpperCase()}
              </AppText>
              {feedback.keywords.map((k) => (
                <View key={k.keyword} style={[row, { alignItems: 'center', gap: space.sm }]}>
                  <Ionicons name={k.found ? 'checkmark-circle' : 'close-circle'} size={18} color={k.found ? colors.primaryDark : colors.inkSoft} />
                  <EnglishText variant="small" style={{ flex: 1 }}>
                    {k.keyword.split('|').join(' / ')}
                  </EnglishText>
                  <AppText variant="small" color={k.found ? colors.primaryDark : colors.inkSoft}>
                    {t(k.found ? 'rq.found' : 'rq.missing')}
                  </AppText>
                </View>
              ))}
            </Card>

            <Card style={{ gap: space.sm }}>
              <AppText variant="label" color={colors.inkSoft}>
                {t('rq.model').toUpperCase()}
              </AppText>
              <EnglishText variant="body">{task.model}</EnglishText>
              <Button label={t('ra.listenModel')} icon="volume-high" variant="secondary" compact onPress={() => listening.play(task.model)} />
              <Card style={{ gap: space.xs, backgroundColor: colors.accentSoft }}>
                <AppText variant="label">{t('ra.tip').toUpperCase()}</AppText>
                <AppText>{tx(task.tip)}</AppText>
              </Card>
            </Card>

            <Card style={{ gap: space.xs }}>
              <AppText variant="label" color={colors.inkSoft}>
                {t('ph.alt').toUpperCase()}
              </AppText>
              <AppText variant="small">{tx(task.alt)}</AppText>
            </Card>
          </>
        ) : null}
      </View>
    </Screen>
  );
}
