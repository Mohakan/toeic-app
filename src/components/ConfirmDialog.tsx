import { Modal, View } from 'react-native';
import { colors, radius, space } from '../theme';
import { AppText, Button } from './ui';

interface Props {
  visible: boolean;
  title: string;
  message: string;
  confirmLabel: string;
  cancelLabel: string;
  destructive?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

/** Cross-platform confirmation (Alert.alert does nothing on web). */
export function ConfirmDialog({ visible, title, message, confirmLabel, cancelLabel, destructive, onConfirm, onCancel }: Props) {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onCancel}>
      <View style={{ flex: 1, backgroundColor: 'rgba(27,37,89,0.55)', alignItems: 'center', justifyContent: 'center', padding: space.lg }}>
        <View
          accessibilityViewIsModal
          style={{ width: '100%', maxWidth: 420, backgroundColor: colors.white, borderRadius: radius.lg, padding: space.lg, gap: space.md }}
        >
          <AppText variant="h2">{title}</AppText>
          <AppText color={colors.inkSoft}>{message}</AppText>
          <Button label={cancelLabel} onPress={onCancel} />
          <Button label={confirmLabel} variant={destructive ? 'danger' : 'secondary'} onPress={onConfirm} />
        </View>
      </View>
    </Modal>
  );
}
