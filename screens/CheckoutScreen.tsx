import React from 'react'
import Checkout from '../components/Checkout'
import { RootStackParamList, RootStackScreenProps } from '../types'

export default function CheckoutScreen({ navigation, route }: RootStackScreenProps<'Checkout'>) {
    return (
        <Checkout navigation={navigation} route={route} />
    )
}
