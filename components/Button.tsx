import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useTailwind } from 'tailwind-rn/dist';
import { Text } from './Themed'

export interface IButtonProps {
    onPress?: () => void,
    title: string,
    color?: string,
    textColor?: string,
    textFontSize?: string,
    width?: string,
    radius?: string,
}

export default function Button({ onPress, title, color = "bg-orange", textColor = "text-white", textFontSize = "text-sm", radius = "rounded-md" }: IButtonProps) {
    const tailwind = useTailwind();
    return (
        <TouchableOpacity onPress={onPress} style={[tailwind(`${color} py-5 ${radius} flex justify-center items-center`)]}>
            <Text style={tailwind(`${textColor} font-bold ${textFontSize} `)}>{title}</Text>
        </TouchableOpacity>
    )
}
