import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colours } from "../../shared/colours";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";

export default function PostAuthNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            paddingHorizontal: 5,
            paddingTop: 0,
            backgroundColor: colours.background,
            position: "absolute",
            borderTopColor: colours.tabBorder,
          },
          headerStyle: {
            backgroundColor: colours.headerBlack,
            borderBottomWidth: 0,
            shadowColor: 'transparent',
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} options={{headerTitle: ""}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
