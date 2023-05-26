import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountNavigator from "./AccountNavigator";
import FeedNavigator from "./FeedNavigator";
import ListingEditScreen from "../Screen/ListingEditScreen";
import NewListingButton from "./NewListingButton";
import routes from "./routes";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator options= {{headerShown:false}}>
    <Tab.Screen
      name="History"
style={styles.Summary}
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Finding Register Input"
      component={ListingEditScreen}
      options={{
        tabBarButton: ({ onPress, accessibilityLabel }) => (
          <NewListingButton
            onPress={onPress}
            accessibilityLabel={accessibilityLabel}
          />
        ),
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="plus-circle"
            color={color}
            size={size}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      component={AccountNavigator}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);



const styles = StyleSheet.create({
  Summary: {
backgroundColor: "black"
  },
});

export default AppNavigator;
