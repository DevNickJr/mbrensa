// In RootLayout.js in a new project

import * as React from 'react';
import { NativeWindStyleSheet } from "nativewind";
import { Slot, router } from 'expo-router';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native'

NativeWindStyleSheet.setOutput({
  default: "native",
});


function RootLayout() {
  return (
    <SafeAreaView style={styles.container}>
        <Slot />
        <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default RootLayout;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  }
});
