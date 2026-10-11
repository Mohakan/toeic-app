import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Pressable, View } from 'react-native';
import { useI18n } from '../i18n';
import type { RootStackParamList } from '../navigation/types';
import { colors, space } from '../theme';
import { AppText } from './ui';

type Doc = RootStackParamList['Legal']['doc'];

/** Small links to the legal texts, under a sign-up or a purchase. */
export function LegalLinks({ docs = ['terms', 'privacy'] }: { docs?: Doc[] }) {
  const nav = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { t, row } = useI18n();
  const labels = { privacy: t('legal.privacy'), terms: t('legal.terms'), notice: t('legal.notice') };
  return (
    <View style={[row, { justifyContent: 'center', flexWrap: 'wrap', gap: space.md }]}>
      {docs.map((doc) => (
        <Pressable key={doc} accessibilityRole="link" onPress={() => nav.navigate('Legal', { doc })} hitSlop={8} style={{ minHeight: 44, justifyContent: 'center' }}>
          <AppText variant="small" color={colors.primaryDark} style={{ textDecorationLine: 'underline', fontWeight: '700' }}>
            {labels[doc]}
          </AppText>
        </Pressable>
      ))}
    </View>
  );
}
