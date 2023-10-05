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
            <Text className='text-[#482417] text-4xl font-bold'>GAME1</Text>
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
            <View className='rounded-md'>
              <ImageBackground source={require('../../../assets/board-2.png')} className='w-full h-full space-y-1 overflow-hidden rounded-sm rounded-md border-secondary' style={{width: '100%', height: '100%'}}>
                {
                  [0,1,2].map(el => (
                    <View key={el} className='flex flex-row space-x-1'>   
                      {[0,1,2].map(el => (
                        <View key={el} className='overflow-hidden rounded-md'>
                          <ImageBackground source={require('../../../assets/wood.png')} className='object-cover w-full h-full p-1.5' style={{width: '100%', height: '100%'}}>
                            <View key={el} className='overflow-hidden rounded-md'>
                              <ImageBackground source={require('../../../assets/board-3.png')} className='object-cover w-full h-full px-4 py-2 rounded-md' style={{width: '100%', height: '100%'}}>
                                <Text className='text-5xl text-[#482417] px-2'>1</Text>
                              </ImageBackground>
                            </View>
                          </ImageBackground>
                        </View>
                      ))}
                    </View>
                  ))
                }
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
