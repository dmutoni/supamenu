import React from 'react'
import { Text, View } from '../components/Themed'
import WishItemScreen, { IItemProps } from '../components/WishItemScreen'
import { useTailwind } from 'tailwind-rn/dist';
import { FlatList, ListRenderItem } from 'react-native';
import { AntDesign, FontAwesome, Fontisto } from '@expo/vector-icons';
import Button from '../components/Button';

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
    }
]
    ;

export default function WishListScreen() {
    const tailwind = useTailwind();
    const renderItem = ({ item }: { item: IItemProps }) => (
        <View style={tailwind('py-2')}>
            <WishItemScreen {...item} />
            {/* <WishItemScreen name={item.name} ingredients={item.ingredients} price={item.price} amount={item.amount} currency={item.currency} /> */}
        </View>
    )
    return (
        <View>
            <View style={tailwind('pt-20 h-full mx-4')}>
                <View>
                    <FlatList
                        data={drinks}
                        renderItem={renderItem}
                        keyExtractor={item => item.name}
                    />
                </View>
                <View style={tailwind('flex flex-row items-center justify-center mt-6')}>
                    <Text style={tailwind('text-xl font-bold text-orange mr-4')}>more drinks</Text>
                    <Fontisto name="arrow-right-l" size={30} color="orange" />
                </View>
                <View style={tailwind('flex flex-row justify-between my-6')}>
                    <Text style={tailwind('font-bold text-xl')}>Total</Text>
                    <Text style={tailwind('font-bold text-orange text-xl')}>Frw 16, 000</Text>
                </View>
                <Button title='Proceed' />
            </View>
        </View>
    )
}
