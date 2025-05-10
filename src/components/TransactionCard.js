import { View, Text, Dimensions, Image } from 'react-native';

const TransactionCard = ({name, type, amount, date, imageSource}) => {
  const {width, height} = Dimensions.get("window");

  return (
    <View className="rounded-3xl py-8 px-4 justify-between flex-row items-center bg-slate-200 shadow-sm" style={{width: "100", maxWidth: width, height: height * 0.15}}>
      <View className="flex-row space-x-6 items-center justify-center">
        <View className="bg-white rounded-xl">
          <Image source={imageSource} style={{width: 65, height: 65}} resizeMode='contain'/>
        </View>
        <View className="space-y-1">
          <Text className="text-xl font-bold">{name}</Text>
          <Text className="text-sm text-neutral-500">{type}</Text>
        </View>
      </View>   
      <View className="space-y-1"> 
        <Text className="text-xl">{amount}</Text>
        <Text className="text-sm text-neutral-500">{date}</Text>
      </View>
    </View>
  )
}

export default TransactionCard;