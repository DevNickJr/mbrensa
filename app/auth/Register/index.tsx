import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ImageBackground, Image } from 'react-native';
import Button from 'components/Button'
import { Link, router } from 'expo-router';
import OnboardHeader from 'components/OnboardHeader';


// import Checkbox from 'expo-checkbox';

export default function Register() {
  return (
    <View style={styles.container}>
          <View className='flex items-center justify-center mb-10'>
              <Text className="mt-2 text-3xl font-bold text-secondary">
                  Mbrensa
              </Text>
          </View>
          <Text className="mb-2 text-white text-md">
              Sign up
          </Text>
          <View className='flex flex-col space-y-4'>
              <TextInput className='p-3 px-4 bg-white rounded-md' />
              <TextInput className='p-3 px-4 bg-white rounded-md' />
              <TextInput className='p-3 px-4 bg-white rounded-md' />
              <Button title='Sign Up' onPress={() => router.push("/auth/EmailVerify")} buttonStyle='bg-secondary w-full' />
          </View>
          <View className='flex flex-col items-center mt-12 space-y-7'>
              <Text className='text-white/90'>Or</Text>
              <View className='flex flex-row items-center justify-center space-x-5'>
                  <View className='p-2 bg-[#ECECEC] w-12 h-12 rounded-md'>
                    <Image source={require('../../../assets/google.png')} className='h-full bg-contain' />
                  </View>
                  <View className='p-2 bg-[#ECECEC] w-12 h-12 rounded-md'>
                    <Image source={require('../../../assets/apple.png')} className='h-full bg-contain' />
                  </View>
                  <View className='p-2 bg-[#ECECEC] w-12 h-12 rounded-md'>
                    <Image source={require('../../../assets/facebook.png')} className='h-full bg-contain' />
                  </View>
              </View>
                <Button textStyle='text-white/80 font-normal' title='' onPress={() => router.push("/auth/Login")} buttonStyle='bg-transparent flex-row space-x-2 p-0 py-0'>
                  <Text className={`text-white/90 font-normal py-0`}>Already have an account?</Text>
                  <Text className={`text-white font-semibold py-0`}>Login</Text>
                </Button>
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
