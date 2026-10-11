import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, View } from 'react-native';
import { useI18n } from '../i18n';
import { colors, radius, space } from '../theme';
import type { McqItem } from '../types';
import { AudioPlayer } from './AudioPlayer';
import { AppText, Card, EnglishText, haptic } from './ui';

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

  return (
    <View style={{ gap: space.md }}>
      <AppText variant="label" color={colors.primaryDark}>
        {t(`assess.part.${item.part}` as const).toUpperCase()}
      </AppText>
      <AppText variant="h3">{t(isListening ? 'assess.instr.listen' : 'assess.instr.mcq')}</AppText>

      {isListening && item.audio ? <AudioPlayer audio={item.audio} maxPlays={maxPlays} playsUsed={playsUsed} onPlay={onPlay} /> : null}

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
              <View style={[styles.letter, { borderColor: border, backgroundColor: isKey ? colors.success : isWrong ? colors.danger : isSelected ? colors.primary : colors.white }]}>
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
    gap: space.md,
    borderWidth: 2,
    borderBottomWidth: 5,
    borderRadius: radius.md,
    paddingVertical: 12,
    paddingHorizontal: 14,
    minHeight: 60,
  },
  letter: {
    width: 34,
    height: 34,
    borderRadius: 10,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
});
