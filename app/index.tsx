import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import Button from 'components/Button'
import { Link, router } from 'expo-router';
// import Checkbox from 'expo-checkbox';

export default function StepOne({ navigation }: any) {
  return (
    <View className='items-center justify-center flex-1 space-y-6 bg-primary'>
        <Button title='Auth' onPress={() => router.push("/auth/Register")} buttonStyle={"w-full rounded-full mt-4"} textStyle="text-red-20" />
        <Button title='Onboard' onPress={() => router.push("/onboard/StepOne")} buttonStyle={"w-full rounded-full mt-4"} textStyle="text-red-20" />
        <Button title='Game1' onPress={() => router.push("/dashboard/Game1")} buttonStyle={"w-full rounded-full mt-4"} textStyle="text-red-20" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
