import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Button from 'components/Button'
// import Checkbox from 'expo-checkbox';

export default function Home() {
  return (
    <View style={styles.container} className='p-4 py-20 bg-primary'>
        <View className='flex items-center justify-center mb-10'>
            <Text className="mt-2 text-3xl font-bold text-secondary">
                Email verification
            </Text>
        </View>
        <View  className='items-center'>
        <View  className='w-4/5 gap-4 mt-6'>            
            <Text className="mb-1 text-2xl font-bold text-center text-secondary">
                Get your code
            </Text>
            <Text className="mb-1 text-center text-white text-md">
                Please enter the 4 digit code that to your email address
            </Text>
            <View className='flex flex-row justify-center w-full gap-2'>
                <TextInput className='w-12 p-2 px-4 bg-white rounded-md' />
                <TextInput className='w-12 p-2 px-4 bg-white rounded-md' />
                <TextInput className='w-12 p-2 px-4 bg-white rounded-md' />
                <TextInput className='w-12 p-2 px-4 bg-white rounded-md' />
            </View>
            <Text className="mb-1 text-center text-white text-md">
                I didn’t receive the code? Resend
            </Text>
        </View>
        <Button title='Verify and Proceed' onPress={() => ''} style={{ width: "100%" }} />
        </View>
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
