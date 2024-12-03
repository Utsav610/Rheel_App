import { View, Text } from 'react-native'
import React from 'react'

// Third party
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Splash from '../screens/AuthScreens/Splash';
import routeNames from '../constants/routeNames';
import Splash_2 from '../screens/AuthScreens/Splash_2';
import Login from '../screens/AuthScreens/Login';

const Stack = createNativeStackNavigator()

const AppStack = () => {
    
  return (
    <Stack.Navigator initialRouteName={routeNames.Splash} screenOptions={{headerShown:false}}>
        <Stack.Screen name={routeNames.Splash} component={Splash}/>
        <Stack.Screen name={routeNames.Splash_2} component={Splash_2}/>
        <Stack.Screen name={routeNames.Login} component={Login}/>

    </Stack.Navigator>
  )
}

export default AppStack