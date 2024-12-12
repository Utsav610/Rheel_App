import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import Toast from 'react-native-toast-message';
import { toastConfig } from './src/components/ToastConfig';
import { store } from './src/redux/store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';
import { LogBox } from 'react-native';

const App = () => {
  LogBox.ignoreAllLogs();
  let persistor = persistStore(store);
  return (
    <>
    <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <PersistGate loading={null} persistor={persistor}>
    <AppNavigator />
      <Toast
        config={toastConfig }
        swipeable={false}
        topOffset={Platform.OS == 'android' ? 20 : 40}
        bottomOffset={Platform.OS == 'android' ? 20 : 40}
      />
    </PersistGate>
    </Provider>
        
    </>
  );
};

export default App;
