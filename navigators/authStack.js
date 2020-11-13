import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SignInScreen } from "../components/SignInScreen";
import { RegisterScreen } from "../components/RegisterScreen";

const { Navigator, Screen } = createStackNavigator();

export const AuthStack = () => {
  return (
    <Navigator headerMode="none">
      <Screen name="SignIn" component={SignInScreen} />
      <Screen name="Register" component={RegisterScreen} />
    </Navigator>
  );
};
