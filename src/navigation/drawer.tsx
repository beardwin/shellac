import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { AppNavigator } from "./app";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={AppNavigator} />
  </Drawer.Navigator>
);
