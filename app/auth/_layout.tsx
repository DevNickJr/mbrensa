import { StyleSheet, View, ImageBackground, SafeAreaView, StatusBar } from 'react-native';
import OnboardHeader from 'components/OnboardHeader';
import { Slot } from 'expo-router';

export default function StepOne() {
  return (
    <SafeAreaView style={styles.container}>
       <ImageBackground source={require('../../assets/app.png')} className='flex-1 w-full h-full' style={{width: '100%', height: '100%', flex: 1 }}>
        <View className='flex-1 p-4 py-10'>
          <Slot />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
