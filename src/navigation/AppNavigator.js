import { View, Text, useColorScheme } from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./RootNavigation";
import AppStack from "./AppStack";

const AppNavigator = () => {

  return (
    <NavigationContainer ref={navigationRef}>
      <AppStack />
    </NavigationContainer>
  );
};

export default AppNavigator;
