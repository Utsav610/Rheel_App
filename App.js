import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <>
      <Toast
        config={toastConfig}
        swipeable={false}
        topOffset={Platform.OS == 'android' ? 20 : 40}
        bottomOffset={Platform.OS == 'android' ? 20 : 40}
      />
      <AppNavigator />
    </>
  );
};

export default App;
