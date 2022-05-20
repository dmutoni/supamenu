import React, { useEffect } from 'react'
import { ActivityIndicator, Image, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';
import { Text, View } from './Themed';
import MenuItem from './MenuItem';
import { IMenuCategory, IMenuCategoryResponse } from '../types';
import { getMenuCategories } from '../services/menu';

export default function ChooseMenu() {
    const tailwind = useTailwind();
    const [isLoading, setIsLoading] = React.useState(true);
    const [data, setData] = React.useState<IMenuCategory[]>([]);

    useEffect(() => {
        getMenuCategories().then((info) => {
            setData(info.data.content);
            setIsLoading(false);
        }).catch(error => {
            console.log(error);
        })

    }, [])
    return (
        <ScrollView style={tailwind('h-full pt-20 bg-black')}>
            <Text style={tailwind('text-orange text-2xl text-center')}>Choose Kigali</Text>
            <View style={tailwind('bg-black')}>

                <View style={tailwind('flex flex-row bg-black items-center justify-center py-12')}>
                    <Image style={tailwind(' rounded-xl')} source={require('../assets/images/menu.png')} />
                </View>

                <Text style={tailwind('text-center text-orange text-2xl')}>Menu</Text>
                <View style={tailwind('mx-16 py-12 bg-black')}>
                    {
                        isLoading ? <ActivityIndicator size="small" color="white" /> :
                            data?.map((menu) => (
                                <MenuItem key={menu.id} title={menu.name} />
                            ))
                    }
                    {
                        !isLoading && data?.length === 0 && <Text style={tailwind('text-center text-gray-500')}>No restaurants found</Text>
                    }
                </View>


            </View>
        </ScrollView>
    )
}
