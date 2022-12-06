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
import React, { useState, useRef } from "react";
import { colours } from "../../shared/colours";
import { auth } from "../../../firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import checkError from "./CheckError";

export default function SignUpScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const nameRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const confirmPasswordRef = useRef<TextInput>(null);

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (auth.currentUser != null) {
          sendEmailVerification(auth.currentUser);
        }
        console.log(user.email);
      })
      .catch((error) => {
        const errorMessage = checkError(error.code);
        setErrorMessage(errorMessage);
      });
  };

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
            returnKeyType="next"
            ref={nameRef}
            onSubmitEditing={() => {
              if (emailRef.current !== null) {
                emailRef.current.focus();
              }
            }}
          />
          <TextInput
            placeholder="Email"
            style={styles.inputField}
            placeholderTextColor={colours.placeholderText}
            autoCapitalize="none"
            onChangeText={(text) => setEmail(text)}
            value={email}
            returnKeyType="next"
            ref={emailRef}
            onSubmitEditing={() => {
              if (passwordRef.current !== null) {
                passwordRef.current.focus();
              }
            }}
          />
          <TextInput
            placeholder="Password"
            style={styles.inputField}
            placeholderTextColor={colours.placeholderText}
            autoCapitalize="none"
            secureTextEntry={true}
            returnKeyType="next"
            ref={passwordRef}
            onSubmitEditing={() => {
              if (confirmPasswordRef.current !== null) {
                confirmPasswordRef.current.focus();
              }
            }}
          />
          <TextInput
            placeholder="Confirm password"
            style={styles.inputField}
            placeholderTextColor={colours.placeholderText}
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            value={password}
            ref={confirmPasswordRef}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.submitButton} onPress={handleSignup}>
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
