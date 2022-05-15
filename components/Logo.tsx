import React from 'react'
import { useTailwind } from 'tailwind-rn/dist';
import { Text, View } from './Themed'

export default function Logo() {
    const tailwind = useTailwind();

    return (
        <View style={tailwind('flex flex-row items-center w-auto justify-center')}>
            <Text style={tailwind('text-[2.5rem] text-orange font-bold')}>Supa</Text>
            <Text style={tailwind('text-[2.5rem] text-black font-bold')}>Menu</Text>
        </View>
    )
}
