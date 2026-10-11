import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { View } from 'react-native';
import { useI18n } from '../i18n';
import { listening } from '../services/speech';
import { useApp } from '../state/AppState';
import { colors, space } from '../theme';
import { AppText, Button } from './ui';

interface Props {
  /** Script read by speech synthesis; "W:" / "M:" lines alternate two voices. */
  audio: string;
  /**
   * Test conditions (placement, mock tests): the recording can be played this many times, at
   * normal speed only. In the real exam it is heard once or twice; one replay absorbs a
   * speech-synthesis glitch. Practice keeps unlimited and slow replays.
   */
  maxPlays?: number;
  /** Plays already used, when the parent keeps the count (a mock test can be paused and resumed). */
  playsUsed?: number;
  onPlay?: () => void;
}

/** Listen buttons of a listening item, shared by multiple-choice and typed questions. */
export function AudioPlayer({ audio, maxPlays, playsUsed, onPlay }: Props) {
  const { t, row } = useI18n();
  const { data } = useApp();
  const [noVoice, setNoVoice] = useState(false);
  const [ownPlays, setOwnPlays] = useState(0);
  const plays = playsUsed ?? ownPlays;
  const testConditions = maxPlays !== undefined;
  const playsLeft = testConditions ? Math.max(0, maxPlays - plays) : Infinity;
  const play = (slow: boolean) => {
    if (playsLeft <= 0) return;
    if (onPlay) onPlay();
    else setOwnPlays((n) => n + 1);
    return listening
      .play(audio, { slow, voiceId: data.voiceId ?? undefined })
      .then((ok) => setNoVoice(!ok))
      .catch((error) => {
        console.warn('Speech synthesis failed.', error);
        setNoVoice(true);
      });
  };

  return (
    <View style={{ gap: space.sm }}>
      {testConditions ? (
        <View style={{ gap: 4 }}>
          <Button label={t('assess.listen')} icon="volume-high" disabled={playsLeft <= 0} onPress={() => play(false)} />
          <AppText variant="small" color={colors.inkSoft} center>
            {t('assess.playsLeft', { n: playsLeft, max: maxPlays })}
          </AppText>
        </View>
      ) : (
        <View style={[row, { gap: space.sm }]}>
          <View style={{ flex: 1 }}>
            <Button label={t('assess.listen')} icon="volume-high" onPress={() => play(false)} />
          </View>
          <View style={{ flex: 1 }}>
            <Button label={t('assess.listenSlow')} icon="walk" variant="secondary" onPress={() => play(true)} />
          </View>
        </View>
      )}
      {noVoice ? (
        <View style={[row, { gap: 6, alignItems: 'center' }]} accessibilityLiveRegion="polite">
          <Ionicons name="alert-circle" size={18} color={colors.dangerDark} />
          <AppText variant="small" color={colors.dangerDark} style={{ flex: 1 }}>
            {t('listen.noVoice')}
          </AppText>
        </View>
      ) : null}
    </View>
  );
}
