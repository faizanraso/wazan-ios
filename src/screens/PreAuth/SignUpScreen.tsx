import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import React from "react";
import { colours } from "../../shared/colours";

export default function SignUpScreen() {
  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "position" : "height"}
        style={styles.container}
        keyboardVerticalOffset={20}
      >
        <View style={styles.createTextContainer}>
          <Text style={styles.createText}>Create your account</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Name"
            style={styles.inputField}
            placeholderTextColor={colours.placeholderText}
          />
          <TextInput
            placeholder="Email"
            style={styles.inputField}
            placeholderTextColor={colours.placeholderText}
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Password"
            style={styles.inputField}
            placeholderTextColor={colours.placeholderText}
            autoCapitalize="none"
            secureTextEntry={true}
          />
          <TextInput
            placeholder="Confirm password"
            style={styles.inputField}
            placeholderTextColor={colours.placeholderText}
            autoCapitalize="none"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.buttonText}>Let's do this</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.background,
    fontFamily: "System",
  },
  createTextContainer: {
    marginTop: "8%",
    marginBottom: "5%",
    width: "88%",
    justifyContent: "center",
    marginLeft: "6%",
  },
  createText: {
    color: colours.primaryText,
    fontFamily: "System",
    fontWeight: "700",
    fontSize: 25,
  },
  inputContainer: {
    alignItems: "center",
  },
  inputField: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    fontWeight: "400",
    color: "#ffffff",
    width: "88%",
    borderBottomColor: colours.inputBorder,
  },
  submitButton: {
    alignItems: "center",
    width: "40%",
    backgroundColor: colours.accent,
    padding: 13,
    borderRadius: 30,
    borderColor: colours.outline,
    borderWidth: 2,
    marginTop: 20,
    marginRight: "6%",
  },
  buttonText: {
    fontWeight: "500",
    fontSize: 14,
    color: "#fffff",
  },
  buttonContainer: {
    alignItems: "flex-end",
  },
});
