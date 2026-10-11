import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, TextInput, View } from 'react-native';
import { useI18n } from '../i18n';
import type { StringKey } from '../i18n/strings';
import { countWords, isAcceptedAnswer } from '../services/typedAnswer';
import { colors, fonts, radius, space } from '../theme';
import type { TypedItem } from '../types';
import { AudioPlayer } from './AudioPlayer';
import { AppText, Card, EnglishText } from './ui';

/** Parts with their own instruction; the others use the generic "Write your answer". */
const INSTRUCTIONS: Partial<Record<TypedItem['part'], StringKey>> = {
  RU2: 'type.instr.RU2',
  RU3: 'type.instr.RU3',
  RU4: 'type.instr.RU4',
  LI2: 'type.instr.LI2',
};

interface Props {
  item: TypedItem;
  value: string;
  onChange: (text: string) => void;
  /** When true the answer is checked and the field is locked. */
  revealed: boolean;
  /** Called by the keyboard's "done" key. */
  onSubmit?: () => void;
  maxPlays?: number;
  playsUsed?: number;
  onPlay?: () => void;
}

/**
 * Open cloze, word formation, key word transformation and sentence completion: the learner types
 * the answer, which is compared with the accepted answers once checked.
 */
export function TypedQuestion({ item, value, onChange, revealed, onSubmit, maxPlays, playsUsed, onPlay }: Props) {
  const { t, row } = useI18n();
  const isListening = item.skill === 'listening';
  const correct = revealed && isAcceptedAnswer(value, item.answers);
  const border = !revealed ? (value ? colors.primary : colors.line) : correct ? colors.success : colors.danger;
  const words = countWords(value);

  return (
    <View style={{ gap: space.md }}>
      <AppText variant="label" color={colors.primaryDark}>
        {t(`assess.part.${item.part}` as StringKey).toUpperCase()}
      </AppText>
      <AppText variant="h3">{t(INSTRUCTIONS[item.part] ?? 'type.instr')}</AppText>

      {isListening && item.audio ? <AudioPlayer audio={item.audio} maxPlays={maxPlays} playsUsed={playsUsed} onPlay={onPlay} /> : null}

      {item.passage ? (
        <Card style={{ backgroundColor: colors.accentSoft, boxShadow: 'none' }}>
          <EnglishText variant="body">{item.passage}</EnglishText>
        </Card>
      ) : null}

      {isListening && revealed && item.audio ? (
        <Card style={{ boxShadow: 'none', borderWidth: 1, borderColor: colors.line }}>
          <AppText variant="label" color={colors.inkSoft}>
            {t('assess.transcript').toUpperCase()}
          </AppText>
          <EnglishText variant="small">{item.audio}</EnglishText>
        </Card>
      ) : null}

      {item.lead ? <EnglishText variant="body">{item.lead}</EnglishText> : null}

      {item.cue ? (
        <View style={[row, { alignItems: 'center', gap: space.sm }]}>
          <AppText variant="label" color={colors.inkSoft}>
            {t('type.cue').toUpperCase()}
          </AppText>
          <View style={styles.cue}>
            <EnglishText variant="h3" style={{ fontWeight: '800', letterSpacing: 1 }}>
              {item.cue.toUpperCase()}
            </EnglishText>
          </View>
        </View>
      ) : null}

      <EnglishText variant="h3">{item.prompt}</EnglishText>

      <View style={[row, styles.field, { borderColor: border, backgroundColor: !revealed ? colors.white : correct ? colors.successSoft : colors.dangerSoft }]}>
        <TextInput
          accessibilityLabel={t('type.placeholder')}
          value={value}
          onChangeText={onChange}
          editable={!revealed}
          placeholder={t('type.placeholder')}
          placeholderTextColor={colors.inkSoft}
          autoCapitalize="none"
          autoCorrect={false}
          spellCheck={false}
          autoComplete="off"
          returnKeyType="done"
          onSubmitEditing={onSubmit}
          style={styles.input}
        />
        {revealed ? <Ionicons name={correct ? 'checkmark-circle' : 'close-circle'} size={24} color={correct ? colors.successDark : colors.dangerDark} /> : null}
      </View>

      {item.maxWords && !revealed ? (
        <AppText variant="small" color={words > item.maxWords ? colors.dangerDark : colors.inkSoft}>
          {t('type.words', { n: words, max: item.maxWords })}
        </AppText>
      ) : null}

      {revealed && item.answers.length > 1 ? (
        <EnglishText variant="small" color={colors.inkSoft}>
          {`${t('type.accepted')} : ${item.answers.join(' / ')}`}
        </EnglishText>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  cue: {
    backgroundColor: colors.primarySoft,
    borderRadius: radius.sm,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  field: {
    alignItems: 'center',
    gap: space.sm,
    borderWidth: 2,
    borderBottomWidth: 5,
    borderRadius: radius.md,
    paddingHorizontal: 14,
    minHeight: 60,
  },
  input: {
    flex: 1,
    minHeight: 52,
    fontSize: 18,
    fontFamily: fonts[600],
    color: colors.ink,
    textAlign: 'left',
    writingDirection: 'ltr',
  },
});
