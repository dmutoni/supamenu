import React from 'react';
import { useTailwind } from 'tailwind-rn/dist';
import Logo from '../components/Logo';
import { View } from '../components/Themed';

import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const tailwind = useTailwind();

  return (
    <View style={tailwind('h-full justify-center items-center flex')}>
      <Logo />
    </View>
  );
}

