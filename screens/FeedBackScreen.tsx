import React from 'react'
import FeedBack from '../components/FeedBack'
import { RootStackScreenProps } from '../types'

export default function FeedBackScreen({ navigation, route }: RootStackScreenProps<'FeedBack'>) {
    return (
        <FeedBack navigation={navigation} route={route} />
    )
}
