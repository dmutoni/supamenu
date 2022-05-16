import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import React from 'react';

import EditScreenInfo from '../components/EditScreenInfo';
import { SafeAreaView, View, Text } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import { SearchBar } from 'react-native-screens';
export default function ModalScreen() {
  const tailwind = useTailwind();
  return (
    <SafeAreaView style={tailwind('h-full')}>
      <View style={tailwind('pt-12 items-center')}>
        <View style={tailwind('bg-blue-200 px-3 py-1 rounded-full')}>
          <Text style={tailwind('text-blue-800 font-semibold')}>
            Hello Tailwind
          </Text>
          <SearchBar>

          </SearchBar>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
