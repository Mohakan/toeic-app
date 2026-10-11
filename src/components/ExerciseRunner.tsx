import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Pressable, View } from 'react-native';
import { exerciseKey } from '../data/units';
import { useI18n } from '../i18n';
import { feedbackSounds } from '../services/feedbackSoundDevice';
import { listening } from '../services/speech';
import { isAcceptedAnswer } from '../services/typedAnswer';
import { useApp } from '../state/AppState';
import { colors, radius, space } from '../theme';
import type { Exercise } from '../types';
import { ConfirmDialog } from './ConfirmDialog';
import { MatchExercise } from './MatchExercise';
import { McqQuestion } from './McqQuestion';
import { TypedQuestion } from './TypedQuestion';
import { OrderExercise } from './OrderExercise';
import { AppText, Button, EnglishText, haptic, Mascot, ProgressBar, Screen } from './ui';

export const exerciseExplain = (e: Exercise) => (e.kind === 'mcq' || e.kind === 'type' ? e.item.explain : e.explain);

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
  const [typed, setTyped] = useState('');
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
    else if (exercise.kind === 'type') recordResult(isAcceptedAnswer(typed, exercise.item.answers));
    else if (exercise.kind === 'order') recordResult(picked.map((i) => exercise.words[i]).join(' ') === exercise.answer.join(' '));
  };

  const advance = () => {
    listening.stop();
    setFeedback(null);
    setSelected(null);
    setPicked([]);
    setTyped('');
    if (position + 1 >= queue.length) onFinish({ firstTry });
    else setPosition(position + 1);
  };

  const canCheck =
    exercise.kind === 'mcq' ? selected !== null : exercise.kind === 'type' ? typed.trim().length > 0 : exercise.kind === 'order' ? picked.length === exercise.words.length : false;
  const correctText =
    exercise.kind === 'mcq' ? exercise.item.options[exercise.item.answer] : exercise.kind === 'type' ? exercise.item.answers[0] : exercise.kind === 'order' ? exercise.answer.join(' ') : '';

  const footer = feedback ? (
    <View accessibilityLiveRegion="polite" style={{ gap: space.sm }}>
      <View style={[row, { alignItems: 'center', gap: space.sm }]}>
        <Mascot mood={feedback.correct ? 'joy' : 'encourage'} size={44} />
        <View style={{ flex: 1, gap: 4 }}>
          <View style={[row, { alignItems: 'center', gap: 6 }]}>
            <Ionicons name={feedback.correct ? 'checkmark-circle' : 'close-circle'} size={26} color={feedback.correct ? colors.successDark : colors.dangerDark} />
            <AppText variant="h2" color={feedback.correct ? colors.successDark : colors.dangerDark}>
              {feedback.correct ? t('lesson.correct') : t('lesson.wrong')}
            </AppText>
          </View>
          {feedback.correct && combo >= 3 ? (
            <View style={[row, { alignSelf: 'flex-start', alignItems: 'center', gap: 4, backgroundColor: colors.accent, borderRadius: radius.pill, paddingHorizontal: 10, paddingVertical: 2 }]}>
              <Ionicons name="flame" size={16} color={colors.ink} />
              <AppText variant="label">{t('lesson.combo', { n: combo })}</AppText>
            </View>
          ) : null}
        </View>
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
    <Screen footer={footer} footerTone={feedback ? (feedback.correct ? colors.successSoft : colors.dangerSoft) : undefined}>
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
        {exercise.kind === 'type' ? (
          <TypedQuestion
            key={`${key}-${position}`}
            item={exercise.item}
            value={typed}
            onChange={setTyped}
            revealed={!!feedback}
            onSubmit={() => !feedback && canCheck && check()}
          />
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
