import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { ScrollView } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';
import Button from './Button';
import Input from './Input';
import Logo from './Logo';
import Separator from './Separator';
import { Text, View } from './Themed'

export default function Register() {
    const tailwind = useTailwind();
    const navigation = useNavigation();

    const goToLogin = () => {
        navigation.navigate('Login');
    }
    return (
        <View style={tailwind('bg-orange h-full')}>
            <ScrollView showsVerticalScrollIndicator={false} style={tailwind('bg-white rounded-tl-2xl rounded-tr-2xl mt-20 h-full px-4')}>
                <View style={tailwind('my-6 bg-blue-500')}>
                    <Logo />
                </View>

                <Text style={tailwind('text-center text-base')}>Welcome...</Text>
                <Text style={tailwind('text-center text-sm py-5 text-gray-400')}>Please fill in the information</Text>
                <Input placeholder="Full name" name={require(`../assets/icons/user.png`)} />
                <Input placeholder='Phone number' name={require(`../assets/icons/phone.png`)} />
                <Input placeholder='Your email' name={require(`../assets/icons/mail.png`)} />
                <Input placeholder='Your password' name={require(`../assets/icons/lock.png`)} />
                <Button title='Proceed' />

                <View style={tailwind('flex flex-row my-4 mx-16 items-center justify-center')}>
                    <Separator />
                    <Text style={tailwind('px-3 text-gray-400 font-bold')}>OR</Text>
                    <Separator />
                </View>

                <Text style={tailwind('py-4 pb-6 text-gray-400 text-center')}>If you have a PMG account</Text>

                <Button title='Sign in' onPress={goToLogin} />
                <View style={tailwind('flex flex-row justify-center items-center pb-16')}>
                    <Text style={tailwind('py-4 text-gray-400 text-sm text-center')}>Already have an account?</Text>
                    <Text style={tailwind('py-4 text-orange text-sm text-center px-2')} onPress={goToLogin}>Sign in</Text>
                </View>
            </ScrollView>
        </View>
    )
}
