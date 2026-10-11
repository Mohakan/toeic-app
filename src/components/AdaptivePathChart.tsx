import { Ionicons } from '@expo/vector-icons';
import { ScrollView, View } from 'react-native';
import { useI18n } from '../i18n';
import { levelToB } from '../services/scoring';
import { colors, radius, space } from '../theme';
import type { ItemResponse } from '../types';
import { AppText, EnglishText } from './ui';

const HEIGHT = 140;
const THETA_MIN = -3;
const THETA_MAX = 3;
const COLUMN = 22;

const y = (theta: number) => ((Math.min(THETA_MAX, Math.max(THETA_MIN, theta)) - THETA_MIN) / (THETA_MAX - THETA_MIN)) * HEIGHT;

/**
 * One column per question: bar height = item difficulty, dot = ability estimate for that section
 * right after the answer. It makes the adaptive mechanism visible to the learner.
 */
export function AdaptivePathChart({ responses }: { responses: ItemResponse[] }) {
  const { t, row } = useI18n();
  return (
    <View style={{ gap: space.sm }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingVertical: 4 }}>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end', gap: 6, height: HEIGHT + 44 }}>
          {responses.map((r, i) => {
            const color = r.dontKnow ? colors.inkSoft : r.correct ? colors.success : colors.danger;
            const icon = r.dontKnow ? 'help' : r.correct ? 'checkmark' : 'close';
            const barHeight = Math.max(8, y(levelToB(r.level)));
            return (
              <View
                key={r.itemId}
                accessible
                accessibilityLabel={`${i + 1}. ${r.section} · ${r.correct ? t('result.legendOk') : r.dontKnow ? t('result.legendIdk') : t('result.legendKo')}`}
                style={{ width: COLUMN, alignItems: 'center' }}
              >
                <View style={{ height: HEIGHT, width: COLUMN, justifyContent: 'flex-end' }}>
                  <View style={{ height: barHeight, width: COLUMN, borderRadius: radius.sm, backgroundColor: color, opacity: 0.85, alignItems: 'center', paddingTop: 2 }}>
                    <Ionicons name={icon} size={14} color={color === colors.inkSoft ? colors.white : colors.ink} />
                  </View>
                  {r.thetaAfter !== undefined ? (
                    <View
                      style={{
                        position: 'absolute',
                        bottom: y(r.thetaAfter) - 6,
                        left: COLUMN / 2 - 6,
                        width: 12,
                        height: 12,
                        borderRadius: 6,
                        backgroundColor: colors.white,
                        borderWidth: 3,
                        borderColor: colors.primaryDark,
                      }}
                    />
                  ) : null}
                </View>
                <EnglishText variant="label" color={colors.inkSoft}>
                  {String(i + 1)}
                </EnglishText>
                <EnglishText variant="label" color={r.section === 'L' ? colors.primaryDark : colors.primaryDark}>
                  {r.section}
                </EnglishText>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <View style={[row, { flexWrap: 'wrap', gap: space.md }]}>
        <Legend icon="checkmark" color={colors.success} label={t('result.legendOk')} />
        <Legend icon="close" color={colors.danger} label={t('result.legendKo')} />
        <Legend icon="help" color={colors.inkSoft} label={t('result.legendIdk')} />
        <View style={[row, { alignItems: 'center', gap: 6 }]}>
          <View style={{ width: 12, height: 12, borderRadius: 6, borderWidth: 3, borderColor: colors.primaryDark }} />
          <AppText variant="small">{t('result.legendLevel')}</AppText>
        </View>
      </View>
    </View>
  );
}

function Legend({ icon, color, label }: { icon: 'checkmark' | 'close' | 'help'; color: string; label: string }) {
  const { row } = useI18n();
  return (
    <View style={[row, { alignItems: 'center', gap: 6 }]}>
      <View style={{ width: 16, height: 16, borderRadius: 4, backgroundColor: color, alignItems: 'center', justifyContent: 'center' }}>
        <Ionicons name={icon} size={11} color={color === colors.inkSoft ? colors.white : colors.ink} />
      </View>
      <AppText variant="small">{label}</AppText>
    </View>
  );
}
