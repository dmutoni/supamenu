import React from 'react'
import { Image, SafeAreaView, StatusBar } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';
import { Text, View } from './Themed';
import { Entypo } from '@expo/vector-icons';
import MenuItem from './MenuItem';

export default function ChooseMenu() {
    const tailwind = useTailwind();

    return (
        <View style={tailwind('h-full pt-20 bg-black')}>
            <Text style={tailwind('text-orange text-2xl text-center')}>Choose Kigali</Text>
            <View style={tailwind('bg-black')}>

                <View style={tailwind('flex flex-row bg-black items-center justify-center py-12')}>
                    <Image style={tailwind(' rounded-xl')} source={require('../assets/images/menu.png')} />
                </View>

                <Text style={tailwind('text-center text-orange text-2xl')}>Menu</Text>
                <View style={tailwind('mx-16 py-12 bg-black')}>
                    <MenuItem title='Appetizer' />
                    <MenuItem title='Starter' />
                    <MenuItem title='Main' />
                    <MenuItem title='Dessert' />
                    <MenuItem title='Drink' />
                </View>


            </View>
        </View>
    )
}
