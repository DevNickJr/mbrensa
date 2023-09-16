// In RootLayout.js in a new project

import * as React from 'react';
import { NativeWindStyleSheet } from "nativewind";
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

NativeWindStyleSheet.setOutput({
  default: "native",
});


function RootLayout() {
  return (
    <>
        <Slot />
        <StatusBar style="auto" />
    </>
  );
}

export default RootLayout;