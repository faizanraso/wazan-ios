import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colours } from "../../shared/colours";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import HomeScreen from "./HomeScreen";
import PersonalRecordsScreen from "./PersonalRecordsScreen";
import WorkoutScreen from "./WorkoutScreen";
import SettingsScreen from "./SettingsScreen";

export default function PostAuthNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
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
            shadowColor: "transparent",
          },
          tabBarIcon: ({ focused }) => {
            switch (route.name) {
              case "Home":
                return focused ? (
                  <Ionicons name="home" size={22} color={colours.accent} />
                ) : (
                  <Ionicons name="home" size={22} color={colours.tabIcons} />
                );
              case "PRLog":
                return focused ? (
                  <MaterialCommunityIcons
                    name="notebook"
                    size={22}
                    color={colours.accent}
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="notebook"
                    size={22}
                    color={colours.tabIcons}
                  />
                );
                break;
              case "Workouts":
                return focused ? (
                  <FontAwesome5
                    name="dumbbell"
                    size={22}
                    color={colours.accent}
                  />
                ) : (
                  <FontAwesome5
                    name="dumbbell"
                    size={22}
                    color={colours.tabIcons}
                  />
                );
              case "Settings":
                return focused ? (
                  <Ionicons
                    name="ios-settings"
                    size={24}
                    color={colours.accent}
                  />
                ) : (
                  <Ionicons
                    name="ios-settings"
                    size={24}
                    color={colours.tabIcons}
                  />
                );
              default:
                return;
            }
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerTitle: "", tabBarLabel: "" }}
        />
        <Tab.Screen
          name="PRLog"
          component={PersonalRecordsScreen}
          options={{ headerTitle: "", tabBarLabel: "" }}
        />
        <Tab.Screen
          name="Workouts"
          component={WorkoutScreen}
          options={{ headerTitle: "", tabBarLabel: "" }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ headerTitle: "", tabBarLabel: "" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
