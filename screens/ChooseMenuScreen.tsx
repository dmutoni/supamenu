import React from 'react'
import ChooseMenu from '../components/ChooseMenu'
import { RootStackParamList, RootStackScreenProps } from '../types'
export default function ChooseMenuScreen({ navigation, route }: RootStackScreenProps<'ChooseMenu'>) {
    return (
        <ChooseMenu navigation={navigation} route={route} />
    )
}
