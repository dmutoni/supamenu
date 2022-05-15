import React from 'react'
import { View, Image, Text, TextInput } from 'react-native'
import { useTailwind } from 'tailwind-rn/dist';

export default function WishItemScreen() {
    const tailwind = useTailwind();
    return (
        // <View style={tailwind('pt-20 h-full bg-red-200')}>
            <View style={tailwind('flex flex-row bg-green-200 mx-4 rounded-md p-2')}>
                <View style={tailwind('w-32')}>
                    <Image style={tailwind('p-3 m-2 w-16 h-16 rounded-md')} source={require(`../assets/images/bb.jpg`)} />
                </View>
                <View style={tailwind('w-48')}>
                    <Text>Kaffir Lime Vodka</Text>
                    <Text>LemonGrass, Ginger, Citrus</Text>

                    <View style={tailwind('flex my-3 flex-row')}>
                        <View>
                            <Text>FRW 5,000</Text>
                        </View>

                        <View style={tailwind('flex flex-row bg-white mx-4 p-2 h-8 rounded-md')}>
                            <Image style={tailwind('w-4 h-4 border-1')} source={require(`../assets/icons/add-fill.png`)} />
                            <TextInput placeholder='2' style={tailwind('px-2')} />
                            <Image style={tailwind(' w-4 h-4')} source={require(`../assets/icons/subtract-fill.png`)} />
                        </View>
                    </View>
                </View>
            </View>


        // </View>

    )
}
