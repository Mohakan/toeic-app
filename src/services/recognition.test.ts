import { describe, expect, it, vi } from 'vitest';
import { createRecognitionService, type RecognitionModule } from './recognition';

type Listener = (event: never) => void;

function fakeModule(options: { available?: boolean; onDevice?: boolean; granted?: boolean } = {}) {
  const listeners: Record<string, Listener[]> = {};
  const startOptions: unknown[] = [];
  const mod = {
    isRecognitionAvailable: () => options.available ?? true,
    supportsOnDeviceRecognition: () => options.onDevice ?? false,
    requestPermissionsAsync: async () => ({ granted: options.granted ?? true }),
    addListener: (name: string, cb: Listener) => {
      (listeners[name] ??= []).push(cb);
      return { remove: () => (listeners[name] = listeners[name].filter((l) => l !== cb)) };
    },
    start: (opts: unknown) => startOptions.push(opts),
    stop: vi.fn(),
    abort: vi.fn(),
  };
  const emit = (name: string, event: unknown) => (listeners[name] ?? []).forEach((l) => l(event as never));
  return { mod: mod as unknown as RecognitionModule, emit, startOptions, listeners };
}

const handlers = () => ({ onTranscript: vi.fn(), onError: vi.fn(), onEnd: vi.fn() });

describe('speech recognition service', () => {
  it('reports itself unavailable when the native module is missing (Expo Go)', () => {
    const service = createRecognitionService({ load: () => null, platform: 'ios' });
    expect(service.availability()).toEqual({ available: false, onDevice: false, engine: 'none' });
    const h = handlers();
    service.start(h);
    expect(h.onError).toHaveBeenCalledWith('unavailable', expect.any(String));
    expect(h.onEnd).toHaveBeenCalledTimes(1);
  });

  it('describes where recognition happens, for the consent screen', () => {
    expect(createRecognitionService({ load: () => fakeModule({ onDevice: true }).mod, platform: 'ios' }).availability()).toEqual({ available: true, onDevice: true, engine: 'device' });
    expect(createRecognitionService({ load: () => fakeModule().mod, platform: 'android' }).availability().engine).toBe('system');
    expect(createRecognitionService({ load: () => fakeModule().mod, platform: 'web' }).availability()).toEqual({ available: true, onDevice: false, engine: 'browser' });
  });

  it('never asks the recognizer to keep the audio, and prefers on-device recognition', () => {
    const fake = fakeModule({ onDevice: true });
    createRecognitionService({ load: () => fake.mod, platform: 'ios' }).start(handlers());
    expect(fake.startOptions[0]).toMatchObject({ lang: 'en-US', recordingOptions: { persist: false }, requiresOnDeviceRecognition: true });
  });

  it('joins final segments and shows the current partial one', () => {
    const fake = fakeModule();
    const h = handlers();
    createRecognitionService({ load: () => fake.mod, platform: 'android' }).start(h);
    fake.emit('result', { isFinal: false, results: [{ transcript: 'thank you' }] });
    fake.emit('result', { isFinal: true, results: [{ transcript: 'thank you for calling' }] });
    fake.emit('result', { isFinal: false, results: [{ transcript: 'our offices' }] });
    expect(h.onTranscript).toHaveBeenNthCalledWith(1, 'thank you', false);
    expect(h.onTranscript).toHaveBeenNthCalledWith(2, 'thank you for calling', true);
    expect(h.onTranscript).toHaveBeenNthCalledWith(3, 'thank you for calling our offices', false);
  });

  it('maps errors, ends once and removes its listeners', () => {
    const fake = fakeModule();
    const h = handlers();
    createRecognitionService({ load: () => fake.mod, platform: 'android' }).start(h);
    fake.emit('error', { error: 'service-not-allowed', message: 'denied' });
    fake.emit('end', {});
    fake.emit('end', {});
    expect(h.onError).toHaveBeenCalledWith('not-allowed', 'denied');
    expect(h.onEnd).toHaveBeenCalledTimes(1);
    expect(Object.values(fake.listeners).every((l) => l.length === 0)).toBe(true);
  });

  it('turns a refused permission into "denied"', async () => {
    const service = createRecognitionService({ load: () => fakeModule({ granted: false }).mod, platform: 'ios' });
    expect(await service.requestPermission()).toBe('denied');
  });
});
