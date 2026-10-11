/**
 * Speech recognition boundary for the Speaking track, on the model of `ListeningService`.
 *
 * Privacy rules (learners may be minors):
 * - audio is never recorded to a file nor sent to a project server (`recordingOptions.persist` stays off);
 * - recognition runs on the device whenever the platform supports it;
 * - otherwise the platform recognizer (Apple, Google or the browser) may process the voice on its
 *   vendor's servers, which the consent screen states explicitly.
 *
 * Native recognition needs a development build (`npx expo run:ios|android` or `eas build`):
 * Expo Go does not include the `expo-speech-recognition` native module, so the service reports
 * itself unavailable there instead of crashing.
 */

export type RecognitionErrorCode = 'not-allowed' | 'no-speech' | 'network' | 'audio-capture' | 'language-not-supported' | 'unavailable' | 'other';

export interface RecognitionAvailability {
  available: boolean;
  /** True when the voice is processed on the device only. */
  onDevice: boolean;
  /** Where recognition happens when it is available. */
  engine: 'device' | 'system' | 'browser' | 'none';
}

export interface RecognitionHandlers {
  /** Full transcript so far (final segments plus the current partial one). */
  onTranscript(text: string, isFinal: boolean): void;
  onError(code: RecognitionErrorCode, message: string): void;
  /** Called once when the session is over (stopped, timed out or failed). */
  onEnd(): void;
}

export interface RecognitionSession {
  /** Stops listening and lets the recognizer deliver its final result. */
  stop(): void;
  /** Cancels without a final result. */
  abort(): void;
}

export interface SpeechRecognitionService {
  availability(): RecognitionAvailability;
  /** Asks the system for microphone (and, on iOS, speech recognition) permission. */
  requestPermission(): Promise<'granted' | 'denied'>;
  start(handlers: RecognitionHandlers): RecognitionSession;
}

/** The subset of `ExpoSpeechRecognitionModule` the service relies on (a fake one is used in tests). */
export type RecognitionModule = Pick<
  typeof import('expo-speech-recognition').ExpoSpeechRecognitionModule,
  'isRecognitionAvailable' | 'supportsOnDeviceRecognition' | 'requestPermissionsAsync' | 'addListener' | 'start' | 'stop' | 'abort'
>;

export interface RecognitionDeps {
  /** Returns the module, or null when it cannot be loaded (Expo Go). */
  load(): RecognitionModule | null;
  platform: string;
}

const ERROR_CODES: Record<string, RecognitionErrorCode> = {
  'not-allowed': 'not-allowed',
  'service-not-allowed': 'not-allowed',
  'no-speech': 'no-speech',
  'speech-timeout': 'no-speech',
  network: 'network',
  'audio-capture': 'audio-capture',
  'language-not-supported': 'language-not-supported',
};

function safely<T>(fn: () => T, fallback: T): T {
  try {
    return fn();
  } catch {
    return fallback;
  }
}

class DeviceRecognitionService implements SpeechRecognitionService {
  constructor(private readonly deps: RecognitionDeps) {}

  availability(): RecognitionAvailability {
    const mod = this.deps.load();
    const available = !!mod && safely(() => mod.isRecognitionAvailable(), false);
    if (!available) return { available: false, onDevice: false, engine: 'none' };
    if (this.deps.platform === 'web') return { available: true, onDevice: false, engine: 'browser' };
    const onDevice = safely(() => mod.supportsOnDeviceRecognition(), false);
    return { available: true, onDevice, engine: onDevice ? 'device' : 'system' };
  }

  async requestPermission(): Promise<'granted' | 'denied'> {
    const mod = this.deps.load();
    if (!mod) return 'denied';
    try {
      const res = await mod.requestPermissionsAsync();
      return res.granted ? 'granted' : 'denied';
    } catch {
      return 'denied';
    }
  }

  start(handlers: RecognitionHandlers): RecognitionSession {
    const mod = this.deps.load();
    if (!mod || !this.availability().available) {
      handlers.onError('unavailable', 'Speech recognition is not available on this device.');
      handlers.onEnd();
      return { stop: () => {}, abort: () => {} };
    }
    const finals: string[] = [];
    let ended = false;
    const join = (partial: string) => [...finals, partial].filter(Boolean).join(' ').trim();
    const subscriptions: { remove(): void }[] = [];
    const finish = () => {
      if (ended) return;
      ended = true;
      subscriptions.forEach((s) => s.remove());
      handlers.onEnd();
    };
    subscriptions.push(
      mod.addListener('result', (event) => {
        const text = event.results[0]?.transcript ?? '';
        if (event.isFinal) {
          if (text) finals.push(text.trim());
          handlers.onTranscript(join(''), true);
        } else handlers.onTranscript(join(text), false);
      }),
      mod.addListener('error', (event) => handlers.onError(ERROR_CODES[event.error] ?? 'other', event.message)),
      mod.addListener('end', finish),
    );
    try {
      mod.start({
        lang: 'en-US',
        interimResults: true,
        continuous: true,
        maxAlternatives: 1,
        addsPunctuation: false,
        requiresOnDeviceRecognition: this.availability().onDevice,
        // Never keep the audio: only the transcript and indicators are stored.
        recordingOptions: { persist: false },
      });
    } catch (e) {
      handlers.onError('other', e instanceof Error ? e.message : String(e));
      finish();
    }
    return {
      stop: () => safely(() => mod.stop(), undefined),
      abort: () => {
        safely(() => mod.abort(), undefined);
        finish();
      },
    };
  }
}

export const createRecognitionService = (deps: RecognitionDeps): SpeechRecognitionService => new DeviceRecognitionService(deps);
