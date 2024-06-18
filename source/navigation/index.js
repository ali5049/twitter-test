import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens';

const Stack = createNativeStackNavigator();

const AppNavigator = ({isAuthenticagted}) => {
  const screenOptions = {
    headerShown: false,
  };
  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName={isAuthenticagted ? 'Home' : 'Login'}>
      <Stack.Screen name={'Home'} component={Home} />
    </Stack.Navigator>
  );
};

const Navigation = ({isAuthenticagted}) => {
  return (
    <NavigationContainer>
      <AppNavigator {...{isAuthenticagted}} />
    </NavigationContainer>
  );
};

export default Navigation;
