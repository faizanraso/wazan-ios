import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { auth } from "./firebase";
import Home from "./src/screens/PostAuth/Home";
import PreAuthNavigation from "./PreAuthNavigation";

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsSignedIn(true);
      } else {
        setIsSignedIn(false);
      }
    });
    return unsubscribe;
  }, []);

  if (!isSignedIn) {
    return <PreAuthNavigation />;
  }

  return <Home />;
}

const styles = StyleSheet.create({});
