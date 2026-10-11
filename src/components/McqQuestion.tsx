import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { useI18n } from '../i18n';
import { listening } from '../services/speech';
import { useApp } from '../state/AppState';
import { colors, radius, space } from '../theme';
import type { McqItem } from '../types';
import { AppText, Button, Card, EnglishText, haptic } from './ui';

/** Plays allowed per recording in test conditions (placement, mock tests). */
export const TEST_PLAYS = 2;

interface Props {
  item: McqItem;
  selected: number | null;
  /** When true the key is shown and options are locked. */
  revealed: boolean;
  onSelect: (index: number) => void;
  /**
   * Test conditions (placement, mock tests): the recording can be played this many times, at
   * normal speed only. In the real TOEIC it is heard once; one replay absorbs a speech-synthesis
   * glitch. Practice keeps unlimited and slow replays.
   */
  maxPlays?: number;
  /** Plays already used, when the parent keeps the count (a mock test can be paused and resumed). */
  playsUsed?: number;
  onPlay?: () => void;
}

export function McqQuestion({ item, selected, revealed, onSelect, maxPlays, playsUsed, onPlay }: Props) {
  const { t, row } = useI18n();
  const isListening = item.skill === 'listening';
  const { data } = useApp();
  const [noVoice, setNoVoice] = useState(false);
  const [ownPlays, setOwnPlays] = useState(0);
  const plays = playsUsed ?? ownPlays;
  const testConditions = maxPlays !== undefined;
  const playsLeft = testConditions ? Math.max(0, maxPlays - plays) : Infinity;
  const play = (slow: boolean) => {
    if (playsLeft <= 0) return;
    if (onPlay) onPlay();
    else setOwnPlays((n) => n + 1);
    return listening
      .play(item.audio!, { slow, voiceId: data.voiceId ?? undefined })
      .then((ok) => setNoVoice(!ok))
      .catch((error) => {
        console.warn('Speech synthesis failed.', error);
        setNoVoice(true);
      });
  };

  return (
    <View style={{ gap: space.md }}>
      <AppText variant="label" color={colors.primaryDark}>
        {t(`assess.part.${item.part}` as const).toUpperCase()}
      </AppText>
      <AppText variant="h3">{t(isListening ? 'assess.instr.listen' : 'assess.instr.mcq')}</AppText>

      {isListening && item.audio ? (
        testConditions ? (
          <View style={{ gap: 4 }}>
            <Button label={t('assess.listen')} icon="volume-high" disabled={playsLeft <= 0} onPress={() => play(false)} />
            <AppText variant="small" color={colors.inkSoft} center>
              {t('assess.playsLeft', { n: playsLeft, max: maxPlays })}
            </AppText>
          </View>
        ) : (
          <View style={[row, { gap: space.sm }]}>
            <View style={{ flex: 1 }}>
              <Button label={t('assess.listen')} icon="volume-high" onPress={() => play(false)} />
            </View>
            <View style={{ flex: 1 }}>
              <Button label={t('assess.listenSlow')} icon="walk" variant="secondary" onPress={() => play(true)} />
            </View>
          </View>
        )
      ) : null}

      {noVoice ? (
        <View style={[row, { gap: 6, alignItems: 'center' }]} accessibilityLiveRegion="polite">
          <Ionicons name="alert-circle" size={18} color={colors.dangerDark} />
          <AppText variant="small" color={colors.dangerDark} style={{ flex: 1 }}>
            {t('listen.noVoice')}
          </AppText>
        </View>
      ) : null}

      {item.passage ? (
        <Card style={{ backgroundColor: colors.accentSoft, boxShadow: 'none' }}>
          <EnglishText variant="body">{item.passage}</EnglishText>
        </Card>
      ) : null}

      {isListening && revealed && item.audio ? (
        <Card style={{ boxShadow: 'none', borderWidth: 1, borderColor: colors.line }}>
          <AppText variant="label" color={colors.inkSoft}>
            {t('assess.transcript').toUpperCase()}
          </AppText>
          <EnglishText variant="small">{item.audio}</EnglishText>
        </Card>
      ) : null}

      <EnglishText variant="h3">{item.prompt}</EnglishText>

      <View style={{ gap: space.sm }} accessibilityRole="radiogroup">
        {item.options.map((option, index) => {
          const isSelected = selected === index;
          const isKey = revealed && index === item.answer;
          const isWrong = revealed && isSelected && index !== item.answer;
          const background = isKey ? colors.successSoft : isWrong ? colors.dangerSoft : isSelected ? colors.primarySoft : colors.white;
          const border = isKey ? colors.success : isWrong ? colors.danger : isSelected ? colors.primary : colors.line;
          return (
            <Pressable
              key={option}
              accessibilityRole="radio"
              accessibilityLabel={option}
              accessibilityState={{ selected: isSelected, disabled: revealed }}
              disabled={revealed}
              onPress={() => {
                haptic('light');
                onSelect(index);
              }}
              style={[styles.option, row, { backgroundColor: background, borderColor: border }]}
            >
              <View style={[styles.letter, { borderColor: border }]}>
                <AppText variant="label" color={colors.ink} center>
                  {String.fromCharCode(65 + index)}
                </AppText>
              </View>
              <View style={{ flex: 1 }}>
                <EnglishText variant="body">{option}</EnglishText>
              </View>
              {isKey ? <Ionicons name="checkmark-circle" size={24} color={colors.successDark} /> : null}
              {isWrong ? <Ionicons name="close-circle" size={24} color={colors.dangerDark} /> : null}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  option: {
    alignItems: 'center',
    gap: space.sm,
    borderWidth: 2,
    borderBottomWidth: 4,
    borderRadius: radius.md,
    paddingVertical: 12,
    paddingHorizontal: 14,
    minHeight: 56,
  },
  letter: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
});
