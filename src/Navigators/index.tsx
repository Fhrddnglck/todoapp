import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  ForgotPasswordScreen,
  LoginScreen,
  RegisterUserScreen,
  SplashScreen,
} from '@Containers/index';
import {isReadyRef, navigationRef} from '@Plugins/NavigationHelper';
import TabNavigator from '@Navigators/TabNavigator';

const Stack = createStackNavigator();

const Navigators = () => {
  React.useEffect(() => {
    return () => {
      // @ts-ignore
      isReadyRef.current! = false;
    };
  }, []);
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="TabBar" component={TabNavigator} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Register" component={RegisterUserScreen} />
        <Stack.Screen name="Splash" component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigators;
