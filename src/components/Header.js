import { Text, View, Image, Switch } from 'react-native'
import React from 'react';
import {BellIcon} from "react-native-heroicons/outline";
import { useColorScheme } from 'nativewind';

const Header= () => {
    const {colorScheme, toggleColorScheme}  = useColorScheme();

  return (
    <View className="flex-row justify-between items-center">
        <View className="border-2 border-white rounded-full overflow-hidden">
            <Image source={require("../../assets/images/avatar.png")} style={{width: 45, height: 45}}/>
        </View>
        {/* Notifications and switch icon */}
        <View className="flex-row space-x-4 justify-center items-center">
            <BellIcon size={30} strokeWidth={2} color={colorScheme == "dark" ? "white" : "black"}/>
            <Switch value={colorScheme == "dark"} onChange={toggleColorScheme}/>
        </View>
    </View>
  )
}

export default Header;