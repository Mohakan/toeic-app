import { Ionicons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, View } from 'react-native';
import { AppText, Chip, Screen } from '../components/ui';
import { APP_LEGAL_DOCS, LEGAL_UPDATED, legalLang, legalText } from '../data/legal';
import { useI18n } from '../i18n';
import type { StringKey } from '../i18n/strings';
import type { RootStackParamList } from '../navigation/types';
import { colors, space } from '../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'Legal'>;

const TABS: Record<(typeof APP_LEGAL_DOCS)[number], StringKey> = { privacy: 'legal.privacy', terms: 'legal.terms', notice: 'legal.notice' };

/** Privacy policy, terms and legal notice, bundled so they can be read offline. */
export function LegalScreen({ navigation, route }: Props) {
  const { t, lang, row, backIcon } = useI18n();
  const doc = route.params.doc;
  const text = legalText(doc, legalLang(lang));

  return (
    <Screen>
      <View style={{ gap: space.md }}>
        <View style={[row, { alignItems: 'center', gap: space.sm }]}>
          <Pressable accessibilityRole="button" accessibilityLabel={t('common.back')} onPress={() => navigation.goBack()} hitSlop={8} style={{ minWidth: 44, minHeight: 44, justifyContent: 'center' }}>
            <Ionicons name={backIcon} size={24} color={colors.ink} />
          </Pressable>
          <AppText variant="h2" style={{ flex: 1 }}>
            {text.title}
          </AppText>
        </View>
        <View style={[row, { flexWrap: 'wrap', gap: space.sm }]} accessibilityRole="tablist">
          {APP_LEGAL_DOCS.map((d) => (
            <Chip key={d} label={t(TABS[d])} selected={d === doc} onPress={() => navigation.setParams({ doc: d })} />
          ))}
        </View>
        <AppText variant="small" color={colors.inkSoft}>
          {t('legal.updated', { d: LEGAL_UPDATED })}
        </AppText>
        {text.sections.map((section) => (
          <View key={section.title} style={{ gap: space.xs }}>
            <AppText variant="h3">
              {section.title}
            </AppText>
            {section.body.map((p) =>
              p.startsWith('• ') ? (
                <View key={p} style={[row, { gap: space.sm, alignItems: 'flex-start' }]}>
                  <AppText color={colors.primaryDark}>•</AppText>
                  <AppText style={{ flex: 1 }}>{p.slice(2)}</AppText>
                </View>
              ) : (
                <AppText key={p}>{p}</AppText>
              ),
            )}
          </View>
        ))}
      </View>
    </Screen>
  );
}
