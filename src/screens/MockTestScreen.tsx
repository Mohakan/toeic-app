import { Ionicons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Pressable, View } from 'react-native';
import { ConfirmDialog } from '../components/ConfirmDialog';
import { McqQuestion, TEST_PLAYS } from '../components/McqQuestion';
import { AppText, Button, Card, EnglishText, ProgressBar, Screen } from '../components/ui';
import { mockById } from '../data/mock';
import { useI18n } from '../i18n';
import type { StringKey } from '../i18n/strings';
import type { RootStackParamList } from '../navigation/types';
import { formatClock, mockItems, mockResponses, remainingSeconds, scoreMock, type MockReport } from '../services/mock';
import { listening } from '../services/speech';
import { useApp } from '../state/AppState';
import { useAccess } from '../state/useAccess';
import { useAccessGuard } from '../state/useAccessGuard';
import { colors, space } from '../theme';
import type { ExamPart } from '../types';
import { SectionCard } from './ResultScreen';

const XP_PER_CORRECT = 2;
const XP_COMPLETION = 10;

export function MockTestScreen({ navigation, route }: NativeStackScreenProps<RootStackParamList, 'MockTest'>) {
  const mock = mockById[route.params.mockId];
  const { saveMockResult, addPracticeResponses, addXp } = useApp();
  const access = useAccess();
  const allowed = useAccessGuard(access.mock(route.params.mockId), 'mock');
  const { t, tx, row } = useI18n();
  const items = useMemo(() => (mock ? mockItems(mock) : []), [mock]);
  const partOf = useMemo(() => {
    const map: Record<string, ExamPart> = {};
    mock?.sections.forEach((s) => s.items.forEach((i) => (map[i.id] = s.part)));
    return map;
  }, [mock]);

  const [phase, setPhase] = useState<'rules' | 'run' | 'report'>('rules');
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  /** Recording plays per item, kept here so pausing does not give extra plays. */
  const [plays, setPlays] = useState<Record<string, number>>({});
  const [elapsed, setElapsed] = useState(0);
  const [paused, setPaused] = useState(false);
  const [confirm, setConfirm] = useState<'finish' | 'quit' | null>(null);
  const [report, setReport] = useState<MockReport | null>(null);
  const [timeUp, setTimeUp] = useState(false);
  const finished = useRef(false);

  const finish = useCallback(
    (finalAnswers: Record<string, number>, used: number) => {
      if (!mock || finished.current) return;
      finished.current = true;
      listening.stop();
      const scored = scoreMock(mock, finalAnswers, used);
      saveMockResult(scored.result);
      addPracticeResponses(mockResponses(mock, finalAnswers));
      addXp(scored.result.correct * XP_PER_CORRECT + XP_COMPLETION);
      setReport(scored);
      setPhase('report');
    },
    [mock, saveMockResult, addPracticeResponses, addXp],
  );

  useEffect(() => {
    if (phase !== 'run' || paused) return;
    const id = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => clearInterval(id);
  }, [phase, paused]);

  useEffect(() => {
    if (phase === 'run' && mock && remainingSeconds(mock.durationMin, elapsed) === 0) {
      setTimeUp(true);
      finish(answers, elapsed);
    }
  }, [elapsed, phase, mock, answers, finish]);

  useEffect(() => () => listening.stop(), []);

  if (!mock || !allowed) return null;

  if (phase === 'rules') {
    const rules: StringKey[] = ['mock.rules.1', 'mock.rules.2', 'mock.rules.3', 'mock.rules.part1'];
    return (
      <Screen footer={<Button label={t('home.start')} icon="play" onPress={() => setPhase('run')} />}>
        <View style={{ gap: space.lg }}>
          <AppText variant="h2">{tx(mock.title)}</AppText>
          <AppText color={colors.inkSoft}>{t('mock.items', { n: items.length, m: mock.durationMin })}</AppText>
          <Card style={{ gap: space.md }}>
            <AppText variant="h3">{t('mock.rules.title')}</AppText>
            {rules.map((key) => (
              <View key={key} style={[row, { gap: space.sm }]}>
                <Ionicons name="information-circle" size={20} color={colors.primaryDark} />
                <AppText style={{ flex: 1 }}>{t(key)}</AppText>
              </View>
            ))}
          </Card>
          {mock.demo ? (
            <AppText variant="small" color={colors.inkSoft}>
              {t('mock.demoNote')}
            </AppText>
          ) : null}
          <Button label={t('common.back')} variant="ghost" onPress={() => navigation.goBack()} />
        </View>
      </Screen>
    );
  }

  if (phase === 'report' && report) {
    const { result, estimate } = report;
    const wrong = items.filter((i) => answers[i.id] !== i.answer);
    return (
      <Screen footer={<Button label={t('mock.back')} onPress={() => (access.full ? navigation.goBack() : navigation.replace('Paywall', { reason: 'mockDone' }))} />}>
        <View style={{ gap: space.lg }}>
          {timeUp ? (
            <AppText variant="h3" color={colors.dangerDark}>
              {t('mock.timeUp')}
            </AppText>
          ) : null}
          <AppText variant="h2">{t('mock.report')}</AppText>
          <Card style={{ gap: space.sm, alignItems: 'center' }}>
            <EnglishText variant="title" color={colors.primaryDark} style={{ textAlign: 'center' }}>
              {t('mock.correct', { n: result.correct, total: result.total })}
            </EnglishText>
            <AppText variant="small" color={colors.inkSoft} center>
              {t('mock.time', { t: formatClock(result.timeUsedSec) })}
            </AppText>
          </Card>
          <View style={[row, { gap: space.md }]}>
            <SectionCard section="L" result={estimate.sections.L} />
            <SectionCard section="R" result={estimate.sections.R} />
          </View>
          <AppText variant="small" color={colors.inkSoft}>
            {t('mock.estimateNote')}
          </AppText>
          <Card style={{ gap: space.sm }}>
            <AppText variant="h3">{t('mock.byPart')}</AppText>
            {Object.entries(result.byPart).map(([part, score]) => (
              <View key={part} style={{ gap: 4 }}>
                <View style={[row, { justifyContent: 'space-between', gap: space.sm }]}>
                  <AppText variant="small" style={{ fontWeight: '700', flex: 1 }}>
                    {t(`assess.part.${part}` as StringKey)}
                  </AppText>
                  <EnglishText variant="small" color={colors.inkSoft} style={{ flexShrink: 0 }}>{`${score!.correct} / ${score!.total}`}</EnglishText>
                </View>
                <ProgressBar value={score!.total ? score!.correct / score!.total : 0} color={colors.primary} label={part} />
              </View>
            ))}
          </Card>
          {wrong.length > 0 ? (
            <Card style={{ gap: space.md }}>
              <AppText variant="h3">{t('mock.corrections')}</AppText>
              {wrong.map((item) => (
                <View key={item.id} style={{ gap: 2, borderBottomWidth: 1, borderBottomColor: colors.line, paddingBottom: space.sm }}>
                  <AppText variant="label" color={colors.primaryDark}>
                    {t(`assess.part.${partOf[item.id]}` as StringKey)}
                  </AppText>
                  <EnglishText variant="small" style={{ fontWeight: '700' }}>
                    {item.prompt === 'Choose the best response.' && item.audio ? item.audio : item.prompt}
                  </EnglishText>
                  <EnglishText variant="small" color={colors.dangerDark}>
                    {t('mock.yourAnswer', { a: answers[item.id] !== undefined ? item.options[answers[item.id]] : t('mock.noAnswer') })}
                  </EnglishText>
                  <EnglishText variant="small" color={colors.successDark}>
                    {t('lesson.answerWas', { a: item.options[item.answer] })}
                  </EnglishText>
                  <AppText variant="small" color={colors.inkSoft}>
                    {tx(item.explain)}
                  </AppText>
                </View>
              ))}
            </Card>
          ) : null}
        </View>
      </Screen>
    );
  }

  const item = items[index];
  const left = remainingSeconds(mock.durationMin, elapsed);
  const answeredCount = Object.keys(answers).length;
  const goNext = () => {
    listening.stop();
    if (index + 1 < items.length) setIndex(index + 1);
    else setConfirm('finish');
  };

  return (
    <Screen
      footer={
        <View style={[row, { gap: space.sm }]}>
          <View style={{ flex: 1 }}>
            <Button label={t('mock.skip')} variant="secondary" onPress={goNext} disabled={paused} />
          </View>
          <View style={{ flex: 2 }}>
            <Button
              label={index + 1 < items.length ? t('common.next') : t('mock.finish')}
              disabled={paused || answers[item.id] === undefined}
              onPress={goNext}
            />
          </View>
        </View>
      }
    >
      <View style={{ gap: space.lg }}>
        <View style={[row, { alignItems: 'center', gap: space.md }]}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={t('assess.quit')}
            onPress={() => setConfirm('quit')}
            hitSlop={8}
            style={{ width: 44, height: 44, alignItems: 'center', justifyContent: 'center' }}
          >
            <Ionicons name="close" size={26} color={colors.inkSoft} />
          </Pressable>
          <View style={{ flex: 1 }}>
            <ProgressBar value={index / items.length} color={colors.primary} label={t('lesson.progress', { n: index + 1, total: items.length })} />
          </View>
          <View accessible accessibilityLabel={t('mock.remaining', { t: formatClock(left) })} style={[row, { alignItems: 'center', gap: 4 }]}>
            <Ionicons name="timer-outline" size={18} color={left < 60 ? colors.dangerDark : colors.inkSoft} />
            <EnglishText variant="label" color={left < 60 ? colors.dangerDark : colors.ink}>
              {formatClock(left)}
            </EnglishText>
          </View>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={paused ? t('mock.resume') : t('mock.pause')}
            onPress={() => setPaused((p) => !p)}
            hitSlop={8}
            style={{ width: 44, height: 44, alignItems: 'center', justifyContent: 'center' }}
          >
            <Ionicons name={paused ? 'play' : 'pause'} size={22} color={colors.primaryDark} />
          </Pressable>
        </View>
        <EnglishText variant="label" color={colors.inkSoft}>
          {t('lesson.progress', { n: index + 1, total: items.length })}
        </EnglishText>

        {paused ? (
          <Card style={{ alignItems: 'center', gap: space.md, paddingVertical: space.xl }}>
            <Ionicons name="pause-circle" size={48} color={colors.primaryDark} />
            <AppText variant="h3" center>
              {t('mock.paused')}
            </AppText>
            <Button label={t('mock.resume')} icon="play" onPress={() => setPaused(false)} />
          </Card>
        ) : (
          <McqQuestion
            key={item.id}
            item={item}
            selected={answers[item.id] ?? null}
            revealed={false}
            onSelect={(i) => setAnswers((a) => ({ ...a, [item.id]: i }))}
            maxPlays={TEST_PLAYS}
            playsUsed={plays[item.id] ?? 0}
            onPlay={() => setPlays((p) => ({ ...p, [item.id]: (p[item.id] ?? 0) + 1 }))}
          />
        )}
      </View>

      <ConfirmDialog
        visible={confirm !== null}
        title={confirm === 'quit' ? t('assess.quit') : t('mock.finish')}
        message={confirm === 'quit' ? t('mock.quitConfirm') : t('mock.finishConfirm', { n: answeredCount, total: items.length })}
        confirmLabel={confirm === 'quit' ? t('assess.quit') : t('mock.finish')}
        cancelLabel={t('mock.keepGoing')}
        destructive={confirm === 'quit'}
        onCancel={() => setConfirm(null)}
        onConfirm={() => {
          const action = confirm;
          setConfirm(null);
          if (action === 'quit') navigation.goBack();
          else finish(answers, elapsed);
        }}
      />
    </Screen>
  );
}
