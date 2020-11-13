import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthStack } from "./authStack";
import { AppStack } from "./appStack";
const { Navigator, Screen } = createStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator headerMode="none">
        <Screen name="Auth" component={AuthStack} />
        <Screen name="App" component={AppStack} />
      </Navigator>
    </NavigationContainer>
  );
};
