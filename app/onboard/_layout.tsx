import { StyleSheet, View, ImageBackground } from 'react-native';
import OnboardHeader from 'components/OnboardHeader';
import { Slot } from 'expo-router';

export default function StepOne() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/app-bg.png')} className='w-full h-full' style={{width: '100%', height: '100%'}}>
        <OnboardHeader />
        <Slot />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
