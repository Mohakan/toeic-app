/**
 * Provisional app icons from Toki (the SVG mascot of src/components/Toki.tsx, "welcome" pose), until
 * the illustrator's final artwork. Needs ffmpeg built with librsvg.
 *   node scripts/make-icons.cjs
 */
const { execFileSync } = require('node:child_process');
const { mkdtempSync, writeFileSync, rmSync } = require('node:fs');
const { tmpdir } = require('node:os');
const { join } = require('node:path');

// Toki as rendered by the app (viewBox 0 0 120 130).
const TOKI = `<path d="M10 66 Q10 58 18 58 L24 58 L24 96 L18 96 Q10 96 10 88 Z" fill="#FF8A1F" stroke="#14427A" stroke-width="2"/><g><ellipse cx="100" cy="98" rx="5" ry="11" fill="#14427A" transform="rotate(-35 100 98)"/><ellipse cx="104" cy="104" rx="5" ry="11" fill="#2E9BF0" stroke="#14427A" stroke-width="2" transform="rotate(-60 104 104)"/><ellipse cx="96" cy="108" rx="5" ry="10" fill="#14427A" transform="rotate(-80 96 108)"/></g><g transform="rotate(0 28 66)"><ellipse cx="22" cy="82" rx="9" ry="17" fill="#14427A" stroke="#14427A" stroke-width="2"/><ellipse cx="22" cy="90" rx="4" ry="6" fill="#2E9BF0" opacity="0.35"/></g><path d="M60 16 C86 16 104 38 104 66 C104 94 86 112 60 112 C34 112 16 94 16 66 C16 38 34 16 60 16 Z" fill="#2E9BF0" stroke="#14427A" stroke-width="3"/><ellipse cx="42" cy="30" rx="8" ry="4" fill="#FFFFFF" opacity="0.35" transform="rotate(-30 42 30)"/><g><path d="M27 70 Q60 92 93 70" stroke="#14427A" stroke-width="4" stroke-linecap="round" fill="none"/><path d="M21 64 Q21 60 25 60 L29 60 Q33 60 33 64 L33 78 Q33 82 29 82 L25 82 Q21 82 21 78 Z" fill="#FF8A1F" stroke="#14427A" stroke-width="2"/><path d="M87 64 Q87 60 91 60 L95 60 Q99 60 99 64 L99 78 Q99 82 95 82 L91 82 Q87 82 87 78 Z" fill="#FF8A1F" stroke="#14427A" stroke-width="2"/></g><path d="M60 106 C44 101 34 92 34 81 C34 72 41 67 48 68 C53 69 57 72 60 76 C63 72 67 69 72 68 C79 67 86 72 86 81 C86 92 76 101 60 106 Z" fill="#FFD3A8"/><g><ellipse cx="43" cy="115" rx="3.2" ry="4.5" fill="#FF8A1F" stroke="#14427A" stroke-width="1.5"/><ellipse cx="48" cy="115" rx="3.2" ry="4.5" fill="#FF8A1F" stroke="#14427A" stroke-width="1.5"/><ellipse cx="53" cy="115" rx="3.2" ry="4.5" fill="#FF8A1F" stroke="#14427A" stroke-width="1.5"/></g><g><ellipse cx="67" cy="115" rx="3.2" ry="4.5" fill="#FF8A1F" stroke="#14427A" stroke-width="1.5"/><ellipse cx="72" cy="115" rx="3.2" ry="4.5" fill="#FF8A1F" stroke="#14427A" stroke-width="1.5"/><ellipse cx="77" cy="115" rx="3.2" ry="4.5" fill="#FF8A1F" stroke="#14427A" stroke-width="1.5"/></g><path d="M35 56 Q45 43 55 56" stroke="#14427A" stroke-width="4" stroke-linecap="round" fill="none"/><g><ellipse cx="75" cy="52" rx="11" ry="13" fill="#FFFFFF" stroke="#14427A" stroke-width="2"/><ellipse cx="74" cy="54" rx="7" ry="9" fill="#14427A"/><circle cx="77" cy="50" r="3" fill="#FFFFFF"/><circle cx="71" cy="58" r="1.5" fill="#FFFFFF"/></g><g><path d="M36 34 Q44 31 51 34" stroke="#14427A" stroke-width="4.5" stroke-linecap="round" fill="none"/><path d="M69 34 Q76 31 84 34" stroke="#14427A" stroke-width="4.5" stroke-linecap="round" fill="none"/></g><path d="M53 62 Q60 57 67 62 Q67 70 60 75 Q54 70 53 62 Z" fill="#FF8A1F" stroke="#14427A" stroke-width="2" stroke-linejoin="round"/><path d="M57 64 Q60 66 63 64" stroke="#14427A" stroke-width="1.5" stroke-linecap="round" fill="none"/><g transform="rotate(-10 60 18)"><ellipse cx="53" cy="12" rx="4" ry="9" fill="#2E9BF0" stroke="#14427A" stroke-width="2" transform="rotate(-25 53 12)"/><ellipse cx="60" cy="8" rx="4" ry="9" fill="#2E9BF0" stroke="#14427A" stroke-width="2" transform="rotate(0 60 8)"/><ellipse cx="67" cy="12" rx="4" ry="9" fill="#2E9BF0" stroke="#14427A" stroke-width="2" transform="rotate(25 67 12)"/></g><g transform="rotate(-140 92 66)"><ellipse cx="98" cy="82" rx="9" ry="17" fill="#14427A" stroke="#14427A" stroke-width="2"/><ellipse cx="98" cy="90" rx="4" ry="6" fill="#2E9BF0" opacity="0.35"/></g>`;

const SKY_SOFT = '#E7F3FE';

/** Toki centred in a square of `size`, his height taking `share` of it. */
function placed(size, share, art = TOKI) {
  const scale = (size * share) / 130;
  const x = (size - 120 * scale) / 2;
  const y = (size - 130 * scale) / 2;
  return `<g transform="translate(${x.toFixed(1)} ${y.toFixed(1)}) scale(${scale.toFixed(4)})">${art}</g>`;
}

const svg = (size, body, background) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">${background ? `<rect width="${size}" height="${size}" fill="${background}"/>` : ''}${body}</svg>`;

// Monochrome (Android themed icons): one solid silhouette, details dropped.
const silhouette = TOKI.replace(/<[^>]*opacity="0\.35"[^>]*\/>/g, '').replace(/#[0-9A-Fa-f]{6}/g, '#000000');

const halo = (size) => `<circle cx="${size / 2}" cy="${size / 2}" r="${size * 0.4}" fill="#FFFFFF"/>`;

const outputs = [
  // iOS and the stores: opaque, no transparency (Apple refuses an icon with an alpha channel).
  { file: 'assets/icon.png', size: 1024, content: svg(1024, halo(1024) + placed(1024, 0.66), SKY_SOFT), opaque: true },
  // Android adaptive icon: the foreground stays inside the central safe zone (66 %).
  { file: 'assets/android-icon-foreground.png', size: 1024, content: svg(1024, placed(1024, 0.5)) },
  { file: 'assets/android-icon-background.png', size: 1024, content: svg(1024, halo(1024), SKY_SOFT), opaque: true },
  { file: 'assets/android-icon-monochrome.png', size: 1024, content: svg(1024, placed(1024, 0.5, silhouette)) },
  { file: 'assets/splash-icon.png', size: 1024, content: svg(1024, placed(1024, 0.8)) },
  { file: 'assets/favicon.png', size: 48, content: svg(48, placed(48, 0.92)) },
];

const dir = mkdtempSync(join(tmpdir(), 'toki-icons-'));
try {
  for (const { file, size, content, opaque } of outputs) {
    const source = join(dir, 'icon.svg');
    writeFileSync(source, content);
    execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-width', String(size), '-height', String(size), '-i', source, '-frames:v', '1', '-pix_fmt', opaque ? 'rgb24' : 'rgba', file]);
    console.log(`${file} (${size}×${size}${opaque ? ', opaque' : ''})`);
  }
} finally {
  rmSync(dir, { recursive: true, force: true });
}
