import { StackActions } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, TextInput, ActivityIndicator, ScrollView } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';
import Back from '../components/Back';
import { OneResto } from '../components/OneResto';
import { Text, View } from '../components/Themed';
import { searchResto } from '../services/restaurants';
import { RestaurantInfo, RestoDetails, RootTabScreenProps, TRestoParam } from '../types';



export default function NearbyResto({ navigation, route }: RootTabScreenProps<'Timer'>) {

    const search: TRestoParam = route.params as unknown as TRestoParam;
    const [isLoading, setIsLoading] = React.useState(true);
    const [data, setData] = React.useState<RestoDetails[]>([]);

    useEffect(() => {
        if (search.searchQuery) {
            searchResto(search.searchQuery).then((info) => {
                setData(info.data.content);
                setIsLoading(false);
            }).catch(error => {
                console.log(error);
            })
        }
    }, [])

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
                    {isLoading ? <ActivityIndicator size="small" color="white" /> :
                        data?.map((restaurant) => (
                            <OneResto id={restaurant.id} img={require('../assets/images/burg.jpg')} title={restaurant.name} tags={restaurant.address} key={restaurant.id} />
                        ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}