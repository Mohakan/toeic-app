/// <reference types="node" />
import { existsSync } from 'fs';
import { join } from 'path';
import { describe, expect, it } from 'vitest';
import { createFeedbackSounds, ERROR_SOUNDS, FEEDBACK_VOLUME, SUCCESS_SOUNDS, type SoundName, type SoundPlayer } from './feedbackSound';

function fakePlayers() {
  const created: SoundName[] = [];
  const log: string[] = [];
  const create = (kind: SoundName): SoundPlayer => {
    created.push(kind);
    return {
      volume: 1,
      seekTo: async (s) => void log.push(`${kind}:seek${s}`),
      play: () => void log.push(`${kind}:play`),
    };
  };
  return { created, log, create };
}

describe('feedback sounds', () => {
  it('creates each player once, at a gentle volume, and rewinds it before every play', () => {
    const f = fakePlayers();
    const sounds = createFeedbackSounds(f.create);
    sounds.play('success-pop');
    sounds.play('success-pop');
    sounds.play('error-thud');
    expect(f.created).toEqual(['success-pop', 'error-thud']);
    expect(f.log).toEqual(['success-pop:seek0', 'success-pop:play', 'success-pop:seek0', 'success-pop:play', 'error-thud:seek0', 'error-thud:play']);
  });

  it('sets the volume of new players', () => {
    let volume = 0;
    const sounds = createFeedbackSounds(() => ({
      set volume(v: number) {
        volume = v;
      },
      get volume() {
        return volume;
      },
      seekTo: async () => undefined,
      play: () => undefined,
    }));
    sounds.play('level-up');
    expect(volume).toBe(FEEDBACK_VOLUME);
  });

  it('never throws when audio is unavailable', () => {
    const sounds = createFeedbackSounds(() => {
      throw new Error('no audio output');
    });
    expect(() => sounds.play('success-chime')).not.toThrow();
    const failing = createFeedbackSounds(() => ({ volume: 1, seekTo: () => Promise.reject(new Error('x')), play: () => { throw new Error('autoplay'); } }));
    expect(() => failing.play('error-soft')).not.toThrow();
  });
});

describe('sound files', () => {
  it('exist for every sound name', () => {
    const names = [...SUCCESS_SOUNDS.map((s) => `success-${s}`), ...ERROR_SOUNDS.map((s) => `error-${s}`), 'unit-complete', 'level-up'];
    for (const n of names) expect(existsSync(join(__dirname, '../../assets/sounds', `${n}.wav`)), n).toBe(true);
  });
});
