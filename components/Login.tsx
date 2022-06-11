import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react'
import { Alert, Image, ScrollView } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';
import Button from './Button';
import Input from './Input';
import Logo from './Logo';
import Separator from './Separator';
import { Text, View } from './Themed'
import { ILogin, LoginResponse } from '../types';
import Validator from "validatorjs";
// @ts-ignore
import en from "validatorjs/src/lang/en"
import { login } from '../services/authentication';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../context/AuthContext';

export default function Login() {
    const tailwind = useTailwind();
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const {setIsLoggedIn} = useContext(AuthContext)

    const goRoot = () => {
        navigation.navigate('Root');
    }

    const handleLogin = async () => {

        Validator.setMessages("en", en)

        const valid = new Validator({ email, password }, {
            email: "required|email|min:3",
            password: "required|string|min:3",
        })

        if (valid.fails()) {
            Alert.alert("Error", Object.values(valid.errors.all())[0][0])
            return;
        }
        const body: ILogin = {
            login: email,
            password
        }
        setIsLoading(true);
        await login(body).then((response) => {
            if (response.status === 200) {
                const { data } = response;
                const _storeData = async (value: LoginResponse) => {
                    try {
                        const jsonValue = JSON.stringify(value);
                        await AsyncStorage.setItem(
                            'user',
                            jsonValue
                        );
                    } catch (error) {
                        // console.log(error);
                        Alert.alert('Failed to save user data');
                    }
                };
                _storeData(data);
                setIsLoading(false);
                setIsLoggedIn(true)
                goRoot();
            }
        }).catch((error) => {
            Alert.alert('Error', error.response.data.apierror.message);
            setIsLoading(false);
        })

    }

    return (
        <View style={tailwind('bg-orange h-full')}>
            <ScrollView showsVerticalScrollIndicator={false} style={tailwind('bg-white rounded-tl-2xl rounded-tr-2xl mt-20 h-full px-4')}>
                <View style={tailwind('my-6 bg-blue-500')}>
                    <Logo />
                </View>

                <Text style={tailwind('text-center text-base')}>Welcome...</Text>
                <Text style={tailwind('text-center text-sm py-5 text-gray-400')}>Sign in to continue</Text>
                <Input placeholder='Your email' value={email} keyBoardType='email-address' onChangeText={text => setEmail(text)} name={require(`../assets/icons/mail.png`)} />
                <Input placeholder='Your password' value={password} secureTextEntry={true} onChangeText={text => setPassword(text)} name={require(`../assets/icons/lock.png`)} />
                <Button title='Sign in' loading={isLoading} onPress={handleLogin} />

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
