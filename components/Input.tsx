import React from 'react'
import { Image, ImageSourcePropType, KeyboardType, TextInput } from 'react-native'
import { useTailwind } from 'tailwind-rn/dist'
import { View } from './Themed'

interface Props {
    name: ImageSourcePropType,
    placeholder: string,
    value: string,
    keyBoardType?: KeyboardType,
    secureTextEntry?: boolean,
    onChangeText: (text: string) => void,
}

export default function Input({ name, placeholder = '', value, onChangeText, keyBoardType = 'default', secureTextEntry = false }: Props) {
    const tailwind = useTailwind()
    return (
        <View style={tailwind('flex flex-row items-center mb-3 bg-white border border-gray-100 rounded-md')}>
            <Image style={tailwind('p-3 m-4')} source={name} />
            <TextInput placeholder={placeholder} value={value} keyboardType={keyBoardType} secureTextEntry={secureTextEntry} onChangeText={onChangeText} style={tailwind(' py-2 ')} />
        </View>
    )
}
