import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground } from 'react-native';
import Button from 'components/Button'
import OnboardHeader from 'components/OnboardHeader';
import { Link } from 'expo-router';

// import Checkbox from 'expo-checkbox';

export default function StepOne() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/app-bg.png')} className='w-full h-full' style={{width: '100%', height: '100%'}}>
        <OnboardHeader />
        <View style={styles.container} className='pt-20'>
          <View className='flex items-center justify-center mb-10 h-60'>
              <Image source={require('../assets/onboard1.png')} className='w-full h-full' />
          </View>
          <View  className='items-center justify-between flex-1 px-12 pt-6 pb-8 bg-white spacep-y-8 rounded-t-3xl'>
            <Text className="text-2xl font-medium text-center">
              Sum up your chances,
            </Text>
            <View className='w-full'>
              <View className='flex-row items-center justify-center w-full mb-2 gap-x-2'>
                <View className='w-5 h-2.5 rounded-full bg-primary'></View>
                <View className='w-2.5 h-2.5 bg-gray-200 rounded-full'></View>
                <View className='w-2.5 h-2.5 bg-gray-200 rounded-full'></View>
              </View>
              <Link href="/onboard/StepTwo">
                <Button title='Next' onPress={() => `navigation.replace('StepTwo', { owner: 'Michaś' })`} buttonStyle={"w-full rounded-full mt-4"} textStyle="text-red-20" />
              </Link>
            </View>
          </View>
          <StatusBar style="auto" />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'primary',
    // alignItems: 'center',
    // justifyContent: 'center',
  }
});
