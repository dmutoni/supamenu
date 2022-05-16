import React from "react";
import { View, Image, Text } from "react-native";
import { useTailwind } from 'tailwind-rn/dist';

import { TOneResto } from "../types";
//props: OneResto
export function OneResto(props: TOneResto) {
    const tailwind = useTailwind();
    return (
        <View style={tailwind('flex bg-gray-100 flex-row rounded-xl mx-5 p-2 my-2')}>
            <View>
                <Image style={tailwind('h-20 w-20 rounded-xl')} source={require('../assets/images/burg.jpg')} />
            </View>
            <View style={tailwind('mx-4 flex justify-center')}>
                <Text style={tailwind('font-bold')}>{props.title}</Text>
                <Text style={tailwind('text-xs')}>{props.tags}</Text>
            </View>
        </View>
    )
}
