import React from 'react'
import CheckForDetails from '../components/CheckForDetails'
import { RootStackScreenProps } from '../types'

export default function CheckForDetailsScreen({ navigation, route }: RootStackScreenProps<'CheckForDetails'>) {
    return (
        <CheckForDetails navigation={navigation} route={route} />
    )
}
