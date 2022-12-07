import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { auth } from "./firebase";
import PostAuthNavigation from "./src/screens/PostAuth/PostAuthNavigation";
import PreAuthNavigation from "./src/screens/PreAuth/PreAuthNavigation";

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
  return <PostAuthNavigation />;
}

const styles = StyleSheet.create({});
