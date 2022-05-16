import React, { useEffect } from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { useTailwind } from 'tailwind-rn/dist'
import { Text, View } from './Themed'

export default function Ratings() {
    const tailwind = useTailwind();

    const [Default_Rating, setDefault_Rating] = React.useState(3);
    const [Max_Rating, setMax_Rating] = React.useState(5);
    const [React_Native_Rating_Bar, setReact_Native_Rating_Bar] = React.useState<React.ReactNode[]>([])

    const star: string = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
    const starWithBorder: string = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';

    function UpdateRating(key: any) {
        return function () {
            setDefault_Rating(key);
        }
    }

    useEffect(() => {
        let final = [];
        for (var i = 1; i <= Max_Rating; i++) {
            final.push(
                <TouchableOpacity
                    activeOpacity={0.7}
                    key={i}
                    onPress={UpdateRating(i)}>
                    <Image
                        style={tailwind('w-12 h-12')}
                        source={
                            i <= Default_Rating
                                ? { uri: star }
                                : { uri: starWithBorder }
                        }
                    />
                </TouchableOpacity>
            );
        }

        setReact_Native_Rating_Bar(final)
    }, [Default_Rating])

    return (
        <View style={tailwind('flex bg-black justify-center items-center pt-5')}>
            {/*View to hold our Stars*/}
            {/* <Text>some texts</Text> */}
            <View style={tailwind('bg-black justify-center flex flex-row mt-4')}>{React_Native_Rating_Bar}</View>
        </View>
    )
}
