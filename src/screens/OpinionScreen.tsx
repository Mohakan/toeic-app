import { Ionicons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Pressable, View } from 'react-native';
import { SimBanner } from '../components/SimBanner';
import { AppText, Button, Card, EnglishText, Screen } from '../components/ui';
import { opinionTopicById } from '../data/speaking/opinions';
import { useI18n } from '../i18n';
import type { StringKey } from '../i18n/strings';
import { nextSimStep } from '../navigation/simulation';
import type { RootStackParamList } from '../navigation/types';
import type { RecognitionErrorCode } from '../services/recognition';
import { assessResponse, connectorsUsed, CONNECTORS, minWords, OPINION_SECONDS } from '../services/responseFeedback';
import { listening } from '../services/speech';
import { dayKey, useApp } from '../state/AppState';
import { useAccess } from '../state/useAccess';
import { useAccessGuard } from '../state/useAccessGuard';
import { useSpeechCapture, type CaptureResult } from '../state/useSpeechCapture';
import { colors, space } from '../theme';
import { ERROR_KEYS } from './ReadAloudScreen';

type Props = NativeStackScreenProps<RootStackParamList, 'Opinion'>;
/** 'failed': the microphone could not be opened, or nothing was heard; nothing is saved. */
type Phase = 'intro' | 'prep' | 'answer' | 'analyzing' | 'summary' | 'failed';

/** Official timing of TOEIC Speaking task 11. */
const PREP_SECONDS = 45;

/** Task 11: express and support an opinion. Indicative feedback only, never a score. */
export function OpinionScreen({ navigation, route }: Props) {
  const topic = opinionTopicById[route.params.topicId];
  const sim = route.params.sim;
  const { data, recordSpeechAttempt } = useApp();
  const access = useAccess();
  const allowed = useAccessGuard(sim ? access.simulation() : access.speaking(route.params.topicId), 'speaking');
  const { t, tx, row, backIcon } = useI18n();
  const [phase, setPhase] = useState<Phase>('intro');
  const [seconds, setSeconds] = useState(PREP_SECONDS);
  const [result, setResult] = useState<CaptureResult | null>(null);
  const [lastError, setLastError] = useState<RecognitionErrorCode | null>(null);

  const finish = useCallback(
    (capture: CaptureResult) => {
      if (!topic) return;
      const feedback = assessResponse(capture.transcript, OPINION_SECONDS, topic.keywords, capture.durationSec);
      setResult(capture);
      if (!feedback.answered) {
        if (sim) nextSimStep(navigation, sim);
        else setPhase('failed');
        return;
      }
      if (!sim) setPhase('summary');
      recordSpeechAttempt({
        kind: 'respond',
        taskId: topic.id,
        date: dayKey(),
        durationSec: capture.durationSec,
        transcript: capture.transcript,
        words: feedback.words,
        wordsPerMinute: feedback.wordsPerMinute,
        keywordsFound: feedback.keywords.filter((k) => k.found).length,
        keywordsTotal: feedback.keywords.length,
        connectorsFound: connectorsUsed(capture.transcript).filter((c) => c.heard.length > 0).length,
        runId: sim?.runId,
      });
      if (sim) nextSimStep(navigation, sim);
    },
    [topic, recordSpeechAttempt, sim, navigation],
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
    setSeconds(OPINION_SECONDS);
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

  const feedback = useMemo(
    () => (topic && result ? assessResponse(result.transcript, OPINION_SECONDS, topic.keywords, result.durationSec) : null),
    [topic, result],
  );
  const connectors = useMemo(() => (result ? connectorsUsed(result.transcript) : []), [result]);

  if (!topic || !allowed) return null;

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
    // As in the test, the question is read aloud at the start of the preparation time.
    listening.play(topic.prompt);
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

  const usedKinds = connectors.filter((c) => c.heard.length > 0).length;

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
              {t('speak.opinion').toUpperCase()}
            </AppText>
            <AppText variant="h3">{tx(topic.topic)}</AppText>
          </View>
        </View>

        {phase === 'prep' || phase === 'answer' || phase === 'analyzing' ? (
          <View style={[row, { alignItems: 'center', gap: space.sm }]} accessibilityLiveRegion="polite">
            <Ionicons name={phase === 'answer' ? 'mic' : phase === 'prep' ? 'time-outline' : 'hourglass-outline'} size={20} color={phase === 'answer' ? colors.dangerDark : colors.primaryDark} />
            <AppText style={{ fontWeight: '700' }} color={phase === 'answer' ? colors.dangerDark : colors.primaryDark}>
              {phase === 'prep' ? t('op.prep', { s: seconds }) : phase === 'answer' ? t('rq.answer', { s: seconds }) : t('ra.analyzing')}
            </AppText>
          </View>
        ) : null}

        {phase !== 'summary' ? (
          <Card style={{ gap: space.md }}>
            <AppText variant="label" color={colors.inkSoft}>
              {t('op.question').toUpperCase()}
            </AppText>
            <EnglishText variant="body" style={{ fontSize: 19, lineHeight: 30 }}>
              {topic.prompt}
            </EnglishText>
            {phase === 'intro' ? <Button label={t('op.listen')} icon="volume-high" variant="secondary" compact onPress={() => listening.play(topic.prompt)} /> : null}
          </Card>
        ) : null}

        {phase === 'intro' ? (
          <Card style={{ gap: space.xs, backgroundColor: colors.accentSoft }}>
            <AppText variant="label">{t('rq.contextHelp').toUpperCase()}</AppText>
            <AppText>{tx(topic.promptHelp)}</AppText>
          </Card>
        ) : null}

        {(phase === 'intro' || phase === 'prep') && !sim ? (
          <Card style={{ gap: space.xs }}>
            <AppText variant="label" color={colors.inkSoft}>
              {t('op.plan').toUpperCase()}
            </AppText>
            {t('op.planSteps')
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

        {phase === 'summary' && feedback && result ? (
          <>
            <View style={{ gap: space.xs }}>
              <AppText variant="h3">{t('rq.summary')}</AppText>
              <AppText variant="small" color={colors.inkSoft}>
                {t('op.indicative')}
              </AppText>
            </View>

            <Card style={{ gap: space.sm }}>
              <EnglishText variant="body" style={{ fontWeight: '700' }}>
                {topic.prompt}
              </EnglishText>
              <AppText variant="label" color={colors.inkSoft}>
                {t('rq.yourAnswer').toUpperCase()}
              </AppText>
              <EnglishText variant="body">{result.transcript}</EnglishText>
              <AppText variant="small" color={feedback.length === 'short' ? colors.accentDark : colors.primaryDark} style={{ fontWeight: '700' }}>
                {feedback.length === 'short'
                  ? t('rq.short', { n: feedback.words, s: OPINION_SECONDS, m: minWords(OPINION_SECONDS) })
                  : t('rq.lengthOk', { n: feedback.words })}
              </AppText>
              {feedback.wordsPerMinute !== null ? (
                <AppText variant="small" color={colors.inkSoft}>
                  {t('rq.wpm', { n: feedback.wordsPerMinute })}
                </AppText>
              ) : null}
            </Card>

            <Card style={{ gap: space.sm }}>
              <AppText variant="label" color={colors.inkSoft}>
                {t('op.connectors', { n: usedKinds }).toUpperCase()}
              </AppText>
              {connectors.map((c) => (
                <View key={c.kind} style={[row, { alignItems: 'flex-start', gap: space.sm }]}>
                  <Ionicons name={c.heard.length ? 'checkmark-circle' : 'close-circle'} size={18} color={c.heard.length ? colors.primaryDark : colors.inkSoft} style={{ marginTop: 2 }} />
                  <AppText variant="small" style={{ fontWeight: '700', minWidth: 90 }}>
                    {t(`op.kind.${c.kind}` as StringKey)}
                  </AppText>
                  <EnglishText variant="small" color={c.heard.length ? colors.ink : colors.inkSoft} style={{ flex: 1 }}>
                    {(c.heard.length ? c.heard : CONNECTORS[c.kind].slice(0, 3)).join(' · ').replace(/\bi\b/g, 'I')}
                  </EnglishText>
                </View>
              ))}
              {usedKinds < 4 ? (
                <AppText variant="small" color={colors.accentDark} style={{ fontWeight: '700' }}>
                  {t('op.connectorsHint')}
                </AppText>
              ) : null}
            </Card>

            <Card style={{ gap: space.sm }}>
              <AppText variant="label" color={colors.inkSoft}>
                {t('rq.keywords').toUpperCase()}
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
              <EnglishText variant="body">{topic.model}</EnglishText>
              <Button label={t('ra.listenModel')} icon="volume-high" variant="secondary" compact onPress={() => listening.play(topic.model)} />
              <Card style={{ gap: space.xs, backgroundColor: colors.accentSoft }}>
                <AppText variant="label">{t('ra.tip').toUpperCase()}</AppText>
                <AppText>{tx(topic.tip)}</AppText>
              </Card>
            </Card>
          </>
        ) : null}
      </View>
    </Screen>
  );
}
