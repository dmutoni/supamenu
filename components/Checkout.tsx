import { StackActions } from '@react-navigation/native';
import React from 'react'
import { Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTailwind } from 'tailwind-rn/dist';
import { RootStackParamList, RootStackScreenProps, RootTabScreenProps } from '../types';
import Back from './Back'
import Button from './Button';
import { Text, View } from './Themed'

export default function Checkout({ navigation }: RootStackScreenProps<'Checkout'>) {
    const tailwind = useTailwind();
    const popAction = StackActions.pop(1);
    return (
        <View style={tailwind('bg-white h-full')}>
            <View style={[tailwind('w-[95%] pt-8 h-[28%] rounded-b-3xl mr-8 px-4'), {
                shadowOffset: {
                    width: 9,
                    height: 8,
                },
                elevation: 15,
                shadowOpacity: 0.9,
                shadowColor: '#25d482',
                shadowRadius: 4.9,
            }]}>
                <Back onPress={() => navigation.dispatch(popAction)} iconColor="#25d482" />
                <View style={tailwind('flex flex-row items-center justify-between')}>
                    <View style={tailwind('flex flex-row items-center')}>
                        <Text style={tailwind('font-bold text-xl mr-1')}>Checkout</Text>
                        <Image source={require('../assets/images/visa-gold.png')} style={tailwind('h-4 w-8')} />
                    </View>
                    <View style={tailwind('flex items-end')}>
                        <Text style={tailwind('font-bold text-green text-xl')}>Frw 16, 000</Text>
                        <Text style={tailwind('text-gray-400 text-[16px] font-medium')}>Including VAT(18%)</Text>
                    </View>
                </View>
                <View style={tailwind('w-full items-center bg-green flex flex-row rounded-3xl absolute mt-44 ml-4')}>
                    <View style={tailwind('w-2/4 rounded-3xl border border-slate-50 mr-4')}>
                        <Button title='Credit card' radius={'rounded-3xl'} color={'bg-white'} textColor={'text-black'} textFontSize={'text-lg'} />
                    </View>
                    <TouchableOpacity style={tailwind('bg-green py-5 rounded-3xl flex justify-center items-center')}>
                        <Text style={tailwind('text-white font-bold text-lg')}>Mobile & Cash</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
