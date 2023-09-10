// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from 'pages/auth/Register'
import EmailVerify from 'pages/auth/EmailVerify'
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
        <Stack.Screen name="StepOne" component={StepOne} />
        <Stack.Screen name="StepTwo" component={StepTwo}/>
        <Stack.Screen name="StepThree" component={StepThree} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="EmailVerify" component={EmailVerify} />
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="Home" component={Home} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;