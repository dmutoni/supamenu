import React from 'react';
import { SafeAreaView, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';
import { OneResto } from '../components/OneResto';
import { Text, View } from '../components/Themed';

export default function NearbyResto() {
    const tailwind = useTailwind();
    return (
        <SafeAreaView style={tailwind('h-full')}>
            <View style={tailwind('items-start flex')}>
                <View style={tailwind('bg-white flex flex-row p-5 w-full mt-4')}>
                    <View style={tailwind('flex items-center justify-center rounded-lg px-3 h-8 text-orange w-8')}>
                        <Image style={tailwind('p-1 h-4 w-4 bg-violet')} source={require(`../assets/icons/left.png`)}></Image>
                    </View>
                    <View style={tailwind('px-3 items-center flex justify-center')}>
                        <TextInput placeholder='Search...' style={tailwind('text-gray-300 ')}></TextInput>
                    </View>
                </View>
            </View>

            <Text style={tailwind('ml-3 my-5 text-xs items-start text-orange font-bold flex')}>Nearby Restaurants</Text>

            <ScrollView>
                <View>
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
