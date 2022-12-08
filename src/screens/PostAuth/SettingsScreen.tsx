import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { colours } from "../../shared/colours";

export default function SettingsScreen() {
  const handleSignout = () => {
    signOut(auth);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSignout}>
        <Text style={styles.text}>Sign Out</Text>
      </TouchableOpacity>
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
  text: {
    color: "white",
  },
});
