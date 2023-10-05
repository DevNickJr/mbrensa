import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ImageBackground, Image } from 'react-native';
import Button from 'components/Button'
import { Link } from 'expo-router';
import BottomNav from 'components/BottomNav';

// import Checkbox from 'expo-checkbox';

export default function Home({ navigation, ...rest }: any ) {

  console.log({ rest })

  // 
  
  return (
    <View style={styles.container} className='flex bg-primary'>
      <ImageBackground source={require('../../../assets/app-bg.png')} className='w-full h-full' style={{width: '100%', height: '100%'}}>
        <View className='items-center justify-center'>
          <ImageBackground source={require('../../../assets/wood.png')} className='flex items-center justify-center w-full h-full p-2 pt-5' style={{width: '100%', height: '100%'}}>
            <Image source={require('../../../assets/chevron-left.png')} className='absolute w-8 h-8 left-4' />
            <Text className='text-[#482417] text-4xl font-bold'>LEVELS</Text>
          </ImageBackground>
        </View>
        <View className='items-center'>
          <ImageBackground source={require('../../../assets/wood.png')} className='flex items-center justify-center w-full h-full p-1' style={{width: '100%', height: '100%'}}>
            <View className='items-center rounded-md'>
              <ImageBackground source={require('../../../assets/board-2.png')} className='items-center w-full h-full px-4 py-0.5 rounded-md'>
                <Text className='text-xl font-bold text-secondary'>- Categories -</Text>
              </ImageBackground>
            </View>
          </ImageBackground>
        </View>
        <View className="flex-1">
          <ImageBackground source={require('../../../assets/game-bg.png')} className='items-center justify-center flex-1 py-20 space-y-12' style={{width: '100%', height: '100%'}}>
            <View className='border-4 rounded-md border-secondary'>
              <ImageBackground source={require('../../../assets/board.png')} className='w-full h-full p-2 space-y-2 rounded-sm border-secondary' style={{width: '100%', height: '100%'}}>
                <View className='border-4 rounded border-secondary'>
                  <ImageBackground source={require('../../../assets/board-3.png')} className='object-cover w-full h-full px-4 py-2' style={{width: '100%', height: '100%'}}>
                    <Text className='text-5xl text-[#482417] px-10'>3X3</Text>
                  </ImageBackground>
                </View>
                <View className='border-4 rounded border-secondary'>
                  <ImageBackground source={require('../../../assets/board-2.png')} className='items-center w-full h-full rounded-sm border-secondary '>
                    <Text className='text-2xl font-bold text-secondary'>START</Text>
                  </ImageBackground>
                </View>
              </ImageBackground>
            </View>
            <View className='border-4 rounded-md'>
              <ImageBackground source={require('../../../assets/board.png')} className='w-full h-full p-2 space-y-2 rounded-sm border-secondary' style={{width: '100%', height: '100%'}}>
                <View className='rounded border4 border-secondary'>
                  <ImageBackground source={require('../../../assets/board-3.png')} className='object-cover w-full h-full px-4 py-2' style={{width: '100%', height: '100%'}}>
                    <Text className='text-5xl text-[#482417] px-10'>4X3</Text>
                  </ImageBackground>
                </View>
                <View className='rounded border4 border-secondary'>
                  <ImageBackground source={require('../../../assets/board-2.png')} className='items-center w-full h-full '>
                    <Text className='text-2xl font-bold text-secondary'>OPEN</Text>
                  </ImageBackground>
                </View>
              </ImageBackground>
            </View>
          </ImageBackground>
        </View>
        <BottomNav />
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
