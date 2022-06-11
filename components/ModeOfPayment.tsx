import React from 'react'
import { Image, ImageSourcePropType, TouchableOpacity } from 'react-native'
import { useTailwind } from 'tailwind-rn/dist'
import { Text, View } from './Themed'

export interface IModeOfPaymentProps {
    name: string;
    image: ImageSourcePropType;
    onPress: () => void
}

export default function ModeOfPayment({ name, image, onPress }: IModeOfPaymentProps) {
    const tailwind = useTailwind()
    return (
        <TouchableOpacity onPress={onPress} style={tailwind('flex flex-row items-center my-2 justify-between')}>
            <Image style={tailwind('h-20')} source={image} />
            <Text style={tailwind('text-xl text-gray-500')}>{name}</Text>
        </TouchableOpacity>
    )
}
