import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { AppText, Button, Card, Chip, EnglishText, HeroTitle, Mascot, ProgressBar, Screen } from '../components/ui';
import { themeNames, vocab } from '../data/vocab';
import type { VocabTheme } from '../types';

const THEMES = Object.keys(themeNames) as VocabTheme[];
const BATCH = 5;
import { useI18n } from '../i18n';
import { listening } from '../services/speech';
import { dayKey, useApp } from '../state/AppState';
import { colors, space } from '../theme';

export function WordsScreen() {
  const { data, reviewCard } = useApp();
  const { t, tx, lang, row } = useI18n();
  const [flipped, setFlipped] = useState(false);
  const [theme, setTheme] = useState<VocabTheme | null>(null);
  const today = dayKey();

  // Words appear once learned in a lesson (seeded in the deck) and again when due.
  const due = vocab.filter((w) => data.cards[w.id] && data.cards[w.id].due <= today);
  // New words are introduced from the easiest level up, optionally within one theme.
  const newWords = vocab
    .filter((w) => !data.cards[w.id] && (!theme || w.theme === theme))
    .sort((a, b) => a.level - b.level);
  const mastered = vocab.filter((w) => (data.cards[w.id]?.box ?? 0) >= 3).length;
  const card = due[0] ?? null;

  const answer = (known: boolean) => {
    if (!card) return;
    setFlipped(false);
    reviewCard(card.id, known);
  };

  const learn = () => {
    newWords.slice(0, BATCH).forEach((w) => reviewCard(w.id, false));
  };

  return (
    <Screen
      hero={
        <View style={{ gap: space.md }}>
          <HeroTitle title={t('words.title')} subtitle={t('words.mastered', { n: mastered, total: vocab.length })} />
          <ProgressBar value={mastered / vocab.length} color={colors.primaryDark} label={t('words.title')} />
        </View>
      }
    >
      <View style={{ gap: space.lg }}>

        <View style={{ gap: space.sm }}>
          <AppText variant="label" color={colors.inkSoft}>
            {t('words.theme').toUpperCase()}
          </AppText>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={[row, { gap: space.sm, paddingVertical: 2 }]}>
            <Chip label={t('words.allThemes')} selected={theme === null} onPress={() => setTheme(null)} />
            {THEMES.map((th) => (
              <Chip key={th} label={tx(themeNames[th])} selected={theme === th} onPress={() => setTheme(th)} />
            ))}
          </ScrollView>
          <AppText variant="small" color={colors.inkSoft}>
            {t('words.newLeft', { n: newWords.length })}
          </AppText>
        </View>

        {card ? (
          <View style={{ gap: space.md }}>
            <AppText variant="label" color={colors.accentDark}>
              {t('words.due', { n: due.length }).toUpperCase()}
            </AppText>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={flipped ? (lang === 'en' ? card.example : card[lang]) : card.en}
              onPress={() => setFlipped((f) => !f)}
            >
              <Card style={{ minHeight: 220, alignItems: 'center', justifyContent: 'center', gap: space.md }}>
                <AppText variant="label" color={colors.inkSoft} center>
                  {tx(themeNames[card.theme]).toUpperCase()}
                </AppText>
                <AppText variant="title" center style={{ fontSize: 56, lineHeight: 64 }}>
                  {card.emoji}
                </AppText>
                {flipped ? (
                  <>
                    <AppText variant="h2" color={colors.primaryDark} center>
                      {lang === 'en' ? card.en : card[lang]}
                    </AppText>
                    <AppText variant="label" color={colors.inkSoft}>
                      {t('words.example').toUpperCase()}
                    </AppText>
                    <EnglishText variant="body" style={{ textAlign: 'center' }}>
                      {card.example}
                    </EnglishText>
                  </>
                ) : (
                  <>
                    <EnglishText variant="title" style={{ textAlign: 'center' }}>
                      {card.en}
                    </EnglishText>
                    <AppText variant="small" color={colors.inkSoft} center>
                      {t('words.tap')}
                    </AppText>
                  </>
                )}
              </Card>
            </Pressable>
            <Button label={t('words.listen')} icon="volume-high" variant="secondary" compact onPress={() => listening.play(`${card.en}. ${card.example}`)} />
            <View style={[row, { gap: space.sm }]}>
              <View style={{ flex: 1 }}>
                <Button label={t('words.again')} variant="secondary" icon="refresh" onPress={() => answer(false)} />
              </View>
              <View style={{ flex: 1 }}>
                <Button label={t('words.know')} variant="success" icon="checkmark" onPress={() => answer(true)} />
              </View>
            </View>
          </View>
        ) : (
          <Card style={{ alignItems: 'center', gap: space.md }}>
            <Mascot mood="joy" />
            <AppText variant="h3" center>
              {t('words.empty')}
            </AppText>
            {newWords.length > 0 ? <Button label={t('words.learnMore')} icon="add" onPress={learn} /> : null}
          </Card>
        )}
        {card && newWords.length > 0 ? (
          <View style={[row, { alignItems: 'center', gap: 6 }]}>
            <Ionicons name="sparkles" size={18} color={colors.accentDark} />
            <Pressable accessibilityRole="button" onPress={learn} hitSlop={8} style={{ minHeight: 44, justifyContent: 'center' }}>
              <AppText variant="small" color={colors.primaryDark} style={{ fontWeight: '700' }}>
                {t('words.learnMore')}
              </AppText>
            </Pressable>
          </View>
        ) : null}
      </View>
    </Screen>
  );
}
