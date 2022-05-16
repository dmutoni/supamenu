import React from 'react'
import { Image, ImageSourcePropType } from 'react-native'
import { useTailwind } from 'tailwind-rn/dist'
import { Text, View } from './Themed'

export interface IModeOfPaymentProps {
    name: string;
    image: ImageSourcePropType;
}

export default function ModeOfPayment({ name, image }: IModeOfPaymentProps) {
    const tailwind = useTailwind()
    return (
        <View style={tailwind('flex flex-row items-center my-2 justify-between')}>
            <Image source={image} />
            <Text style={tailwind('text-2xl text-gray-500')}>{name}</Text>
        </View>
    )
}
