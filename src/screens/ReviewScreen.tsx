import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import { View } from 'react-native';
import { ExerciseRunner, type RunResult } from '../components/ExerciseRunner';
import { AppText, Button, Mascot, Screen } from '../components/ui';
import { exerciseByKey, exerciseKey } from '../data/units';
import { useI18n } from '../i18n';
import type { RootStackParamList } from '../navigation/types';
import { practiceResponse } from '../services/practice';
import { dueEntries, REVIEW_SESSION_SIZE } from '../services/review';
import { dayKey, useApp } from '../state/AppState';
import { space } from '../theme';

const XP_PER_REVIEW = 5;

export function ReviewScreen({ navigation }: NativeStackScreenProps<RootStackParamList, 'Review'>) {
  const { data, recordReview, addXp, addPracticeResponses } = useApp();
  const { t } = useI18n();
  // The session is fixed when the screen opens: answering must not reshuffle the list.
  const [session] = useState(() =>
    dueEntries(data.reviewQueue, dayKey())
      .filter((e) => exerciseByKey[e.key])
      .slice(0, REVIEW_SESSION_SIZE)
      .map((e) => exerciseByKey[e.key]),
  );
  const [result, setResult] = useState<RunResult | null>(null);

  if (session.length === 0 && !result) {
    return (
      <Screen footer={<Button label={t('done.cta')} onPress={() => navigation.goBack()} />}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: space.md }}>
          <Mascot mood="joy" />
          <AppText variant="h3" center>
            {t('review.empty')}
          </AppText>
        </View>
      </Screen>
    );
  }

  if (result) {
    const ok = Object.values(result.firstTry).filter(Boolean).length;
    return (
      <Screen footer={<Button label={t('done.cta')} onPress={() => navigation.goBack()} />}>
        <View style={{ alignItems: 'center', gap: space.lg, paddingTop: space.xl }}>
          <Mascot mood="joy" size={96} />
          <AppText variant="title" center>
            {t('review.doneTitle')}
          </AppText>
          <AppText center>{t('review.doneSub', { ok, total: Object.keys(result.firstTry).length })}</AppText>
        </View>
      </Screen>
    );
  }

  const finish = (run: RunResult) => {
    Object.entries(run.firstTry).forEach(([key, correct]) => recordReview(key, correct));
    addPracticeResponses(
      session.flatMap(({ exercise, unit }) => {
        const key = exerciseKey(exercise);
        const r = key in run.firstTry ? practiceResponse(exercise, run.firstTry[key], unit.level, 'review') : null;
        return r ? [r] : [];
      }),
    );
    addXp(Object.values(run.firstTry).filter(Boolean).length * XP_PER_REVIEW + XP_PER_REVIEW);
    setResult(run);
  };

  return (
    <ExerciseRunner
      exercises={session.map((s) => s.exercise)}
      retryMisses={false}
      onFinish={finish}
      onQuit={() => navigation.goBack()}
    />
  );
}
