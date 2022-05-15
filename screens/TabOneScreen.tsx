import React from 'react';
import Logo from '../components/Logo';

import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <Logo />
  );
}

