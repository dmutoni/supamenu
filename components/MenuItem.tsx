import { Entypo } from '@expo/vector-icons'
import React from 'react'
import { useTailwind } from 'tailwind-rn/dist';
import { Text, View } from './Themed'

export default function MenuItem({ title }: { title: string }) {
    const tailwind = useTailwind();

    return (
        <View style={tailwind('flex flex-row bg-black items-center justify-between mb-6')}>
            <Text style={tailwind('text-white text-2xl')}>{title}</Text>
            <Entypo name="chevron-small-right" size={40} color="white" />
        </View>
    )
}
