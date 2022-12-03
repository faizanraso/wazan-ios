import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colours } from "../../shared/colours";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.background,
    fontFamily: "System",
  },
  text: {
    color: "white",
  },
});
