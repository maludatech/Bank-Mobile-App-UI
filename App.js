import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './src/components/Header';
import Transaction from './src/components/Transaction';
import Card from './src/components/Card';
import { useColorScheme } from 'nativewind';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as splashScreen from "expo-splash-screen";

export default function App() {
  const {colorScheme, toggleColorScheme} = useColorScheme();
  const [fontsLoaded, fontsError] = useFonts({
    spaceGrotesk: require("./src/fonts/SpaceGrotesk-VariableFont_wght.ttf")
  })

  const onLayoutRootView = useCallback(async() => {
    if(fontsLoaded || fontsError){
      await splashScreen.hideAsync();
    }
  })

  if(!fontsLoaded){
    return null;
  }

  return ( 
    <SafeAreaView className="p-6 dark:bg-neutral-900">
      <StatusBar style={colorScheme == "dark" ? "light" : "black"}/>

      <View onLayout={onLayoutRootView}>
        <View className="my-6">
          <Header />

          <Card/>

          <Transaction />
        </View>
      </View>
    </SafeAreaView>
  );
}
