import { StatusBar } from 'expo-status-bar';
                      <Image source={require('../../../assets/google.png')} className='h-full bg-contain' />
import { StyleSheet, Text, View, TextInput, Image, ImageBackground } from 'react-native';
import Button from 'components/Button'

// import Checkbox from 'expo-checkbox';

export default function Login({ navigation }: any) {
  return (
    <View style={styles.container} className=' bg-primary'>
      <ImageBackground source={require('../../../assets/app-bg.png')} className='w-full h-full p-4 py-10' style={{width: '100%', height: '100%'}}>

            <View className='flex items-center justify-center mb-10'>
                <Text className="mt-2 text-3xl font-bold text-secondary">
                    Mbrensa
                </Text>
            </View>
            <Text className="mb-2 text-white text-md">
                Sign in
            </Text>
            <View className='flex flex-col space-y-4'>
                <TextInput className='p-3 px-4 bg-white rounded-md' />
                <TextInput className='p-3 px-4 bg-white rounded-md' />
                <Button textStyle='text-white font-normal' title='Forgot password?' onPress={() => navigation.navigate('ForgotPassword')} buttonStyle='py-0 items-end bg-transparent' /> 
            </View>
             <Button title='Login' onPress={() => navigation.replace('Home', { owner: 'Michaś' })} buttonStyle='bg-secondary mt-6' />
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
                <Button textStyle='text-white/80 font-normal' title='' onPress={() => navigation.replace('Register')} buttonStyle='bg-transparent flex-row space-x-2 p-0 py-0'>
                  <Text className={`text-white/90 font-normal py-0`}>Don't have an account?</Text>
                  <Text className={`text-white font-semibold py-0`}>Sign up</Text>
                </Button>
            </View>
    </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'primary',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
