import { Ionicons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useMemo, useState } from 'react';
import { Platform, Pressable, ScrollView, View } from 'react-native';
import { ConfirmDialog } from '../components/ConfirmDialog';
import { AppText, Button, Card, Chip, EnglishText, IconBadge, Screen } from '../components/ui';
import { documentTasks } from '../data/speaking/documents';
import { opinionTopics } from '../data/speaking/opinions';
import { photoTasks } from '../data/speaking/photos';
import { simulations } from '../data/speaking/simulations';
import { lastRunId } from '../services/simulationReport';
import { questionSets } from '../data/speaking/questions';
import { readAloudTasks } from '../data/speaking/readAloud';
import { useI18n } from '../i18n';
import type { StringKey } from '../i18n/strings';
import type { RootStackParamList } from '../navigation/types';
import { recognition } from '../services/recognitionDevice';
import { useApp } from '../state/AppState';
import { useAccess } from '../state/useAccess';
import { useLevel } from '../state/useLevel';
import { colors, space } from '../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'Speaking'>;

const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1'];

/** Entry point of the Speaking track: availability, consent, then the list of tasks. */
export function SpeakingScreen({ navigation }: Props) {
  const { data, setSpeechConsent, clearSpeechData } = useApp();
  const { t, tx, row, backIcon, forwardIcon } = useI18n();
  const [permissionDenied, setPermissionDenied] = useState(false);
  const [confirmClear, setConfirmClear] = useState(false);
  const availability = useMemo(() => recognition.availability(), []);
  const consent = data.speechConsent;
  const estimate = useLevel();
  const access = useAccess();
  // The path has a sixth band beyond C1; read-aloud texts stop at C1.
  const [level, setLevel] = useState(() => Math.min(5, Math.max(1, estimate?.current.level ?? 1)));
  const tasks = readAloudTasks.filter((task) => task.level === level);
  const sets = questionSets.filter((set) => set.level === level);
  const photos = photoTasks.filter((p) => p.level === level);
  const documents = documentTasks.filter((task) => task.level === level);
  const opinions = opinionTopics.filter((o) => o.level === level);

  const accept = async () => {
    setSpeechConsent(true);
    setPermissionDenied((await recognition.requestPermission()) !== 'granted');
  };

  const engineText: StringKey = availability.onDevice ? 'speak.consentDevice' : availability.engine === 'browser' ? 'speak.consentBrowser' : 'speak.consentSystem';

  const best = (taskId: string) => {
    const scores = data.speechAttempts.flatMap((a) => (a.kind !== 'respond' && a.taskId === taskId ? [a.accuracy] : []));
    return scores.length ? Math.round(Math.max(...scores) * 100) : null;
  };

  const answered = (setId: string) => data.speechAttempts.some((a) => a.kind === 'respond' && a.taskId.startsWith(`${setId}-`));
  const spoken = (topicId: string) => data.speechAttempts.some((a) => a.kind === 'respond' && a.taskId === topicId);

  return (
    <Screen>
      <View style={{ gap: space.lg }}>
        <View style={[row, { alignItems: 'center', gap: space.sm }]}>
          <Pressable accessibilityRole="button" accessibilityLabel={t('common.back')} onPress={() => navigation.goBack()} hitSlop={8} style={{ minWidth: 44, minHeight: 44, justifyContent: 'center' }}>
            <Ionicons name={backIcon} size={24} color={colors.ink} />
          </Pressable>
          <AppText variant="h2" style={{ flex: 1 }}>
            {t('speak.title')}
          </AppText>
        </View>
        <AppText color={colors.inkSoft}>{t('speak.sub')}</AppText>

        {!availability.available ? (
          <Card style={{ gap: space.sm }}>
            <View style={[row, { alignItems: 'center', gap: space.sm }]}>
              <IconBadge icon="mic-off" color={colors.dangerDark} bg={colors.dangerSoft} />
              <AppText variant="h3" style={{ flex: 1 }}>
                {t('speak.unavailable')}
              </AppText>
            </View>
            <AppText color={colors.inkSoft}>{t(Platform.OS === 'web' ? 'speak.unavailableWeb' : 'speak.unavailableNative')}</AppText>
          </Card>
        ) : consent === null ? (
          <Card style={{ gap: space.md }}>
            <View style={[row, { alignItems: 'center', gap: space.sm }]}>
              <IconBadge icon="mic" color={colors.primaryDark} bg={colors.primarySoft} />
              <AppText variant="h3" style={{ flex: 1 }}>
                {t('speak.consentTitle')}
              </AppText>
            </View>
            {(['speak.consentWhat', engineText, 'speak.consentKeep', 'speak.consentLimits', 'speak.consentOptional'] as StringKey[]).map((key) => (
              <View key={key} style={[row, { gap: space.sm, alignItems: 'flex-start' }]}>
                <Ionicons name="ellipse" size={8} color={colors.primaryDark} style={{ marginTop: 8 }} />
                <AppText style={{ flex: 1 }}>{t(key)}</AppText>
              </View>
            ))}
            <Button label={t('speak.accept')} icon="mic" onPress={accept} />
            <Button label={t('speak.decline')} variant="ghost" onPress={() => setSpeechConsent(false)} />
          </Card>
        ) : !consent.granted ? (
          <Card style={{ gap: space.md }}>
            <AppText>{t('speak.declined')}</AppText>
            <Button label={t('speak.changeMind')} variant="secondary" onPress={clearSpeechData} />
          </Card>
        ) : (
          <>
            {permissionDenied ? (
              <Card style={{ gap: space.sm, backgroundColor: colors.dangerSoft }}>
                <AppText>{t('speak.permissionDenied')}</AppText>
              </Card>
            ) : null}
            <View style={{ gap: space.sm }}>
              <AppText variant="h3">{t('sim.section')}</AppText>
              <AppText variant="small" color={colors.inkSoft}>
                {t('sim.sectionSub')}
              </AppText>
            </View>
            {simulations.map((sim) => (
              <Pressable key={sim.id} accessibilityRole="button" accessibilityLabel={tx(sim.title)} onPress={() => (access.simulation() ? navigation.navigate('Simulation', { simId: sim.id }) : navigation.navigate('Paywall', { reason: 'simulation' }))}>
                <Card style={[row, { alignItems: 'center', gap: space.md }]}>
                  <IconBadge icon="timer" color={colors.primaryDark} bg={colors.primarySoft} />
                  <View style={{ flex: 1, gap: 2 }}>
                    <AppText variant="h3">{tx(sim.title)}</AppText>
                    <AppText variant="small" color={colors.inkSoft}>
                      {t('sim.duration')}
                    </AppText>
                    {lastRunId(sim, data.speechAttempts) ? (
                      <AppText variant="small" color={colors.primaryDark} style={{ fontWeight: '700' }}>
                        {t('speak.done')}
                      </AppText>
                    ) : null}
                  </View>
                  <Trail locked={!access.simulation()} forwardIcon={forwardIcon} />
                </Card>
              </Pressable>
            ))}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={[row, { gap: space.sm, paddingVertical: 2 }]}>
              {LEVELS.map((name, i) => (
                <Chip key={name} label={name} selected={level === i + 1} onPress={() => setLevel(i + 1)} />
              ))}
            </ScrollView>
            <View style={{ gap: space.sm }}>
              <AppText variant="h3">{t('speak.readAloud')}</AppText>
              <AppText variant="small" color={colors.inkSoft}>
                {t('speak.readAloudSub')}
              </AppText>
            </View>
            {tasks.map((task) => {
              const score = best(task.id);
              return (
                <Pressable key={task.id} accessibilityRole="button" accessibilityLabel={tx(task.topic)} onPress={() => (access.speaking(task.id) ? navigation.navigate('ReadAloud', { taskId: task.id }) : navigation.navigate('Paywall', { reason: 'speaking' }))}>
                  <Card style={[row, { alignItems: 'center', gap: space.md }]}>
                    <IconBadge icon="reader" color={colors.primaryDark} bg={colors.primarySoft} />
                    <View style={{ flex: 1, gap: 2 }}>
                      <AppText variant="h3">{tx(task.topic)}</AppText>
                      <AppText variant="small" color={colors.inkSoft}>
                        {t('speak.level', { l: LEVELS[task.level - 1] })}
                      </AppText>
                      {score !== null ? (
                        <EnglishText variant="small" color={colors.primaryDark} style={{ fontWeight: '700' }}>
                          {t('speak.best', { p: score })}
                        </EnglishText>
                      ) : null}
                    </View>
                    <Trail locked={!access.speaking(task.id)} forwardIcon={forwardIcon} />
                  </Card>
                </Pressable>
              );
            })}
            <View style={{ gap: space.sm, marginTop: space.sm }}>
              <AppText variant="h3">{t('speak.photo')}</AppText>
              <AppText variant="small" color={colors.inkSoft}>
                {t('speak.photoSub')}
              </AppText>
            </View>
            {photos.map((p) => (
              <Pressable key={p.id} accessibilityRole="button" accessibilityLabel={tx(p.topic)} onPress={() => (access.speaking(p.id) ? navigation.navigate('Photo', { photoId: p.id }) : navigation.navigate('Paywall', { reason: 'speaking' }))}>
                <Card style={[row, { alignItems: 'center', gap: space.md }]}>
                  <IconBadge icon="image" color={colors.primaryDark} bg={colors.primarySoft} />
                  <View style={{ flex: 1, gap: 2 }}>
                    <AppText variant="h3">{tx(p.topic)}</AppText>
                    <AppText variant="small" color={colors.inkSoft}>
                      {t('speak.level', { l: LEVELS[p.level - 1] })}
                    </AppText>
                    {spoken(p.id) ? (
                      <AppText variant="small" color={colors.primaryDark} style={{ fontWeight: '700' }}>
                        {t('speak.done')}
                      </AppText>
                    ) : null}
                  </View>
                  <Trail locked={!access.speaking(p.id)} forwardIcon={forwardIcon} />
                </Card>
              </Pressable>
            ))}
            <View style={{ gap: space.sm, marginTop: space.sm }}>
              <AppText variant="h3">{t('speak.questions')}</AppText>
              <AppText variant="small" color={colors.inkSoft}>
                {t('speak.questionsSub')}
              </AppText>
            </View>
            {sets.map((set) => (
              <Pressable key={set.id} accessibilityRole="button" accessibilityLabel={tx(set.topic)} onPress={() => (access.speaking(set.id) ? navigation.navigate('Respond', { setId: set.id }) : navigation.navigate('Paywall', { reason: 'speaking' }))}>
                <Card style={[row, { alignItems: 'center', gap: space.md }]}>
                  <IconBadge icon="chatbubbles" color={colors.primaryDark} bg={colors.primarySoft} />
                  <View style={{ flex: 1, gap: 2 }}>
                    <AppText variant="h3">{tx(set.topic)}</AppText>
                    <AppText variant="small" color={colors.inkSoft}>
                      {t('speak.level', { l: LEVELS[set.level - 1] })}
                    </AppText>
                    {answered(set.id) ? (
                      <AppText variant="small" color={colors.primaryDark} style={{ fontWeight: '700' }}>
                        {t('speak.done')}
                      </AppText>
                    ) : null}
                  </View>
                  <Trail locked={!access.speaking(set.id)} forwardIcon={forwardIcon} />
                </Card>
              </Pressable>
            ))}
            <View style={{ gap: space.sm, marginTop: space.sm }}>
              <AppText variant="h3">{t('speak.documents')}</AppText>
              <AppText variant="small" color={colors.inkSoft}>
                {t('speak.documentsSub')}
              </AppText>
            </View>
            {documents.map((task) => (
              <Pressable key={task.id} accessibilityRole="button" accessibilityLabel={tx(task.topic)} onPress={() => (access.speaking(task.id) ? navigation.navigate('Respond', { setId: task.id }) : navigation.navigate('Paywall', { reason: 'speaking' }))}>
                <Card style={[row, { alignItems: 'center', gap: space.md }]}>
                  <IconBadge icon="calendar" color={colors.accentDark} bg={colors.accentSoft} />
                  <View style={{ flex: 1, gap: 2 }}>
                    <AppText variant="h3">{tx(task.topic)}</AppText>
                    <AppText variant="small" color={colors.inkSoft}>
                      {t('speak.level', { l: LEVELS[task.level - 1] })}
                    </AppText>
                    {answered(task.id) ? (
                      <AppText variant="small" color={colors.primaryDark} style={{ fontWeight: '700' }}>
                        {t('speak.done')}
                      </AppText>
                    ) : null}
                  </View>
                  <Trail locked={!access.speaking(task.id)} forwardIcon={forwardIcon} />
                </Card>
              </Pressable>
            ))}
            <View style={{ gap: space.sm, marginTop: space.sm }}>
              <AppText variant="h3">{t('speak.opinion')}</AppText>
              <AppText variant="small" color={colors.inkSoft}>
                {t('speak.opinionSub')}
              </AppText>
            </View>
            {opinions.map((o) => (
              <Pressable key={o.id} accessibilityRole="button" accessibilityLabel={tx(o.topic)} onPress={() => (access.speaking(o.id) ? navigation.navigate('Opinion', { topicId: o.id }) : navigation.navigate('Paywall', { reason: 'speaking' }))}>
                <Card style={[row, { alignItems: 'center', gap: space.md }]}>
                  <IconBadge icon="megaphone" color={colors.dangerDark} bg={colors.dangerSoft} />
                  <View style={{ flex: 1, gap: 2 }}>
                    <AppText variant="h3">{tx(o.topic)}</AppText>
                    <AppText variant="small" color={colors.inkSoft}>
                      {t('speak.level', { l: LEVELS[o.level - 1] })}
                    </AppText>
                    {spoken(o.id) ? (
                      <AppText variant="small" color={colors.primaryDark} style={{ fontWeight: '700' }}>
                        {t('speak.done')}
                      </AppText>
                    ) : null}
                  </View>
                  <Trail locked={!access.speaking(o.id)} forwardIcon={forwardIcon} />
                </Card>
              </Pressable>
            ))}
            <Button label={t('ph.credits')} icon="images-outline" variant="ghost" compact onPress={() => navigation.navigate('PhotoCredits')} />
            <Button label={t('speak.manage')} variant="ghost" compact onPress={() => setConfirmClear(true)} />
          </>
        )}
      </View>
      <ConfirmDialog
        visible={confirmClear}
        title={t('speak.manage')}
        message={t('speak.manageConfirm')}
        confirmLabel={t('speak.manage')}
        cancelLabel={t('profile.cancel')}
        destructive
        onConfirm={() => {
          clearSpeechData();
          setConfirmClear(false);
        }}
        onCancel={() => setConfirmClear(false)}
      />
    </Screen>
  );
}

/** End of a task row: an arrow, or a padlock with the plan name when the task is outside the trial. */
function Trail({ locked, forwardIcon }: { locked: boolean; forwardIcon: keyof typeof Ionicons.glyphMap }) {
  const { t, row } = useI18n();
  if (!locked) return <Ionicons name={forwardIcon} size={20} color={colors.inkSoft} />;
  return (
    <View style={[row, { alignItems: 'center', gap: 4 }]}>
      <Ionicons name="lock-closed" size={16} color={colors.accentDark} />
      <AppText variant="label" color={colors.accentDark}>
        {t('access.locked')}
      </AppText>
    </View>
  );
}
