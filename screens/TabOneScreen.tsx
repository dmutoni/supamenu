import React from 'react';
import { RootTabScreenProps } from '../types';
import RegisterScreen from './RegisterScreen';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <RegisterScreen />
  );
}

