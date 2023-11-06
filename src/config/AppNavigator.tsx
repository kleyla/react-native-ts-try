import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Login, Profile } from '../screens';
import React, { ReactElement } from 'react';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = (): ReactElement => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

type RootStackParamList = {
  Home: undefined;
  Profile: { user: string };
  Login: undefined;
};

export { AppNavigator };
export type { RootStackParamList };
