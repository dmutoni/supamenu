import { Button, SafeAreaView, TextInput, View, Image, Text } from 'react-native'
import { useTailwind } from 'tailwind-rn';
import React from 'react';

export default function ScannerScreen() {
    const tailwind = useTailwind();
    return (

        <View style={tailwind(' bg-orange h-full pt-32 items-center')}>
            <View style={tailwind('flex flex-row items-center bg-white border border-gray-100 rounded-full ')}>
                <Image style={tailwind('p-1 m-2')} source={require(`../assets/icons/search-line.png`)} />
                <TextInput placeholder='Search any prefered restaurant' style={tailwind('h-12 py-2 px-4')} />

            </View>
            <Text style={tailwind('m-12')}>or</Text>
            <View style={tailwind('p-3')}>
                <Image style={tailwind('p-3 w-32 h-32 ')} source={require(`../assets/icons/qr-scan-2-line.png`)} />
            </View>
            <Text style={tailwind('mt-6')}>Pay , Scan & Play</Text>
        </View>


    )
}

