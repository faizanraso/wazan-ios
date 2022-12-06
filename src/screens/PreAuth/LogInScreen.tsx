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
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import checkError from "./CheckError";

export default function LogInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const handleSignin = () => {
    if (validateEmail(email)) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user.email);
        })
        .catch((error) => {
          const errorMessage = checkError(error.code);
          setErrorMessage(errorMessage);
        });
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailRegex.test(email)) {
      return true;
    } else {
      console.log("invalid email");
      return false;
    }
  };

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
            ref={passwordRef}
          />
        </View>
        {errorMessage !== "" ? (
          <View>
            <Text>{errorMessage}</Text>
          </View>
        ) : (
          <></>
        )}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.submitButton} onPress={handleSignin}>
            <Text style={styles.buttonText}>Login</Text>
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
