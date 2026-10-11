import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Pressable, View } from 'react-native';
import { exerciseKey } from '../data/units';
import { useI18n } from '../i18n';
import { feedbackSounds } from '../services/feedbackSoundDevice';
import { listening } from '../services/speech';
import { useApp } from '../state/AppState';
import { colors, radius, space } from '../theme';
import type { Exercise } from '../types';
import { ConfirmDialog } from './ConfirmDialog';
import { MatchExercise } from './MatchExercise';
import { McqQuestion } from './McqQuestion';
import { OrderExercise } from './OrderExercise';
import { AppText, Button, EnglishText, haptic, ProgressBar, Screen } from './ui';

export const exerciseExplain = (e: Exercise) => (e.kind === 'mcq' ? e.item.explain : e.explain);

export interface RunResult {
  /** First-try outcome per exercise key. */
  firstTry: Record<string, boolean>;
}

interface Props {
  exercises: Exercise[];
  /** Missed exercises come back once at the end (lessons); reviews do not repeat them. */
  retryMisses: boolean;
  onFinish: (result: RunResult) => void;
  onQuit: () => void;
}

/** Plays a list of exercises with immediate feedback and explanations. */
export function ExerciseRunner({ exercises, retryMisses, onFinish, onQuit }: Props) {
  const { t, tx, row } = useI18n();
  const { data } = useApp();
  const [queue, setQueue] = useState<number[]>(() => exercises.map((_, i) => i));
  const [position, setPosition] = useState(0);
  const [firstTry, setFirstTry] = useState<Record<string, boolean>>({});
  const [combo, setCombo] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [picked, setPicked] = useState<number[]>([]);
  const [feedback, setFeedback] = useState<{ correct: boolean } | null>(null);
  const [confirmQuit, setConfirmQuit] = useState(false);

  useEffect(() => () => listening.stop(), []);

  const exercise = queue[position] !== undefined ? exercises[queue[position]] : null;
  if (!exercise) return null;
  const key = exerciseKey(exercise);

  const recordResult = (correct: boolean) => {
    const first = !(key in firstTry);
    if (first) setFirstTry((f) => ({ ...f, [key]: correct }));
    setCombo((c) => (correct ? c + 1 : 0));
    if (!correct && first && retryMisses) setQueue((q) => [...q, queue[position]]);
    haptic(correct ? 'success' : 'error');
    if (data.soundEffects) feedbackSounds.play(correct ? `success-${data.successSound}` : `error-${data.errorSound}`);
    setFeedback({ correct });
  };

  const check = () => {
    if (exercise.kind === 'mcq') recordResult(selected === exercise.item.answer);
    else if (exercise.kind === 'order') recordResult(picked.map((i) => exercise.words[i]).join(' ') === exercise.answer.join(' '));
  };

  const advance = () => {
    listening.stop();
    setFeedback(null);
    setSelected(null);
    setPicked([]);
    if (position + 1 >= queue.length) onFinish({ firstTry });
    else setPosition(position + 1);
  };

  const canCheck = exercise.kind === 'mcq' ? selected !== null : exercise.kind === 'order' ? picked.length === exercise.words.length : false;
  const correctText = exercise.kind === 'mcq' ? exercise.item.options[exercise.item.answer] : exercise.kind === 'order' ? exercise.answer.join(' ') : '';

  const footer = feedback ? (
    <View
      accessibilityLiveRegion="polite"
      style={{ gap: space.sm, backgroundColor: feedback.correct ? colors.successSoft : colors.dangerSoft, borderRadius: radius.lg, padding: space.md }}
    >
      <View style={[row, { alignItems: 'center', gap: space.sm }]}>
        <Ionicons name={feedback.correct ? 'checkmark-circle' : 'close-circle'} size={28} color={feedback.correct ? colors.successDark : colors.dangerDark} />
        <AppText variant="h3" color={feedback.correct ? colors.successDark : colors.dangerDark}>
          {feedback.correct ? t('lesson.correct') : t('lesson.wrong')}
          {feedback.correct && combo >= 3 ? `  ·  ${t('lesson.combo', { n: combo })}` : ''}
        </AppText>
      </View>
      {!feedback.correct && correctText ? (
        <EnglishText variant="body" style={{ fontWeight: '700' }}>
          {t('lesson.answerWas', { a: correctText })}
        </EnglishText>
      ) : null}
      <AppText variant="small">
        <AppText variant="small" style={{ fontWeight: '800' }}>
          {t('lesson.why')}{' '}
        </AppText>
        {tx(exerciseExplain(exercise))}
      </AppText>
      {!feedback.correct && retryMisses ? (
        <AppText variant="small" color={colors.inkSoft}>
          {t('lesson.retryLater')}
        </AppText>
      ) : null}
      <Button label={t('common.continue')} variant={feedback.correct ? 'success' : 'danger'} onPress={advance} />
    </View>
  ) : exercise.kind === 'match' ? null : (
    <Button label={t('common.check')} disabled={!canCheck} onPress={check} />
  );

  const progressLabel = t('lesson.progress', { n: position + 1, total: queue.length });

  return (
    <Screen footer={footer}>
      <View style={{ gap: space.lg }}>
        <View style={[row, { alignItems: 'center', gap: space.md }]}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={t('lesson.quit')}
            onPress={() => setConfirmQuit(true)}
            hitSlop={8}
            style={{ width: 44, height: 44, alignItems: 'center', justifyContent: 'center' }}
          >
            <Ionicons name="close" size={26} color={colors.inkSoft} />
          </Pressable>
          <View style={{ flex: 1 }}>
            <ProgressBar value={position / queue.length} label={progressLabel} />
          </View>
          <EnglishText variant="label" color={colors.inkSoft}>
            {progressLabel}
          </EnglishText>
        </View>

        {exercise.kind === 'mcq' ? (
          <McqQuestion key={`${key}-${position}`} item={exercise.item} selected={selected} revealed={!!feedback} onSelect={setSelected} />
        ) : null}
        {exercise.kind === 'order' ? (
          <OrderExercise key={`${key}-${position}`} words={exercise.words} picked={picked} revealed={!!feedback} hint={tx(exercise.hint)} onChange={setPicked} />
        ) : null}
        {exercise.kind === 'match' ? (
          <MatchExercise key={`${key}-${position}`} wordIds={exercise.wordIds} onComplete={(m) => !feedback && recordResult(m === 0)} />
        ) : null}
      </View>

      <ConfirmDialog
        visible={confirmQuit}
        title={t('lesson.quit')}
        message={t('lesson.quitConfirm')}
        confirmLabel={t('lesson.quit')}
        cancelLabel={t('lesson.stay')}
        destructive
        onCancel={() => setConfirmQuit(false)}
        onConfirm={() => {
          setConfirmQuit(false);
          onQuit();
        }}
      />
    </Screen>
  );
}
