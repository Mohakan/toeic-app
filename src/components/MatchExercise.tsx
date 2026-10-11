import { Ionicons } from '@expo/vector-icons';
import { useEffect, useMemo, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { vocabById } from '../data/vocab';
import { useI18n } from '../i18n';
import { feedbackSounds } from '../services/feedbackSoundDevice';
import { useApp } from '../state/AppState';
import { colors, radius, space } from '../theme';
import { AppText, EnglishText, haptic } from './ui';

interface Props {
  wordIds: string[];
  /** Called once every pair is matched; `mistakes` counts wrong pairings. */
  onComplete: (mistakes: number) => void;
}

/** Deterministic shuffle so the right column never mirrors the left one. */
function rotate<T>(list: T[]): T[] {
  const shift = Math.max(2, Math.floor(list.length / 2));
  return [...list.slice(shift), ...list.slice(0, shift)];
}

export function MatchExercise({ wordIds, onComplete }: Props) {
  const { t, lang, row } = useI18n();
  const { data } = useApp();
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [matched, setMatched] = useState<string[]>([]);
  const [mistakes, setMistakes] = useState(0);
  const [wrongFlash, setWrongFlash] = useState<string | null>(null);

  const meanings = useMemo(() => rotate(wordIds), [wordIds]);
  const meaningOf = (id: string) => (lang === 'en' ? `${vocabById[id].emoji}  ${vocabById[id].example}` : vocabById[id][lang]);

  useEffect(() => {
    if (matched.length === wordIds.length) onComplete(mistakes);
    // onComplete is intentionally excluded: the parent recreates it on every render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matched.length, wordIds.length, mistakes]);

  const pickMeaning = (id: string) => {
    if (!selectedWord || matched.includes(id)) return;
    if (selectedWord === id) {
      haptic('success');
      setMatched((m) => [...m, id]);
      setSelectedWord(null);
    } else {
      haptic('error');
      // Right pairs stay silent until the end (the runner plays the result); a wrong pair is heard at once.
      if (data.soundEffects) feedbackSounds.play(`error-${data.errorSound}`);
      setMistakes((n) => n + 1);
      setWrongFlash(id);
      setTimeout(() => setWrongFlash(null), 700);
    }
  };

  return (
    <View style={{ gap: space.md }}>
      <AppText variant="h3">{t('lesson.instr.match')}</AppText>
      <View
        accessibilityLiveRegion="polite"
        style={{ minHeight: 22 }}
      >
        {wrongFlash ? (
          <AppText variant="small" color={colors.dangerDark}>
            {t('lesson.matchWrong')}
          </AppText>
        ) : matched.length === wordIds.length ? (
          <AppText variant="small" color={colors.successDark}>
            {t('lesson.matchDone')}
          </AppText>
        ) : null}
      </View>

      <View style={[row, { gap: space.sm }]}>
        <View style={{ flex: 1, gap: space.sm }}>
          {wordIds.map((id) => {
            const done = matched.includes(id);
            const active = selectedWord === id;
            return (
              <Pressable
                key={id}
                accessibilityRole="button"
                accessibilityLabel={vocabById[id].en}
                accessibilityState={{ selected: active, disabled: done }}
                disabled={done}
                onPress={() => {
                  haptic('light');
                  setSelectedWord(id);
                }}
                style={[
                  styles.tile,
                  row,
                  active && { borderColor: colors.primary, backgroundColor: colors.primarySoft },
                  done && { borderColor: colors.success, backgroundColor: colors.successSoft },
                ]}
              >
                <EnglishText variant="body" style={{ flex: 1, fontWeight: '700' }}>
                  {vocabById[id].emoji} {vocabById[id].en}
                </EnglishText>
                {done ? <Ionicons name="checkmark-circle" size={20} color={colors.successDark} /> : null}
              </Pressable>
            );
          })}
        </View>
        <View style={{ flex: 1, gap: space.sm }}>
          {meanings.map((id) => {
            const done = matched.includes(id);
            const wrong = wrongFlash === id;
            return (
              <Pressable
                key={id}
                accessibilityRole="button"
                accessibilityLabel={meaningOf(id)}
                accessibilityState={{ disabled: done || !selectedWord }}
                disabled={done}
                onPress={() => pickMeaning(id)}
                style={[
                  styles.tile,
                  row,
                  !selectedWord && !done && { opacity: 0.75 },
                  done && { borderColor: colors.success, backgroundColor: colors.successSoft },
                  wrong && { borderColor: colors.danger, backgroundColor: colors.dangerSoft },
                ]}
              >
                <AppText variant="body" style={{ flex: 1, fontWeight: '600' }}>
                  {meaningOf(id)}
                </AppText>
                {done ? <Ionicons name="checkmark-circle" size={20} color={colors.successDark} /> : null}
                {wrong ? <Ionicons name="close-circle" size={20} color={colors.dangerDark} /> : null}
              </Pressable>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tile: {
    minHeight: 60,
    alignItems: 'center',
    gap: 6,
    borderRadius: radius.md,
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: colors.line,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
});
