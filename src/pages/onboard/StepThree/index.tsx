import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import Button from 'components/Button'
// import Checkbox from 'expo-checkbox';

export default function StepTwo({ navigation }: any) {
  return (
    <View style={styles.container} className='pt-20 bg-primary'>
      <View className='flex items-center justify-center mb-10 h-60'>
          <Image source={require('../../../assets/onboard.png')} className='w-full h-full' />
      </View>
      <View  className='items-center justify-between flex-1 px-12 pt-6 pb-8 bg-white gap-y8 rounded-t-3xl'>
        <Text style={{ lineHeight: 30 }} className="text-2xl font-medium leading-none text-center">
          And stack the odds in your favour,
        </Text>
        <View className='w-full'>
          <View className='flex-row items-center justify-center w-full mb-2 gap-x-2'>
            <View className='w-2.5 h-2.5 bg-gray-200 rounded-full'></View>
            <View className='w-2.5 h-2.5 bg-gray-200 rounded-full'></View>
            <View className='w-5 h-2.5 rounded-full bg-primary'></View>
          </View>
          <Button title='Next' onPress={() => navigation.replace('Register', { owner: 'Michaś' })} buttonStyle={"w-full rounded-full mt-4"} textStyle="text-red-20"  />
        </View>
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
  text: {
    marginLeft: 0,
    marginTop: 0
  },
});
