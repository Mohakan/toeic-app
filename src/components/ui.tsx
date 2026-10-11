import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import type { ReactNode } from 'react';
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  type StyleProp,
  type TextStyle,
  type ViewStyle,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useI18n } from '../i18n';
import { isolateLatin } from '../i18n/bidi';
import { tokiStage, type TokiExpression } from '../services/toki';
import { useLevel } from '../state/useLevel';
import { Toki } from './Toki';
import { colors, radius, shadow, space } from '../theme';

type Variant = 'title' | 'h2' | 'h3' | 'body' | 'small' | 'label';

const textStyles: Record<Variant, TextStyle> = {
  title: { fontSize: 30, lineHeight: 38, fontWeight: '800' },
  h2: { fontSize: 22, lineHeight: 30, fontWeight: '800' },
  h3: { fontSize: 18, lineHeight: 26, fontWeight: '700' },
  body: { fontSize: 16, lineHeight: 24, fontWeight: '400' },
  small: { fontSize: 14, lineHeight: 20, fontWeight: '400' },
  label: { fontSize: 13, lineHeight: 18, fontWeight: '700', letterSpacing: 0.3 },
};

interface AppTextProps {
  variant?: Variant;
  color?: string;
  center?: boolean;
  style?: StyleProp<TextStyle>;
  children: ReactNode;
  numberOfLines?: number;
}

/** In right-to-left text, English quotations are isolated so their punctuation stays in place. */
const isolateChildren = (children: ReactNode): ReactNode =>
  typeof children === 'string' ? isolateLatin(children) : Array.isArray(children) ? children.map((c) => (typeof c === 'string' ? isolateLatin(c) : c)) : children;

export function AppText({ variant = 'body', color = colors.ink, center, style, children, numberOfLines }: AppTextProps) {
  const { align, isRTL } = useI18n();
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[textStyles[variant], { color }, align, center && { textAlign: 'center' }, style]}
    >
      {isRTL ? isolateChildren(children) : children}
    </Text>
  );
}

/** English content (questions, passages) is always laid out left-to-right. */
export function EnglishText({ variant = 'body', color = colors.ink, style, children }: Omit<AppTextProps, 'center'>) {
  return (
    <Text style={[textStyles[variant], { color, textAlign: 'left', writingDirection: 'ltr' }, style]}>{children}</Text>
  );
}

interface ButtonProps {
  label: string;
  onPress: () => void;
  /** 'play' is the Orange Soleil call to action ("Jouer"): keep it to the one main action of a screen. */
  variant?: 'primary' | 'play' | 'secondary' | 'ghost' | 'success' | 'danger';
  icon?: keyof typeof Ionicons.glyphMap;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  compact?: boolean;
}

/**
 * White fails AA on Bleu Ciel (2.98:1) and Orange Soleil (2.36:1), so labels on bright buttons are
 * in Encre (5.3:1 and 6.6:1). Edges are darker steps of the same color.
 */
const buttonPalette = {
  primary: { bg: colors.primary, edge: colors.primaryDark, fg: colors.ink },
  play: { bg: colors.accent, edge: '#C2630C', fg: colors.ink },
  success: { bg: colors.success, edge: '#1E9468', fg: colors.ink },
  danger: { bg: colors.danger, edge: '#C03A40', fg: colors.ink },
  secondary: { bg: colors.white, edge: colors.line, fg: colors.primaryDark },
  ghost: { bg: 'transparent', edge: 'transparent', fg: colors.primaryDark },
} as const;

export function haptic(kind: 'light' | 'success' | 'error' = 'light') {
  if (Platform.OS === 'web') return;
  const run =
    kind === 'success'
      ? Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
      : kind === 'error'
        ? Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
        : Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  run.catch(() => undefined);
}

export function Button({ label, onPress, variant = 'primary', icon, disabled, style, compact }: ButtonProps) {
  const { row } = useI18n();
  const p = buttonPalette[variant];
  const raised = variant !== 'ghost';
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={{ disabled: !!disabled }}
      disabled={disabled}
      onPress={() => {
        haptic('light');
        onPress();
      }}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: disabled ? colors.line : p.bg,
          borderColor: disabled ? colors.line : p.edge,
          borderBottomWidth: raised ? (pressed ? 2 : 5) : 0,
          minHeight: compact ? 44 : 56,
          marginTop: raised && pressed ? 3 : 0,
          marginBottom: raised && pressed ? -3 : 0,
        },
        variant === 'secondary' && { borderWidth: 2, borderBottomWidth: pressed ? 2 : 5 },
        style,
      ]}
    >
      <View style={[row, { alignItems: 'center', justifyContent: 'center', gap: space.sm }]}>
        {icon ? <Ionicons name={icon} size={20} color={disabled ? colors.inkSoft : p.fg} /> : null}
        <Text style={[styles.buttonLabel, { color: disabled ? colors.inkSoft : p.fg }]}>{label}</Text>
      </View>
    </Pressable>
  );
}

export function Card({ children, style }: { children: ReactNode; style?: StyleProp<ViewStyle> }) {
  return <View style={[styles.card, style]}>{children}</View>;
}

export function ProgressBar({ value, color = colors.success, height = 12, label }: { value: number; color?: string; height?: number; label?: string }) {
  const pct = Math.max(0, Math.min(1, value));
  const { isRTL } = useI18n();
  return (
    <View
      accessibilityRole="progressbar"
      accessibilityLabel={label}
      accessibilityValue={{ min: 0, max: 100, now: Math.round(pct * 100) }}
      style={{ height, borderRadius: radius.pill, backgroundColor: colors.line, overflow: 'hidden', flexDirection: isRTL ? 'row-reverse' : 'row' }}
    >
      <View style={{ width: `${pct * 100}%`, backgroundColor: color, borderRadius: radius.pill }} />
    </View>
  );
}

export function Screen({ children, scroll = true, padded = true, footer }: { children: ReactNode; scroll?: boolean; padded?: boolean; footer?: ReactNode }) {
  const content = padded ? styles.padded : undefined;
  return (
    <SafeAreaView style={styles.screen} edges={['top', 'left', 'right', 'bottom']}>
      {scroll ? (
        <ScrollView contentContainerStyle={[content, { flexGrow: 1 }]} keyboardShouldPersistTaps="handled">
          <View style={styles.maxWidth}>{children}</View>
        </ScrollView>
      ) : (
        <View style={[{ flex: 1 }, content]}>
          <View style={[styles.maxWidth, { flex: 1 }]}>{children}</View>
        </View>
      )}
      {footer ? (
        <View style={styles.footer}>
          <View style={styles.maxWidth}>{footer}</View>
        </View>
      ) : null}
    </SafeAreaView>
  );
}

export function IconBadge({ icon, color, bg, size = 44 }: { icon: keyof typeof Ionicons.glyphMap; color: string; bg: string; size?: number }) {
  return (
    <View style={{ width: size, height: size, borderRadius: size / 2, backgroundColor: bg, alignItems: 'center', justifyContent: 'center' }}>
      <Ionicons name={icon} size={size * 0.5} color={color} />
    </View>
  );
}

/**
 * Toki, the falcon mascot. He grows with the learner's estimated score and is mirrored in Arabic.
 * Decorative: hidden from screen readers, the screen text says the same thing.
 */
export function Mascot({ mood = 'neutral', size = 72 }: { mood?: TokiExpression; size?: number }) {
  const { isRTL } = useI18n();
  const level = useLevel();
  return (
    <View accessibilityElementsHidden importantForAccessibility="no-hide-descendants" style={{ width: size * 1.3, height: size * 1.3, alignItems: 'center', justifyContent: 'center' }}>
      <Toki expression={mood} stage={tokiStage(level?.current.total.score)} size={size * 1.15} mirrored={isRTL} />
    </View>
  );
}

export function Chip({ label, selected, onPress, icon }: { label: string; selected?: boolean; onPress: () => void; icon?: keyof typeof Ionicons.glyphMap }) {
  const { row } = useI18n();
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected: !!selected }}
      onPress={() => {
        haptic('light');
        onPress();
      }}
      style={[
        styles.chip,
        row,
        selected && { backgroundColor: colors.primarySoft, borderColor: colors.primary },
      ]}
    >
      {selected ? <Ionicons name="checkmark-circle" size={18} color={colors.primaryDark} /> : icon ? <Ionicons name={icon} size={18} color={colors.inkSoft} /> : null}
      <Text style={{ color: selected ? colors.primaryDark : colors.ink, fontWeight: '700', fontSize: 15 }}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  padded: { padding: space.md, paddingBottom: space.xl },
  maxWidth: { width: '100%', maxWidth: 560, alignSelf: 'center' },
  footer: { padding: space.md, backgroundColor: colors.bg, borderTopWidth: 1, borderTopColor: colors.line },
  button: {
    borderRadius: radius.md,
    paddingHorizontal: space.lg,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLabel: { fontSize: 17, fontWeight: '800' },
  card: { backgroundColor: colors.card, borderRadius: radius.lg, padding: space.md, ...shadow },
  chip: {
    alignItems: 'center',
    gap: 6,
    borderWidth: 2,
    borderColor: colors.line,
    backgroundColor: colors.white,
    borderRadius: radius.pill,
    paddingHorizontal: 16,
    minHeight: 44,
  },
});

