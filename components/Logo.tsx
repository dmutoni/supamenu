import React from 'react'
import { useTailwind } from 'tailwind-rn/dist';
import { Text, View } from './Themed'

export default function Logo({ darkMode = false }: { darkMode?: boolean }) {
    const tailwind = useTailwind();

    console.log()

    return (
        <View style={tailwind(`flex ${darkMode ? 'bg-black' : 'bg-white'} flex-row items-center w-auto justify-center`)}>
            <Text style={tailwind(`text-[2.5rem] ${darkMode ? 'text-white' : 'text-orange'} font-bold`)}>Supa</Text>
            <Text style={tailwind(`text-[2.5rem] ${darkMode ? 'text-orange' : 'text-black'} font-bold`)}>Menu</Text>
        </View>
    )
}
