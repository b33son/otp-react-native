/*
 * File: /Users/michaelbeeson/Documents/VSCode/react-native-ud/otp-react-native/App.js
 */

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from "firebase";
import Signup from "./components/signup";
import Signin from "./components/signin";

export default class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyDYVH4wqgfH7eJk3s5GvEL7sovtkC01gE4",
      authDomain: "one-time-password-45e99.firebaseapp.com",
      databaseURL: "https://one-time-password-45e99.firebaseio.com",
      projectId: "one-time-password-45e99",
      storageBucket: "one-time-password-45e99.appspot.com",
      messagingSenderId: "991573693515"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <View style={styles.container}>
        <Signup />
        <Signin />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
