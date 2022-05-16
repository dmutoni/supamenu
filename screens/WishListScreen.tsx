import React from 'react'
import { Text, View } from '../components/Themed'
import WishItemScreen, { IItemProps } from '../components/WishItemScreen'
import { useTailwind } from 'tailwind-rn/dist';
import { FlatList, ListRenderItem, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign, FontAwesome, Fontisto } from '@expo/vector-icons';
import Button from '../components/Button';
import { StackActions } from '@react-navigation/native';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';

const drinks: IItemProps[] = [
    {
        name: 'Coca Cola',
        ingredients: ['kafilla, lemon grass, ginger, citrus'],
        price: 5000,
        currency: 'RWF',
        amount: 2,
    },
    {
        name: 'Singapole sling',
        ingredients: ['kafilla, lemon grass, ginger, citrus'],
        price: 5000,
        currency: 'RWF',
        amount: 3,
    },
    {
        name: 'White russian',
        ingredients: ['kafilla, lemon grass, ginger, citrus'],
        price: 5000,
        currency: 'RWF',
        amount: 4,
    },
]
    ;

export default function WishListScreen({ navigation }: RootTabScreenProps<'TabTwo'>) {
    const tailwind = useTailwind();
    const renderItem = ({ item }: { item: IItemProps }) => (
        <View style={tailwind('py-2')}>
            <WishItemScreen {...item} />
        </View>
    )
    const popAction = StackActions.pop(1);

    return (
        <View>
            <View style={tailwind('pt-12 h-full mx-4 bg-gray-50')}>
                <TouchableOpacity onPress={() => navigation.dispatch(popAction)} style={tailwind('bg-gray-100 rounded-md w-12 h-12 justify-center items-center')}>
                    <Fontisto name="angle-left" size={24} color="orange" />
                </TouchableOpacity>
                <View style={tailwind('flex flex-col items-end mb-2 mt-2')}>
                    <Text style={tailwind('text-xl font-bold text-3xl mb-2')}>Choose Kigali</Text>
                    <Text style={tailwind('text-orange text-2xl')}>Drinks</Text>
                </View>
                <View>
                    <FlatList
                        data={drinks}
                        renderItem={renderItem}
                        keyExtractor={item => item.name}
                    />
                </View>
                <View style={tailwind('flex flex-row items-center justify-center mt-4')}>
                    <Text style={tailwind('text-xl font-bold text-orange mr-4')}>more drinks</Text>
                    <Fontisto name="arrow-right-l" size={30} color="orange" />
                </View>
                <View style={tailwind('flex flex-row justify-between my-6')}>
                    <Text style={tailwind('font-bold text-xl')}>Total</Text>
                    <Text style={tailwind('font-bold text-orange text-xl')}>Frw 16, 000</Text>
                </View>
                <Button title='Proceed to checkout' />
            </View>
        </View>
    )
}
