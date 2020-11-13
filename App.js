import React, { useState, useEffect } from "react";
import "react-native-gesture-handler";
import Constants from "expo-constants";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
  Text,
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { AppNavigator } from "./navigators/appNavigator";

import { LogBox } from "react-native";

//Setup Location Tracking
// import * as Permissions from 'expo-permissions';
// import * as TaskManager from 'expo-task-manager';
// import * as Location from 'expo-location';
// import { GlobalState } from './utilities/globalState';

// const locationState = new GlobalState({});

// TaskManager.defineTask('locationUpdates', ({ data: { locations }, error }) => {
//   if (error) {
//     // check `error.message` for more details.
//     return;
//   }
//   console.log('Received new locations', locations);
//   locationState.setValue(locations);
// });
// Location.startLocationUpdatesAsync('locationUpdates', {
//   accuracy: Location.Accuracy.BestForNavigation,
// });

export default function App() {
  //Location Setup
  //const [state, setState] = useGlobalState(locationState);
  //const heading = state[0] ? Math.round(state[0].coords.heading) : 0;

  // async function getLocationPermissions() {
  //   // permissions returns only for location permissions on iOS and under certain conditions, see Permissions.LOCATION
  //   const { status, permissions } = await Permissions.askAsync(
  //     Permissions.LOCATION
  //   );
  // }

  // useEffect(() => {
  //  getLocationPermissions();
  // }, []);

  LogBox.ignoreLogs(["Setting a timer"]);

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <AppNavigator />
      </ApplicationProvider>
    </>
  );
}
