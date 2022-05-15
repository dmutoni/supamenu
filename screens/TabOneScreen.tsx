import React from 'react';
import Logo from '../components/Logo';

import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
<<<<<<< HEAD
    <SafeAreaView style={tailwind('h-full')}>
      <View style={tailwind('pt-12 items-center')}>
        <View style={tailwind('bg-blue-200 px-3 py-1 rounded-full')}>
          <Text style={tailwind('text-blue-800 font-semibold')}>
            Hello Nicocoooo
          </Text>
        </View>
      </View>
    </SafeAreaView>
=======
    <Logo />
>>>>>>> aa9c44560822b76998b731504fd5103f6f6c17d4
  );
}

