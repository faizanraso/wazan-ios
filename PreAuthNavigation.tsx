import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "./src/screens/PreAuth/WelcomeScreen";
import SignUpScreen from "./src/screens/PreAuth/SignUpScreen";
import LogInScreen from "./src/screens/PreAuth/LogInScreen";
import { colours } from "./src/shared/colours";

export default function PreAuthNavigation() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: colours.headerBlack },
          headerBackTitle: "",
          headerTintColor: "white",
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="LogIn" component={LogInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
