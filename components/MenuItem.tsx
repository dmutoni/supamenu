import { Entypo } from '@expo/vector-icons'
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';
import { Text, View } from './Themed'

export default function MenuItem({ title, onPress }: { title: string, onPress?: () => void }) {
    const tailwind = useTailwind();

    return (
        <TouchableOpacity style={tailwind('flex flex-row bg-black items-center justify-between mb-6')} onPress={onPress} >
            <Text style={tailwind('text-white text-2xl')}>{title}</Text>
            <Entypo name="chevron-small-right" size={40} color="white" />
        </TouchableOpacity>
    )
}
