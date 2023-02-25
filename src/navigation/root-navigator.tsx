import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { useIsFirstTime } from '@/core/hooks';
import { Onboarding } from '@/screens';

import { NavigationContainer } from './navigation-container';
import { TabNavigator } from './tab-navigator';

const Stack = createNativeStackNavigator();
export const Root = () => {
  const [isFirstTime] = useIsFirstTime();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        animation: 'none',
      }}
    >
      {isFirstTime ? (
        <Stack.Screen name="Onboarding" component={Onboarding} />
      ) : (
        <Stack.Screen name="App" component={TabNavigator} />
      )}
    </Stack.Navigator>
  );
};

export const RootNavigator = () => (
  <NavigationContainer>
    <Root />
  </NavigationContainer>
);
