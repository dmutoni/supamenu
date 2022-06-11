import React, { useEffect, useState } from 'react'
import { Text, View } from '../components/Themed'
import WishItemScreen from '../components/WishItemScreen'
import { useTailwind } from 'tailwind-rn/dist';
import { FlatList } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import Button from '../components/Button';
import { StackActions } from '@react-navigation/native';
import { IItems, RootStackScreenProps, TWishListParam } from '../types';
import Back from '../components/Back';
import { PriceContextProvider, useTotalPrice } from '../context/PriceContext';
import TotalPrice from '../components/TotalPrice';

export default function WishListScreen({ navigation, route }: RootStackScreenProps<'WishList'>) {
    const itemsData: TWishListParam = route?.params as unknown as TWishListParam;
    const [initialPrice, setInitialPrice] = useState(itemsData.item.reduce((acc, cur) => acc + cur.unitPrice, 0));
    const [newItems, setNewItems] = useState(itemsData.item.map((item) => ({ ...item, quantity: 1 })));

    const tailwind = useTailwind();

    const { dispatch, state } = useTotalPrice();

    useEffect(() => {
        itemsData.item.forEach((item) => {
            dispatch({ type: "SET", price: initialPrice })
        })
    }, [initialPrice]);


    const renderItem = ({ item }: { item: IItems }) => (
        <View style={tailwind('py-2')}>
            <WishItemScreen id={item.id} name={item.name} ingredients={[item.description]} price={item.unitPrice} amount={item.quantity} currency={'RWF'} />
        </View>
    )
    const popAction = StackActions.pop(1);

    return (
        <View>
            <View style={tailwind('pt-12 h-full mx-4 bg-gray-50')}>
                <Back onPress={() => navigation.dispatch(popAction)} />
                <View style={tailwind('flex flex-col items-end mb-2 mt-2')}>
                    <Text style={tailwind('text-xl font-bold text-3xl mb-2')}>Choose Kigali</Text>
                    <Text style={tailwind('text-orange text-2xl')}>Drinks</Text>
                </View>
                <View>
                    <FlatList
                        data={newItems}
                        renderItem={renderItem}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>
                <View style={tailwind('flex flex-row items-center justify-center mt-4')}>
                    <Text style={tailwind('text-xl font-bold text-orange mr-4')}>more drinks</Text>
                    <Fontisto name="arrow-right-l" size={30} color="orange" />
                </View>
                <TotalPrice />
                <Button title='Proceed to checkout' onPress={() => navigation.navigate('Checkout')} />
            </View>
        </View>
    )
}
