/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { AntDesign, FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import WishListScreen from '../screens/WishListScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { TailwindProvider } from 'tailwind-rn';
import utilities from '../tailwind.json';
import NearbyResto from '../screens/NearbyResto';
import Register from '../components/Register';
import Login from '../components/Login';
import CheckoutScreen from '../screens/CheckoutScreen';
import CheckForDetailsScreen from '../screens/CheckForDetailsScreen';
import FeedBackScreen from '../screens/FeedBackScreen';
import ChooseMenuScreen from '../screens/ChooseMenuScreen';
import ScannerScreen from '../screens/ScannerScreen';
import WishItemScreen from '../components/WishItemScreen';
import { AuthContext } from '../context/AuthContext';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {

  const {isLoggedIn} = React.useContext(AuthContext)

  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer
        linking={LinkingConfiguration}
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        {
          isLoggedIn ? <RootNavigator /> : <AuthNavigator />
        }
      </NavigationContainer>
    </TailwindProvider>

  );
}



/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NearbyResto" component={NearbyResto} options={{ headerShown: false }} />
      <Stack.Screen name="ChooseMenu" component={ChooseMenuScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CheckForDetails" component={CheckForDetailsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="WishList" component={WishListScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} options={{ headerShown: false }} />
      <Stack.Screen name="FeedBack" component={FeedBackScreen} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const AuthStack = createNativeStackNavigator<RootStackParamList>();

function AuthNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Register" component={Register} options={{ headerShown: false }} />
      <AuthStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    </AuthStack.Navigator>
  )
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarInactiveTintColor: 'black',
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          height: 60,
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
          marginHorizontal: 1,
          paddingHorizontal: 20,
        },
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          headerShown: false,
          title: '',
          tabBarIcon: ({ color }) => <AntDesign name="home" color={color}
            style={{ marginRight: 15 }} size={24} />,

        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={NearbyResto}
        options={{
          title: '',
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons name="notifications-outline" size={24} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Scan"
        component={ScannerScreen}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="credit-card-scan-outline" size={24} color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Timer"
        component={NearbyResto}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({ color }) => <Ionicons name="md-time-outline" size={24} color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Cart"
        component={WishListScreen}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({ color }) => <Ionicons name="md-cart-outline" size={24} color={color} />,
        }}
      />

    </BottomTab.Navigator>

  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
