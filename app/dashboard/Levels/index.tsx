import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native';
import Button from 'components/Button'
import { Link } from 'expo-router';

// import Checkbox from 'expo-checkbox';

export default function Home({ navigation, ...rest }: any ) {

  console.log({ rest })

  // 
  
  return (
    <View style={styles.container} className='flex bg-primary'>
      <ImageBackground source={require('../../../assets/app-bg.png')} className='w-full h-full' style={{width: '100%', height: '100%'}}>
        <View className="flex-1 p-4">
            <View className='flex-row items-center justify-between mb-12 space-x-4'>
              <Text className='text-sm font-bold text-secondary'>Current Tournament Time </Text>
              <View className='flex-row space-x-2'>
                  <Text className='text-xl font-semibold leading-4 text-darkwood p-1.5 rounded-md bg-amber-500'>07</Text>
                  <Text className='text-xl font-semibold leading-4 text-darkwood p-1.5 rounded-md bg-amber-500'>45</Text>
                  <Text className='text-xl font-semibold leading-4 text-darkwood p-1.5 rounded-md bg-amber-500'>45</Text>
              </View>
            </View>
            <View className='mb-12 space-y-8'>
              <View className='flex-row items-center justify-between p-2 space-x-2 border border-secondary rounded-xl'>
                <Text className='text-3xl text-secondary'>8:00</Text>
                <Button title='JOIN' onPress={() => navigation.replace('Register', { owner: 'Michaś' })} buttonStyle={"w-fit bg-darkwood rounded-md py-1 px-6"} textStyle="text-secondary text-lg"  />
              </View>
              <View className='flex-row items-center justify-between p-2 space-x-2 border border-secondary rounded-xl'>
                <Text className='text-3xl text-secondary'>9:00</Text>
                <Button title='JOIN' onPress={() => navigation.replace('Register', { owner: 'Michaś' })} buttonStyle={"w-fit bg-darkwood rounded-md py-1 px-6"} textStyle="text-secondary text-lg"  />
              </View>
              <View className='flex-row items-center justify-between p-2 space-x-2 border border-secondary rounded-xl'>
                <Text className='text-3xl text-secondary'>10:00</Text>
                <Button title='JOIN' onPress={() => navigation.replace('Register', { owner: 'Michaś' })} buttonStyle={"w-fit bg-darkwood rounded-md py-1 px-6"} textStyle="text-secondary text-lg"  />
              </View>
            </View>
        </View>
        <View className='flex flex-row items-center justify-between w-full px-12 py-4 space-x-5'>
            <View className='w-8 h-8 bg-gray-300' />
            <View className='w-8 h-8 bg-gray-300' />
            <View className='w-8 h-8 bg-gray-300' />
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
