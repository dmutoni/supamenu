import React from 'react';
import { createContext, useState, useEffect } from "react";
import { Text, View } from '../components/Themed';
import { getToken } from '../helpers/GetData';
const AuthContext = createContext<{
    authedUser: any,
    setAuthUser: (user: any) => void,
    isLoggedIn: boolean,
    setIsLoggedIn: (status: boolean) => void,
}>({
    authedUser: {},
    setAuthUser: (user: any) => null,
    isLoggedIn: false,
    setIsLoggedIn: () => null,
});
const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        (async function () {
            let token = await getToken();
            setIsLoggedIn(token != null);
            setIsLoading(false);
        })();
    }, []);
    if (isLoading)
        return (
            <View>
                <Text>Loading</Text>
            </View>
        );
    return (
        <AuthContext.Provider
            value={{
                authedUser: user,
                setAuthUser: setUser,
                isLoggedIn: isLoggedIn,
                setIsLoggedIn: setIsLoggedIn,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
export { AuthContext, AuthProvider };