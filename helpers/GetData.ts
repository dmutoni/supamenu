import AsyncStorage from "@react-native-async-storage/async-storage";

const getToken = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('user');
        if (jsonValue !== null) {
            return JSON.parse(jsonValue).token.accessToken;
        }
        return null;
        //   return ;
    } catch (e) {
        // error reading value
    }
}

export {
    getToken
}