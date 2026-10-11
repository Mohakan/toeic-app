// Generates the app's sound effects (assets/sounds/*.wav) from scratch, so they carry no
// third-party rights. Run with: node scripts/make-sounds.cjs
//
// - 3 success and 3 error variants, kept short and soft because they are heard after every answer;
// - one sound for a finished unit and one for a new level, longer and more festive.
const fs = require('fs');
const path = require('path');

const RATE = 44100;
const buffer = (seconds) => new Float32Array(Math.round(seconds * RATE));

/**
 * A note made of partials [ratio, gain, decay in s]. Optional pitch glide (from `glideFrom` x the
 * frequency to the frequency, over `glideTime`) and soft attack.
 */
function tone(buf, start, freq, { partials, gain = 1, attack = 0.004, duration = 0.6, glideFrom = 1, glideTime = 0 }) {
  const from = Math.round(start * RATE);
  const length = Math.min(Math.round(duration * RATE), buf.length - from);
  const phases = partials.map(() => 0);
  for (let i = 0; i < length; i++) {
    const t = i / RATE;
    const glide = glideTime > 0 && t < glideTime ? glideFrom + (1 - glideFrom) * (t / glideTime) : 1;
    const env = Math.min(1, t / attack);
    let s = 0;
    partials.forEach(([ratio, g, decay], k) => {
      phases[k] += (2 * Math.PI * freq * glide * ratio) / RATE;
      s += g * Math.exp(-t / decay) * Math.sin(phases[k]);
    });
    buf[from + i] += gain * env * s;
  }
}

/** Gentle one-pole low-pass, to round the sound off. */
function lowpass(buf, cutoff) {
  const a = Math.exp((-2 * Math.PI * cutoff) / RATE);
  let y = 0;
  for (let i = 0; i < buf.length; i++) buf[i] = y = (1 - a) * buf[i] + a * y;
}

/** Small Schroeder-style room: three feedback combs mixed in quietly. */
function room(buf, wet = 0.16) {
  const dry = Float32Array.from(buf);
  for (const [ms, fb] of [[29.7, 0.45], [37.1, 0.42], [41.1, 0.4]]) {
    const d = Math.round((ms / 1000) * RATE);
    const comb = new Float32Array(buf.length);
    for (let i = 0; i < buf.length; i++) comb[i] = dry[i] + (i >= d ? fb * comb[i - d] : 0);
    for (let i = 0; i < buf.length; i++) buf[i] += (wet / 3) * (comb[i] - dry[i]);
  }
}

function finish(buf, peak) {
  let max = 0;
  for (const v of buf) max = Math.max(max, Math.abs(v));
  const fade = Math.round(0.03 * RATE);
  for (let i = 0; i < buf.length; i++) {
    const f = i > buf.length - fade ? (buf.length - i) / fade : 1;
    buf[i] = (buf[i] / (max || 1)) * peak * f;
  }
  return buf;
}

function wav(samples) {
  const data = Buffer.alloc(samples.length * 2);
  samples.forEach((v, i) => data.writeInt16LE(Math.round(Math.max(-1, Math.min(1, v)) * 32767), i * 2));
  const h = Buffer.alloc(44);
  h.write('RIFF', 0);
  h.writeUInt32LE(36 + data.length, 4);
  h.write('WAVE', 8);
  h.write('fmt ', 12);
  h.writeUInt32LE(16, 16);
  h.writeUInt16LE(1, 20);
  h.writeUInt16LE(1, 22);
  h.writeUInt32LE(RATE, 24);
  h.writeUInt32LE(RATE * 2, 28);
  h.writeUInt16LE(2, 32);
  h.writeUInt16LE(16, 34);
  h.write('data', 36);
  h.writeUInt32LE(data.length, 40);
  return Buffer.concat([h, data]);
}

// Timbres.
const BELL = [[1, 1, 0.35], [2, 0.32, 0.18], [2.76, 0.18, 0.12], [5.4, 0.06, 0.05]];
const MARIMBA = [[1, 1, 0.16], [4, 0.28, 0.03], [10, 0.05, 0.01]];
const SOFT = [[1, 1, 0.16], [2, 0.18, 0.08], [3, 0.05, 0.05]];
const WOOD = [[1, 1, 0.06], [2.3, 0.35, 0.025], [4.1, 0.12, 0.012]];
const GLASS = [[1, 1, 0.5], [2, 0.25, 0.25], [3, 0.12, 0.15], [4.2, 0.05, 0.08]];

const sounds = {
  // Success, short and light.
  'success-pop': () => {
    // "Bulle": one quick rising drop of water.
    const b = buffer(0.22);
    tone(b, 0, 880, { partials: [[1, 1, 0.07], [2, 0.12, 0.04]], glideFrom: 0.55, glideTime: 0.05, duration: 0.22 });
    return finish(b, 0.5);
  },
  'success-chime': () => {
    // "Carillon": two bell notes, G5 then C6.
    const b = buffer(0.75);
    tone(b, 0, 784, { partials: BELL, duration: 0.7 });
    tone(b, 0.085, 1046.5, { partials: BELL, duration: 0.65 });
    room(b);
    return finish(b, 0.45);
  },
  'success-marimba': () => {
    // "Marimba": a woody little rising third, C5 then E5.
    const b = buffer(0.45);
    tone(b, 0, 523.3, { partials: MARIMBA, duration: 0.4 });
    tone(b, 0.07, 659.3, { partials: MARIMBA, duration: 0.38 });
    room(b, 0.1);
    return finish(b, 0.5);
  },
  // Error, low and round: never aggressive.
  'error-thud': () => {
    // "Toc": one muted wooden knock.
    const b = buffer(0.2);
    tone(b, 0, 196, { partials: WOOD, glideFrom: 1.15, glideTime: 0.04, duration: 0.2 });
    lowpass(b, 1800);
    return finish(b, 0.5);
  },
  'error-soft': () => {
    // "Doux": two soft falling notes, A3 then F3.
    const b = buffer(0.5);
    tone(b, 0, 220, { partials: SOFT, attack: 0.012, duration: 0.3 });
    tone(b, 0.12, 174.6, { partials: SOFT, attack: 0.012, duration: 0.36 });
    lowpass(b, 2200);
    room(b, 0.08);
    return finish(b, 0.45);
  },
  'error-glide': () => {
    // "Glissé": a gentle downward slide, like "oh well".
    const b = buffer(0.42);
    tone(b, 0, 262, { partials: [[1, 1, 0.22], [2, 0.15, 0.1]], attack: 0.015, glideFrom: 1.45, glideTime: 0.28, duration: 0.42 });
    lowpass(b, 2000);
    return finish(b, 0.42);
  },
  // Celebrations, rarer, so longer and brighter.
  'unit-complete': () => {
    // A rising C major arpeggio ending on a held chord.
    const b = buffer(1.3);
    [523.3, 659.3, 784, 1046.5].forEach((f, i) => tone(b, i * 0.09, f, { partials: BELL, duration: 0.9 }));
    [523.3, 659.3, 784].forEach((f) => tone(b, 0.38, f, { partials: GLASS, gain: 0.45, attack: 0.02, duration: 0.9 }));
    room(b, 0.2);
    return finish(b, 0.6);
  },
  'level-up': () => {
    // A longer climb over two octaves, a sparkle, and a bright final chord.
    const b = buffer(1.8);
    [523.3, 659.3, 784, 1046.5, 1318.5, 1568].forEach((f, i) => tone(b, i * 0.07, f, { partials: MARIMBA.concat([[2, 0.2, 0.08]]), duration: 0.5 }));
    [2093, 2637, 3136].forEach((f, i) => tone(b, 0.42 + i * 0.05, f, { partials: [[1, 0.35, 0.18]], duration: 0.4 }));
    [523.3, 659.3, 784, 1046.5].forEach((f) => tone(b, 0.5, f, { partials: GLASS, gain: 0.5, attack: 0.02, duration: 1.25 }));
    room(b, 0.22);
    return finish(b, 0.65);
  },
};

const out = path.join(__dirname, '..', 'assets', 'sounds');
fs.mkdirSync(out, { recursive: true });
for (const f of fs.readdirSync(out)) if (f.endsWith('.wav')) fs.unlinkSync(path.join(out, f));
for (const [name, make] of Object.entries(sounds)) fs.writeFileSync(path.join(out, `${name}.wav`), wav(make()));
console.log(fs.readdirSync(out).map((f) => `${f} ${Math.round(fs.statSync(path.join(out, f)).size / 1024)} KB`).join('\n'));
