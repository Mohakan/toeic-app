import { Ionicons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Pressable, View } from 'react-native';
import { SpeakingDocumentCard } from '../components/SpeakingDocumentCard';
import { SimBanner } from '../components/SimBanner';
import { AppText, Button, Card, EnglishText, Screen } from '../components/ui';
import { documentTaskById, questionAudio } from '../data/speaking/documents';
import { questionSetById } from '../data/speaking/questions';
import { useI18n } from '../i18n';
import { nextSimStep } from '../navigation/simulation';
import type { RootStackParamList } from '../navigation/types';
import type { RecognitionErrorCode } from '../services/recognition';
import { assessResponse, minWords } from '../services/responseFeedback';
import { listening } from '../services/speech';
import { dayKey, useApp } from '../state/AppState';
import { useAccess } from '../state/useAccess';
import { useAccessGuard } from '../state/useAccessGuard';
import { useSpeechCapture, type CaptureResult } from '../state/useSpeechCapture';
import { colors, space } from '../theme';
import { ERROR_KEYS } from './ReadAloudScreen';

type Props = NativeStackScreenProps<RootStackParamList, 'Respond'>;
/**
 * 'document': 45 s to read the document (tasks 8-10 only).
 * 'failed': the microphone could not be opened; nothing is saved.
 */
type Phase = 'intro' | 'document' | 'reading' | 'prep' | 'answer' | 'analyzing' | 'summary' | 'failed';

/** Official timing of TOEIC Speaking tasks 5-10: 3 seconds to prepare each answer. */
const PREP_SECONDS = 3;
/** Tasks 8-10: time to read the document before the first question. */
const DOCUMENT_SECONDS = 45;

/** Tasks 5-7 (questions about a scenario) and tasks 8-10 (questions about a document). */
export function RespondScreen({ navigation, route }: Props) {
  const doc = documentTaskById[route.params.setId];
  const qset = doc ? undefined : questionSetById[route.params.setId];
  const set = doc ?? qset;
  const sim = route.params.sim;
  const { data, recordSpeechAttempt } = useApp();
  const access = useAccess();
  const allowed = useAccessGuard(sim ? access.simulation() : access.speaking(route.params.setId), 'speaking');
  const { t, tx, row, backIcon } = useI18n();
  const [phase, setPhase] = useState<Phase>('intro');
  const [index, setIndex] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [answers, setAnswers] = useState<(CaptureResult | null)[]>([]);
  const [lastError, setLastError] = useState<RecognitionErrorCode | null>(null);
  // Tasks 8-10 questions are only heard; the text appears on request or when no voice is available.
  const [noVoice, setNoVoice] = useState(false);
  const [shown, setShown] = useState(-1);
  const question = set?.questions[index];

  const finish = useCallback(
    (result: CaptureResult) => {
      if (!set) return;
      const q = set.questions[index];
      const feedback = assessResponse(result.transcript, q.responseSec, q.keywords, result.durationSec);
      setAnswers((prev) => [...prev.slice(0, index), result]);
      if (feedback.answered) {
        recordSpeechAttempt({
          kind: 'respond',
          taskId: q.id,
          date: dayKey(),
          durationSec: result.durationSec,
          transcript: result.transcript,
          words: feedback.words,
          wordsPerMinute: feedback.wordsPerMinute,
          keywordsFound: feedback.keywords.filter((k) => k.found).length,
          keywordsTotal: feedback.keywords.length,
          runId: sim?.runId,
        });
      }
      if (index + 1 < set.questions.length) {
        setIndex(index + 1);
        setPhase('reading');
      } else if (sim) {
        nextSimStep(navigation, sim);
      } else {
        setPhase('summary');
      }
    },
    [set, index, recordSpeechAttempt, sim, navigation],
  );

  const capture = useSpeechCapture(finish);
  const { transcript, error } = capture;

  useEffect(() => {
    if (error) setLastError(error);
  }, [error]);

  const answer = useCallback(async () => {
    if (!question) return;
    listening.stop();
    if (!(await capture.start())) {
      setPhase('failed');
      return;
    }
    setSeconds(question.responseSec);
    setPhase('answer');
  }, [capture, question]);

  const stop = useCallback(() => {
    setPhase('analyzing');
    capture.stop();
  }, [capture]);

  // The question is read aloud, as in the test; if speech synthesis is missing or never reports the
  // end, the preparation time starts anyway after a delay based on the length of the question.
  const readGuard = useRef(0);
  useEffect(() => {
    if (phase !== 'reading' || !question) return;
    const id = ++readGuard.current;
    const toPrep = () => {
      if (readGuard.current !== id) return;
      readGuard.current += 1;
      setSeconds(PREP_SECONDS);
      setPhase('prep');
    };
    const text = doc ? questionAudio(doc, index) : sim && qset && index === 0 ? `${qset.context}\n${question.prompt}` : question.prompt;
    const fallback = setTimeout(toPrep, Math.max(4, text.split(/\s+/).length * 0.6) * 1000 + 1500);
    listening.play(text, { onDone: toPrep }).then((played) => {
      if (!played) {
        setNoVoice(true);
        toPrep();
      }
    });
    return () => clearTimeout(fallback);
  }, [phase, question, doc, index, sim, qset]);

  // One countdown drives the document reading, the preparation and the answer time.
  useEffect(() => {
    if (phase !== 'document' && phase !== 'prep' && phase !== 'answer') return;
    const id = setInterval(() => setSeconds((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, [phase]);

  useEffect(() => {
    if (seconds > 0) return;
    if (phase === 'document') setPhase('reading');
    else if (phase === 'prep') answer();
    else if (phase === 'answer') stop();
  }, [seconds, phase, answer, stop]);

  useEffect(() => () => listening.stop(), []);

  // In a simulation, the task starts at once, without the introduction.
  const beginRef = useRef<() => void>(() => {});
  const autoStarted = useRef(false);
  useEffect(() => {
    if (!sim || autoStarted.current || !data.speechConsent?.granted) return;
    autoStarted.current = true;
    beginRef.current();
  });

  const feedback = useMemo(
    () => (set ? set.questions.map((q, i) => (answers[i] ? assessResponse(answers[i]!.transcript, q.responseSec, q.keywords, answers[i]!.durationSec) : null)) : []),
    [set, answers],
  );

  if (!set || !question || !allowed) return null;

  if (!data.speechConsent?.granted) {
    return (
      <Screen footer={<Button label={t('common.back')} onPress={() => navigation.goBack()} />}>
        <AppText>{t('speak.declined')}</AppText>
      </Screen>
    );
  }

  const begin = () => {
    listening.stop();
    capture.reset();
    setLastError(null);
    setAnswers([]);
    setIndex(0);
    setShown(-1);
    if (doc) {
      setSeconds(DOCUMENT_SECONDS);
      setPhase('document');
    } else {
      setPhase('reading');
    }
  };
  beginRef.current = begin;

  const running = phase === 'reading' || phase === 'prep' || phase === 'answer' || phase === 'analyzing';
  const nothingHeard = phase === 'summary' && feedback.every((f) => !f?.answered);
  const promptVisible = !doc || noVoice || shown === index;

  const footer =
    phase === 'intro' ? (
      <Button label={t('rq.start')} icon="mic" onPress={begin} />
    ) : phase === 'document' ? (
      <Button label={t('rd.ready')} icon="play" onPress={() => setPhase('reading')} />
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
          <Button label={t('rq.again')} icon="refresh" onPress={begin} />
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
              {t(doc ? 'speak.documents' : 'speak.questions').toUpperCase()}
            </AppText>
            <AppText variant="h3">{tx(set.topic)}</AppText>
          </View>
        </View>

        {doc && phase === 'intro' ? (
          <>
            <Card style={{ gap: space.xs, backgroundColor: colors.accentSoft }}>
              <AppText variant="label">{t('rd.help').toUpperCase()}</AppText>
              <AppText>{tx(doc.documentHelp)}</AppText>
            </Card>
            <AppText variant="small" color={colors.inkSoft}>
              {t('speak.documentsSub')}
            </AppText>
            <AppText variant="small" color={colors.inkSoft}>
              {t('rd.audioOnly')}
            </AppText>
          </>
        ) : null}

        {doc && phase === 'document' ? (
          <View style={[row, { alignItems: 'center', gap: space.sm }]} accessibilityLiveRegion="polite">
            <Ionicons name="time-outline" size={20} color={colors.primaryDark} />
            <AppText style={{ fontWeight: '700' }} color={colors.primaryDark}>
              {t('rd.read', { s: seconds })}
            </AppText>
          </View>
        ) : null}

        {doc && (phase === 'document' || running) ? <SpeakingDocumentCard document={doc.document} /> : null}

        {sim && qset && running && index === 0 ? (
          <Card style={{ gap: space.sm }}>
            <AppText variant="label" color={colors.inkSoft}>
              {t('rq.context').toUpperCase()}
            </AppText>
            <EnglishText variant="body">{qset.context}</EnglishText>
          </Card>
        ) : null}

        {qset && phase === 'intro' ? (
          <>
            <Card style={{ gap: space.md }}>
              <AppText variant="label" color={colors.inkSoft}>
                {t('rq.context').toUpperCase()}
              </AppText>
              <EnglishText variant="body" style={{ fontSize: 18, lineHeight: 28 }}>
                {qset.context}
              </EnglishText>
              <Button label={t('rq.listen')} icon="volume-high" variant="secondary" compact onPress={() => listening.play(qset.context)} />
            </Card>
            <Card style={{ gap: space.xs, backgroundColor: colors.accentSoft }}>
              <AppText variant="label">{t('rq.contextHelp').toUpperCase()}</AppText>
              <AppText>{tx(qset.contextHelp)}</AppText>
            </Card>
            <AppText variant="small" color={colors.inkSoft}>
              {t('speak.questionsSub')}
            </AppText>
          </>
        ) : null}

        {running ? (
          <>
            <AppText variant="label" color={colors.inkSoft}>
              {t('rq.question', { n: index + 1 }).toUpperCase()}
            </AppText>
            {promptVisible ? (
              <Card style={{ gap: space.md }}>
                <EnglishText variant="body" style={{ fontSize: 19, lineHeight: 30 }}>
                  {question.prompt}
                </EnglishText>
              </Card>
            ) : !sim ? (
              <Button label={t('rd.show')} icon="eye-outline" variant="ghost" compact onPress={() => setShown(index)} />
            ) : null}
            <View style={[row, { alignItems: 'center', gap: space.sm }]} accessibilityLiveRegion="polite">
              <Ionicons
                name={phase === 'answer' ? 'mic' : phase === 'reading' ? 'volume-high' : phase === 'prep' ? 'time-outline' : 'hourglass-outline'}
                size={20}
                color={phase === 'answer' ? colors.dangerDark : colors.primaryDark}
              />
              <AppText style={{ fontWeight: '700' }} color={phase === 'answer' ? colors.dangerDark : colors.primaryDark}>
                {phase === 'reading'
                  ? t('rq.reading')
                  : phase === 'prep'
                    ? t('rq.prep', { s: seconds })
                    : phase === 'answer'
                      ? t('rq.answer', { s: seconds })
                      : t('ra.analyzing')}
              </AppText>
            </View>
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
          </>
        ) : null}

        {phase === 'failed' || nothingHeard ? (
          <Card style={{ backgroundColor: colors.dangerSoft }}>
            <AppText>{t(lastError && ERROR_KEYS[lastError] ? ERROR_KEYS[lastError]! : 'ra.nothing')}</AppText>
          </Card>
        ) : null}

        {phase === 'summary' ? (
          <>
            <View style={{ gap: space.xs }}>
              <AppText variant="h3">{t('rq.summary')}</AppText>
              <AppText variant="small" color={colors.inkSoft}>
                {t('rq.indicative')}
              </AppText>
            </View>
            {doc ? <SpeakingDocumentCard document={doc.document} /> : null}
            {set.questions.map((q, i) => {
              const f = feedback[i];
              return (
                <Card key={q.id} style={{ gap: space.sm }}>
                  <AppText variant="label" color={colors.inkSoft}>
                    {t('rq.question', { n: i + 1 }).toUpperCase()}
                  </AppText>
                  <EnglishText variant="body" style={{ fontWeight: '700' }}>
                    {q.prompt}
                  </EnglishText>

                  <AppText variant="label" color={colors.inkSoft}>
                    {t('rq.yourAnswer').toUpperCase()}
                  </AppText>
                  {f?.answered ? (
                    <>
                      <EnglishText variant="body">{answers[i]!.transcript}</EnglishText>
                      <AppText variant="small" color={f.length === 'short' ? colors.accentDark : colors.primaryDark} style={{ fontWeight: '700' }}>
                        {f.length === 'short' ? t('rq.short', { n: f.words, s: q.responseSec, m: minWords(q.responseSec) }) : t('rq.lengthOk', { n: f.words })}
                      </AppText>
                      {f.wordsPerMinute !== null ? (
                        <AppText variant="small" color={colors.inkSoft}>
                          {t('rq.wpm', { n: f.wordsPerMinute })}
                        </AppText>
                      ) : null}
                    </>
                  ) : (
                    <AppText color={colors.inkSoft}>{t('rq.noAnswer')}</AppText>
                  )}

                  <AppText variant="label" color={colors.inkSoft}>
                    {t('rq.keywords').toUpperCase()}
                  </AppText>
                  {(f?.keywords ?? q.keywords.map((keyword) => ({ keyword, label: keyword.split('|')[0], found: false }))).map((k) => (
                    <View key={k.keyword} style={[row, { alignItems: 'center', gap: space.sm }]}>
                      <Ionicons name={k.found ? 'checkmark-circle' : 'close-circle'} size={18} color={k.found ? colors.primaryDark : colors.inkSoft} />
                      <EnglishText variant="small" style={{ flex: 1 }}>
                        {k.keyword.split('|').join(' / ').replace(/\bi\b/g, 'I')}
                      </EnglishText>
                      <AppText variant="small" color={k.found ? colors.primaryDark : colors.inkSoft}>
                        {t(k.found ? 'rq.found' : 'rq.missing')}
                      </AppText>
                    </View>
                  ))}

                  <AppText variant="label" color={colors.inkSoft}>
                    {t('rq.model').toUpperCase()}
                  </AppText>
                  <EnglishText variant="body">{q.model}</EnglishText>
                  <Button label={t('ra.listenModel')} icon="volume-high" variant="secondary" compact onPress={() => listening.play(q.model)} />
                  <Card style={{ gap: space.xs, backgroundColor: colors.accentSoft }}>
                    <AppText variant="label">{t('ra.tip').toUpperCase()}</AppText>
                    <AppText>{tx(q.tip)}</AppText>
                  </Card>
                </Card>
              );
            })}
          </>
        ) : null}
      </View>
    </Screen>
  );
}
