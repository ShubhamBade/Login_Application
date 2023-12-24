import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import OtpVerificationScreen from "../screens/OtpVerificationScreen";

type Props = {};
// app stack navigation
const Stack = createStackNavigator();
const AppNavigation = (props: Props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen
          name="OtpVerificationScreen"
          component={OtpVerificationScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
