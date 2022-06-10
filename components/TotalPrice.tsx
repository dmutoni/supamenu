import React from 'react';
import {Text, View} from "react-native"
import { useTailwind } from 'tailwind-rn/dist';
import { useTotalPrice } from '../context/PriceContext';


export default function TotalPrice() {

    const tailwind = useTailwind()

    const {state} = useTotalPrice()

  return (
    <View style={tailwind('flex flex-row justify-between my-6')}>
        <Text style={tailwind('font-bold text-xl')}>Total</Text>
        <Text style={tailwind('font-bold text-orange text-xl')}>Frw {state.totalPrice}</Text>
    </View>
  )
}
