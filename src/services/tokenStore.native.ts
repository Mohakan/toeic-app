import * as SecureStore from 'expo-secure-store';

/** iOS and Android: the session token in the keychain / keystore, never copied to another device. */
const KEY = 'toeic-quest.session';
const OPTIONS = { keychainAccessible: SecureStore.WHEN_UNLOCKED_THIS_DEVICE_ONLY };

export const tokenStore = {
  get: () => SecureStore.getItemAsync(KEY, OPTIONS),
  set: (token: string) => SecureStore.setItemAsync(KEY, token, OPTIONS),
  clear: () => SecureStore.deleteItemAsync(KEY, OPTIONS),
};
