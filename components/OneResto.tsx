import React from "react";
import { View, Image, Text } from "react-native";
import { useTailwind } from 'tailwind-rn/dist';

import { TOneResto } from "../types";
//props: OneResto
export function OneResto(props: TOneResto) {
    const tailwind = useTailwind();
    return (
        <View style={tailwind('mx-2 bg-transparent')}>
            <View style={tailwind('flex flex-row mx-5 p-2 my-2 gap-5 bg-violet')}>
                <View style={tailwind(' ')}>
                    <Image style={tailwind('h-20 w-20 rounded-xl')} source={require('../assets/images/burg.jpg')} />
                </View>
                <View style={tailwind('mx-4 flex justify-center')}>
                    <Text style={tailwind('font-bold')}>{props.title }</Text>
                    <Text style={tailwind('text-xs')}>{props.tags }</Text>
                </View>
            </View>
        </View>
    )
}
