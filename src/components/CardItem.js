import { View, Text, TouchableOpacity, Dimensions, Image } from 'react-native'

const CardItem = ({
    imgUrl,
    price,
    cardType,
    cardNumber,
    backgroundColor
}) => {
    const {width, height} = Dimensions.get("window")
  return (
    <TouchableOpacity className="mr-4">
        <View className="rounded-3xl py-8 px-4 justify-between" style={{width: width * 0.45, height: height*0.3, backgroundColor: backgroundColor}}>

        <Image source={imgUrl} style={{ width: 65, height: 65 }} resizeMode='contain' />
        <View className="space-y-2">
            <Text className="text-lg text-white" style={{fontFamily: "spaceGrotesk"}}>{cardNumber}</Text>
        </View>
        <View className="space-y-2">
            <Text className="text-2xl text-white" style={{fontFamily: "spaceGrotesk"}}>{price}</Text> 
            <Text className="text-lg text-white font-medium">{cardType}</Text>
        </View>

        </View>
    </TouchableOpacity>
  )
}

export default CardItem