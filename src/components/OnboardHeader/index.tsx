import { getHeaderTitle } from '@react-navigation/elements';
import { View, Text, ImageBackground } from 'react-native';


const OnboardHeader = ({ navigation, route, options, back }: any) => {
  const title = getHeaderTitle(options, route.name);

  return (
    <View className='items-center justify-center h-12'>
        <ImageBackground source={require('../../assets/wood.png')} className='w-full h-full p-4' style={{width: '100%', height: '100%'}}>
            
        </ImageBackground>
      </View>
  );
};


export default OnboardHeader;