import { ScrollView, Text, View } from 'react-native'
import {carousalData} from "../utils/index"
import CardItem from './CardItem'

const Card = () => {
  return (
    <View className="mt-8 mb-4">
      <Text style={{fontFamily: "spaceGrotesk"}} className="text-3xl mb-4 dark:text-white">Card</Text>
      <ScrollView horizontal className="space-x-5" showsHorizontalScrollIndicator={false}>
        {
            carousalData.map((item)=>(
                <CardItem 
                key={item.id}
                imgUrl={item.imgUrl}
                price = {item.price}
                title = {item.title}
                cardType = {item.cardType}
                cardNumber = {item.cardNumber}
                backgroundColor = {item.backgroundColor}
                />
            ))
        }
      </ScrollView>
    </View>
  )
}

export default Card;