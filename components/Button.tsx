import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useTailwind } from 'tailwind-rn/dist';
import { Text } from './Themed'

export default function Button({ onPress, title }: { onPress?: () => void, title: string }) {
    const tailwind = useTailwind();
    return (
        <TouchableOpacity onPress={onPress} style={tailwind('bg-orange py-5 rounded-md flex justify-center items-center')}>
            <Text style={tailwind('text-white font-bold')}>{title}</Text>
        </TouchableOpacity>
    )
}
