import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useTailwind } from 'tailwind-rn/dist';

import { TOneResto } from "../types";
export function OneResto(props: TOneResto) {
    const tailwind = useTailwind();
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={tailwind('flex bg-gray-100 flex-row rounded-xl mx-5 p-2 my-2')} onPress={props.onPress}>
            <View>
                <Image style={tailwind('h-20 w-20 rounded-xl')} source={props.img} />
            </View>
            <View style={tailwind('mx-4 flex justify-center')}>
                <Text style={tailwind('font-bold')}>{props.title}</Text>
                <Text style={tailwind('text-sm')}>{props.tags}</Text>
            </View>
        </TouchableOpacity>
    )
}
