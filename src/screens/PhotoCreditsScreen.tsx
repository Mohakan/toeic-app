import { Ionicons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image, Linking, Pressable, View } from 'react-native';
import { AppText, Card, EnglishText, Screen } from '../components/ui';
import { photoCredits } from '../data/speaking/photos/credits';
import { photoSources } from '../data/speaking/photos/sources';
import { useI18n } from '../i18n';
import type { StringKey } from '../i18n/strings';
import type { RootStackParamList } from '../navigation/types';
import { colors, radius, space } from '../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'PhotoCredits'>;

/** Author, license and source of every photo used in TOEIC Speaking tasks 3-4. */
export function PhotoCreditsScreen({ navigation }: Props) {
  const { t, row, backIcon } = useI18n();
  return (
    <Screen>
      <View style={{ gap: space.lg }}>
        <View style={[row, { alignItems: 'center', gap: space.sm }]}>
          <Pressable accessibilityRole="button" accessibilityLabel={t('common.back')} onPress={() => navigation.goBack()} hitSlop={8} style={{ minWidth: 44, minHeight: 44, justifyContent: 'center' }}>
            <Ionicons name={backIcon} size={24} color={colors.ink} />
          </Pressable>
          <AppText variant="h2" style={{ flex: 1 }}>
            {t('ph.credits')}
          </AppText>
        </View>
        <AppText color={colors.inkSoft}>{t('ph.creditsIntro')}</AppText>
        {photoCredits.map((c) => (
          <Pressable key={c.file} accessibilityRole="link" accessibilityLabel={`${c.title} · ${c.author}`} onPress={() => Linking.openURL(c.source)}>
            <Card style={[row, { gap: space.md, alignItems: 'center' }]}>
              <Image source={photoSources[c.file]} accessible={false} style={{ width: 72, height: 54, borderRadius: radius.sm, backgroundColor: colors.line }} />
              <View style={{ flex: 1, gap: 2 }}>
                <EnglishText variant="small" style={{ fontWeight: '700' }}>
                  {c.title.replace(/\.(jpe?g)$/i, '')}
                </EnglishText>
                <EnglishText variant="small" color={colors.inkSoft}>
                  {c.author}
                </EnglishText>
                <AppText variant="small" color={colors.primaryDark}>
                  {`${t(`ph.license.${c.license}` as StringKey)} · Wikimedia Commons`}
                </AppText>
              </View>
              <Ionicons name="open-outline" size={18} color={colors.inkSoft} />
            </Card>
          </Pressable>
        ))}
      </View>
    </Screen>
  );
}
