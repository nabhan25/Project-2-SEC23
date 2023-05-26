import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../Screen/WelcomeScreen";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Welcome" componet={WelcomeScreen}/>
        <Stack.Screen name="Login" componet={LoginScreen}/>


</Stack.Navigator>
)

export default AuthNavigator;