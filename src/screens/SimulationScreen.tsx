import { Ionicons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useMemo } from 'react';
import { Pressable, View } from 'react-native';
import { AppText, Button, Card, IconBadge, Screen } from '../components/ui';
import { simulationById } from '../data/speaking/simulations';
import { useI18n } from '../i18n';
import type { StringKey } from '../i18n/strings';
import { goToSimStep } from '../navigation/simulation';
import type { RootStackParamList } from '../navigation/types';
import { minWords, OPINION_SECONDS, PHOTO_SECONDS } from '../services/responseFeedback';
import { lastRunId, simulationReport, type StepReport } from '../services/simulationReport';
import { useApp } from '../state/AppState';
import { useAccess } from '../state/useAccess';
import { useAccessGuard } from '../state/useAccessGuard';
import { colors, space } from '../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'Simulation'>;

/** Title and timing of each step, reusing the labels of the practice sections. */
const STEP_LABELS: Record<string, [StringKey, StringKey]> = {
  '1': ['speak.readAloud', 'speak.readAloudSub'],
  '2': ['speak.readAloud', 'speak.readAloudSub'],
  '3': ['speak.photo', 'speak.photoSub'],
  '4': ['speak.photo', 'speak.photoSub'],
  '5–7': ['speak.questions', 'speak.questionsSub'],
  '8–10': ['speak.documents', 'speak.documentsSub'],
  '11': ['speak.opinion', 'speak.opinionSub'],
};

const newRunId = () => Date.now().toString(36);

/** A timed TOEIC Speaking simulation: its introduction, or the report of a finished run. */
export function SimulationScreen({ navigation, route }: Props) {
  const { simId, runId } = route.params;
  const sim = simulationById[simId];
  const { data } = useApp();
  const access = useAccess();
  const allowed = useAccessGuard(access.simulation(), 'simulation');
  const { t, tx, row, backIcon } = useI18n();
  const report = useMemo(() => (sim && runId ? simulationReport(sim, data.speechAttempts, runId) : null), [sim, runId, data.speechAttempts]);

  if (!sim || !allowed) return null;

  const start = () => goToSimStep(navigation, sim.id, newRunId(), 0);
  const consented = !!data.speechConsent?.granted;
  const previous = lastRunId(sim, data.speechAttempts);

  const header = (
    <View style={[row, { alignItems: 'center', gap: space.sm }]}>
      <Pressable accessibilityRole="button" accessibilityLabel={t('common.back')} onPress={() => navigation.goBack()} hitSlop={8} style={{ minWidth: 44, minHeight: 44, justifyContent: 'center' }}>
        <Ionicons name={backIcon} size={24} color={colors.ink} />
      </Pressable>
      <View style={{ flex: 1 }}>
        <AppText variant="label" color={colors.inkSoft}>
          {t(report ? 'sim.report' : 'sim.section').toUpperCase()}
        </AppText>
        <AppText variant="h2">{tx(sim.title)}</AppText>
      </View>
    </View>
  );

  const stepTitle = (tasks: string) => `${t(tasks.includes('–') ? 'sim.tasks' : 'sim.task', { t: tasks })} · ${t(STEP_LABELS[tasks][0])}`;

  if (!report) {
    return (
      <Screen footer={consented ? <Button label={t('sim.start')} icon="play" onPress={start} /> : <Button label={t('common.back')} onPress={() => navigation.goBack()} />}>
        <View style={{ gap: space.lg }}>
          {header}
          {!consented ? (
            <Card style={{ backgroundColor: colors.dangerSoft }}>
              <AppText>{t('speak.declined')}</AppText>
            </Card>
          ) : null}
          <AppText>{t('sim.intro')}</AppText>
          {['1', '2', '3', '4', '5–7', '8–10', '11'].map((tasks) => (
            <Card key={tasks} style={{ gap: 2 }}>
              <AppText style={{ fontWeight: '700' }}>{stepTitle(tasks)}</AppText>
              <AppText variant="small" color={colors.inkSoft}>
                {t(STEP_LABELS[tasks][1]).split(' · ').slice(1).join(' · ')}
              </AppText>
            </Card>
          ))}
          <Card style={{ backgroundColor: colors.accentSoft }}>
            <AppText>{t('sim.quiet')}</AppText>
          </Card>
          {previous ? <Button label={t('sim.lastReport')} icon="document-text-outline" variant="ghost" compact onPress={() => navigation.push('Simulation', { simId: sim.id, runId: previous })} /> : null}
        </View>
      </Screen>
    );
  }

  const redo = (r: StepReport) => {
    if (r.step.kind === 'read') navigation.navigate('ReadAloud', { taskId: r.step.id });
    else if (r.step.kind === 'photo') navigation.navigate('Photo', { photoId: r.step.id });
    else if (r.step.kind === 'opinion') navigation.navigate('Opinion', { topicId: r.step.id });
    else navigation.navigate('Respond', { setId: r.step.id });
  };

  const lines = (r: StepReport): string[] => {
    if (r.kind === 'read') {
      if (!r.attempt) return [];
      return [t('sim.accuracy', { p: Math.round(r.attempt.accuracy * 100) }), ...(r.attempt.wordsPerMinute ? [t('rq.wpm', { n: r.attempt.wordsPerMinute })] : [])];
    }
    if (r.kind === 'respond') {
      if (!r.answered) return [];
      return [t('sim.answers', { n: r.answered, total: r.total }), t('sim.ideas', { n: r.ideasFound, total: r.ideasTotal })];
    }
    if (!r.attempt) return [];
    if (r.kind === 'photo') {
      return [
        t(r.attempt.words < minWords(PHOTO_SECONDS) * 0.6 ? 'sim.wordsShort' : 'sim.words', { n: r.attempt.words }),
        t('sim.ideas', { n: r.attempt.keywordsFound, total: r.attempt.keywordsTotal }),
      ];
    }
    return [
      t(r.attempt.words < minWords(OPINION_SECONDS) * 0.6 ? 'sim.wordsShort' : 'sim.words', { n: r.attempt.words }),
      t('sim.connectors', { n: r.attempt.connectorsFound ?? 0 }),
      t('sim.ideas', { n: r.attempt.keywordsFound, total: r.attempt.keywordsTotal }),
    ];
  };

  return (
    <Screen
      footer={
        <View style={[row, { gap: space.sm }]}>
          <View style={{ flex: 1 }}>
            <Button label={t('sim.back')} variant="secondary" onPress={() => navigation.goBack()} />
          </View>
          <View style={{ flex: 1 }}>
            <Button label={t('sim.again')} icon="refresh" onPress={start} />
          </View>
        </View>
      }
    >
      <View style={{ gap: space.lg }}>
        {header}
        <AppText variant="small" color={colors.inkSoft}>
          {t('sim.reportNote')}
        </AppText>
        {report.map((r) => {
          const details = lines(r);
          return (
            <Card key={r.step.id} style={{ gap: space.sm }}>
              <View style={[row, { alignItems: 'center', gap: space.sm }]}>
                <IconBadge icon={details.length ? 'checkmark' : 'remove'} color={details.length ? colors.primaryDark : colors.inkSoft} bg={details.length ? colors.primarySoft : colors.line} />
                <AppText style={{ fontWeight: '700', flex: 1 }}>{stepTitle(r.step.tasks)}</AppText>
              </View>
              {details.length ? (
                details.map((line) => (
                  <AppText key={line} variant="small">
                    {line}
                  </AppText>
                ))
              ) : (
                <AppText variant="small" color={colors.inkSoft}>
                  {t('sim.none')}
                </AppText>
              )}
              <Button label={t('sim.redo')} icon="refresh" variant="ghost" compact onPress={() => redo(r)} />
            </Card>
          );
        })}
      </View>
    </Screen>
  );
}
