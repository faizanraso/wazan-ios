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
import { auth } from "../../../firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import checkError from "./CheckError";

export default function SignUpScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const nameRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const confirmPasswordRef = useRef<TextInput>(null);

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setErrorMessage(checkError("password/matching-error"));
      return;
    }

    if (!checkFieldsEntered()) {
      setErrorMessage(checkError("missing-fields"));
      return;
    }

    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;
      if (auth.currentUser != null) {
        sendEmailVerification(auth.currentUser);
      }
      console.log(user.email);
    } catch (error: any) {
      const errorMessage = checkError(error.code);
      console.log(error.code);
      setErrorMessage(errorMessage);
    }
  };

  //used to return error message, if any
  useEffect(() => {
    if (errorMessage) {
      Alert.alert("Error", errorMessage);
    }
    setErrorMessage("");
  }, [errorMessage]);

  //make sure all fields are filled
  const checkFieldsEntered = () => {
    if (name && email && password && confirmPassword) {
      return true;
    } else {
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
          <Text style={styles.createText}>Create your account</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Name"
            style={styles.inputField}
            placeholderTextColor={colours.placeholderText}
            onChangeText={(text) => {
              setName(text);
            }}
            value={name}
            returnKeyType="next"
            cursorColor={colours.accent}
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
            style={styles.inputField}
            placeholderTextColor={colours.placeholderText}
            autoCapitalize="none"
            secureTextEntry={true}
            returnKeyType="next"
            cursorColor={colours.accent}
            onChangeText={(text) => {
              setPassword(text);
            }}
            value={password}
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
            onChangeText={(text) => setConfirmPassword(text)}
            value={confirmPassword}
            cursorColor={colours.accent}
            ref={confirmPasswordRef}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.submitButton} onPress={handleSignup}>
            <Text style={styles.buttonText}>Sign up</Text>
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
    color: colours.accent,
    width: "88%",
    borderBottomColor: colours.inputBorder,
  },
  buttonContainer: {
    alignItems: "center",
  },
  submitButton: {
    alignItems: "center",
    width: "88%",
    backgroundColor: colours.accent,
    padding: 13,
    borderRadius: 25,
    borderColor: colours.accent,
    borderWidth: 2,
    marginTop: 20,
    marginHorizontal: 12,
  },
  buttonText: {
    fontWeight: "700",
    fontSize: 14,
    color: "#ffffff",
  },
});
