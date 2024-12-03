import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {fonts} from './src/constants/fonts';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <>
      <AppNavigator />
    </>
  );
};

export default App;
