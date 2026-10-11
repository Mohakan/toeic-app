import * as Speech from 'expo-speech';

export interface EnglishVoice {
  id: string;
  name: string;
  language: string;
  /** Higher is better: neural/online voices first, then enhanced ones. */
  rank: number;
}

/**
 * Listening service boundary. It reads English only with an English voice chosen explicitly:
 * leaving the choice to the platform makes devices set to French or Arabic read English with
 * a French or Arabic voice. Recorded native-speaker audio can later replace synthesis here.
 */
export interface ListeningService {
  voices(): Promise<EnglishVoice[]>;
  setPreferred(id: string | null): void;
  /** Lines may start with "W:" or "M:" to alternate two voices in conversations. */
  /** Resolves once speech has started; `onDone` fires after the last line (not when stopped early). */
  play(text: string, options?: { slow?: boolean; voiceId?: string; onDone?: () => void }): Promise<boolean>;
  stop(): void;
}

function rankVoice(name: string, language: string, quality: string): number {
  const n = name.toLowerCase();
  let rank = 0;
  if (/natural|neural|online|premium/.test(n)) rank += 8;
  if (n.includes('google')) rank += 6;
  if (quality === 'Enhanced') rank += 4;
  if (/samantha|aria|jenny|guy|ava|allison|daniel|serena|karen/.test(n)) rank += 2;
  if (language.toLowerCase().replace('_', '-').startsWith('en-us')) rank += 2;
  else if (/^en-(gb|ca|au)/i.test(language.replace('_', '-'))) rank += 1;
  return rank;
}

let cache: EnglishVoice[] | null = null;
let preferred: string | null = null;

async function loadVoices(): Promise<EnglishVoice[]> {
  if (cache && cache.length > 0) return cache;
  // Browsers populate the voice list asynchronously; one retry covers the first page load.
  let raw = await Speech.getAvailableVoicesAsync();
  if (raw.length === 0) {
    await new Promise((r) => setTimeout(r, 600));
    raw = await Speech.getAvailableVoicesAsync();
  }
  cache = raw
    .filter((v) => v.language?.toLowerCase().startsWith('en'))
    .map((v) => ({ id: v.identifier, name: v.name, language: v.language, rank: rankVoice(v.name, v.language, v.quality) }))
    .sort((a, b) => b.rank - a.rank || a.name.localeCompare(b.name));
  return cache;
}

function parseLines(text: string): { speaker: 'W' | 'M' | null; text: string }[] {
  return text
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const match = /^([WM]):\s*(.*)$/.exec(line);
      return match ? { speaker: match[1] as 'W' | 'M', text: match[2] } : { speaker: null, text: line };
    });
}

let session = 0;

export const listening: ListeningService = {
  voices: loadVoices,

  setPreferred(id) {
    preferred = id;
  },

  async play(text, { slow = false, voiceId, onDone } = {}) {
    const voices = await loadVoices();
    if (voices.length === 0) return false;
    Speech.stop();
    const current = ++session;
    const main = voices.find((v) => v.id === (voiceId ?? preferred)) ?? voices[0];
    // A second, different English voice (often another accent) for the other speaker.
    const other = voices.find((v) => v.id !== main.id && v.language !== main.language) ?? voices.find((v) => v.id !== main.id) ?? main;
    const lines = parseLines(text);
    const firstSpeaker = lines.find((l) => l.speaker)?.speaker;
    const rate = slow ? 0.72 : 0.95;

    const speakLine = (index: number) => {
      if (current !== session) return;
      if (index >= lines.length) {
        onDone?.();
        return;
      }
      const line = lines[index];
      const voice = line.speaker && line.speaker !== firstSpeaker ? other : main;
      Speech.speak(line.text, {
        language: voice.language,
        voice: voice.id,
        rate,
        onDone: () => {
          setTimeout(() => speakLine(index + 1), 350);
        },
      });
    };
    speakLine(0);
    return true;
  },

  stop() {
    session += 1;
    Speech.stop();
  },
};
