import React from 'react'
import { useTailwind } from 'tailwind-rn/dist'
import { RootStackParamList, RootStackScreenProps } from '../types';
import Button from './Button';
import Logo from './Logo';
import Ratings from './Rating';
import { Text, View } from './Themed'

export default function FeedBack({ navigation }: RootStackScreenProps<'FeedBack'>) {
    const tailwind = useTailwind();
    return (
        <View style={tailwind('bg-black h-full flex items-center')}>
            <View style={tailwind('my-28')}></View>
            <Text style={tailwind('text-orange text-lg')}>Yay!</Text>
            <Text style={tailwind('text-orange text-lg')}>We value your feedback</Text>
            <Text style={tailwind('text-orange text-lg')}>Please rate your experience</Text>
            <Text style={tailwind('text-orange text-lg')}>below:</Text>
            <Ratings />
            <Text style={tailwind('text-orange text-lg mt-24')}>Thank you for helping us</Text>
            <Text style={tailwind('text-orange text-lg mb-24')}>improve our service!</Text>
            <Logo darkMode={true} />
        </View>
    )
}
