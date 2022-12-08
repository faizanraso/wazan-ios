import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colours } from "../../shared/colours";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.background,
    fontFamily: "System",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
