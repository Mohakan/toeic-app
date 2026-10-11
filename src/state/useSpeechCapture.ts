import { useCallback, useEffect, useRef, useState } from 'react';
import type { RecognitionErrorCode, RecognitionSession } from '../services/recognition';
import { recognition } from '../services/recognitionDevice';

/** If the recognizer never reports the end of a session, the capture is closed anyway after this delay. */
const END_TIMEOUT_MS = 4000;

export interface CaptureResult {
  transcript: string;
  durationSec: number;
}

/**
 * One speech capture at a time, shared by the Speaking screens. `onEnd` is called exactly once per
 * capture, whether the learner stopped it, the time ran out, or the recognizer ended on its own.
 */
export function useSpeechCapture(onEnd: (result: CaptureResult) => void) {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [error, setError] = useState<RecognitionErrorCode | null>(null);
  const session = useRef<RecognitionSession | null>(null);
  const text = useRef('');
  const startedAt = useRef(0);
  const ended = useRef(true);
  /** Increases with every capture, so a stale stop timeout cannot close the next one. */
  const captureId = useRef(0);
  const endRef = useRef(onEnd);
  endRef.current = onEnd;

  const close = useCallback(() => {
    if (ended.current) return;
    ended.current = true;
    session.current = null;
    setListening(false);
    endRef.current({ transcript: text.current.trim(), durationSec: Math.max(1, Math.round((Date.now() - startedAt.current) / 1000)) });
  }, []);

  /** Asks for the microphone, then starts listening. Returns false when permission is refused. */
  const start = useCallback(async (): Promise<boolean> => {
    session.current?.abort();
    setError(null);
    setTranscript('');
    text.current = '';
    if ((await recognition.requestPermission()) !== 'granted') {
      setError('not-allowed');
      return false;
    }
    ended.current = false;
    captureId.current += 1;
    startedAt.current = Date.now();
    setListening(true);
    session.current = recognition.start({
      onTranscript: (value) => {
        text.current = value;
        setTranscript(value);
      },
      onError: (code) => setError(code),
      onEnd: close,
    });
    return true;
  }, [close]);

  /** Stops listening; the final result arrives through `onEnd`. */
  const stop = useCallback(() => {
    if (ended.current) return;
    session.current?.stop();
    const id = captureId.current;
    setTimeout(() => {
      if (!ended.current && captureId.current === id) {
        session.current?.abort();
        close();
      }
    }, END_TIMEOUT_MS);
  }, [close]);

  const reset = useCallback(() => {
    setError(null);
    setTranscript('');
    text.current = '';
  }, []);

  useEffect(
    () => () => {
      ended.current = true;
      session.current?.abort();
    },
    [],
  );

  return { listening, transcript, error, start, stop, reset };
}
