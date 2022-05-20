import React from 'react'
import { ActivityIndicator, TouchableOpacity } from 'react-native'
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
    loading?: boolean,
}

export default function Button({ onPress, title, color = "bg-orange", textColor = "text-white", textFontSize = "text-sm", radius = "rounded-md", loading = false }: IButtonProps) {
    const tailwind = useTailwind();
    return (
        <TouchableOpacity onPress={onPress} style={[tailwind(`${color} py-5 ${radius} flex justify-center items-center`)]}>
            {loading ? <ActivityIndicator size="small" color="white" /> : <Text style={tailwind(`${textColor} font-bold ${textFontSize} `)}>{title}</Text>}
        </TouchableOpacity>
    )
}
