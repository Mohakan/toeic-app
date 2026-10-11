import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { AdaptivePathChart } from '../components/AdaptivePathChart';
import { Confetti } from '../components/Confetti';
import { JourneyMap } from '../components/JourneyMap';
import { AppText, Button, Card, EnglishText, Mascot, Screen } from '../components/ui';
import { units } from '../data/units';
import { useI18n } from '../i18n';
import type { StringKey } from '../i18n/strings';
import type { RootStackParamList } from '../navigation/types';
import { reliabilityFromSe } from '../services/irt';
import { sectionOf, skillEstimate, weakestSkills } from '../services/placement';
import { unitStatuses } from '../services/path';
import { cefrFor, scaledScore } from '../services/scoring';
import { useApp } from '../state/AppState';
import { useLevel } from '../state/useLevel';
import { colors, radius, space } from '../theme';
import type { Cefr, Section, SectionResult, Skill } from '../types';

const SKILLS: Skill[] = ['grammar', 'vocab', 'reading', 'listening'];

export function CefrBadge({ cefr }: { cefr: Cefr }) {
  const { t } = useI18n();
  return (
    <View style={{ backgroundColor: colors.primarySoft, borderRadius: radius.pill, paddingHorizontal: 12, paddingVertical: 4, alignSelf: 'center' }}>
      <AppText variant="label" color={colors.primaryDark} center>
        {cefr} · {t(`cefr.${cefr}` as StringKey)}
      </AppText>
    </View>
  );
}

export function SectionCard({ section, result }: { section: Section; result: SectionResult }) {
  const { t } = useI18n();
  const measured = result.answered > 0;
  return (
    <Card style={{ flex: 1, gap: 6, alignItems: 'center' }}>
      <AppText variant="label" color={section === 'L' ? colors.primaryDark : colors.primaryDark} center>
        {t(`section.${section}` as StringKey).toUpperCase()}
      </AppText>
      {measured ? (
        <>
          <EnglishText variant="h2" style={{ textAlign: 'center' }}>
            {`${result.score} / 495`}
          </EnglishText>
          <CefrBadge cefr={result.cefr} />
          <EnglishText variant="label" color={colors.inkSoft} style={{ textAlign: 'center' }}>
            {`${result.low} – ${result.high}`}
          </EnglishText>
          <AppText variant="label" color={colors.inkSoft} center>
            {t('result.reliability')} {Math.round(reliabilityFromSe(result.se) * 100)} %
          </AppText>
        </>
      ) : (
        <AppText color={colors.inkSoft} center>
          {t('section.notMeasured')}
        </AppText>
      )}
    </Card>
  );
}

export function ResultScreen({ navigation }: NativeStackScreenProps<RootStackParamList, 'Result'>) {
  const { data } = useApp();
  const { t, tx, row } = useI18n();
  const level = useLevel();
  const placement = data.placement;
  if (!placement || !level) return null;

  const { L, R } = placement.sections;
  const bothMeasured = L.answered > 0 && R.answered > 0;
  const weak = weakestSkills(placement.responses, 1);
  const statuses = unitStatuses(units, data.units, placement);
  const startUnit = units.find((u) => statuses[u.id] === 'current');

  // The score sits in the hero band: a big, light figure (direction "Premium épuré") under Toki.
  const hero = (
    <View style={{ alignItems: 'center', gap: space.xs }}>
      <Mascot mood="joy" size={72} />
      <AppText variant="h2" center>
        {t('result.title')}
      </AppText>
      <AppText variant="label" center style={{ marginTop: space.sm }}>
        {t('result.score').toUpperCase()}
      </AppText>
      <EnglishText style={{ fontSize: 72, lineHeight: 80, fontWeight: '300', textAlign: 'center' }}>{bothMeasured ? String(placement.total.score) : '—'}</EnglishText>
      <View style={{ backgroundColor: colors.white, borderRadius: radius.pill, paddingHorizontal: 14, paddingVertical: 4 }}>
        <AppText variant="label" color={colors.primaryDark} center>
          {placement.cefr} · {t(`cefr.${placement.cefr}` as StringKey)}
        </AppText>
      </View>
      {bothMeasured ? (
        <AppText variant="small" center style={{ marginTop: space.xs }}>
          {t('result.range', { low: placement.total.low, high: placement.total.high })}
        </AppText>
      ) : null}
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <Screen hero={hero} footer={<Button label={t('result.cta')} icon="map" variant="play" onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Main' }] })} />}>
        <View style={{ gap: space.lg }}>
          <Card style={{ gap: space.xs }}>
            <AppText variant="small" color={colors.inkSoft}>
              {t('result.answered', { n: placement.answered, k: placement.dontKnow })}
            </AppText>
            <AppText variant="small" color={colors.inkSoft}>
              {t('result.caveat')}
            </AppText>
          </Card>

          <View style={[row, { gap: space.md }]}>
            <SectionCard section="L" result={L} />
            <SectionCard section="R" result={R} />
          </View>

          {bothMeasured ? <JourneyMap level={level} compact /> : null}

          <Card style={{ gap: space.md }}>
            <AppText variant="h3">{t('result.path')}</AppText>
            <AdaptivePathChart responses={placement.responses} />
            <AppText variant="small" color={colors.inkSoft}>
              {t('result.pathHelp')}
            </AppText>
            <Button label={t('result.method')} icon="flask" variant="secondary" compact onPress={() => navigation.navigate('Method')} />
          </Card>

          <Card style={{ gap: space.md }}>
            <AppText variant="h3">{t('result.skills')}</AppText>
            {SKILLS.map((skill) => {
              const est = skillEstimate(placement.responses, skill);
              const section = sectionOf(skill);
              const cefr = cefrFor(section, scaledScore(section, est.theta));
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
                      <CefrBadge cefr={cefr} />
                    </View>
                  )}
                </View>
              );
            })}
            <AppText variant="small" color={colors.inkSoft}>
              {t('result.skillsIndicative')}
            </AppText>
          </Card>

          {startUnit ? (
            <Card style={{ backgroundColor: colors.accentSoft, boxShadow: 'none' }}>
              <AppText variant="label" color={colors.ink}>
                {t('result.startAt').toUpperCase()}
              </AppText>
              <AppText variant="h3">
                {startUnit.emoji} {tx(startUnit.title)}
              </AppText>
            </Card>
          ) : null}
        </View>
      </Screen>
      <Confetti />
    </View>
  );
}
