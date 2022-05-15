import React from 'react'
import { Image, ImageSourcePropType, TextInput } from 'react-native'
import { useTailwind } from 'tailwind-rn/dist'
import { View } from './Themed'

interface Props {
    name: ImageSourcePropType,
    placeholder: string,
    value: string,
    onChangeText: (text: string) => void,
}

export default function Input({ name, placeholder = '', value, onChangeText }: Props) {
    const tailwind = useTailwind()
    return (
        <View style={tailwind('flex flex-row items-center mb-3 bg-white border border-gray-100 rounded-md')}>
            <Image style={tailwind('p-3 m-4')} source={name} />
            <TextInput placeholder={placeholder} value={value} onChangeText={onChangeText} style={tailwind(' py-2 ')} />

        </View>
    )
}
