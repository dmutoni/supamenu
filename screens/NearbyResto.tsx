import { StackActions, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { SafeAreaView, TextInput, ActivityIndicator, ScrollView, FlatList } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';
import Back from '../components/Back';
import { OneResto } from '../components/OneResto';
import SearchBar from '../components/SearchBar';
import { Text, View } from '../components/Themed';
import { searchResto } from '../services/restaurants';
import { RestoDetails, RootTabScreenProps, TOneResto, TRestoParam } from '../types';



export default function NearbyResto({ route }: RootTabScreenProps<'Timer'>) {

    const search: TRestoParam = route?.params as unknown as TRestoParam;
    const navigation = useNavigation();
    const [isLoading, setIsLoading] = React.useState(true);
    const [data, setData] = React.useState<RestoDetails[]>([]);
    const [searchPhrase, setSearchPhrase] = React.useState('');

    useEffect(() => {
        if (search?.searchQuery) {
            searchResto().then((info) => {
                setData(info.data.content);
                setIsLoading(false);
            }).catch(error => {
                console.log(error);
            })
        }
    }, [])

    const tailwind = useTailwind();
    const popAction = StackActions.pop(1);

    const renderRestaurants = ({ restaurant }: { restaurant: RestoDetails }) => {
         if (searchPhrase === "") {
            return (
                <OneResto img={require('../assets/images/burg.jpg')} onPress={() => navigation.navigate('ChooseMenu', { id: restaurant.id })} title={restaurant.name} tags={restaurant.address} key={restaurant.id} />
            )
         } 
         if (restaurant.name.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
            return <OneResto img={require('../assets/images/burg.jpg')} onPress={() => navigation.navigate('ChooseMenu', { id: restaurant.id })} title={restaurant.name} tags={restaurant.address} key={restaurant.id} />
          }
          if (restaurant.address.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
            return <OneResto img={require('../assets/images/burg.jpg')} onPress={() => navigation.navigate('ChooseMenu', { id: restaurant.id })} title={restaurant.name} tags={restaurant.address} key={restaurant.id} />
          }
        return <Text></Text>
    }

    return (
        <View style={tailwind('h-full bg-white')}>
            <View style={tailwind('items-start flex')}>
                <View style={tailwind('bg-white flex flex-row p-5 w-full mt-4')}>
                    <Back onPress={() => navigation.dispatch(popAction)} />
                    <SearchBar searchPhrase={searchPhrase} setSearchPhrase={setSearchPhrase} />
                </View>
            </View>

            <View style={tailwind('w-full h-[1px] bg-gray-300')} />

            <Text style={tailwind('ml-4 my-5 text-sm items-start text-orange font-bold flex')}>Nearby Restaurants</Text>

            <View>
                <View style={tailwind('mx-4')}>
                   {
                        !isLoading ? <FlatList
                        data={data}
                        renderItem={({ item }) => renderRestaurants({ restaurant: item })}
                        keyExtractor={(item) => item.name}
                    /> : <ActivityIndicator size="small" color="orange" />
                }
                </View>
            </View>
        </View>
    );
}