import React from 'react'
import { View, Image, Text, TextInput } from 'react-native'
import { useTailwind } from 'tailwind-rn/dist';
import { AntDesign } from '@expo/vector-icons';

export interface IItemProps {
    name: string;
    ingredients: string[];
    price: number;
    amount: number;
    currency: string;
    onChangePrice?: (text: string) => void;
}

export default function WishItemScreen({ name, ingredients, price, amount, currency = 'FRW', onChangePrice }: IItemProps) {
    const tailwind = useTailwind();
    return (
        // <View style={tailwind('pt-20 h-full bg-red-200')}>
        <View style={tailwind('flex flex-row bg-gray-100 h-24 rounded-xl p-2')}>
            <View style={tailwind('w-24')}>
                <Image style={tailwind('p-3 m-2 w-16 h-16 rounded-md')} source={require(`../assets/images/bb.jpg`)} />
            </View>
            <View style={tailwind('w-60')}>
                <Text style={tailwind('text-gray-500')}>{ingredients}</Text>
                <Text style={tailwind('font-bold')}>{name}</Text>

                <View style={tailwind('flex mt-1 flex-row justify-between items-center')}>
                    <View style={tailwind('flex flex-row')}>
                        <Text style={tailwind('text-orange font-bold text-lg mr-1')}>{currency}</Text>

                        <Text style={tailwind('text-orange font-bold text-lg')}>{price}</Text>
                    </View>
                    <View style={tailwind('flex flex-row bg-white px-2 h-8 rounded-md justify-center items-center')}>
                        <AntDesign name="minus" size={15} color='orange' />
                        <Text style={tailwind('px-2 text-black')} >{amount}</Text>
                        <AntDesign name="plus" size={15} color='orange' />
                    </View>
                </View>
            </View>
        </View>
    )
}
