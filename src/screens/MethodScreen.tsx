import { Ionicons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useCallback, useEffect, useState } from 'react';
import { Pressable, View } from 'react-native';
import { AppText, Button, Card, EnglishText, Screen } from '../components/ui';
import { assessmentBank } from '../data/assessment';
import { useI18n } from '../i18n';
import type { StringKey } from '../i18n/strings';
import type { RootStackParamList } from '../navigation/types';
import { simulate, type SimulationReport } from '../services/simulation';
import { colors, space } from '../theme';

const STEPS: [StringKey, StringKey][] = [
  ['method.cat.t', 'method.cat.b'],
  ['method.irt.t', 'method.irt.b'],
  ['method.select.t', 'method.select.b'],
  ['method.estimate.t', 'method.estimate.b'],
  ['method.scale.t', 'method.scale.b'],
];

const REFERENCES = [
  'Birnbaum, A. (1968). Some latent trait models and their use in inferring an examinee’s ability. In Lord & Novick, Statistical Theories of Mental Test Scores.',
  'Bock, R. D., & Mislevy, R. J. (1982). Adaptive EAP estimation of ability in a microcomputer environment. Applied Psychological Measurement, 6(4).',
  'Kingsbury, G. G., & Zara, A. R. (1989). Procedures for selecting items for computerized adaptive tests. Applied Measurement in Education, 2(4).',
  'Weiss, D. J., & Kingsbury, G. G. (1984). Application of computerized adaptive testing to educational problems. Journal of Educational Measurement, 21(4).',
  'Tannenbaum, R. J., & Wylie, E. C. (2008). Linking English-language test scores onto the Common European Framework of Reference. ETS Research Report RR-08-34.',
  'Council of Europe (2020). Common European Framework of Reference for Languages: Companion Volume.',
];

const SIM_CANDIDATES = 400;

export function MethodScreen({ navigation }: NativeStackScreenProps<RootStackParamList, 'Method'>) {
  const { t, row, backIcon } = useI18n();
  const [report, setReport] = useState<SimulationReport | null>(null);
  const [seed, setSeed] = useState(2026);
  const [error, setError] = useState<string | null>(null);

  const run = useCallback((s: number) => {
    setReport(null);
    setError(null);
    // Let the "running" state render before the synchronous simulation blocks the thread.
    setTimeout(() => {
      try {
        setReport(simulate(assessmentBank, SIM_CANDIDATES, s));
      } catch (e) {
        setError(e instanceof Error ? e.message : String(e));
      }
    }, 50);
  }, []);

  useEffect(() => run(seed), [run, seed]);

  const pct = (v: number) => `${Math.round(v * 100)} %`;
  const metrics: [StringKey, string][] = report
    ? [
        ['method.sim.corr', `${report.correlation.L.toFixed(2)} · ${report.correlation.R.toFixed(2)}`],
        ['method.sim.rmse', `${report.rmse.L.toFixed(2)} · ${report.rmse.R.toFixed(2)}`],
        ['method.sim.cov', `${pct(report.coverage90.L)} · ${pct(report.coverage90.R)}`],
        ['method.sim.adj', pct(report.cefrAdjacent)],
        ['method.sim.exact', pct(report.cefrExact)],
      ]
    : [];

  return (
    <Screen>
      <View style={{ gap: space.lg }}>
        <View style={row}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={t('common.back')}
            onPress={() => navigation.goBack()}
            hitSlop={8}
            style={{ width: 44, height: 44, alignItems: 'center', justifyContent: 'center' }}
          >
            <Ionicons name={backIcon} size={24} color={colors.ink} />
          </Pressable>
        </View>
        <AppText variant="h2">{t('method.title')}</AppText>
        <AppText color={colors.inkSoft}>{t('method.intro')}</AppText>

        {STEPS.map(([title, body]) => (
          <Card key={title} style={{ gap: space.sm }}>
            <AppText variant="h3">{t(title)}</AppText>
            <AppText>{t(body)}</AppText>
          </Card>
        ))}

        <Card style={{ gap: space.md, borderWidth: 2, borderColor: colors.primary }}>
          <AppText variant="h3">{t('method.sim.t')}</AppText>
          <AppText>{t('method.sim.b')}</AppText>
          {error ? (
            <View style={[row, { gap: 6, alignItems: 'center' }]}>
              <Ionicons name="alert-circle" size={18} color={colors.dangerDark} />
              <AppText variant="small" color={colors.dangerDark}>
                {error}
              </AppText>
            </View>
          ) : !report ? (
            <AppText variant="small" color={colors.inkSoft}>
              {t('method.sim.running')}
            </AppText>
          ) : (
            <View style={{ gap: space.sm }}>
              <AppText variant="small" color={colors.inkSoft}>
                {t('method.sim.n', { n: report.candidates, k: report.meanItems.toFixed(1) })}
              </AppText>
              <View style={[row, { justifyContent: 'flex-end', gap: space.sm }]}>
                <EnglishText variant="label" color={colors.inkSoft}>
                  {`${t('section.L')} · ${t('section.R')}`}
                </EnglishText>
              </View>
              {metrics.map(([key, value]) => (
                <View key={key} style={[row, { justifyContent: 'space-between', alignItems: 'center', gap: space.md, borderBottomWidth: 1, borderBottomColor: colors.line, paddingBottom: 6 }]}>
                  <AppText variant="small" style={{ flex: 1 }}>
                    {t(key)}
                  </AppText>
                  <EnglishText variant="h3" color={colors.primaryDark}>
                    {value}
                  </EnglishText>
                </View>
              ))}
              <AppText variant="small" color={colors.inkSoft}>
                {t('method.sim.read')}
              </AppText>
            </View>
          )}
          <Button label={t('method.sim.run')} icon="refresh" variant="secondary" compact disabled={!report && !error} onPress={() => setSeed((s) => s + 1)} />
        </Card>

        <Card style={{ gap: space.sm, backgroundColor: colors.accentSoft, boxShadow: 'none' }}>
          <AppText variant="h3">{t('method.limits.t')}</AppText>
          <AppText>{t('method.limits.b')}</AppText>
        </Card>

        <View style={{ gap: space.sm }}>
          <AppText variant="h3">{t('method.refs')}</AppText>
          {REFERENCES.map((ref) => (
            <EnglishText key={ref} variant="small" color={colors.inkSoft}>
              {ref}
            </EnglishText>
          ))}
        </View>
      </View>
    </Screen>
  );
}
