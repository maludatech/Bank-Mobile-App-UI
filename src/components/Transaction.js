import { FlatList, Text, View } from 'react-native'
import React from 'react'
import { transactionData } from '../utils';
import TransactionCard from './TransactionCard';

const Transaction = () => {
  return (
    <View className="mt-8">
        {/* Title */}
        <Text className="text-3xl dark:text-white mb-4" style={{fontFamily: "spaceGrotesk"}}>Last Transactions</Text>
        {/* Cards */}
        <FlatList data={transactionData}
        keyExtractor={(item)=>item.id}
        initialNumToRender={20}
        contentContainerStyle={{paddingBottom: 100}}
        removeClippedSubviews={false}
        height={400}
        renderItem={({item})=> <TransactionCard {...item}/>}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={()=> <View className="h-4"/>}
        />
    </View>
  )
}

export default Transaction;