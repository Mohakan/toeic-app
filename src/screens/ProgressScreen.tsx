import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { JourneyMap } from '../components/JourneyMap';
import { AppText, Button, Card, EnglishText, Screen } from '../components/ui';
import { units } from '../data/units';
import { useI18n } from '../i18n';
import type { StringKey } from '../i18n/strings';
import type { RootStackParamList } from '../navigation/types';
import { sectionOf, skillEstimate, weakestSkills } from '../services/placement';
import { cefrFor, scaledScore } from '../services/scoring';
import { useLevel } from '../state/useLevel';
import { CefrBadge, SectionCard } from './ResultScreen';
import { dayKey, useApp, XP_PER_MINUTE } from '../state/AppState';
import { colors, radius, space } from '../theme';
import type { Skill } from '../types';

const SKILLS: Skill[] = ['grammar', 'vocab', 'reading', 'listening'];

function lastSevenDays(): { key: string; dow: number }[] {
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    return { key: dayKey(d), dow: d.getDay() };
  });
}

export function ProgressScreen() {
  const nav = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { data } = useApp();
  const { t, row } = useI18n();
  const placement = data.placement;
  const week = lastSevenDays();
  const goal = data.dailyGoalMin * XP_PER_MINUTE;
  const weekXp = week.reduce((sum, d) => sum + (data.xpByDay[d.key] ?? 0), 0);
  const maxBar = Math.max(goal, ...week.map((d) => data.xpByDay[d.key] ?? 0));
  const level = useLevel();
  const allResponses = placement ? [...placement.responses, ...data.practiceResponses] : [];
  const weak = weakestSkills(allResponses, 1);
  const doneUnits = Object.keys(data.units).length;

  return (
    <Screen>
      <View style={{ gap: space.lg }}>
        <AppText variant="h2">{t('progress.title')}</AppText>

        {placement && level ? (
          <View style={{ gap: space.md }}>
            {level.start.sections.L.answered > 0 ? <JourneyMap level={level} /> : null}
            <View style={[row, { gap: space.md }]}>
              <SectionCard section="L" result={level.current.sections.L} />
              <SectionCard section="R" result={level.current.sections.R} />
            </View>
            <Button label={t('result.method')} icon="flask" variant="ghost" compact onPress={() => nav.navigate('Method')} />
          </View>
        ) : (
          <Card style={{ gap: space.sm }}>
            <AppText>{t('progress.noTest')}</AppText>
            <Button label={t('home.takeTest')} compact onPress={() => nav.navigate('AssessIntro')} />
          </Card>
        )}

        <Card style={{ gap: space.md }}>
          <View style={[row, { justifyContent: 'space-between' }]}>
            <AppText variant="h3">{t('progress.week')}</AppText>
            <AppText variant="small" color={colors.inkSoft}>
              {t('progress.weekXp', { n: weekXp })}
            </AppText>
          </View>
          <View style={[row, { alignItems: 'flex-end', justifyContent: 'space-between', height: 110 }]}>
            {week.map((d) => {
              const xp = data.xpByDay[d.key] ?? 0;
              const reached = xp >= goal;
              return (
                <View key={d.key} style={{ alignItems: 'center', gap: 6, flex: 1 }} accessible accessibilityLabel={`${xp} XP`}>
                  <View style={{ height: 80, justifyContent: 'flex-end' }}>
                    <View
                      style={{
                        width: 22,
                        height: Math.max(6, (xp / maxBar) * 80),
                        borderRadius: radius.sm,
                        backgroundColor: xp === 0 ? colors.line : reached ? colors.success : colors.primary,
                      }}
                    />
                  </View>
                  <View style={[row, { alignItems: 'center', gap: 2 }]}>
                    {reached ? <Ionicons name="checkmark" size={12} color={colors.successDark} /> : null}
                    <AppText variant="label" color={colors.inkSoft} center>
                      {t(`dow.${d.dow}` as StringKey)}
                    </AppText>
                  </View>
                </View>
              );
            })}
          </View>
        </Card>

        {placement ? (
          <Card style={{ gap: space.md }}>
            <AppText variant="h3">{t('progress.skills')}</AppText>
            {SKILLS.map((skill) => {
              const est = skillEstimate(allResponses, skill);
              const section = sectionOf(skill);
              return (
                <View key={skill} style={[row, { justifyContent: 'space-between', alignItems: 'center', minHeight: 32 }]}>
                  <AppText style={{ fontWeight: '700' }}>{t(`skill.${skill}` as StringKey)}</AppText>
                  {est.answered === 0 ? (
                    <AppText variant="small" color={colors.inkSoft}>
                      {t('skill.none')}
                    </AppText>
                  ) : (
                    <View style={[row, { alignItems: 'center', gap: space.sm }]}>
                      {weak.includes(skill) ? (
                        <AppText variant="label" color={colors.accentDark}>
                          {t('result.focus')}
                        </AppText>
                      ) : null}
                      <CefrBadge cefr={cefrFor(section, scaledScore(section, est.theta))} />
                    </View>
                  )}
                </View>
              );
            })}
            <AppText variant="small" color={colors.inkSoft}>
              {t('result.skillsIndicative')}
            </AppText>
          </Card>
        ) : null}

        <View style={[row, { gap: space.md }]}>
          <Card style={{ flex: 1, alignItems: 'center' }}>
            <AppText variant="label" color={colors.inkSoft} center>
              {t('progress.units').toUpperCase()}
            </AppText>
            <EnglishText variant="h2" style={{ textAlign: 'center' }}>{`${doneUnits} / ${units.length}`}</EnglishText>
          </Card>
          <Card style={{ flex: 1, alignItems: 'center' }}>
            <Ionicons name="flame" size={22} color={colors.accentDark} />
            <AppText variant="h2" center>
              {data.streak}
            </AppText>
          </Card>
        </View>

        <Card style={{ backgroundColor: colors.primarySoft, boxShadow: 'none' }}>
          <AppText variant="label" color={colors.inkSoft}>
            {t('progress.tip').toUpperCase()}
          </AppText>
          <AppText>{t('progress.tipText')}</AppText>
        </Card>
      </View>
    </Screen>
  );
}
