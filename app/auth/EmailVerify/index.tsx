import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native';
import Button from 'components/Button'
import { Link, router } from 'expo-router';

// import Checkbox from 'expo-checkbox';

export default function EmailVerify({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View className='flex items-center justify-center mb-20'>
          <Text className="mt-2 text-3xl font-bold text-secondary">
              Email verification
          </Text>
      </View>
      <View  className='items-center'>
      <View  className='w-4/5 mt-6 space-y-4'>            
          <Text className="mb-1 text-2xl font-bold text-center text-secondary">
              Get your code
          </Text>
          <Text className="mb-1 text-center text-white text-md">
              Please enter the 4 digit code that to your email address
          </Text>
          <View className='flex flex-row justify-center w-full space-x-2'>
              <TextInput className='w-12 p-2 px-4 bg-white rounded-md' />
              <TextInput className='w-12 p-2 px-4 bg-white rounded-md' />
              <TextInput className='w-12 p-2 px-4 bg-white rounded-md' />
              <TextInput className='w-12 p-2 px-4 bg-white rounded-md' />
          </View>
          <Text className="mb-1 text-center text-white text-md">
              I didn't receive the code? Resend
          </Text>
      </View>
      <Button title='Verify and Proceed' onPress={() => router.push("/dashboard/Home")} buttonStyle='bg-secondary mt-4' textStyle='font-semibold' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
