import { StatusBar } from 'expo-status-bar';
import { I18nManager } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootNavigator } from './src/navigation/RootNavigator';
import { AppProvider } from './src/state/AppState';

// Direction is handled per component so switching to Arabic needs no app restart.
I18nManager.allowRTL(false);
I18nManager.forceRTL(false);

export default function App() {
  return (
    <SafeAreaProvider>
      <AppProvider>
        <StatusBar style="dark" />
        <RootNavigator />
      </AppProvider>
    </SafeAreaProvider>
  );
}
