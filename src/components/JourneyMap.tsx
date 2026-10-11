import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';
import { useI18n } from '../i18n';
import type { StringKey } from '../i18n/strings';
import { CEFR_CUTS } from '../services/scoring';
import type { LevelView } from '../state/useLevel';
import { colors, radius, space } from '../theme';
import type { Cefr } from '../types';
import { AppText, Card, EnglishText, ProgressBar } from './ui';

const MIN = 10;
const MAX = 990;
/** Steps from a light tint to Bleu Ciel Toki (derived). */
const BAND_COLORS: Record<Cefr, string> = {
  A1: '#E3F1FD',
  A2: '#C4E2FB',
  B1: '#97CCF7',
  B2: '#5FB2F3',
  C1: '#2E9BF0',
};

/** Total-score bands from the ETS CEFR cut scores. */
function bands(): { cefr: Cefr; from: number; to: number }[] {
  const cuts = [...CEFR_CUTS.total].reverse();
  const list: { cefr: Cefr; from: number; to: number }[] = [{ cefr: 'A1', from: MIN, to: cuts[0][1] }];
  cuts.forEach(([cefr, from], i) => list.push({ cefr, from, to: cuts[i + 1]?.[1] ?? MAX }));
  return list;
}

const pct = (score: number) => ((Math.min(MAX, Math.max(MIN, score)) - MIN) / (MAX - MIN)) * 100;

export function JourneyMap({ level, compact }: { level: LevelView; compact?: boolean }) {
  const { t, row, isRTL } = useI18n();
  const start = level.start.total.score;
  const now = level.current.total.score;
  const goal = level.target;
  const side = isRTL ? 'right' : 'left';
  const reached = now >= goal;

  const marker = (score: number) => ({ position: 'absolute' as const, [side]: `${pct(score)}%`, transform: [{ translateX: isRTL ? 12 : -12 }] });

  return (
    <Card style={{ gap: space.md }}>
      <AppText variant="h3">{t('journey.title', { goal })}</AppText>

      <View style={[row, { justifyContent: 'space-between' }]}>
        {(
          [
            ['journey.start', start, colors.inkSoft],
            ['journey.now', now, colors.primaryDark],
            ['journey.goal', goal, colors.accentDark],
          ] as [StringKey, number, string][]
        ).map(([key, value, color]) => (
          <View key={key} style={{ alignItems: 'center', flex: 1 }}>
            <AppText variant="label" color={colors.inkSoft} center>
              {t(key).toUpperCase()}
            </AppText>
            <EnglishText variant="h2" color={color} style={{ textAlign: 'center' }}>
              {String(value)}
            </EnglishText>
          </View>
        ))}
      </View>

      <View accessible accessibilityLabel={`${t('journey.start')} ${start}, ${t('journey.now')} ${now}, ${t('journey.goal')} ${goal}`}>
        <View style={{ height: 30 }}>
          <View style={marker(start)}>
            <Ionicons name="ellipse" size={14} color={colors.inkSoft} style={{ marginTop: 12, marginLeft: 5 }} />
          </View>
          <View style={marker(goal)}>
            <Ionicons name="flag" size={24} color={colors.accentDark} />
          </View>
          <View style={marker(now)}>
            <Ionicons name="location" size={26} color={colors.primaryDark} />
          </View>
        </View>
        <View style={[styles.track, row]}>
          {bands().map((b) => (
            <View key={b.cefr} style={{ flex: b.to - b.from, backgroundColor: BAND_COLORS[b.cefr] }} />
          ))}
        </View>
        <View style={[row, { marginTop: 4 }]}>
          {bands().map((b) => (
            <View key={b.cefr} style={{ flex: b.to - b.from, alignItems: 'center' }}>
              <EnglishText variant="label" color={b.cefr === level.current.cefr ? colors.primaryDark : colors.inkSoft}>
                {b.cefr}
              </EnglishText>
            </View>
          ))}
        </View>
      </View>

      {!compact ? (
        <View style={{ gap: 6 }}>
          <ProgressBar value={level.progressToTarget} color={colors.accent} label={t('journey.progress', { n: Math.round(level.progressToTarget * 100) })} />
          <AppText variant="small" style={{ fontWeight: '700' }}>
            {reached ? t('journey.reached') : t('journey.progress', { n: Math.round(level.progressToTarget * 100) })}
          </AppText>
        </View>
      ) : null}
      <AppText variant="small" color={colors.inkSoft}>
        {level.practiceAnswers > 0 ? t('journey.updated', { n: level.practiceAnswers }) : t('journey.fromTest')}
      </AppText>
    </Card>
  );
}

const styles = StyleSheet.create({
  track: { height: 14, borderRadius: radius.pill, overflow: 'hidden' },
});
