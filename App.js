import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Signup from "./components/signup";
import Signin from "./components/signin";

export default class App extends React.Component {
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
