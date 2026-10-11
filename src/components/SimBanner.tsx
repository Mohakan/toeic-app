import { View } from 'react-native';
import { simulationById, simulationSteps } from '../data/speaking/simulations';
import { useI18n } from '../i18n';
import type { SimRun } from '../navigation/types';
import { colors, radius, space } from '../theme';
import { AppText } from './ui';

/** Shown on each task screen during a simulation: which simulation, which tasks, how far along. */
export function SimBanner({ run }: { run: SimRun }) {
  const { t, tx, row } = useI18n();
  const sim = simulationById[run.simId];
  if (!sim) return null;
  const steps = simulationSteps(sim);
  return (
    <View style={{ gap: 6 }}>
      <AppText variant="small" color={colors.primaryDark} style={{ fontWeight: '700' }}>
        {`${tx(sim.title)} · ${t(steps[run.step]?.tasks.includes('–') ? 'sim.tasks' : 'sim.task', { t: steps[run.step]?.tasks ?? '' })}`}
      </AppText>
      <View style={[row, { gap: 4 }]} accessibilityLabel={t('sim.progress', { n: run.step + 1, total: steps.length })}>
        {steps.map((s, i) => (
          <View key={s.id} style={{ flex: 1, height: 6, borderRadius: radius.pill, backgroundColor: i <= run.step ? colors.primary : colors.line }} />
        ))}
      </View>
      <View style={{ height: space.xs }} />
    </View>
  );
}
