import { Ionicons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { SimBanner } from '../components/SimBanner';
import { AppText, Button, Card, EnglishText, Screen } from '../components/ui';
import { readAloudById } from '../data/speaking/readAloud';
import { useI18n } from '../i18n';
import type { StringKey } from '../i18n/strings';
import { nextSimStep } from '../navigation/simulation';
import type { RootStackParamList } from '../navigation/types';
import { markText, scoreReading, type ReadingScore } from '../services/alignment';
import type { RecognitionErrorCode } from '../services/recognition';
import { listening } from '../services/speech';
import { dayKey, useApp } from '../state/AppState';
import { useAccess } from '../state/useAccess';
import { useAccessGuard } from '../state/useAccessGuard';
import { useSpeechCapture, type CaptureResult } from '../state/useSpeechCapture';
import { colors, fonts, radius, space } from '../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'ReadAloud'>;
/** 'failed': nothing was heard (microphone refused or missing, network, silence); nothing is saved. */
type Phase = 'prep' | 'record' | 'analyzing' | 'result' | 'failed';

/** Official timing of TOEIC Speaking tasks 1-2. */
const PREP_SECONDS = 45;
const READ_SECONDS = 45;

export const ERROR_KEYS: Partial<Record<RecognitionErrorCode, StringKey>> = {
  'no-speech': 'ra.error.no-speech',
  network: 'ra.error.network',
  'audio-capture': 'ra.error.audio-capture',
  'not-allowed': 'speak.permissionDenied',
  'language-not-supported': 'ra.error.language-not-supported',
  unavailable: 'speak.unavailable',
  other: 'ra.error.other',
};

export function ReadAloudScreen({ navigation, route }: Props) {
  const task = readAloudById[route.params.taskId];
  const sim = route.params.sim;
  const { data, recordSpeechAttempt } = useApp();
  const access = useAccess();
  const allowed = useAccessGuard(sim ? access.simulation() : access.speaking(route.params.taskId), 'speaking');
  const { t, tx, row, backIcon } = useI18n();
  const [phase, setPhase] = useState<Phase>('prep');
  const [seconds, setSeconds] = useState(PREP_SECONDS);
  const [score, setScore] = useState<ReadingScore | null>(null);
  const [heard, setHeard] = useState('');
  const [shownWord, setShownWord] = useState<number | null>(null);

  const finish = useCallback(
    ({ transcript: text, durationSec }: CaptureResult) => {
      if (!task) return;
      setHeard(text);
      if (!text) {
        // In a simulation, as in the test, a task without an answer is simply left behind.
        if (sim) nextSimStep(navigation, sim);
        else setPhase('failed');
        return;
      }
      const result = scoreReading(task.text, text, durationSec);
      setScore(result);
      setPhase('result');
      recordSpeechAttempt({
        kind: 'read',
        taskId: task.id,
        date: dayKey(),
        durationSec,
        transcript: text,
        accuracy: result.accuracy,
        wordsPerMinute: result.wordsPerMinute,
        missed: result.ops.flatMap((o) => (o.kind === 'missed' || o.kind === 'wrong' ? [o.expected] : [])),
        runId: sim?.runId,
      });
      if (sim) nextSimStep(navigation, sim);
    },
    [task, recordSpeechAttempt, sim, navigation],
  );

  const capture = useSpeechCapture(finish);
  const { transcript, error } = capture;

  const start = useCallback(async () => {
    listening.stop();
    if (!(await capture.start())) {
      setPhase('failed');
      return;
    }
    setSeconds(READ_SECONDS);
    setPhase('record');
  }, [capture]);

  const stop = useCallback(() => {
    setPhase('analyzing');
    capture.stop();
  }, [capture]);

  // One countdown drives both the preparation and the reading time.
  useEffect(() => {
    if (phase !== 'prep' && phase !== 'record') return;
    const id = setInterval(() => setSeconds((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, [phase]);

  useEffect(() => {
    if (seconds > 0) return;
    if (phase === 'prep') start();
    else if (phase === 'record') stop();
  }, [seconds, phase, start, stop]);

  useEffect(() => () => listening.stop(), []);

  const marks = useMemo(() => (task && score ? markText(task.text, score.ops) : []), [task, score]);

  if (!task || !allowed) return null;

  if (!data.speechConsent?.granted) {
    return (
      <Screen footer={<Button label={t('common.back')} onPress={() => navigation.goBack()} />}>
        <AppText>{t('speak.declined')}</AppText>
      </Screen>
    );
  }

  const retry = () => {
    capture.reset();
    setScore(null);
    setHeard('');
    setShownWord(null);
    setSeconds(PREP_SECONDS);
    setPhase('prep');
  };

  const footer =
    phase === 'prep' ? (
      <Button label={t('ra.start')} icon="mic" onPress={start} />
    ) : phase === 'record' ? (
      <Button label={t('ra.stop')} icon="stop" variant="danger" onPress={stop} />
    ) : phase === 'failed' ? (
      <Button label={t('ra.again')} icon="refresh" onPress={retry} />
    ) : phase === 'result' ? (
      <View style={[row, { gap: space.sm }]}>
        <View style={{ flex: 1 }}>
          <Button label={t('common.back')} variant="secondary" onPress={() => navigation.goBack()} />
        </View>
        <View style={{ flex: 1 }}>
          <Button label={t('ra.again')} icon="refresh" onPress={retry} />
        </View>
      </View>
    ) : undefined;

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
              {t('speak.readAloud').toUpperCase()}
            </AppText>
            <AppText variant="h3">{tx(task.topic)}</AppText>
          </View>
        </View>

        {phase === 'prep' || phase === 'record' ? (
          <View style={[row, { alignItems: 'center', gap: space.sm }]} accessibilityLiveRegion="polite">
            <Ionicons name={phase === 'record' ? 'mic' : 'time-outline'} size={20} color={phase === 'record' ? colors.dangerDark : colors.primaryDark} />
            <AppText style={{ fontWeight: '700' }} color={phase === 'record' ? colors.dangerDark : colors.primaryDark}>
              {phase === 'prep' ? t('ra.prepTime', { s: seconds }) : `${t('ra.recording')} · ${t('ra.timeLeft', { s: seconds })}`}
            </AppText>
          </View>
        ) : null}

        {phase !== 'result' ? (
          <Card style={{ gap: space.md }}>
            <EnglishText variant="body" style={{ fontSize: 19, lineHeight: 30 }}>
              {task.text}
            </EnglishText>
            {phase === 'prep' ? (
              <>
                <AppText variant="small" color={colors.inkSoft}>
                  {t('ra.prepare')}
                </AppText>
                {/* No model and no tip in a simulation: the learner is in test conditions. */}
                {!sim ? <Button label={t('ra.listenModel')} icon="volume-high" variant="secondary" compact onPress={() => listening.play(task.text)} /> : null}
              </>
            ) : null}
          </Card>
        ) : null}

        {phase === 'prep' && !sim ? (
          <Card style={{ gap: space.xs, backgroundColor: colors.accentSoft }}>
            <AppText variant="label">{t('ra.tip').toUpperCase()}</AppText>
            <AppText>{tx(task.tip)}</AppText>
          </Card>
        ) : null}

        {phase === 'record' || phase === 'analyzing' ? (
          <Card style={{ gap: space.sm }}>
            <AppText variant="label" color={colors.inkSoft}>
              {(phase === 'analyzing' ? t('ra.analyzing') : t('ra.heard')).toUpperCase()}
            </AppText>
            <EnglishText variant="body" color={transcript ? colors.ink : colors.inkSoft}>
              {transcript || '…'}
            </EnglishText>
          </Card>
        ) : null}

        {phase === 'failed' && (!error || error === 'no-speech') ? (
          <Card style={{ backgroundColor: colors.dangerSoft }}>
            <AppText>{t('ra.nothing')}</AppText>
          </Card>
        ) : null}

        {error && ERROR_KEYS[error] && !(error === 'no-speech' && (transcript || phase === 'failed')) ? (
          <Card style={{ backgroundColor: colors.dangerSoft }}>
            <AppText>{t(ERROR_KEYS[error]!)}</AppText>
          </Card>
        ) : null}

        {phase === 'result' && score ? (
          <>
            <View style={[row, { gap: space.md }]}>
              <Card style={{ flex: 1, gap: 4, alignItems: 'center' }}>
                <AppText variant="label" color={colors.inkSoft} center>
                  {t('ra.accuracy').toUpperCase()}
                </AppText>
                <EnglishText variant="title" color={colors.primaryDark}>{`${Math.round(score.accuracy * 100)} %`}</EnglishText>
                <AppText variant="small" color={colors.inkSoft} center>
                  {t('ra.accuracyValue', { n: score.correctWords, total: score.expectedWords })}
                </AppText>
              </Card>
              <Card style={{ flex: 1, gap: 4, alignItems: 'center' }}>
                <AppText variant="label" color={colors.inkSoft} center>
                  {t('ra.wpm').toUpperCase()}
                </AppText>
                <EnglishText variant="title" color={colors.primaryDark}>{score.wordsPerMinute === null ? '—' : String(score.wordsPerMinute)}</EnglishText>
                <AppText variant="small" color={colors.inkSoft} center>
                  {score.wordsPerMinute === null ? '' : t('ra.wpmValue', { n: score.wordsPerMinute })}
                </AppText>
              </Card>
            </View>

            {score.correctWords === 0 ? (
              <Card style={{ backgroundColor: colors.dangerSoft }}>
                <AppText>{t('ra.nothing')}</AppText>
              </Card>
            ) : null}

            <Card style={{ gap: space.sm }}>
              <AppText variant="label" color={colors.inkSoft}>
                {t('ra.yourText').toUpperCase()}
              </AppText>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6 }}>
                {marks.map((m, i) => (
                  <Pressable
                    key={i}
                    disabled={m.status !== 'wrong'}
                    onPress={() => setShownWord(i === shownWord ? null : i)}
                    accessibilityRole={m.status === 'wrong' ? 'button' : 'text'}
                    accessibilityLabel={m.status === 'ok' ? m.word : `${m.word}: ${t(m.status === 'missed' ? 'ra.legendMissed' : 'ra.legendWrong')}`}
                    style={{
                      paddingHorizontal: 4,
                      paddingVertical: 2,
                      borderRadius: radius.sm,
                      backgroundColor: m.status === 'missed' ? colors.dangerSoft : m.status === 'wrong' ? colors.accentSoft : 'transparent',
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 18,
                        lineHeight: 28,
                        color: m.status === 'missed' ? colors.dangerDark : colors.ink,
                        textDecorationLine: m.status === 'missed' ? 'line-through' : m.status === 'wrong' ? 'underline' : 'none',
                        fontFamily: m.status === 'ok' ? fonts[400] : fonts[700],
                        writingDirection: 'ltr',
                      }}
                    >
                      {m.word}
                    </Text>
                  </Pressable>
                ))}
              </View>
              {shownWord !== null && marks[shownWord]?.heard ? (
                <EnglishText variant="small" color={colors.accentDark} style={{ fontWeight: '700' }}>
                  {t('ra.heardAs', { w: marks[shownWord].word.replace(/[.,!?;:]+$/, ''), h: marks[shownWord].heard! })}
                </EnglishText>
              ) : null}
              <AppText variant="small" color={colors.inkSoft}>
                {`${t('ra.legendMissed')} · ${t('ra.legendWrong')}`}
              </AppText>
            </Card>

            <Card style={{ gap: space.sm }}>
              <AppText variant="label" color={colors.inkSoft}>
                {t('ra.heard').toUpperCase()}
              </AppText>
              <EnglishText variant="body">{heard || '…'}</EnglishText>
            </Card>

            <AppText variant="small" color={colors.inkSoft}>
              {t('ra.note')}
            </AppText>
          </>
        ) : null}
      </View>
    </Screen>
  );
}
