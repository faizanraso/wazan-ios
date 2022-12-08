import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colours } from "../../shared/colours";

export default function WorkoutScreen() {
  return (
    <View style={styles.container}>
      <Text>WorkoutScreen</Text>
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
