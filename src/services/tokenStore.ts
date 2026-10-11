import AsyncStorage from '@react-native-async-storage/async-storage';

/** Web build: the session token in browser storage (the native build uses the keychain). */
const KEY = 'toeic-quest/session';

export const tokenStore = {
  get: () => AsyncStorage.getItem(KEY),
  set: (token: string) => AsyncStorage.setItem(KEY, token),
  clear: () => AsyncStorage.removeItem(KEY),
};
