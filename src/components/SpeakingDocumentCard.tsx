import { View } from 'react-native';
import { colors, space } from '../theme';
import type { SpeakingDocument } from '../types';
import { Card, EnglishText } from './ui';

/** The schedule or agenda of TOEIC Speaking tasks 8-10, always laid out left to right. */
export function SpeakingDocumentCard({ document: doc }: { document: SpeakingDocument }) {
  const cell = (text: string, i: number, bold = false) => (
    <View key={i} style={{ flex: i === 0 ? 0.8 : 1.2, paddingEnd: space.sm }}>
      <EnglishText variant="small" color={bold ? colors.inkSoft : colors.ink} style={{ fontWeight: bold || i === 0 ? '700' : '400' }}>
        {text}
      </EnglishText>
    </View>
  );
  return (
    <Card style={{ gap: space.sm, direction: 'ltr' }}>
      <EnglishText variant="h3">{doc.title}</EnglishText>
      {doc.subtitle ? (
        <EnglishText variant="small" color={colors.inkSoft}>
          {doc.subtitle}
        </EnglishText>
      ) : null}
      <View style={{ borderTopWidth: 1, borderColor: colors.line }}>
        {doc.header ? <View style={{ flexDirection: 'row', paddingVertical: 6 }}>{doc.header.map((h, i) => cell(h, i, true))}</View> : null}
        {doc.rows.map((r, j) => (
          <View key={j} style={{ flexDirection: 'row', paddingVertical: 6, borderTopWidth: j || doc.header ? 1 : 0, borderColor: colors.line }}>
            {r.map((c, i) => cell(c, i))}
          </View>
        ))}
      </View>
      {doc.note ? (
        <EnglishText variant="small" color={colors.inkSoft} style={{ fontStyle: 'italic' }}>
          {doc.note}
        </EnglishText>
      ) : null}
    </Card>
  );
}
