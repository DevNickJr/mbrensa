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
      <ImageBackground source={require('../../../assets/app-bg.png')} className='w-full h-full'>
        <View className='items-center justify-center overflow-hidden max-h-28'>
          <ImageBackground source={require('../../../assets/wood.png')} className='w-full'>
            <View className='flex items-center justify-center p-2 pt-5 mb-4'>
              <Image source={require('../../../assets/chevron-left.png')} className='absolute w-8 h-8 left-4' />
              <Text className='text-[#482417] text-4xl font-bold'>LEVELS</Text>
            </View>
          </ImageBackground>
        </View>
        <View className='items-center max-h-16'>
          <ImageBackground source={require('../../../assets/wood.png')} className='w-full h-full'>
            <View className='items-center justify-center p-1 px-4 overflow-hidden rounded-md'>
              <View className='overflow-hidden w-fit'>
                <Image source={require('../../../assets/board-2.png')} className='absolute top-0 w-full h-full' />
                <Text className='text-xl font-bold text-secondary px-4 py-0.5 text-center'>- Categories -</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View className="flex-1">
          <ImageBackground source={require('../../../assets/game-bg.png')} className='flex-1'>
            <View className='items-center justify-center flex-1 px-20 py-20 space-y-12'>
              <View className='border-4 rounded-md border-secondary'>
                <ImageBackground source={require('../../../assets/board.png')} className=''>
                  <View className='p-2 space-y-2 rounded-sm border-secondary'>
                    <View className='items-center border-4 rounded border-secondary'>
                      <ImageBackground source={require('../../../assets/board-3.png')} className=''>
                          <Text className='text-5xl text-[#482417] px-4 py-2'>3X3</Text>
                      </ImageBackground>
                    </View>
                    <View className='w-full border-4 rounded h-fit border-secondary'>
                      <ImageBackground source={require('../../../assets/board-2.png')} className=''>
                          <Text className='text-2xl font-bold text-center text-secondary'>START</Text>
                      </ImageBackground>
                    </View>
                  </View>
                </ImageBackground>
              </View>
              <View className='border-4 rounded-md'>
                <ImageBackground source={require('../../../assets/board.png')}>
                  <View className='p-2 space-y-2 rounded-sm border-secondary'>
                    <View className='rounded border4 border-secondary'>
                      <ImageBackground source={require('../../../assets/board-3.png')} className=''>
                        <Text className='text-5xl text-[#482417] px-4 py-2'>4X3</Text>
                      </ImageBackground>
                    </View>
                    <View className='rounded border4 border-secondary'>
                      <ImageBackground source={require('../../../assets/board-2.png')} className=''>
                        <Text className='text-2xl font-bold text-center text-secondary'>OPEN</Text>
                      </ImageBackground>
                    </View>
                  </View>
                </ImageBackground>
              </View>
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
