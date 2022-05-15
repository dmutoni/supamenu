import React from 'react'
import { useTailwind } from 'tailwind-rn/dist';
import { View } from './Themed'

export default function Separator() {
    const tailwind = useTailwind();
    return (
        <View style={tailwind('h-[0.7px] bg-gray-100 w-36')} />
    )
}
