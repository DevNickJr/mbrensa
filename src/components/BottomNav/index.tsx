import React from 'react'
import { ImageBackground, Image, View } from 'react-native'

const BottomNav = () => {
  return (
    <View className='flex w-full'>
        <ImageBackground source={require('../../../assets/wood.png')} className='w-full'>
          <View className='flex flex-row items-center justify-between w-full px-8 py-4 space-x-5'> 
              <Image source={require('../../../assets/home.png')} className='w-12 h-12' />
              <Image source={require('../../../assets/play.png')} className='w-12 h-12' />
              <Image source={require('../../../assets/leader.png')} className='w-12 h-12' />
              <Image source={require('../../../assets/settings.png')} className='w-12 h-12' />
          </View>
        </ImageBackground>
    </View>
  )
}

export default BottomNav