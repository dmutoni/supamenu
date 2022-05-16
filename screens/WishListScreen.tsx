import React from 'react'
import { View } from '../components/Themed'
import WishItemScreen, { IItemProps } from '../components/WishItemScreen'
import { useTailwind } from 'tailwind-rn/dist';
import { FlatList, ListRenderItem } from 'react-native';

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
        <View style={tailwind('pt-20 h-full')}>
            <FlatList
                data={drinks}
                renderItem={renderItem}
                keyExtractor={item => item.name}
            />
        </View>


    )
}
