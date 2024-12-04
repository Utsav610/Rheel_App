import { View, Text, Image } from 'react-native'
import React from 'react'

// Third party
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Splash from '../screens/AuthScreens/Splash';
import routeNames from '../constants/routeNames';
import Splash_2 from '../screens/AuthScreens/Splash_2';
import Login from '../screens/AuthScreens/Login';
import SignUp from '../screens/AuthScreens/SignUp';
import HeaderView from '../components/HeaderView';
import Home from '../screens/DashboardScreens/Home';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={routeNames.Home} component={Home} 
      options={{
        tabBarIcon: ({ color, size, focused }) => (
          <Image
            source={focused ? UserPlusSeleIcon : UserPlusIcon}
            style={{ width: size, height: size, resizeMode: "contain" }}
          />
        )}}
      />
    </Tab.Navigator>
  )
}

const AppStack = () => {
    
  return (
    <Stack.Navigator initialRouteName={routeNames.Splash} screenOptions={{headerShown:false}}>
        <Stack.Screen name={routeNames.Splash} component={Splash}/>
        <Stack.Screen name={routeNames.Splash_2} component={Splash_2}/>
        <Stack.Screen name={routeNames.Login} component={Login}/>
        <Stack.Screen name={routeNames.SignUp} component={SignUp}/>
    </Stack.Navigator>
  )
}

export default AppStack