import { Ionicons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import { Pressable, View } from 'react-native';
import { Confetti } from '../components/Confetti';
import { exerciseExplain, ExerciseRunner, type RunResult } from '../components/ExerciseRunner';
import { AppText, Button, Card, EnglishText, Mascot, Screen } from '../components/ui';
import { exerciseKey, unitById } from '../data/units';
import { useI18n } from '../i18n';
import type { RootStackParamList } from '../navigation/types';
import { celebrationFor, type Celebration } from '../services/celebration';
import { feedbackSounds } from '../services/feedbackSoundDevice';
import { starsFor } from '../services/path';
import { levelEstimate } from '../services/placement';
import { practiceResponse } from '../services/practice';
import { nextSetIndex, PASS_THRESHOLD } from '../services/sets';
import { listening } from '../services/speech';
import { setWords } from '../services/unitWords';
import { MAX_PRACTICE_RESPONSES, useApp } from '../state/AppState';
import { useAccess } from '../state/useAccess';
import { useAccessGuard } from '../state/useAccessGuard';
import { colors, radius, space } from '../theme';
import type { Cefr } from '../types';

const NEW_WORDS_PER_SET = 8;

const XP_FIRST_TRY = 10;
const XP_RETRY = 5;
const XP_FINISH_BONUS = 5;

interface Outcome {
  accuracy: number;
  xp: number;
  firstTry: Record<string, boolean>;
  celebration: Celebration;
  /** The new estimated level, for a level-up. */
  level: Cefr | null;
}

export function LessonScreen({ navigation, route }: NativeStackScreenProps<RootStackParamList, 'Lesson'>) {
  const unit = unitById[route.params.unitId];
  const { data, addXp, completeSet, scheduleReview, reviewCard, addPracticeResponses } = useApp();
  const access = useAccess();
  const allowed = useAccessGuard(access.unit(route.params.unitId), 'unit');
  const { t, tx, row, backIcon } = useI18n();
  // The set is chosen once when the screen opens so it does not change mid-lesson.
  const [setIndex] = useState(() => (unit ? nextSetIndex(unit, data.units[unit.id]) : 0));
  const [phase, setPhase] = useState<'intro' | 'run' | 'done'>('intro');
  const [outcome, setOutcome] = useState<Outcome | null>(null);

  if (!unit || !allowed) return null;
  const set = unit.sets[setIndex];
  const total = set.exercises.length;

  const finish = ({ firstTry }: RunResult) => {
    const firstCorrect = Object.values(firstTry).filter(Boolean).length;
    const retried = Object.keys(firstTry).length - firstCorrect;
    const xp = firstCorrect * XP_FIRST_TRY + retried * XP_RETRY + XP_FINISH_BONUS;
    const accuracy = firstCorrect / total;
    const responses = set.exercises.flatMap((e) => {
      const k = exerciseKey(e);
      const r = k in firstTry ? practiceResponse(e, firstTry[k], unit.level) : null;
      return r ? [r] : [];
    });
    // A finished unit or a higher estimated level is celebrated with a sound and a message.
    const { placement, practiceResponses } = data;
    const estimate = (practice: typeof practiceResponses) => (placement ? (practice.length > 0 ? levelEstimate([...placement.responses, ...practice]) : placement).cefr : null);
    const celebration = celebrationFor({
      wasPassed: !!data.units[unit.id]?.passed,
      nowPassed: accuracy >= PASS_THRESHOLD,
      levelBefore: estimate(practiceResponses),
      levelAfter: responses.length ? estimate([...practiceResponses, ...responses].slice(-MAX_PRACTICE_RESPONSES)) : estimate(practiceResponses),
    });
    if (celebration && data.soundEffects) feedbackSounds.play(celebration === 'levelUp' ? 'level-up' : 'unit-complete');
    addXp(xp);
    completeSet(unit.id, set.id, accuracy, starsFor(accuracy));
    addPracticeResponses(responses);
    scheduleReview(unit.id, Object.keys(firstTry).filter((k) => !firstTry[k]));
    // The set's words (matching exercises first) join the word deck, a few at a time.
    setWords(set, unit.level)
      .filter((id) => !data.cards[id])
      .slice(0, NEW_WORDS_PER_SET)
      .forEach((id) => reviewCard(id, false));
    setOutcome({ accuracy, xp, firstTry, celebration, level: celebration === 'levelUp' ? estimate([...practiceResponses, ...responses].slice(-MAX_PRACTICE_RESPONSES)) : null });
    setPhase('done');
  };

  if (phase === 'run') {
    return <ExerciseRunner exercises={set.exercises} retryMisses onFinish={finish} onQuit={() => navigation.goBack()} />;
  }

  if (phase === 'done' && outcome) {
    const { accuracy, xp, firstTry, celebration, level } = outcome;
    const stars = starsFor(accuracy);
    const passed = accuracy >= PASS_THRESHOLD;
    const message = accuracy >= 0.8 ? 'done.msg.high' : accuracy >= 0.5 ? 'done.msg.mid' : 'done.msg.low';
    const missed = set.exercises.filter((e) => firstTry[exerciseKey(e)] === false);
    // Passing the last trial unit opens the offer once, as a moment of success rather than a wall.
    const trialDone = !access.full && passed && access.trial.units.includes(unit.id) && access.trial.units.every((id) => id === unit.id || data.units[id]?.passed);
    const close = () => (trialDone ? navigation.replace('Paywall', { reason: 'trialEnd' }) : navigation.goBack());
    return (
      <View style={{ flex: 1 }}>
        <Screen footer={<Button label={t('done.cta')} variant="play" onPress={close} />}>
          <View style={{ gap: space.lg, alignItems: 'center' }}>
            <Mascot mood={passed ? 'joy' : 'encourage'} size={96} />
            <AppText variant="title" center>
              {passed ? t('done.passed') : t('done.title')}
            </AppText>
            {/* A finished unit is already said by the title ("Unité validée !"); a new level gets its own message. */}
            {celebration === 'levelUp' && level ? (
              <Card style={{ alignSelf: 'stretch', alignItems: 'center', gap: space.xs, backgroundColor: colors.goldSoft, borderWidth: 2, borderColor: colors.gold }}>
                <View style={[row, { alignItems: 'center', gap: space.sm }]} accessibilityLiveRegion="polite">
                  <Ionicons name="trophy" size={26} color={colors.goldDark} />
                  <AppText variant="h3" color={colors.goldDark}>
                    {t('celebrate.level', { l: level })}
                  </AppText>
                </View>
                <AppText variant="small" center>
                  {t('celebrate.levelSub')}
                </AppText>
              </Card>
            ) : null}
            <View style={[row, { gap: 8 }]} accessibilityLabel={`${stars} / 3`}>
              {[1, 2, 3].map((n) => (
                <Ionicons key={n} name={n <= stars ? 'star' : 'star-outline'} size={44} color={n <= stars ? colors.gold : colors.mist} />
              ))}
            </View>
            {/* Sober figures for the result (direction "Premium épuré"), colored tiles for the rewards. */}
            <View style={[row, { gap: space.md, alignSelf: 'stretch' }]}>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: space.sm }}>
                <AppText variant="label" color={colors.inkSoft} center>
                  {t('done.accuracy').toUpperCase()}
                </AppText>
                <EnglishText style={{ fontSize: 56, lineHeight: 64, fontWeight: '300', textAlign: 'center' }}>{`${Math.round(accuracy * 100)} %`}</EnglishText>
              </View>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 2, backgroundColor: colors.goldSoft, borderRadius: radius.lg, padding: space.md }}>
                <AppText variant="label" color={colors.goldDark} center>
                  {t('done.xp').toUpperCase()}
                </AppText>
                <EnglishText variant="title" color={colors.goldDark} style={{ textAlign: 'center' }}>{`+${xp}`}</EnglishText>
              </View>
            </View>
            <AppText center color={colors.inkSoft}>
              {passed ? t(message) : t('done.notPassed', { p: Math.round(PASS_THRESHOLD * 100) })}
            </AppText>
            {missed.length > 0 ? (
              <Card style={{ alignSelf: 'stretch', gap: space.sm }}>
                <AppText variant="h3">{t('done.review')}</AppText>
                {missed.map((e) => (
                  <View key={exerciseKey(e)} style={{ gap: 2 }}>
                    {e.kind === 'mcq' ? (
                      <EnglishText variant="small" style={{ fontWeight: '700' }}>
                        {e.item.prompt}
                      </EnglishText>
                    ) : e.kind === 'order' ? (
                      <EnglishText variant="small" style={{ fontWeight: '700' }}>
                        {e.answer.join(' ')}
                      </EnglishText>
                    ) : null}
                    <AppText variant="small" color={colors.inkSoft}>
                      {tx(exerciseExplain(e))}
                    </AppText>
                  </View>
                ))}
                <AppText variant="small" color={colors.primaryDark} style={{ fontWeight: '700' }}>
                  {t('done.reviewScheduled', { n: missed.length })}
                </AppText>
              </Card>
            ) : null}
          </View>
        </Screen>
        {/* A finished unit or a new level gets a burst of confetti. */}
        {celebration ? <Confetti /> : null}
      </View>
    );
  }

  return (
    <Screen footer={<Button label={t('lesson.intro.start')} icon="play" onPress={() => setPhase('run')} />}>
      <View style={{ gap: space.lg }}>
        <View style={row}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={t('common.back')}
            onPress={() => navigation.goBack()}
            hitSlop={8}
            style={{ width: 44, height: 44, alignItems: 'center', justifyContent: 'center' }}
          >
            <Ionicons name={backIcon} size={24} color={colors.ink} />
          </Pressable>
        </View>
        <View style={[row, { alignItems: 'center', gap: space.md }]}>
          <AppText variant="title">{unit.emoji}</AppText>
          <View style={{ flex: 1 }}>
            <AppText variant="label" color={colors.primaryDark}>
              {unit.part}
              {unit.sets.length > 1 ? `  ·  ${t('lesson.set', { n: setIndex + 1, total: unit.sets.length })}` : ''}
            </AppText>
            <AppText variant="h2">{tx(unit.title)}</AppText>
          </View>
        </View>
        <Card style={{ gap: space.sm, backgroundColor: colors.primarySoft, boxShadow: 'none' }}>
          <AppText variant="label" color={colors.primaryDark}>
            {t('lesson.intro.goal').toUpperCase()}
          </AppText>
          <AppText style={{ fontWeight: '700' }}>{tx(unit.lesson.goal)}</AppText>
        </Card>
        <Card style={{ gap: space.md }}>
          <AppText variant="label" color={colors.inkSoft}>
            {t('lesson.intro.keys').toUpperCase()}
          </AppText>
          {unit.lesson.points.map((point, i) => (
            <View key={i} style={[row, { gap: space.sm }]}>
              <Ionicons name="checkmark-circle" size={20} color={colors.primaryDark} style={{ marginTop: 2 }} />
              <AppText style={{ flex: 1 }}>{tx(point)}</AppText>
            </View>
          ))}
        </Card>
        <Card style={{ gap: space.sm, backgroundColor: colors.accentSoft, boxShadow: 'none' }}>
          <AppText variant="label" color={colors.inkSoft}>
            {t('lesson.intro.example').toUpperCase()}
          </AppText>
          <EnglishText variant="h3">{unit.lesson.example.en}</EnglishText>
          <AppText variant="small" color={colors.inkSoft}>
            {tx(unit.lesson.example.note)}
          </AppText>
          <Button label={t('words.listen')} icon="volume-high" variant="secondary" compact onPress={() => listening.play(unit.lesson.example.en)} />
        </Card>
        <AppText variant="small" color={colors.inkSoft} center>
          {t('lesson.intro.exercises', { n: total })}
        </AppText>
      </View>
    </Screen>
  );
}
