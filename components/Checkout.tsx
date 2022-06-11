import { Fontisto } from '@expo/vector-icons';
import { StackActions } from '@react-navigation/native';
import React, { useState } from 'react'
import { Image, Modal, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';
import { RootStackScreenProps } from '../types';
import Back from './Back'
import Button from './Button';
import ModeOfPayment from './ModeOfPayment';
import { Text, View } from './Themed'

export default function Checkout({ navigation }: RootStackScreenProps<'Checkout'>) {
    const tailwind = useTailwind();
    const popAction = StackActions.pop(1);
    const [showModal, setShowModal] = useState<boolean>(false);

    const modal = () => {
        setShowModal(true);
        console.log(showModal);

    }

    return (
        <>
            <Modal animationType="fade" transparent={true} visible={showModal}>
                <View style={styles.modalContainer}>
                    <View style={tailwind('mb-3 bg-white border border-gray-100 rounded-md')}>
                        <TextInput placeholder={'Phone number'} keyboardType='phone-pad' style={{ width: 250, height: 45, paddingLeft: 10 }} />
                    </View>
                    <TouchableOpacity style={tailwind('bg-green m-4 flex flex-row py-2 px-3 rounded-xl flex justify-center items-center')} onPress={() => navigation.navigate('CheckForDetails')}>
                        <Text style={tailwind('ml-4 text-white font-bold text-lg')}>Pay for the order</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
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
                <View style={tailwind('mx-8 mt-12 py-4')}>
                    <ModeOfPayment onPress={modal} name='Mobile Money' image={require('../assets/images/mobile-money.png')} />
                    <ModeOfPayment onPress={modal} name='Airtel Money' image={require('../assets/images/airtel-money.png')} />
                    <ModeOfPayment onPress={modal} name='Cash' image={require('../assets/images/cash.png')} />
                </View>
                <View style={tailwind('flex justify-center items-center py-4')}>
                    <Text style={tailwind('text-gray-500 text-sm')}>We will send you an order details to your</Text>
                    <Text style={tailwind('text-gray-500 text-sm')}>email after the successful payment</Text>
                </View>
                <TouchableOpacity style={tailwind('bg-green m-4 flex flex-row py-5 rounded-xl flex justify-center items-center')} onPress={() => navigation.navigate('CheckForDetails')}>
                    <Fontisto name="locked" size={24} color="white" />
                    <Text style={tailwind('ml-4 text-white font-bold text-lg')}>Pay for the order</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    modalContainer: {
        height: 200, alignItems: 'center',
        marginTop: 200,
        marginHorizontal: 30,
        justifyContent: 'center',
        backgroundColor: 'white',
        borderColor: 'green',
        borderWidth: 2,
        borderRadius: 10,
        shadowOffset: {
            width: 9,
            height: 8,
        },
        elevation: 15,
        shadowOpacity: 0.9,
        shadowColor: '#25d482',
        shadowRadius: 4.9,
    }
})

