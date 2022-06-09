import React from 'react'
import { TextInput } from 'react-native'
import { useTailwind } from 'tailwind-rn/dist';
import { View } from './Themed'

interface ISearchBar {
    searchPhrase: string,
    setSearchPhrase: (value: string) => void
}

export default function SearchBar({searchPhrase, setSearchPhrase}: ISearchBar)  {
    const tailwind = useTailwind();
    return (
        <View style={tailwind('px-3 items-center flex justify-center')}>
            <TextInput placeholder='Search...' onChangeText={setSearchPhrase} style={tailwind('text-gray-300 ')}></TextInput>
        </View>
    )
}
