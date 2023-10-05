import React from 'react'
import { ImageBackground, Image, View } from 'react-native'

const BottomNav = () => {
  return (
    <View className=''>
        <ImageBackground source={require('../../../assets/wood.png')} className='flex flex-row items-center justify-between w-full h-full px-8 py-4 space-x-5' style={{width: '100%', height: '100%'}}>
            <Image source={require('../../../assets/home.png')} className='w-12 h-12' />
            <Image source={require('../../../assets/play.png')} className='w-12 h-12' />
            <Image source={require('../../../assets/leader.png')} className='w-12 h-12' />
            <Image source={require('../../../assets/settings.png')} className='w-12 h-12' />
        </ImageBackground>
    </View>
  )
}

export default BottomNav