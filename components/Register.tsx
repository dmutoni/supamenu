import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Alert, ScrollView } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';
import Button from './Button';
import Input from './Input';
import Logo from './Logo';
import Separator from './Separator';
import { Text, View } from './Themed'
import Validator from "validatorjs";

// @ts-ignore
import en from "validatorjs/src/lang/en"

export default function Register() {
    const tailwind = useTailwind();
    const navigation = useNavigation();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState('');

    const goToLogin = () => {
        navigation.navigate('Login');
    }
    const goToResto = () => {
        navigation.navigate('NearbyResto')
    }

    const handleRegister = async () => {

        Validator.setMessages("en", en)

        const valid = new Validator({ firstName, lastName, email, password, mobile }, {
            firstName: "required|string|min:3",
            lastName: "required|string|min:3",
            email: "required|email|min:3",
            password: "required|string|min:3",
            mobile: "required|string|min:9"
        })

        if (valid.fails()) {
            Alert.alert("Error", Object.values(valid.errors.all())[0][0])
            return;
        }

    }

    return (
        <View style={tailwind('bg-orange h-full')}>
            <ScrollView showsVerticalScrollIndicator={false} style={tailwind('bg-white rounded-tl-2xl rounded-tr-2xl mt-20 h-full px-4')}>
                <View style={tailwind('my-6 bg-blue-500')}>
                    <Logo />
                </View>


                <Text style={tailwind('text-center text-base')} >Welcome...</Text>
                <Text style={tailwind('text-center text-sm py-5 text-gray-400')}>Please fill in the information</Text>
                <Input placeholder="First name" value={firstName} onChangeText={text => setFirstName(text)} name={require(`../assets/icons/user.png`)} />
                <Input placeholder="Last name" value={lastName} onChangeText={text => setLastName(text)} name={require(`../assets/icons/user.png`)} />
                <Input placeholder='Phone number' value={mobile} keyBoardType='phone-pad' onChangeText={text => setMobile(text)} name={require(`../assets/icons/phone.png`)} />
                <Input placeholder='Your email' value={email} keyBoardType='email-address' onChangeText={text => setEmail(text)} name={require(`../assets/icons/mail.png`)} />
                <Input placeholder='Your password' value={password} secureTextEntry={true} onChangeText={text => setPassword(text)} name={require(`../assets/icons/lock.png`)} />
                <Button title='Proceed' onPress={handleRegister} />

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
                    <Text style={tailwind('py-4 text-orange text-sm text-center px-2')} onPress={goToResto}>One Resto</Text>
                </View>
            </ScrollView>
        </View>
    )
}
