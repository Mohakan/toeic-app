import { Ionicons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Pressable, View } from 'react-native';
import { ConfirmDialog } from '../components/ConfirmDialog';
import { McqQuestion, TEST_PLAYS } from '../components/McqQuestion';
import { AppText, Button, Card, ProgressBar, Screen } from '../components/ui';
import { assessmentBank } from '../data/assessment';
import { useI18n } from '../i18n';
import type { RootStackParamList } from '../navigation/types';
import {
  applyAnswer,
  initialState,
  isComplete,
  precision,
  sectionOf,
  selectNext,
  summarize,
  type CatState,
} from '../services/placement';
import { listening } from '../services/speech';
import { useApp } from '../state/AppState';
import { trialFor } from '../state/useAccess';
import { colors, space } from '../theme';
import type { McqItem } from '../types';

export function AssessmentScreen({ navigation }: NativeStackScreenProps<RootStackParamList, 'Assessment'>) {
  const { data, update } = useApp();
  const { t, row } = useI18n();
  const [hasVoice, setHasVoice] = useState<boolean | null>(null);
  const [state, setState] = useState<CatState>(initialState);
  const [item, setItem] = useState<McqItem | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [confirmQuit, setConfirmQuit] = useState(false);
  const finished = useRef(false);

  useEffect(() => {
    let alive = true;
    listening
      .voices()
      .then((v) => alive && setHasVoice(v.length > 0))
      .catch((error) => {
        console.warn('Could not list speech voices.', error);
        if (alive) setHasVoice(false);
      });
    return () => {
      alive = false;
      listening.stop();
    };
  }, []);

  // Without an English voice, listening items would measure nothing reliable: they are left out.
  const bank = useMemo(
    () => (hasVoice === false ? assessmentBank.filter((i) => sectionOf(i.skill) !== 'L') : assessmentBank),
    [hasVoice],
  );

  useEffect(() => {
    if (hasVoice !== null && !item && state.responses.length === 0) setItem(selectNext(state, bank, Math.random));
  }, [hasVoice, bank, item, state]);

  const answer = (correct: boolean, dontKnow = false) => {
    if (!item || finished.current) return;
    listening.stop();
    const next = applyAnswer(state, item, { correct, dontKnow });
    setState(next);
    setSelected(null);
    if (isComplete(next, bank)) {
      finished.current = true;
      const placement = summarize(next);
      // The trial content is fixed by the first placement test only: retaking it opens nothing new.
      update({ placement, onboarded: true, trial: data.trial ?? trialFor(placement) });
      navigation.replace('Result');
    } else {
      setItem(selectNext(next, bank, Math.random));
    }
  };

  if (!item) {
    return (
      <Screen scroll={false}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: space.md }}>
          <Ionicons name="analytics" size={48} color={colors.primaryDark} />
          <AppText variant="h3" center>
            {finished.current ? t('assess.calculating') : t('common.loading')}
          </AppText>
        </View>
      </Screen>
    );
  }

  const number = state.responses.length + 1;
  const measured = Math.round(precision(state, bank) * 100);

  return (
    <Screen
      footer={
        <View style={{ gap: space.sm }}>
          <Button label={t('common.next')} disabled={selected === null} onPress={() => answer(selected === item.answer)} />
          <Button label={t('assess.dontKnow')} variant="ghost" compact onPress={() => answer(false, true)} />
        </View>
      }
    >
      <View style={{ gap: space.lg }}>
        <View style={[row, { alignItems: 'center', gap: space.md }]}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={t('assess.quit')}
            onPress={() => setConfirmQuit(true)}
            hitSlop={8}
            style={{ width: 44, height: 44, alignItems: 'center', justifyContent: 'center' }}
          >
            <Ionicons name="close" size={26} color={colors.inkSoft} />
          </Pressable>
          <View style={{ flex: 1, gap: 4 }}>
            <ProgressBar value={measured / 100} color={colors.primary} label={t('assess.precision', { n: measured })} />
          </View>
        </View>
        <View style={[row, { justifyContent: 'space-between' }]}>
          <AppText variant="small" color={colors.inkSoft}>
            {t('assess.q', { n: number })}
          </AppText>
          <AppText variant="small" color={colors.inkSoft}>
            {t('assess.precision', { n: measured })}
          </AppText>
        </View>

        {hasVoice === false && number === 1 ? (
          <Card style={{ backgroundColor: colors.accentSoft, boxShadow: 'none' }}>
            <AppText variant="small">{t('assess.noVoice')}</AppText>
          </Card>
        ) : null}

        <McqQuestion key={item.id} item={item} selected={selected} revealed={false} onSelect={setSelected} maxPlays={TEST_PLAYS} />
      </View>

      <ConfirmDialog
        visible={confirmQuit}
        title={t('assess.quit')}
        message={t('assess.quitConfirm')}
        confirmLabel={t('assess.quit')}
        cancelLabel={t('assess.keepGoing')}
        destructive
        onCancel={() => setConfirmQuit(false)}
        onConfirm={() => {
          setConfirmQuit(false);
          navigation.goBack();
        }}
      />
    </Screen>
  );
}
