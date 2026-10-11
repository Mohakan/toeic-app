import { Pressable, StyleSheet, View } from 'react-native';
import { useI18n } from '../i18n';
import { colors, radius, space } from '../theme';
import { AppText, Button, EnglishText, haptic } from './ui';

interface Props {
  words: string[];
  /** Indices into `words`, in the order the learner tapped them. */
  picked: number[];
  revealed: boolean;
  hint: string;
  onChange: (picked: number[]) => void;
}

export function OrderExercise({ words, picked, revealed, hint, onChange }: Props) {
  const { t, row } = useI18n();

  return (
    <View style={{ gap: space.md }}>
      <AppText variant="h3">{t('lesson.instr.order')}</AppText>
      <AppText variant="small" color={colors.inkSoft}>
        {t('lesson.hint', { h: hint })}
      </AppText>

      <View
        accessibilityLabel={picked.map((i) => words[i]).join(' ')}
        style={[styles.answerZone, { flexDirection: 'row', flexWrap: 'wrap', gap: space.sm }]}
      >
        {picked.length === 0 ? (
          <AppText variant="small" color={colors.inkSoft}>
            {t('lesson.yourSentence')}
          </AppText>
        ) : (
          picked.map((wordIndex, position) => (
            <Pressable
              key={`${wordIndex}-${position}`}
              accessibilityRole="button"
              accessibilityLabel={words[wordIndex]}
              disabled={revealed}
              onPress={() => {
                haptic('light');
                onChange(picked.filter((_, p) => p !== position));
              }}
              style={[styles.word, { backgroundColor: colors.primarySoft, borderColor: colors.primary }]}
            >
              <EnglishText variant="h3" color={colors.primaryDark}>
                {words[wordIndex]}
              </EnglishText>
            </Pressable>
          ))
        )}
      </View>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: space.sm, justifyContent: 'center' }}>
        {words.map((word, index) => {
          const used = picked.includes(index);
          return (
            <Pressable
              key={`${word}-${index}`}
              accessibilityRole="button"
              accessibilityLabel={word}
              accessibilityState={{ disabled: used || revealed }}
              disabled={used || revealed}
              onPress={() => {
                haptic('light');
                onChange([...picked, index]);
              }}
              style={[styles.word, used && { opacity: 0.3 }]}
            >
              <EnglishText variant="h3">{word}</EnglishText>
            </Pressable>
          );
        })}
      </View>

      {!revealed && picked.length > 0 ? (
        <View style={[row, { justifyContent: 'center' }]}>
          <Button compact variant="ghost" icon="refresh" label={t('lesson.reset')} onPress={() => onChange([])} />
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  answerZone: {
    minHeight: 84,
    borderRadius: radius.md,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: colors.line,
    backgroundColor: colors.white,
    padding: space.sm,
    alignItems: 'center',
  },
  word: {
    minHeight: 48,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: radius.md,
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: colors.line,
    backgroundColor: colors.white,
    justifyContent: 'center',
  },
});
