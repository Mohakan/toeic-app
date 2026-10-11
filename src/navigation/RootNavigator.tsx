import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivityIndicator, View } from 'react-native';
import { useI18n } from '../i18n';
import { AccountScreen } from '../screens/AccountScreen';
import { AssessmentScreen } from '../screens/AssessmentScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { LegalScreen } from '../screens/LegalScreen';
import { LessonScreen } from '../screens/LessonScreen';
import { MethodScreen } from '../screens/MethodScreen';
import { MockListScreen } from '../screens/MockListScreen';
import { MockTestScreen } from '../screens/MockTestScreen';
import { ReadAloudScreen } from '../screens/ReadAloudScreen';
import { OpinionScreen } from '../screens/OpinionScreen';
import { PaywallScreen } from '../screens/PaywallScreen';
import { PhotoCreditsScreen } from '../screens/PhotoCreditsScreen';
import { PhotoScreen } from '../screens/PhotoScreen';
import { RespondScreen } from '../screens/RespondScreen';
import { SimulationScreen } from '../screens/SimulationScreen';
import { SpeakingScreen } from '../screens/SpeakingScreen';
import { ReviewScreen } from '../screens/ReviewScreen';
import { AssessIntroScreen, OnboardingScreen, WelcomeScreen } from '../screens/OnboardingScreens';
import { ProfileScreen } from '../screens/ProfileScreen';
import { ProgressScreen } from '../screens/ProgressScreen';
import { ResultScreen } from '../screens/ResultScreen';
import { WordsScreen } from '../screens/WordsScreen';
import { useApp } from '../state/AppState';
import { AccountSync } from '../state/useAccount';
import { PurchaseSync } from '../state/usePurchases';
import { colors, fonts, radius } from '../theme';
import type { RootStackParamList, TabParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tabs = createBottomTabNavigator<TabParamList>();

const navTheme = { ...DefaultTheme, colors: { ...DefaultTheme.colors, background: colors.bg, primary: colors.primary } };

const tabIcons: Record<keyof TabParamList, [active: keyof typeof Ionicons.glyphMap, idle: keyof typeof Ionicons.glyphMap]> = {
  Path: ['map', 'map-outline'],
  Words: ['albums', 'albums-outline'],
  Progress: ['stats-chart', 'stats-chart-outline'],
  Tests: ['timer', 'timer-outline'],
  Profile: ['person', 'person-outline'],
};

function MainTabs() {
  const { t, isRTL } = useI18n();
  const tabs = (
    ['Path', 'Words', 'Tests', 'Progress', 'Profile'] as const
  ).map((name) => ({ name, label: t(`tab.${name.toLowerCase()}` as 'tab.path') }));
  const ordered = isRTL ? [...tabs].reverse() : tabs;
  const components = { Path: HomeScreen, Words: WordsScreen, Tests: MockListScreen, Progress: ProgressScreen, Profile: ProfileScreen };

  return (
    <Tabs.Navigator
      key={isRTL ? 'rtl' : 'ltr'}
      initialRouteName="Path"
      screenOptions={({ route }) => ({
        headerShown: false,
        // White bar like the cards: the active tab sits in a light sky pill, in Bleu Nuit.
        tabBarActiveTintColor: colors.primaryDark,
        tabBarInactiveTintColor: colors.inkSoft,
        tabBarActiveBackgroundColor: colors.primarySoft,
        tabBarLabelStyle: { fontSize: 12, fontFamily: fonts[600] },
        tabBarItemStyle: { borderRadius: radius.md, marginHorizontal: 4, marginVertical: 4 },
        tabBarStyle: {
          minHeight: 68,
          paddingTop: 4,
          paddingHorizontal: 8,
          backgroundColor: colors.white,
          borderTopWidth: 0,
          borderTopLeftRadius: radius.lg,
          borderTopRightRadius: radius.lg,
          // The shadow rises from the bottom edge of the screen.
          boxShadow: '0px -6px 20px rgba(20, 66, 122, 0.10)',
        },
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons name={tabIcons[route.name][focused ? 0 : 1]} size={size} color={color} />
        ),
      })}
    >
      {ordered.map(({ name, label }) => (
        <Tabs.Screen key={name} name={name} component={components[name]} options={{ title: label, tabBarLabel: label }} />
      ))}
    </Tabs.Navigator>
  );
}

export function RootNavigator() {
  const { data, ready } = useApp();

  if (!ready) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.bg }}>
        <ActivityIndicator size="large" color={colors.primaryDark} />
      </View>
    );
  }

  return (
    <NavigationContainer theme={navTheme}>
      <AccountSync />
      <PurchaseSync />
      <Stack.Navigator initialRouteName={data.onboarded ? 'Main' : 'Welcome'} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="AssessIntro" component={AssessIntroScreen} />
        <Stack.Screen name="Assessment" component={AssessmentScreen} options={{ gestureEnabled: false }} />
        <Stack.Screen name="Result" component={ResultScreen} options={{ gestureEnabled: false }} />
        <Stack.Screen name="Method" component={MethodScreen} />
        <Stack.Screen name="Main" component={MainTabs} />
        <Stack.Screen name="Lesson" component={LessonScreen} options={{ gestureEnabled: false }} />
        <Stack.Screen name="Review" component={ReviewScreen} options={{ gestureEnabled: false }} />
        <Stack.Screen name="MockTest" component={MockTestScreen} options={{ gestureEnabled: false }} />
        <Stack.Screen name="Speaking" component={SpeakingScreen} />
        <Stack.Screen name="ReadAloud" component={ReadAloudScreen} options={{ gestureEnabled: false }} />
        <Stack.Screen name="Respond" component={RespondScreen} options={{ gestureEnabled: false }} />
        <Stack.Screen name="Opinion" component={OpinionScreen} options={{ gestureEnabled: false }} />
        <Stack.Screen name="Simulation" component={SimulationScreen} />
        <Stack.Screen name="Photo" component={PhotoScreen} options={{ gestureEnabled: false }} />
        <Stack.Screen name="PhotoCredits" component={PhotoCreditsScreen} />
        <Stack.Screen name="Paywall" component={PaywallScreen} options={{ presentation: 'modal' }} />
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Legal" component={LegalScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
