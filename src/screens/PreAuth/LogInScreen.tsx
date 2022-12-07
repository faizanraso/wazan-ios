import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { colours } from "../../shared/colours";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import checkError from "./CheckError";

export default function LogInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const handleSignin = async () => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;
    } catch (error: any) {
      const errorMessage = checkError(error.code);
      setErrorMessage(errorMessage);
      console.log(error.code);
    }
  };

  useEffect(() => {
    if (errorMessage) {
      Alert.alert("Error", errorMessage);
    }
    setErrorMessage("");
  }, [errorMessage]);

  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "position" : "height"}
        style={styles.container}
        keyboardVerticalOffset={20}
      >
        <View style={styles.createTextContainer}>
          <Text style={styles.createText}>Login to Your Account</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.inputField}
            placeholderTextColor={colours.placeholderText}
            autoCapitalize="none"
            returnKeyType="next"
            cursorColor={colours.accent}
            ref={emailRef}
            onSubmitEditing={() => {
              if (passwordRef.current !== null) {
                passwordRef.current.focus();
              }
            }}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.inputField}
            placeholderTextColor={colours.placeholderText}
            autoCapitalize="none"
            secureTextEntry={true}
            cursorColor={colours.accent}
            ref={passwordRef}
          />
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={
                email !== "" && password !== ""
                  ? styles.submitButton
                  : styles.disabledSubmitButton
              }
              disabled={email !== "" && password !== "" ? false : true}
              onPress={handleSignin}
            >
              <Text style={styles.buttonText}>Log in</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.forgotContainer}>
            <TouchableOpacity>
              <Text style={styles.forgotText}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
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
    color: colours.accent,
    width: "88%",
    borderBottomColor: colours.inputBorder,
  },
  bottomContainer: {
    flex: 1,
    marginTop: "5%",
  },
  buttonContainer: {
    alignItems: "center",
  },
  submitButton: {
    alignItems: "center",
    width: "88%",
    backgroundColor: colours.primaryBackground,
    padding: 13,
    borderRadius: 25,
    borderColor: colours.primaryBackground,
    borderWidth: 2,
    marginTop: 20,
    marginHorizontal: 12,
  },
  disabledSubmitButton: {
    alignItems: "center",
    width: "88%",
    backgroundColor: colours.disabledPrimaryBackground,
    padding: 13,
    borderRadius: 25,
    borderColor: colours.disabledPrimaryBackground,
    borderWidth: 2,
    marginTop: 20,
    marginHorizontal: 12,
    color: colours.disabledPrimaryText,
  },
  buttonText: {
    fontWeight: "700",
    fontSize: 14,
  },
  forgotContainer: {
    alignItems: "center",
    padding: "5%",
    marginTop: "3%",
  },
  forgotText: {
    fontWeight: "700",
    fontSize: 15,
    textDecorationLine: "underline",
    color: "white",
  },
});
