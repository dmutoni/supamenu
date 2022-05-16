/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  Login: undefined;
  Register: undefined;
  NearbyResto: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  NearbyResto: undefined;
  Login: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
  >;

export type TOneResto = {
  img?: string
  title: string
  tags: string
}

export interface ILogin {
  login: string;
  password: string;
}

export interface ISignUp {
  firstName: string;
  secondName: string;
  mobile: string;
  email: string;
  password: string;
}

export interface Response<T = unknown> {
  data: T;
  success: boolean;
  message: string;
}

export enum Status {
  ACTIVE,
  INACTIVE,
}
export interface LoginResponse<T = unknown> extends Response<T> {
  token: {
    accessToken: string;
    refreshToken: string;
    tokenType: string;
    expireInMsec: string;
  };
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  username: string;
  email: string;
  status: Status;
  authorities: {
    authority: string;
  }
} 
