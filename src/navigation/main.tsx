import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { AlbumDetailsScreen, AlbumsScreen } from "../features/albums";

const Stack = createStackNavigator();

export const MainNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={AlbumsScreen}
      options={({ navigation }) => ({
        title: "",
        headerLeft: () => (
          <TouchableWithoutFeedback onPress={navigation.openDrawer}>
            <Ionicons name="md-menu" size={32} style={{ paddingLeft: 16 }} />
          </TouchableWithoutFeedback>
        ),
      })}
    />
    <Stack.Screen name="AlbumDetails" component={AlbumDetailsScreen} />
  </Stack.Navigator>
);
