import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "../Screen/ListingsScreen";
import ListingDetailsScreen from "../Screen/ListingDetailsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator presentation="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Listings" component={ListingsScreen} />
    <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
