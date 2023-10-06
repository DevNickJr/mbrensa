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
    <View style={styles.container} className='flex flex-1 bg-primary'>
      <ImageBackground source={require('../../../assets/app.png')} className='w-full h-full'>
        {/* <View className='items-center justify-center'>
          <ImageBackground source={require('../../../assets/wood.png')} className='flex items-center justify-center w-full h-full p-2 pt-5' style={{width: '100%', height: '100%'}}>
            <Image source={require('../../../assets/chevron-left.png')} className='absolute w-8 h-8 left-4' />
            <Text className='text-[#482417] text-4xl font-bold'>GAME1</Text>
          </ImageBackground>
        </View> */}
        <View className='items-center justify-center overflow-hidden max-h-28'>
          <ImageBackground source={require('../../../assets/wood.png')} className='w-full'>
            <View className='flex items-center justify-center p-2 pt-5 mb-4'>
              <Image source={require('../../../assets/chevron-left.png')} className='absolute w-8 h-8 left-4' />
              <Text className='text-[#482417] text-4xl font-bold'>GAME1</Text>
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
        {/* <View className='items-center'>
          <ImageBackground source={require('../../../assets/wood.png')} className='flex items-center justify-center w-full h-full p-1' style={{width: '100%', height: '100%'}}>
            <View className='items-center rounded-md'>
              <ImageBackground source={require('../../../assets/board-2.png')} className='items-center w-full h-full px-4 py-0.5 rounded-md'>
                <Text className='text-xl font-bold text-secondary'>- Categories -</Text>
              </ImageBackground>
            </View>
          </ImageBackground>
        </View> */}
        <View className="flex-1">
          <ImageBackground source={require('../../../assets/game-bg.png')} className='flex-1'>
            <View className='items-center justify-center flex-1 py-20 space-y-12'>
              <View className='overflow-hidden rounded-md'>
                <ImageBackground source={require('../../../assets/board-2.png')}>
                  <View className='space-y-1 border-secondary'>
                    {
                      [0,1,2].map(val => (
                        <View key={val} className='flex flex-row space-x-1'>   
                          {[1,2,3].map(el => (
                            <View key={el} className='overflow-hidden rounded-md'>
                              <ImageBackground source={require('../../../assets/wood.png')} className=''>
                                <View key={el} className='overflow-hidden rounded-md  p-1.5'>
                                  <ImageBackground source={require('../../../assets/board-3.png')} className=''>
                                    <Text className={`text-5xl text-[#482417] px-4 py-2 ${el + val*3 == 9 ? "bg-yellow-100 text-yellow-100" : ''}`}>{el + val*3}</Text>
                                  </ImageBackground>
                                </View>
                              </ImageBackground>
                            </View>
                          ))}
                        </View>
                      ))
                    }
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
  },
});
