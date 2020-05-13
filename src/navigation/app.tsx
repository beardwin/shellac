import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { MainNavigator } from "./main";

const Stack = createStackNavigator();

export const AppNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen
      name="Main"
      component={MainNavigator}
      options={{
        header: () => null,
      }}
    />
  </Stack.Navigator>
);
