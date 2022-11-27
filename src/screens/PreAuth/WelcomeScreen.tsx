import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { colours } from "../../shared/colours";

export default function WelcomeScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <View style={styles.sloganContainer}>
        <Text style={styles.slogan}>Welcome to Wazan.</Text>
        <Text style={styles.slogan}>It's time to get fit.</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.buttonText}>Create account</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>
          Have an account already?{" "}
          <Text
            style={styles.loginTextLink}
            onPress={() => navigation.navigate("LogIn")}
          >
            Log in
          </Text>
        </Text>
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
  slogan: {
    color: colours.primaryText,
    justifyContent: "center",
    fontWeight: "700",
    fontSize: 30,
  },
  sloganContainer: {
    marginLeft: "10%",
    marginTop: "60%",
    width: "80%",
  },
  buttonContainer: {
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: colours.button,
    padding: 19,
    width: "88%",
    borderRadius: 50,
    marginTop: "50%",
  },
  buttonText: {
    fontWeight: "600",
    fontSize: 18,
    fontFamily: "System",
    justifyContent: "center",
  },
  loginContainer: {
    position: "absolute",
    bottom: 1,
    marginBottom: 40,
    marginLeft: "10%",
  },
  loginText: {
    color: colours.secondaryText,
  },
  loginTextLink: {
    color: colours.linkText,
  },
});
