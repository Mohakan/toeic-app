import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, View } from 'react-native';
import { JourneyMap } from '../components/JourneyMap';
import { AppText, Button, Card, EnglishText, Mascot, ProgressBar, Screen, StatTile } from '../components/ui';
import { units } from '../data/units';
import { examConfig } from '../exams/current';
import { useI18n } from '../i18n';
import type { RootStackParamList } from '../navigation/types';
import { unitStatuses } from '../services/path';
import { dueEntries } from '../services/review';
import { nextSetIndex } from '../services/sets';
import { CEFR_ORDER } from '../services/scoring';
import { dayKey, useApp, XP_PER_MINUTE } from '../state/AppState';
import { useAccess } from '../state/useAccess';
import { useLevel } from '../state/useLevel';
import type { Cefr } from '../types';

/** CEFR level a unit is written for (unit levels 1-5 map to A1-C1). */
const unitCefr = (level: number): Cefr => CEFR_ORDER[Math.min(CEFR_ORDER.length, Math.max(1, level)) - 1];
import { colors, radius, space } from '../theme';

export function HomeScreen() {
  const nav = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { data } = useApp();
  const { t, tx, row, forwardIcon } = useI18n();
  const statuses = unitStatuses(units, data.units, data.placement);

  const goal = data.dailyGoalMin * XP_PER_MINUTE;
  const today = data.xpByDay[dayKey()] ?? 0;
  const left = Math.max(0, goal - today);
  const streakActive = data.lastActiveDay === dayKey() || data.lastActiveDay === yesterday();
  const current = units.find((u) => statuses[u.id] === 'current');
  const level = useLevel();
  const measuredBoth = !!level && level.start.sections.L.answered > 0 && level.start.sections.R.answered > 0;
  const myCefr = level?.current.cefr;
  const dueReviews = dueEntries(data.reviewQueue, dayKey()).length;
  const access = useAccess();
  const currentPaid = !!current && !access.unit(current.id);

  const streak = streakActive && data.streak > 0 ? data.streak : 0;
  const hero = (
    <View style={{ gap: space.md }}>
      <View style={[row, { alignItems: 'center', gap: space.sm }]}>
        <View style={{ flex: 1, gap: 2 }}>
          <AppText variant="h2">{t('home.hello', { name: data.name || '' }).replace(/\s+([!?])/, '$1')}</AppText>
          <AppText variant="small">{streak > 0 ? t('home.streak', { n: streak }) : t('home.streak0')}</AppText>
        </View>
        <Mascot mood="neutral" size={64} />
      </View>
      <View style={[row, { gap: space.sm }]}>
        <StatTile icon="flame" iconColor={colors.accentDark} value={String(streak)} caption={t('home.streakTile')} />
        <StatTile icon="flash" iconColor={colors.goldDark} value={String(data.xp)} caption={t('home.xpTile')} />
        {level && measuredBoth ? (
          <StatTile icon="trending-up" iconColor={colors.primaryDark} value={String(level.current.total.score)} caption={t('progress.estimate')} />
        ) : null}
      </View>
    </View>
  );

  return (
    <Screen hero={hero}>
      <View style={{ gap: space.lg }}>

        {level && measuredBoth ? <JourneyMap level={level} /> : null}

        <Card style={{ gap: space.sm }}>
          <View style={[row, { justifyContent: 'space-between' }]}>
            <AppText variant="h3">{t('home.today')}</AppText>
            <EnglishText variant="label" color={colors.inkSoft}>{`${Math.min(today, goal)} / ${goal} ${t('common.xp')}`}</EnglishText>
          </View>
          <ProgressBar value={today / goal} color={colors.accent} label={t('home.today')} />
          <AppText variant="small" color={colors.inkSoft}>
            {left === 0 ? t('home.todayDone') : t('home.todayLeft', { n: left })}
          </AppText>
        </Card>

        {!data.placement ? (
          <Card style={{ gap: space.sm, backgroundColor: colors.primarySoft, boxShadow: 'none' }}>
            <AppText>{t('home.noTest')}</AppText>
            <Button label={t('home.takeTest')} compact onPress={() => nav.navigate('AssessIntro')} />
          </Card>
        ) : null}

        {!access.full ? (
          <Card style={{ gap: space.sm, backgroundColor: colors.accentSoft, boxShadow: 'none' }}>
            <View style={[row, { alignItems: 'center', gap: space.sm }]}>
              <Ionicons name="gift" size={22} color={colors.accentDark} />
              <AppText style={{ flex: 1 }}>{t('access.trialBanner')}</AppText>
            </View>
            <Button label={t('access.seeFull')} icon="lock-open" variant="secondary" compact onPress={() => nav.navigate('Paywall')} />
          </Card>
        ) : null}

        {dueReviews > 0 ? (
          <Card style={[row, { alignItems: 'center', gap: space.md, borderWidth: 2, borderColor: colors.accent }]}>
            <Ionicons name="refresh-circle" size={36} color={colors.accentDark} />
            <View style={{ flex: 1 }}>
              <AppText variant="h3">{t('review.title')}</AppText>
              <AppText variant="small" color={colors.inkSoft}>
                {t('review.cardSub', { n: dueReviews })}
              </AppText>
            </View>
            <Button label={t('review.start')} compact onPress={() => nav.navigate('Review')} />
          </Card>
        ) : null}

        {current ? (
          <View style={{ gap: space.sm }}>
            <AppText variant="label" color={colors.inkSoft}>
              {t('home.next').toUpperCase()}
            </AppText>
            <Card style={{ gap: space.md, borderWidth: 2, borderColor: colors.primary }}>
              <View style={[row, { alignItems: 'center', gap: space.md }]}>
                <Text emoji={current.emoji} />
                <View style={{ flex: 1 }}>
                  <AppText variant="h3">{tx(current.title)}</AppText>
                  <AppText variant="small" color={colors.inkSoft}>
                    {tx(current.subtitle)}
                  </AppText>
                </View>
              </View>
              {currentPaid ? (
                <>
                  <AppText variant="small" color={colors.inkSoft}>
                    {t('access.nextLocked')}
                  </AppText>
                  <Button label={t('access.seeFull')} icon="lock-open" variant="play" onPress={() => nav.navigate('Paywall', { reason: 'trialEnd' })} />
                </>
              ) : (
                <Button label={t('home.start')} icon="play" variant="play" onPress={() => nav.navigate('Lesson', { unitId: current.id })} />
              )}
            </Card>
          </View>
        ) : null}

        {/* Speaking and pronunciation (TOEIC Speaking tasks), also reachable from the Tests tab, are shown here so they are easy to find. */}
        {examConfig.toeicSpeaking ? (
          <Card style={{ gap: space.md }}>
            <View style={[row, { alignItems: 'center', gap: space.md }]}>
              <View style={{ width: 48, height: 48, borderRadius: 24, backgroundColor: colors.primarySoft, alignItems: 'center', justifyContent: 'center' }}>
                <Ionicons name="mic" size={24} color={colors.primaryDark} />
              </View>
              <View style={{ flex: 1, gap: 2 }}>
                <AppText variant="h3">{t('home.speak')}</AppText>
                <AppText variant="small" color={colors.inkSoft}>
                  {t('home.speakSub')}
                </AppText>
              </View>
            </View>
            <Button label={t('home.speakCta')} icon="mic" variant="secondary" onPress={() => nav.navigate('Speaking')} />
          </Card>
        ) : null}

        <View style={{ gap: space.sm }}>
          {units.map((unit, index) => {
            const status = statuses[unit.id];
            const cefr = unitCefr(unit.level);
            const newBand = index === 0 || unitCefr(units[index - 1].level) !== cefr;
            const band = units.filter((u) => u.level === unit.level);
            const bandDone = band.filter((u) => statuses[u.id] === 'done' || statuses[u.id] === 'skipped').length;
            const header = newBand ? (
              <View key={`band-${cefr}`} style={[row, { alignItems: 'center', gap: space.sm, marginTop: index === 0 ? 0 : space.sm }]}>
                <AppText variant="label" color={colors.inkSoft}>
                  {t('home.level', { cefr }).toUpperCase()}
                </AppText>
                <EnglishText variant="label" color={colors.inkSoft}>
                  {`${bandDone}/${band.length}`}
                </EnglishText>
                <View style={{ flex: 1, height: 1, backgroundColor: colors.line }} />
                {myCefr === cefr ? (
                  <View style={[row, styles.here]}>
                    <Ionicons name="location" size={14} color={colors.ink} />
                    <AppText variant="label" color={colors.ink}>
                      {t('home.youAreHere')}
                    </AppText>
                  </View>
                ) : null}
              </View>
            ) : null;
            const result = data.units[unit.id];
            const locked = status === 'locked';
            const paid = !access.unit(unit.id);
            const statusText =
              paid ? t('access.locked') : status === 'done' ? t('home.done') : status === 'skipped' ? t('home.skipped') : locked ? t('home.locked') : t('home.exercises', { n: unit.sets[nextSetIndex(unit, result)].exercises.length });
            return [
              header,
              <Pressable
                key={unit.id}
                accessibilityRole="button"
                accessibilityLabel={`${tx(unit.title)}, ${statusText}`}
                accessibilityState={{ disabled: locked && !paid }}
                disabled={locked && !paid}
                onPress={() => (paid ? nav.navigate('Paywall', { reason: 'unit' }) : nav.navigate('Lesson', { unitId: unit.id }))}
                style={[styles.node, row, (locked || paid) && { opacity: 0.55 }, status === 'current' && { borderColor: colors.primary }]}
              >
                {paid && !locked ? (
                  <View style={[styles.nodeIcon, { backgroundColor: colors.accentSoft }]}>
                    <Ionicons name="lock-closed" size={20} color={colors.accentDark} />
                  </View>
                ) : (
                <View style={[styles.nodeIcon, status === 'done' && { backgroundColor: colors.successSoft }, status === 'skipped' && { backgroundColor: colors.primarySoft }]}>
                  <Ionicons
                    name={status === 'done' ? 'checkmark' : status === 'skipped' ? 'flash' : locked ? 'lock-closed' : 'play'}
                    size={22}
                    color={status === 'done' ? colors.successDark : status === 'skipped' ? colors.primaryDark : locked ? colors.inkSoft : colors.primaryDark}
                  />
                </View>
                )}
                <View style={{ flex: 1 }}>
                  <AppText variant="body" style={{ fontWeight: '700' }}>
                    {unit.emoji} {tx(unit.title)}
                  </AppText>
                  <AppText variant="small" color={colors.inkSoft}>
                    {statusText}
                    {result ? `  ·  ${'★'.repeat(result.stars)}${'☆'.repeat(3 - result.stars)}` : ''}
                  </AppText>
                </View>
                {!locked ? <Ionicons name={forwardIcon} size={20} color={colors.inkSoft} /> : null}
              </Pressable>,
            ];
          })}
        </View>
      </View>
    </Screen>
  );
}

function Text({ emoji }: { emoji: string }) {
  return (
    <View style={{ width: 52, height: 52, borderRadius: 26, backgroundColor: colors.primarySoft, alignItems: 'center', justifyContent: 'center' }}>
      <AppText variant="h2" center>
        {emoji}
      </AppText>
    </View>
  );
}

function yesterday(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return dayKey(d);
}

const styles = StyleSheet.create({
  node: {
    alignItems: 'center',
    gap: space.md,
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    borderWidth: 2,
    borderColor: colors.line,
    padding: space.md,
    minHeight: 68,
  },
  here: {
    alignItems: 'center',
    gap: 4,
    backgroundColor: colors.primary,
    borderRadius: radius.pill,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  nodeIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.primarySoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
