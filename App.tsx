import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthContext, AuthProvider } from './context/AuthContext';
import { PriceContextProvider } from './context/PriceContext';
import { getToken } from './helpers/GetData';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  useEffect(() => {
    (async function () {
      const token = await getToken();
      if (token) {
      }
    })();
  }, [])

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AuthProvider>
          <PriceContextProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </PriceContextProvider>
        </AuthProvider>
      </SafeAreaProvider>
    );
  }
}
