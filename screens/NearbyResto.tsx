import { StackActions } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StyleSheet, Image, TextInput, ScrollView, ToastAndroid } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';
import Back from '../components/Back';
import { OneResto } from '../components/OneResto';
import Separator from '../components/Separator';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function NearbyResto({ navigation }: RootTabScreenProps<'TabTwo'>) {
    const tailwind = useTailwind();
    const popAction = StackActions.pop(1);
    return (
        <SafeAreaView style={tailwind('h-full bg-white')}>
            <View style={tailwind('items-start flex')}>
                <View style={tailwind('bg-white flex flex-row p-5 w-full mt-4')}>
                    <Back onPress={() => navigation.dispatch(popAction)} />
                    <View style={tailwind('px-3 items-center flex justify-center')}>
                        <TextInput placeholder='Search...' style={tailwind('text-gray-300 ')}></TextInput>
                    </View>
                </View>
            </View>

            <View style={tailwind('w-full h-[1px] bg-gray-300')} />

            <Text style={tailwind('ml-4 my-5 text-sm items-start text-orange font-bold flex')}>Nearby Restaurants</Text>

            <ScrollView>
                <View style={tailwind('mx-4')}>
                    <OneResto title={'Choose Kigali'} tags={'World, African, Pizzeria, Coffee'} />
                    <OneResto title={'Choose Kigali'} tags={'World, African, Pizzeria, Coffee'} />
                    <OneResto title={'Choose Kigali'} tags={'World, African, Pizzeria, Coffee'} />
                    <OneResto title={'Choose Kigali'} tags={'World, African, Pizzeria, Coffee'} />
                    <OneResto title={'Choose Kigali'} tags={'World, African, Pizzeria, Coffee'} />
                    <OneResto title={'Choose Kigali'} tags={'World, African, Pizzeria, Coffee'} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
