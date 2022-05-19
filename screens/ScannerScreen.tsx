import { TextInput, View, Image, Text, Keyboard } from 'react-native'
import { useTailwind } from 'tailwind-rn';
import React, { useEffect } from 'react';
import { searchResto } from '../services/restaurants';
import { useNavigation } from '@react-navigation/native';

export default function ScannerScreen() {
    const tailwind = useTailwind();
    const navigation = useNavigation();
    const [query, setQuery] = React.useState('');
    const [keyboardStatus, setKeyboardStatus] = React.useState(false);

    useEffect(() => {
        const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
            setKeyboardStatus(true);
        });
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            setKeyboardStatus(false);
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);

    useEffect(() => {
        async function getData() {
            navigation.navigate('NearbyResto', { searchQuery: query })
        }
        if (!keyboardStatus && query) getData();
    }, [keyboardStatus])


    return (

        <View style={tailwind(' bg-orange h-full pt-32 items-center')}>
            <View style={tailwind('flex flex-row items-center bg-white border border-gray-100 rounded-full ')}>
                <Image style={tailwind('p-1 m-2')} source={require(`../assets/icons/search-line.png`)} />
                <TextInput value={query} placeholder='Search any preferred restaurant' style={tailwind('h-12 py-2 px-4')} onChangeText={(text) => setQuery(text)} />

            </View>
            <Text style={tailwind('m-12')}>or</Text>
            <View style={tailwind('p-3')}>
                <Image style={tailwind('p-3 w-32 h-32 ')} source={require(`../assets/icons/qr-scan-2-line.png`)} />
            </View>
            <Text style={tailwind('mt-6')}>Pay , Scan & Play</Text>
        </View>


    )
}

