import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { useEffect, useState, type ReactNode } from 'react';
import {
  AccessibilityInfo,
  Animated,
  Easing,
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
import Reanimated, {
  cancelAnimation,
  Easing as REasing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { examConfig } from '../exams/current';
import { useI18n } from '../i18n';
import { isolateLatin } from '../i18n/bidi';
import { tokiStage, type TokiExpression } from '../services/toki';
import { useLevel } from '../state/useLevel';
import { Toki } from './Toki';
import { colors, fontFamilyFor, fonts, radius, shadow, space } from '../theme';

type Variant = 'title' | 'h2' | 'h3' | 'body' | 'small' | 'label';

const textStyles: Record<Variant, TextStyle> = {
  title: { fontSize: 30, lineHeight: 38, fontWeight: '800' },
  h2: { fontSize: 24, lineHeight: 32, fontWeight: '700' },
  h3: { fontSize: 18, lineHeight: 26, fontWeight: '600' },
  body: { fontSize: 16, lineHeight: 24, fontWeight: '400' },
  small: { fontSize: 14, lineHeight: 20, fontWeight: '400' },
  label: { fontSize: 13, lineHeight: 18, fontWeight: '700', letterSpacing: 0.3 },
};

/** Swaps fontWeight for the matching Rubik file (a custom font has one weight per family). */
const typeface = (style: StyleProp<TextStyle>): TextStyle => {
  const flat = StyleSheet.flatten(style) ?? {};
  return flat.fontFamily ? {} : { fontFamily: fontFamilyFor(flat.fontWeight), fontWeight: 'normal' };
};

/** The system "Reduce motion" setting: animations are skipped when it is on. */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    let active = true;
    AccessibilityInfo.isReduceMotionEnabled()
      .then((on) => active && setReduced(on))
      .catch(() => undefined);
    const sub = AccessibilityInfo.addEventListener('reduceMotionChanged', setReduced);
    return () => {
      active = false;
      sub.remove();
    };
  }, []);
  return reduced;
}

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
  const base = [textStyles[variant], { color }, align, center && { textAlign: 'center' as const }, style];
  return (
    <Text numberOfLines={numberOfLines} style={[base, typeface(base)]}>
      {isRTL ? isolateChildren(children) : children}
    </Text>
  );
}

/** English content (questions, passages) is always laid out left-to-right. */
export function EnglishText({ variant = 'body', color = colors.ink, style, children }: Omit<AppTextProps, 'center'>) {
  const base = [textStyles[variant], { color, textAlign: 'left' as const, writingDirection: 'ltr' as const }, style];
  return <Text style={[base, typeface(base)]}>{children}</Text>;
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
  const reduced = useReducedMotion();
  // The bar fills from empty when it appears, then glides to each new value.
  const [fill] = useState(() => new Animated.Value(0));
  useEffect(() => {
    if (reduced) fill.setValue(pct);
    else Animated.timing(fill, { toValue: pct, duration: 500, easing: Easing.out(Easing.cubic), useNativeDriver: false }).start();
  }, [fill, pct, reduced]);
  return (
    <View
      accessibilityRole="progressbar"
      accessibilityLabel={label}
      accessibilityValue={{ min: 0, max: 100, now: Math.round(pct * 100) }}
      style={{ height, borderRadius: radius.pill, backgroundColor: colors.line, overflow: 'hidden', flexDirection: isRTL ? 'row-reverse' : 'row' }}
    >
      <Animated.View
        style={{ width: fill.interpolate({ inputRange: [0, 1], outputRange: ['0%', '100%'] }), backgroundColor: color, borderRadius: radius.pill }}
      />
    </View>
  );
}

interface ScreenProps {
  children: ReactNode;
  scroll?: boolean;
  padded?: boolean;
  footer?: ReactNode;
  /** Background of the footer band, e.g. the soft green or red of answer feedback. */
  footerTone?: string;
  /** Content of the Bleu Ciel band at the top of the screen (scrolling screens only). */
  hero?: ReactNode;
}

export function Screen({ children, scroll = true, padded = true, footer, footerTone, hero }: ScreenProps) {
  const content = padded ? styles.padded : undefined;
  const insets = useSafeAreaInsets();
  const withHero = scroll && !!hero;
  return (
    <SafeAreaView style={styles.screen} edges={withHero ? ['left', 'right', 'bottom'] : ['top', 'left', 'right', 'bottom']}>
      {scroll ? (
        <ScrollView contentContainerStyle={[{ flexGrow: 1 }, !withHero && content]} keyboardShouldPersistTaps="handled">
          {withHero ? (
            <View style={[styles.hero, { paddingTop: insets.top + space.md }]}>
              <View style={styles.maxWidth}>{hero}</View>
            </View>
          ) : null}
          <View style={withHero ? content : undefined}>
            <View style={styles.maxWidth}>{children}</View>
          </View>
        </ScrollView>
      ) : (
        <View style={[{ flex: 1 }, content]}>
          <View style={[styles.maxWidth, { flex: 1 }]}>{children}</View>
        </View>
      )}
      {footer ? (
        <View style={[styles.footer, footerTone ? { backgroundColor: footerTone, borderTopWidth: 0 } : null]}>
          <View style={styles.maxWidth}>{footer}</View>
        </View>
      ) : null}
    </SafeAreaView>
  );
}

/** A figure in the hero band: icon, big value, short caption. */
export function StatTile({ icon, iconColor, value, caption }: { icon: keyof typeof Ionicons.glyphMap; iconColor: string; value: string; caption: string }) {
  const { row } = useI18n();
  return (
    <View accessible accessibilityLabel={`${value} ${caption}`} style={[row, styles.statTile]}>
      <Ionicons name={icon} size={22} color={iconColor} />
      <View style={{ flex: 1 }}>
        <AppText variant="h3" style={{ fontWeight: '800', lineHeight: 22 }}>
          {value}
        </AppText>
        <AppText variant="label" color={colors.inkSoft} style={{ fontWeight: '400', letterSpacing: 0 }} numberOfLines={1}>
          {caption}
        </AppText>
      </View>
    </View>
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
 * He floats gently, hops on a right answer and tilts his head on a wrong one; he stays still when
 * the system asks to reduce motion. Decorative: hidden from screen readers, the screen text says
 * the same thing.
 */
export function Mascot({ mood = 'neutral', size = 72 }: { mood?: TokiExpression; size?: number }) {
  const { isRTL } = useI18n();
  const level = useLevel();
  const reduced = useReducedMotion();
  const lift = useSharedValue(0);
  const tilt = useSharedValue(0);

  useEffect(() => {
    if (reduced) {
      lift.set(0);
      tilt.set(0);
      return;
    }
    const ease = REasing.inOut(REasing.sin);
    if (mood === 'joy') {
      lift.set(withSequence(withTiming(-size * 0.2, { duration: 180, easing: REasing.out(REasing.quad) }), withSpring(0, { damping: 6, stiffness: 220 })));
      tilt.set(withSequence(withTiming(-8, { duration: 90 }), withRepeat(withTiming(8, { duration: 120 }), 3, true), withTiming(0, { duration: 90 })));
    } else if (mood === 'encourage') {
      tilt.set(withSequence(withTiming(-7, { duration: 220 }), withTiming(0, { duration: 480, easing: ease })));
    } else {
      lift.set(withRepeat(withSequence(withTiming(-3, { duration: 1400, easing: ease }), withTiming(0, { duration: 1400, easing: ease })), -1));
    }
    return () => {
      cancelAnimation(lift);
      cancelAnimation(tilt);
    };
  }, [mood, reduced, size, lift, tilt]);

  const motion = useAnimatedStyle(() => ({ transform: [{ translateY: lift.get() }, { rotate: `${tilt.get()}deg` }] }));
  return (
    <View accessibilityElementsHidden importantForAccessibility="no-hide-descendants" style={{ width: size * 1.3, height: size * 1.3, alignItems: 'center', justifyContent: 'center' }}>
      <Reanimated.View style={motion}>
        <Toki expression={mood} stage={tokiStage(level?.current.total.score)} size={size * 1.15} mirrored={isRTL} />
      </Reanimated.View>
    </View>
  );
}

/** Title block of a hero band: heading, one line under it and Toki on the side. */
export function HeroTitle({ title, subtitle, mood = 'neutral' }: { title: string; subtitle?: string; mood?: TokiExpression }) {
  const { row } = useI18n();
  return (
    <View style={[row, { alignItems: 'center', gap: space.sm }]}>
      <View style={{ flex: 1, gap: 2 }}>
        <AppText variant="h2">{title}</AppText>
        {subtitle ? <AppText variant="small">{subtitle}</AppText> : null}
      </View>
      <Mascot mood={mood} size={56} />
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
      <Text style={{ color: selected ? colors.primaryDark : colors.ink, fontFamily: fonts[600], fontSize: 15 }}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  padded: { padding: space.md, paddingBottom: space.xl },
  maxWidth: { width: '100%', maxWidth: 560, alignSelf: 'center' },
  footer: { padding: space.md, backgroundColor: colors.bg, borderTopWidth: 1, borderTopColor: colors.line },
  hero: {
    // Bleu Ciel in the TOEIC app; each app of the family has its own color (src/exams/config.ts).
    backgroundColor: examConfig.brand.hero,
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 36,
    paddingHorizontal: space.lg,
    paddingBottom: space.lg,
  },
  statTile: {
    flex: 1,
    alignItems: 'center',
    gap: space.sm,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: radius.md,
    paddingHorizontal: 12,
    paddingVertical: 10,
    minHeight: 56,
  },
  button: {
    borderRadius: radius.md,
    paddingHorizontal: space.lg,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLabel: { fontSize: 17, fontFamily: fonts[700] },
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

