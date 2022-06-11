import React, { useEffect, useState } from 'react'
import { Text, View } from '../components/Themed'
import WishItemScreen from '../components/WishItemScreen'
import { useTailwind } from 'tailwind-rn/dist';
import { Alert, FlatList } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import Button from '../components/Button';
import { StackActions } from '@react-navigation/native';
import { IItems, IOrderRequest, RootStackScreenProps, TWishListParam } from '../types';
import Back from '../components/Back';
import { useTotalPrice } from '../context/PriceContext';
import TotalPrice from '../components/TotalPrice';
import { makeOrderApi } from '../services/menu';

export default function WishListScreen({ navigation, route }: RootStackScreenProps<'WishList'>) {
    const itemsData: TWishListParam = route?.params as unknown as TWishListParam;
    const [initialPrice] = useState(itemsData.item.reduce((acc, cur) => acc + cur.unitPrice, 0));
    const [newItems] = useState(itemsData.item.map((item) => ({ ...item, quantity: 0 })));
    const [itemsMap, setItemsMap] = useState([]);
    const tailwind = useTailwind();

    const { dispatch, state } = useTotalPrice();

    useEffect(() => {
        dispatch({ type: "SET", price: 0 })

        let newObj: any = { ...itemsMap };

        for (let i = 0; i < itemsData.item.length; i++) {
            newObj[itemsData.item[i].id.toString()] = 0;
        }
        setItemsMap(newObj);
    }, [initialPrice]);

    const makeOrder = async () => {
        try {
            let orderDetails = [];

            let keys: any = Object.keys(itemsMap);

            for (let i = 0; i < keys.length; i++) {
                orderDetails.push({
                    item: parseInt(keys[i]),
                    quantity: itemsMap[keys[i]],
                });
            }

            const orderDTO: IOrderRequest = {
                orderType: "BOOKING",
                seat: 0,
                status: "ORDERING",
                orderDetails,
            };

            try {
                const result = await makeOrderApi(orderDTO);
                if (state.totalPrice == 0) {
                    Alert.alert("Error", "The cart is empty");
                } else {
                    Alert.alert("Sucsess", "Order booked successfully");
                    navigation.navigate('Checkout', { id: result.data.id });
                }

            } catch (error: any) {
                Alert.alert("Error", "Order wasn't booked sucessfylly");
            }
        } catch (error: any) {
            return Alert.alert("Bad Request", error.response.data);
        }
    }

    const renderItem = ({ item }: { item: IItems }) => (
        <View style={tailwind('py-2')}>
            <WishItemScreen id={item.id} setItemsMap={setItemsMap} name={item.name} ingredients={[item.description]} price={item.unitPrice} amount={item.quantity} currency={'RWF'} />
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
                <Button title='Proceed to checkout' onPress={() => makeOrder()} />
            </View>
        </View>
    )
}
