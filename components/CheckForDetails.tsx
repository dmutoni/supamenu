import { Fontisto } from '@expo/vector-icons'
import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { useTailwind } from 'tailwind-rn/dist'
import { RootStackScreenProps } from '../types'
import Button from './Button'
import Logo from './Logo'
import { Text, View } from './Themed'

export default function CheckForDetails({ navigation }: RootStackScreenProps<'CheckForDetails'>) {
    const tailwind = useTailwind();
    return (
        <View style={tailwind('bg-black h-full')}>
            <View style={tailwind('mt-12 bg-black')}>
                <Image source={require('../assets/images/payment.png')} style={tailwind(' ml-4')} />
                <View style={tailwind('bg-black flex items-center justify-center py-8')}>
                    <Text style={tailwind('text-orange text-xl font-bold')}>
                        Payment successful
                    </Text>
                    <Text style={tailwind('text-white text-lg mt-2')}>
                        We will send you an details and invoice in
                    </Text>
                    <Text style={tailwind('text-white text-lg ')}>
                        your contact
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('FeedBack')} style={tailwind('bg-black flex flex-row my-8')}>
                        <Text style={tailwind('font-bold text-white text-lg text-red-300 mr-4')}>
                            Check details
                        </Text>
                        <Fontisto name="arrow-right-l" size={30} color="orange" />
                    </TouchableOpacity>
                </View>
                <View style={tailwind('mx-8 bg-black')}>
                    <Button title='Download invoice' />
                </View>
                <View style={tailwind('bg-black py-8')}>
                    <Logo darkMode={true} />
                </View>
            </View>
        </View>
    )
}
