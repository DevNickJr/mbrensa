import { StyleSheet, View, ImageBackground, SafeAreaView, StatusBar } from 'react-native';
import OnboardHeader from 'components/OnboardHeader';
import { Slot } from 'expo-router';

export default function StepOne() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../../assets/app-bg.png')} className='w-full h-full' style={{width: '100%', height: '100%'}}>
        <OnboardHeader />
        <Slot />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
    // backgroundColor: "blue"
  }
});
