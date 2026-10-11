import { useEffect } from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import Reanimated, { Easing, useAnimatedStyle, useSharedValue, withDelay, withTiming } from 'react-native-reanimated';
import { colors } from '../theme';
import { useReducedMotion } from './ui';

/** Toki palette, gold included: confetti marks a reward. */
const PALETTE = [colors.primary, colors.accent, colors.gold, colors.success, colors.accentSoft, colors.primaryDark];

/** Repeatable pseudo-random value in [0, 1) so every burst has the same, well spread, layout. */
const spread = (i: number, salt: number) => {
  const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
};

function Piece({ index, width, height }: { index: number; width: number; height: number }) {
  const progress = useSharedValue(0);
  const x0 = spread(index, 1) * width;
  const drift = (spread(index, 2) - 0.5) * 80;
  const spin = (spread(index, 3) - 0.5) * 1080;
  const delay = spread(index, 4) * 350;
  const duration = 1500 + spread(index, 5) * 900;
  const w = 6 + spread(index, 6) * 6;
  const round = spread(index, 7) > 0.6;

  useEffect(() => {
    progress.set(withDelay(delay, withTiming(1, { duration, easing: Easing.out(Easing.quad) })));
  }, [progress, delay, duration]);

  const style = useAnimatedStyle(() => {
    const p = progress.get();
    return {
      opacity: p === 0 ? 0 : p > 0.8 ? (1 - p) / 0.2 : 1,
      transform: [
        { translateX: x0 + Math.sin(p * Math.PI * 2) * drift },
        { translateY: -24 + p * height * 0.85 },
        { rotate: `${p * spin}deg` },
      ],
    };
  });

  return (
    <Reanimated.View
      style={[
        { position: 'absolute', top: 0, left: 0, width: w, height: round ? w : w * 1.8, borderRadius: round ? w / 2 : 2, backgroundColor: PALETTE[index % PALETTE.length] },
        style,
      ]}
    />
  );
}

/**
 * A single burst of confetti over the whole screen, for a finished unit or a new level. It does
 * not catch touches and is skipped when the system asks to reduce motion.
 */
export function Confetti({ count = 40 }: { count?: number }) {
  const reduced = useReducedMotion();
  const { width, height } = useWindowDimensions();
  if (reduced) return null;
  return (
    <View style={[StyleSheet.absoluteFill, { pointerEvents: 'none' }]} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
      {Array.from({ length: count }, (_, i) => (
        <Piece key={i} index={i} width={width} height={height} />
      ))}
    </View>
  );
}
