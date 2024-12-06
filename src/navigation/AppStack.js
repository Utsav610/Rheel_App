import {View, Text, Image} from 'react-native';
import React from 'react';

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
import FavoriteIcon from '../assets/images/FavoriteIcon';
import InquiriesIcon from '../assets/images/InquiriesIcon';
import ProfileIcon from '../assets/images/ProfileIcon';
import Favorite from '../screens/DashboardScreens/Favorite';
import My_Inquiries from '../screens/DashboardScreens/My_Inquiries';
import {ph, wp} from '../utils/ResponsiveScreen';
import HomeIcon from '../assets/images/HomeIcon';
import LinearGradient from 'react-native-linear-gradient';
import FavoriteIcon2 from '../assets/images/FavoriteIcon2';
import InquiriesIcon2 from '../assets/images/InquiriesIcon2';
import ProfileIcon2 from '../assets/images/ProfileIcon2';
import HomeIcon2 from '../assets/images/HomeIcon2';
import {colors} from '../constants/colors';
import Profile from '../screens/DashboardScreens/Profile';
import AllProperties from '../screens/AllProperties';
import PropertyDetails from '../screens/PropertyDetails';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  const getIconComponent = (label, color, size, focused) => {
    let iconColor = focused ? 'green' : 'white';
    switch (label) {
      case 'Home':
        return focused ? (
          <View
            style={{
              backgroundColor: colors.white,
              width: size + 20,
              height: size + 20,
              borderRadius: size / 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <HomeIcon2 color={color} width={size} height={size} />
          </View>
        ) : (
          <HomeIcon color={color} width={size} height={size} />
        );
      case 'Favorite':
        return focused ? (
          <View
            style={{
              backgroundColor: colors.white,
              width: size + 20,
              height: size + 20,
              borderRadius: size / 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <FavoriteIcon2 color={color} width={size} height={size} />
          </View>
        ) : (
          <FavoriteIcon color={color} width={size} height={size} />
        );
      case 'My_Inquiries':
        return focused ? (
          <View
            style={{
              backgroundColor: colors.white,
              width: size + 20,
              height: size + 20,
              borderRadius: size / 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <InquiriesIcon2 color={color} width={size} height={size} />
          </View>
        ) : (
          <InquiriesIcon color={color} width={size} height={size} />
        );
      default:
        return focused ? (
          <View
            style={{
              backgroundColor: colors.white,
              width: size + 20,
              height: size + 20,
              borderRadius: size / 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ProfileIcon2 color={color} width={size} height={size} />
          </View>
        ) : (
          <ProfileIcon color={color} width={size} height={size} />
        );
    }
  };
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          position: 'absolute',
          marginHorizontal: ph(48),
          borderRadius: wp(58),
          bottom: ph(36),
          height: wp(70),
          paddingTop: wp(16),
          paddingBottom: wp(26),
        },
        tabBarBackground: () => (
          <LinearGradient
            colors={['#0A2F1E', '#118368', '#0A2F1E']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={{
              flex: 1,
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: wp(58),
            }}
          />
        ),
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size, focused}) =>
            getIconComponent('Home', color, size, focused),
        }}
      />
      <Tab.Screen
        name={routeNames.Favorite}
        component={Favorite}
        options={{
          tabBarIcon: ({color, size, focused}) =>
            getIconComponent('Favorite', color, size, focused),
        }}
      />
      <Tab.Screen
        name={routeNames.My_Inquiries}
        component={My_Inquiries}
        options={{
          tabBarIcon: ({color, size, focused}) =>
            getIconComponent('My_Inquiries', color, size, focused),
        }}
      />
      <Tab.Screen
        name={routeNames.Profile}
        component={Profile}
        options={{
          tabBarIcon: ({color, size, focused}) =>
            getIconComponent('Profile', color, size, focused),
        }}
      />
    </Tab.Navigator>
  );
};

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={routeNames.Splash}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={routeNames.Splash} component={Splash} />
      <Stack.Screen name={routeNames.Splash_2} component={Splash_2} />
      <Stack.Screen name={routeNames.Login} component={Login} />
      <Stack.Screen name={routeNames.SignUp} component={SignUp} />
      <Stack.Screen name={routeNames.Dashboard} component={HomeTabs} />

      <Stack.Screen name={routeNames.AllProperties} component={AllProperties} />
      <Stack.Screen name={routeNames.PropertyDetails} component={PropertyDetails} />
    </Stack.Navigator>
  );
};

export default AppStack;
