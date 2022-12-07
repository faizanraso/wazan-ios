import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colours } from "../../shared/colours";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";

export default function Home() {
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
