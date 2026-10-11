import { View } from 'react-native';
import Svg, { Circle, Ellipse, G, Path } from 'react-native-svg';
import type { TokiExpression, TokiStage } from '../services/toki';
import { examConfig } from '../exams/current';
import { colors } from '../theme';

/**
 * Toki, provisional vector version drawn from the brief, until the illustrator's artwork arrives.
 * Each part is its own group (tail, body, belly, wings, feet, face, tuft, accessories) so it can be
 * swapped or animated later. Outlines are Bleu Nuit, never black, and nothing is pointed.
 */

const NAVY = colors.primaryDark;
const SKY = colors.primary;
const PEACH = colors.accentSoft;
const SUN = colors.accent;
const GOLD = colors.gold;
const W = colors.white;
/** The app's own color (Lavande in Toki Quest B2), for the scarf. */
const BRAND = examConfig.brand.hero;

interface Pose {
  /** Rotation of each wing around its shoulder, in degrees (0 = hanging down), or a full SVG transform. */
  left: number | string;
  right: number | string;
  /** Rotation of the three-feather tuft. */
  tuft: number;
}

const POSES: Record<TokiExpression, Pose> = {
  neutral: { left: 0, right: 0, tuft: 0 },
  joy: { left: 135, right: -135, tuft: 0 },
  // The wing rests on top of the head, beside the tuft, without hiding the eye.
  encourage: { left: 0, right: 'translate(-14 -62) rotate(35 98 82)', tuft: 35 },
  // The wing tip comes under the beak.
  think: { left: 0, right: 87, tuft: 0 },
  welcome: { left: 0, right: -140, tuft: -10 },
};

function Eye({ cx, expression, side }: { cx: number; expression: TokiExpression; side: 'left' | 'right' }) {
  const closed = expression === 'joy' || (expression === 'welcome' && side === 'left');
  if (closed) {
    // Happy closed eye, an upward crescent.
    return <Path d={`M${cx - 10} 56 Q${cx} 43 ${cx + 10} 56`} stroke={NAVY} strokeWidth={4} strokeLinecap="round" fill="none" />;
  }
  const look = expression === 'think' ? { dx: 2, dy: -4 } : { dx: side === 'left' ? 1 : -1, dy: 2 };
  return (
    <G>
      <Ellipse cx={cx} cy={52} rx={11} ry={13} fill={W} stroke={NAVY} strokeWidth={2} />
      <Ellipse cx={cx + look.dx} cy={52 + look.dy} rx={7} ry={9} fill={NAVY} />
      <Circle cx={cx + look.dx + 3} cy={48 + look.dy} r={3} fill={W} />
      <Circle cx={cx + look.dx - 3} cy={56 + look.dy} r={1.5} fill={W} />
    </G>
  );
}

/** The eyebrow marks carry the expression, as the mask of a real falcon does. */
function Brows({ expression }: { expression: TokiExpression }) {
  const sets: Record<TokiExpression, [string, string]> = {
    neutral: ['M36 36 L51 37', 'M69 37 L84 36'],
    joy: ['M36 33 Q44 28 51 32', 'M69 32 Q76 28 84 33'],
    encourage: ['M36 37 L51 33', 'M69 33 L84 37'],
    think: ['M36 36 L51 37', 'M69 32 Q76 27 84 31'],
    welcome: ['M36 34 Q44 31 51 34', 'M69 34 Q76 31 84 34'],
  };
  return (
    <G>
      {sets[expression].map((d) => (
        <Path key={d} d={d} stroke={NAVY} strokeWidth={4.5} strokeLinecap="round" fill="none" />
      ))}
    </G>
  );
}

function Wing({ side, angle, golden }: { side: 'left' | 'right'; angle: number | string; golden: boolean }) {
  const [px, cx] = side === 'left' ? [28, 22] : [92, 98];
  return (
    <G transform={typeof angle === 'string' ? angle : `rotate(${angle} ${px} 66)`}>
      <Ellipse cx={cx} cy={82} rx={9} ry={17} fill={NAVY} stroke={golden ? GOLD : NAVY} strokeWidth={2} />
      <Ellipse cx={cx} cy={90} rx={4} ry={6} fill={SKY} opacity={0.35} />
    </G>
  );
}

function Foot({ x }: { x: number }) {
  return (
    <G>
      {[-5, 0, 5].map((dx) => (
        <Ellipse key={dx} cx={x + dx} cy={115} rx={3.2} ry={4.5} fill={SUN} stroke={NAVY} strokeWidth={1.5} />
      ))}
    </G>
  );
}

export function Toki({ expression = 'neutral', stage = 'apprentice', size = 96, mirrored = false }: { expression?: TokiExpression; stage?: TokiStage; size?: number; mirrored?: boolean }) {
  const pose = POSES[expression];
  const golden = stage === 'golden';
  // What Toki wears around his neck depends on the app: a headset (TOEIC), a student scarf (B2).
  const headset = stage !== 'chick' && examConfig.brand.accessory === 'headset';
  const scarf = stage !== 'chick' && examConfig.brand.accessory === 'scarf';
  return (
    <View style={{ width: size, height: size * (130 / 120), transform: mirrored ? [{ scaleX: -1 }] : undefined }}>
      <Svg width="100%" height="100%" viewBox="0 0 120 130">
        {golden ? <Circle cx={60} cy={66} r={58} fill={colors.goldSoft} /> : null}

        {/* Backpack (apprentice), peeking behind the body. */}
        {stage === 'apprentice' ? <Path d="M10 66 Q10 58 18 58 L24 58 L24 96 L18 96 Q10 96 10 88 Z" fill={SUN} stroke={NAVY} strokeWidth={2} /> : null}

        {/* Short fan tail, three feathers, behind the body. */}
        <G>
          <Ellipse cx={100} cy={98} rx={5} ry={11} fill={NAVY} transform="rotate(-35 100 98)" />
          <Ellipse cx={104} cy={104} rx={5} ry={11} fill={SKY} stroke={NAVY} strokeWidth={2} transform="rotate(-60 104 104)" />
          <Ellipse cx={96} cy={108} rx={5} ry={10} fill={NAVY} transform="rotate(-80 96 108)" />
        </G>

        <Wing side="left" angle={pose.left} golden={golden} />

        {/* Body and head as one rounded drop; a chick is fluffier, a golden Toki has gold glints. */}
        <Path d="M60 16 C86 16 104 38 104 66 C104 94 86 112 60 112 C34 112 16 94 16 66 C16 38 34 16 60 16 Z" fill={SKY} stroke={NAVY} strokeWidth={3} />
        {stage === 'chick' ? <Path d="M24 44 l-5 -3 M22 54 l-6 -1 M96 44 l5 -3 M98 54 l6 -1" stroke={NAVY} strokeWidth={2.5} strokeLinecap="round" /> : null}
        {golden ? <Path d="M30 40 Q36 30 46 26 M74 26 Q84 30 90 40" stroke={GOLD} strokeWidth={3} strokeLinecap="round" fill="none" /> : null}
        <Ellipse cx={42} cy={30} rx={8} ry={4} fill={W} opacity={0.35} transform="rotate(-30 42 30)" />

        {/* Headset around the neck, a reminder of the Listening part: the band passes behind the belly. */}
        {headset ? (
          <G>
            <Path d="M27 70 Q60 92 93 70" stroke={NAVY} strokeWidth={4} strokeLinecap="round" fill="none" />
            <Path d="M21 64 Q21 60 25 60 L29 60 Q33 60 33 64 L33 78 Q33 82 29 82 L25 82 Q21 82 21 78 Z" fill={SUN} stroke={NAVY} strokeWidth={2} />
            <Path d="M87 64 Q87 60 91 60 L95 60 Q99 60 99 64 L99 78 Q99 82 95 82 L91 82 Q87 82 87 78 Z" fill={SUN} stroke={NAVY} strokeWidth={2} />
          </G>
        ) : null}

        {/* Rounded heart-shaped belly. */}
        <Path d="M60 106 C44 101 34 92 34 81 C34 72 41 67 48 68 C53 69 57 72 60 76 C63 72 67 69 72 68 C79 67 86 72 86 81 C86 92 76 101 60 106 Z" fill={PEACH} />

        <Foot x={48} />
        <Foot x={72} />

        {/* Student scarf, worn over the belly, with one striped end hanging down. */}
        {scarf ? (
          <G>
            <Path d="M28 70 Q60 92 92 70 L92 79 Q60 101 28 79 Z" fill={BRAND} stroke={NAVY} strokeWidth={2} strokeLinejoin="round" />
            <Path d="M68 86 L80 106 L71 110 L61 90 Z" fill={BRAND} stroke={NAVY} strokeWidth={2} strokeLinejoin="round" />
            <Path d="M67 96 L74 92 M70 102 L77 98" stroke={W} strokeWidth={2.5} strokeLinecap="round" />
          </G>
        ) : null}


        {/* Bow tie (pro, golden) or scarf (pilot). */}
        {stage === 'pro' || golden ? (
          <G>
            <Path d="M60 90 L49 84 Q46 90 49 96 Z M60 90 L71 84 Q74 90 71 96 Z" fill={golden ? GOLD : SUN} stroke={NAVY} strokeWidth={2} strokeLinejoin="round" />
            <Circle cx={60} cy={90} r={3.5} fill={NAVY} />
          </G>
        ) : null}
        {stage === 'pilot' && !scarf ? <Path d="M62 88 Q78 92 92 86 Q90 96 76 100 Q84 92 70 94 Z" fill={SUN} stroke={NAVY} strokeWidth={2} strokeLinejoin="round" /> : null}

        {/* Face. */}
        <Eye cx={45} expression={expression} side="left" />
        <Eye cx={75} expression={expression} side="right" />
        <Brows expression={expression} />
        <Path d="M53 62 Q60 57 67 62 Q67 70 60 75 Q54 70 53 62 Z" fill={SUN} stroke={NAVY} strokeWidth={2} strokeLinejoin="round" />
        <Path d="M57 64 Q60 66 63 64" stroke={NAVY} strokeWidth={1.5} strokeLinecap="round" fill="none" />

        {/* Aviator goggles on the forehead (pilot). */}
        {stage === 'pilot' ? (
          <G>
            <Path d="M24 30 Q60 18 96 30" stroke={NAVY} strokeWidth={4} strokeLinecap="round" fill="none" />
            <Circle cx={48} cy={25} r={7} fill="#BFE3FB" stroke={SUN} strokeWidth={3} />
            <Circle cx={72} cy={25} r={7} fill="#BFE3FB" stroke={SUN} strokeWidth={3} />
          </G>
        ) : null}

        {/* Three-feather tuft, which moves with the emotion; a crown of feathers for the golden Toki. */}
        <G transform={`rotate(${pose.tuft} 60 18)`}>
          {[
            [53, 12, -25],
            [60, 8, 0],
            [67, 12, 25],
          ].map(([x, y, r]) => (
            <Ellipse key={x} cx={x} cy={y} rx={golden ? 5 : 4} ry={golden ? 11 : 9} fill={golden ? GOLD : SKY} stroke={NAVY} strokeWidth={2} transform={`rotate(${r} ${x} ${y})`} />
          ))}
        </G>

        {/* Eggshell hat (chick). */}
        {stage === 'chick' ? <Path d="M40 26 Q60 12 80 26 L76 22 L71 27 L66 21 L60 27 L54 21 L49 27 L44 22 Z" fill={W} stroke={NAVY} strokeWidth={2} strokeLinejoin="round" /> : null}

        <Wing side="right" angle={pose.right} golden={golden} />
      </Svg>
    </View>
  );
}
