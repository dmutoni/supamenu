import { StackActions } from '@react-navigation/native';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RootStackParamList, RootStackScreenProps, RootTabScreenProps } from '../types';
import Back from './Back'
import { Text } from './Themed'

export default function Checkout({ navigation }: RootStackScreenProps<'Checkout'>) {
    const popAction = StackActions.pop(1);
    return (
        <SafeAreaView>
            <Back onPress={() => navigation.dispatch(popAction)} />
        </SafeAreaView>
    )
}
