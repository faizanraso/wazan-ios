import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colours } from "../../shared/colours";

export default function PersonalRecordsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>PR Tracker</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.background,
    fontFamily: "System",
  },
  headerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: colours.primaryText,
    fontFamily: "System",
  },
});
