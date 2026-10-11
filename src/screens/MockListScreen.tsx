import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Pressable, View } from 'react-native';
import { AppText, Card, EnglishText, HeroTitle, Screen } from '../components/ui';
import { mockTests } from '../data/mock';
import { useI18n } from '../i18n';
import type { RootStackParamList } from '../navigation/types';
import { mockItems } from '../services/mock';
import { useApp } from '../state/AppState';
import { useAccess } from '../state/useAccess';
import { colors, radius, space } from '../theme';
import { examConfig } from '../exams/current';

export function MockListScreen() {
  const nav = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { data } = useApp();
  const { t, tx, row, forwardIcon } = useI18n();
  const access = useAccess();

  return (
    <Screen hero={<HeroTitle title={t('mock.title')} subtitle={t('mock.sub')} mood="think" />}>
      <View style={{ gap: space.lg }}>
        {examConfig.toeicSpeaking ? (
          <Pressable accessibilityRole="button" accessibilityLabel={t('speak.title')} onPress={() => nav.navigate('Speaking')}>
            <Card style={[row, { alignItems: 'center', gap: space.md, borderWidth: 2, borderColor: colors.primarySoft }]}>
              <View style={{ width: 48, height: 48, borderRadius: 24, backgroundColor: colors.primarySoft, alignItems: 'center', justifyContent: 'center' }}>
                <Ionicons name="mic" size={24} color={colors.primaryDark} />
              </View>
              <View style={{ flex: 1, gap: 2 }}>
                <AppText variant="h3">{t('speak.title')}</AppText>
                <AppText variant="small" color={colors.inkSoft}>
                  {t('speak.entrySub')}
                </AppText>
              </View>
              <Ionicons name={forwardIcon} size={20} color={colors.inkSoft} />
            </Card>
          </Pressable>
        ) : null}
        {mockTests.length === 0 ? <AppText color={colors.inkSoft}>{t('review.empty')}</AppText> : null}
        {[...mockTests].sort((a, b) => Number(access.mock(b.id)) - Number(access.mock(a.id))).map((mock) => {
          const last = [...data.mockResults].reverse().find((r) => r.mockId === mock.id);
          const lastScore = last ? (last.listening ?? 0) + (last.reading ?? 0) : null;
          const paid = !access.mock(mock.id);
          return (
            <Pressable
              key={mock.id}
              accessibilityRole="button"
              accessibilityLabel={paid ? `${tx(mock.title)}, ${t('access.locked')}` : tx(mock.title)}
              onPress={() => (paid ? nav.navigate('Paywall', { reason: 'mock' }) : nav.navigate('MockTest', { mockId: mock.id }))}
            >
              <Card style={[row, { alignItems: 'center', gap: space.md }]}>
                <View style={{ width: 48, height: 48, borderRadius: 24, backgroundColor: paid ? colors.accentSoft : colors.primarySoft, alignItems: 'center', justifyContent: 'center' }}>
                  <Ionicons name={paid ? 'lock-closed' : 'timer'} size={24} color={paid ? colors.accentDark : colors.primaryDark} />
                </View>
                <View style={{ flex: 1, gap: 2 }}>
                  <View style={[row, { alignItems: 'center', gap: space.sm, flexWrap: 'wrap' }]}>
                    <AppText variant="h3">{tx(mock.title)}</AppText>
                    {mock.demo ? (
                      <View style={{ backgroundColor: colors.accentSoft, borderRadius: radius.pill, paddingHorizontal: 8, paddingVertical: 2 }}>
                        <AppText variant="label" color={colors.ink}>
                          {t('mock.demo')}
                        </AppText>
                      </View>
                    ) : null}
                  </View>
                  {paid ? (
                    <AppText variant="label" color={colors.accentDark}>
                      {t('access.locked')}
                    </AppText>
                  ) : null}
                  <AppText variant="small" color={colors.inkSoft}>
                    {t('mock.items', { n: mockItems(mock).length, m: mock.durationMin })}
                  </AppText>
                  {lastScore !== null ? (
                    <EnglishText variant="small" color={colors.primaryDark} style={{ fontWeight: '700' }}>
                      {t('mock.best', { s: lastScore })}
                    </EnglishText>
                  ) : null}
                </View>
                <Ionicons name={forwardIcon} size={20} color={colors.inkSoft} />
              </Card>
            </Pressable>
          );
        })}
      </View>
    </Screen>
  );
}
