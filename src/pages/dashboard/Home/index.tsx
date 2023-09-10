import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Button from 'components/Button'


// import Checkbox from 'expo-checkbox';

export default function Home({ navigation, ...rest }: any ) {

  console.log({ rest })

  // 
  
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
        <View className='absolute bottom-0 left-0 flex flex-row items-center justify-between w-full px-3 py-4 space-x-5'>
            <View className='flex flex-row items-center justify-center space-x-3'>
                <View className='bg-gray-300 w-14 h-14' />
                <View className='bg-gray-300 w-14 h-14' />
                <View className='bg-gray-300 w-14 h-14' />
            </View> 
            <View className='bg-gray-300 w-14 h-14' />
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
