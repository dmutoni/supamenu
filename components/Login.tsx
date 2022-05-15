import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, ScrollView } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';
import Navigation from '../navigation';
import Button from './Button';
import Input from './Input';
import Logo from './Logo';
import Separator from './Separator';
import { Text, View } from './Themed'

export default function Login() {
    const tailwind = useTailwind();
    const navigation = useNavigation();
    return (
        <View style={tailwind('bg-orange h-full')}>
            <ScrollView showsVerticalScrollIndicator={false} style={tailwind('bg-white rounded-tl-2xl rounded-tr-2xl mt-20 h-full px-4')}>
                <View style={tailwind('my-6 bg-blue-500')}>
                    <Logo />
                </View>

                <Text style={tailwind('text-center text-base')}>Welcome...</Text>
                <Text style={tailwind('text-center text-sm py-5 text-gray-400')}>Sign in to continue</Text>
                <Input placeholder='Your email' name={require(`../assets/icons/mail.png`)} />
                <Input placeholder='Your password' name={require(`../assets/icons/lock.png`)} />
                <Button title='Sign in' />

                <View style={tailwind('flex flex-row my-4 mx-16 items-center justify-center')}>
                    <Separator />
                    <Text style={tailwind('px-3 text-gray-400 font-bold')}>OR</Text>
                    <Separator />
                </View>

                <View style={tailwind('flex flex-row items-center justify-center border border-gray-100 rounded-md')}>
                    <Image source={require("../assets/icons/google.png")} height={24} width={24} />
                    <Text style={tailwind('py-4 text-gray-400 text-sm text-center px-16 font-medium')}>Sign in with Google</Text>
                </View>

                <View style={tailwind('flex flex-row items-center mt-4 justify-center border border-gray-100 rounded-md')}>
                    <Image source={require("../assets/icons/facebook.png")} height={24} width={24} />
                    <Text style={tailwind('py-4 text-gray-400 text-sm text-center px-16 font-medium')}>Sign in with facebook</Text>
                </View>

                <Text style={tailwind('pt-4 font-bold text-orange text-sm text-center px-2')}>Forgot Password?</Text>

                <View style={tailwind('flex flex-row justify-center items-center pb-16')}>
                    <Text style={tailwind('py-4 text-gray-400 text-sm text-center')}>Don't  have an account?</Text>
                    <Text style={tailwind('py-4 text-orange text-sm text-center px-2 font-bold')} onPress={() => navigation.navigate('Register')}>Register</Text>
                </View>
            </ScrollView>
        </View>
    )
}
