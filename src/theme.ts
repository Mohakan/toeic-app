/**
 * Toki palette (see "Toki – Brief mascotte & palette.md"): sky blue dominates (about 60 % of the
 * interface), sun orange stays occasional (10 to 15 %) to point at the action, and gold is kept for
 * rewards. The bright colors fail the AA contrast as text on light backgrounds, so text and icons
 * use the "Dark" tones and labels on bright buttons use Ink. Tones marked "derived" are not in the
 * brief: they are darker or lighter steps of a brief color, needed to reach AA or for soft fills.
 */
export const colors = {
  /** Bleu Ciel Toki: buttons, headers, bars, Toki's body. */
  primary: '#2E9BF0',
  /** Bleu Nuit: text and icons in blue, button edges, Toki's wings and outlines. */
  primaryDark: '#14427A',
  /** Derived: light sky tint for badges and selected states. */
  primarySoft: '#E3F1FD',
  /** Encre: main text. */
  ink: '#1C2430',
  /** Derived: secondary text, 5.8:1 on Nuage. */
  inkSoft: '#556275',
  /** Nuage: main background. */
  bg: '#F4F8FC',
  card: '#FFFFFF',
  /** Derived from Brume: card borders and progress tracks. */
  line: '#DCE4EE',
  /** Brume: inactive elements, separators. */
  mist: '#A9B8C9',
  /** Vert Réussite: right answers, progress (fills and icons on bright surfaces). */
  success: '#2BC48A',
  /** Derived: green text, 5.3:1 on white. */
  successDark: '#0E7A52',
  successSoft: '#DDF6EC',
  /** Rouge Doux: wrong answers, never aggressive. */
  danger: '#F2545B',
  /** Derived: red text, 5.9:1 on white. */
  dangerDark: '#B8323A',
  dangerSoft: '#FDE6E7',
  /** Orange Soleil: the "play" action, streaks, Toki's beak and feet. */
  accent: '#FF8A1F',
  /** Derived: orange text, 5.4:1 on white. */
  accentDark: '#A85208',
  /** Pêche: playful cards, Toki's belly. */
  accentSoft: '#FFD3A8',
  /** Or Score: rewards only (badges, stars, trophies, golden Toki). */
  gold: '#FFC93C',
  /** Derived: gold text and outlines, 4.6:1 on white. */
  goldDark: '#8A6200',
  goldSoft: '#FFF1C9',
  white: '#FFFFFF',
};

export const radius = { sm: 10, md: 16, lg: 24, pill: 999 };
export const space = { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 };

export const shadow = { boxShadow: '0px 4px 12px rgba(28, 36, 48, 0.08)' } as const;
