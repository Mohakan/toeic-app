import { Rubik_300Light } from '@expo-google-fonts/rubik/300Light';
import { Rubik_400Regular } from '@expo-google-fonts/rubik/400Regular';
import { Rubik_500Medium } from '@expo-google-fonts/rubik/500Medium';
import { Rubik_600SemiBold } from '@expo-google-fonts/rubik/600SemiBold';
import { Rubik_700Bold } from '@expo-google-fonts/rubik/700Bold';
import { Rubik_800ExtraBold } from '@expo-google-fonts/rubik/800ExtraBold';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { I18nManager } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootNavigator } from './src/navigation/RootNavigator';
import { AppProvider } from './src/state/AppState';

// Direction is handled per component so switching to Arabic needs no app restart.
I18nManager.allowRTL(false);
I18nManager.forceRTL(false);

export default function App() {
  // Only the weights used by the theme are bundled. If loading fails, text falls back to the system font.
  const [fontsLoaded, fontError] = useFonts({ Rubik_300Light, Rubik_400Regular, Rubik_500Medium, Rubik_600SemiBold, Rubik_700Bold, Rubik_800ExtraBold });
  if (!fontsLoaded && !fontError) return null;
  return (
    <SafeAreaProvider>
      <AppProvider>
        <StatusBar style="dark" />
        <RootNavigator />
      </AppProvider>
    </SafeAreaProvider>
  );
}
