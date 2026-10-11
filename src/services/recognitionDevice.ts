import { Platform } from 'react-native';
import { createRecognitionService, type RecognitionModule } from './recognition';

let cached: RecognitionModule | null | undefined;

function loadModule(): RecognitionModule | null {
  if (cached !== undefined) return cached;
  try {
    // Loaded lazily: the native module is missing in Expo Go, and requiring it eagerly would crash the app.
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    cached = (require('expo-speech-recognition') as typeof import('expo-speech-recognition')).ExpoSpeechRecognitionModule;
  } catch {
    cached = null;
  }
  return cached;
}

/** The app's speech recognizer: the platform one on iOS and Android, the Web Speech API in browsers. */
export const recognition = createRecognitionService({ load: loadModule, platform: Platform.OS });
