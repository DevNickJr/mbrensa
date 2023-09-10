// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardHeader from 'components/OnboardHeader'
import Register from 'pages/auth/Register'
import Login from 'pages/auth/Login'
import EmailVerify from 'pages/auth/EmailVerify'
import ForgotPassword from 'pages/auth/ForgotPassword'
import StepOne from 'pages/onboard/StepOne'
import StepTwo from 'pages/onboard/StepTwo'
import StepThree from 'pages/onboard/StepThree'
import Home from 'pages/dashboard/Home'
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen options={{ header: OnboardHeader }} name="StepOne" component={StepOne} />
        <Stack.Screen options={{ header: OnboardHeader }} name="StepTwo" component={StepTwo}/>
        <Stack.Screen options={{ header: OnboardHeader }} name="StepThree" component={StepThree} /> */}
        <Stack.Screen options={{ headerShown: false }} name="Register" component={Register} />
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        {/* <Stack.Screen options={{ headerShown: false }} name="EmailVerify" component={EmailVerify} /> */}
        {/* <Stack.Screen options={{ headerShown: false }} name="ForgotPassword" component={ForgotPassword} /> */}
        {/* <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} /> */}
        {/* <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;