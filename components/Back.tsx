import { Fontisto } from '@expo/vector-icons';
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useTailwind } from 'tailwind-rn/dist';

export interface IBackProps {
    iconColor?: string,
    onPress: () => void
}

export default function Back({ onPress, iconColor = "orange" }: IBackProps) {
    const tailwind = useTailwind();
    return (
        <TouchableOpacity onPress={onPress} style={tailwind('bg-gray-100 rounded-md w-12 h-12 justify-center items-center')}>
            <Fontisto name="angle-left" size={24} color={iconColor} />
        </TouchableOpacity>
    )
}
