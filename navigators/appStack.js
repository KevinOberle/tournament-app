import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { FeedScreen } from "../components/FeedScreen";
const { Navigator, Screen } = createStackNavigator();

export const AppStack = () => {
  return (
    <Navigator headerMode="none">
      <Screen name="Feed" component={FeedScreen} />
    </Navigator>
  );
};
