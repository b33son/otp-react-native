/*
 * File: /Users/michaelbeeson/Documents/VSCode/react-native-ud/otp-react-native/components/signin.js
 */

import React, { Component } from "react";
import { View, Text } from "react-native";
import { FormLabel, FormInput, Button } from "react-native-elements";
import firebase from "firebase";
import axios from "axios";

const ROOT_URL =
  "https://us-central1-one-time-password-45e99.cloudfunctions.net";

export default class Signin extends Component {
  //  ES2017
  state = { phone: "", code: "", errorMessage: "" };

  //  ES2017
  handleSubmit = async () => {
    console.log("handleSubmit");

    // ES2017
    try {
      let response = await axios.post(`${ROOT_URL}/verifyOtp`, {
        phone: this.state.phone,
        code: this.state.code
      });

      firebase.auth().signInWithCustomToken(data.token);
      console.log(response);
      debugger;
    } catch (err) {
      console.log(err.message);
      this.setState({ errorMessage: err });
      debugger;
    }
  };

  render() {
    return (
      <View style={{ marginBottom: 10 }}>
        <FormLabel>Sign In</FormLabel>
        <FormLabel>Enter Phone Number</FormLabel>
        <FormInput
          value={this.state.phone}
          onChangeText={phone => this.setState({ phone })}
        />
        <FormLabel>Code</FormLabel>
        <FormInput
          value={this.state.code}
          onChangeText={code => this.setState({ code })}
        />
        <Button title="Submit" onPress={this.handleSubmit} />
      </View>
    );
  }
}
