import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Button from 'components/Button'

// import Checkbox from 'expo-checkbox';

export default function Register({ navigation }: any) {
  return (
    <View style={styles.container} className='p-4 py-20 bg-primary'>
        <View className='flex items-center justify-center mb-10'>
            <Text className="mt-2 text-3xl font-bold text-secondary">
                Mbrensa
            </Text>
        </View>
        <Text className="mb-1 text-white text-md">
            Sign up
        </Text>
        <View className='flex flex-col gap-2'>
            <TextInput className='p-2 px-4 bg-white rounded-md' />
            <TextInput className='p-2 px-4 bg-white rounded-md' />
            <TextInput className='p-2 px-4 bg-white rounded-md' />
            <Button title='Sign Up' onPress={() => navigation.replace('Home', { owner: 'Michaś' })} />
        </View>
        <View className='flex flex-col items-center gap-5 mt-12'>
            <Text className='text-gray-500'>Or</Text>
            <View className='flex flex-row items-center justify-center gap-3'>
                <View className='bg-gray-300 w-14 h-14' />
                <View className='bg-gray-300 w-14 h-14' />
                <View className='bg-gray-300 w-14 h-14' />
            </View>
            <Text className='text-gray-500'>Already have an account? Login</Text>
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
