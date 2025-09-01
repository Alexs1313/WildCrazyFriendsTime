import WelcomeWildTimeScreen from './src/wildtimescrn/WelcomeWildTimeScreen.js.js';
import WildTimeHomeScreen from './src/wildtimescrn/WildTimeHomeScreen.js';
import WildTimeRulesScreen from './src/wildtimescrn/WildTimeRulesScreen.js';
import WildTimeAboutScreen from './src/wildtimescrn/WildTimeAboutScreen.js';
import WildTimeGameScreen from './src/wildtimescrn/WildTimeGameScreen.js';
import WildTimeSettingsScreen from './src/wildtimescrn/WildTimeSettingsScreen.js';
import WildTimeGameplayScreen from './src/wildtimescrn/WildTimeGameplayScreen.js';
import { NavigationContainer } from '@react-navigation/native';
import WildTimeMainLoader from './src/wildtimecmpnts/WildTimeMainLoader.js';
import { WildTimeGameContextProvider } from './src/wildtimestr/wildtimcntx.js';
import { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  const [showWildTimeStckNav, setShowWildTimeStckNav] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowWildTimeStckNav(true);
    }, 5000);
  }, []);

  return (
    <NavigationContainer>
      <WildTimeGameContextProvider>
        {showWildTimeStckNav ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="WelcomeWildTimeScreen"
              component={WelcomeWildTimeScree}
            />
            <Stack.Screen
              name="WildTimeHomeScreen"
              component={WildTimeHomeScreen}
            />
            <Stack.Screen
              name="WildTimeRulesScreen"
              component={WildTimeRulesScreen}
            />
            <Stack.Screen
              name="WildTimeAboutScreen"
              component={WildTimeAboutScreen}
            />
            <Stack.Screen
              name="WildTimeGameScreen"
              component={WildTimeGameScreen}
            />
            <Stack.Screen
              name="WildTimeSettingsScreen"
              component={WildTimeSettingsScreen}
            />
            <Stack.Screen
              name="WildTimeGameplayScreen"
              component={WildTimeGameplayScreen}
            />
          </Stack.Navigator>
        ) : (
          <WildTimeMainLoader />
        )}
      </WildTimeGameContextProvider>
    </NavigationContainer>
  );
};

export default App;
