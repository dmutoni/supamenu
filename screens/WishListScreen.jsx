import React from 'react'
import { View } from '../components/Themed'
import WishItemScreen from '../components/WishItemScreen'
import { useTailwind } from 'tailwind-rn/dist';

export default function WishListScreen() {
    const tailwind = useTailwind();
    return (
        <View style={tailwind('pt-20 h-full bg-red-200')}>
            <WishItemScreen />
        </View>


    )
}
