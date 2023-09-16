import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native';
import Button from 'components/Button'
import { Link } from 'expo-router';

// import Checkbox from 'expo-checkbox';

export default function ForgotPassword() {
  return (
    <View style={styles.container} className='bg-primary'>
      <ImageBackground source={require('../../../assets/app-bg.png')} className='w-full h-full p-4 pt-10' style={{width: '100%', height: '100%'}}>

              <View className='relative flex items-center justify-center mb-20'>
                <Link href="/auth/Login">
                  <Button title='<' onPress={() => '' } buttonStyle='absolute left-0 bg-transparent p-0 mt-4' textStyle='font-normal' />
                </Link>
                  <Text className="mt-2 text-3xl font-bold text-secondary">
                    Forgot password
                  </Text>
              </View>
              <View  className='items-center'>
              <View  className='w-4/5 mt-6 space-y-4'>            
                  <Text className="mb-1 text-2xl font-bold text-center text-secondary">
                    Mail Address Here
                  </Text>
                  <Text className="mb-1 text-center text-white text-md">
                    Enter the email address associated with your account
                  </Text>
                  <TextInput className='w-full p-3 px-3 bg-white rounded-md placeholder:text-black/60' placeholder='Email' />
              </View>
              <Link href="/auth/Register">
                <Button title='Recover Password' onPress={() => ''} buttonStyle='bg-secondary mt-4' textStyle='font-normal' />
              </Link>
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
