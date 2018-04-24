/*
 * File: /Users/michaelbeeson/Documents/VSCode/react-native-ud/otp-react-native/components/signup.js
 */

import React, { Component } from "react";
import { View, Text } from "react-native";
import { FormLabel, FormInput, Button } from "react-native-elements";
import axios from "axios";

const ROOT_URL =
  "https://us-central1-one-time-password-45e99.cloudfunctions.net";
export default class Signup extends Component {
  // ES2016
  // constructor(props)
  // {
  //   super(props);
  //   this.state = {
  //     phone: '';
  //   }
  // }

  //  ES2017
  state = { phone: "", errorMessage: "" };

  //  ES2016      // this.handleSubmit.bind(this)
  // handleSubmit()
  // {
  //   console.log('handleSubmit');
  // }

  //  ES2017
  handleSubmit = async () => {
    console.log("handleSubmit");

    // ES2016
    // axios
    //   .post(`${ROOT_URL}/createUser`, { phone: this.state.phone })
    //   .then(() => {
    //     axios.post(`${ROOT_URL}/requestOtp`, { phone: this.state.phone });
    //   })
    //   .catch(() => {} )

    // ES2017
    try {
      await axios.post(`${ROOT_URL}/createUser`, { phone: this.state.phone });
      await axios.post(`${ROOT_URL}/requestOtp`, { phone: this.state.phone });
    } catch (err) {
      console.log(err.message);
      this.setState({ errorMessage: err });
      debugger;
    }
  };

  render() {
    return (
      <View style={{ marginBottom: 10 }}>
        <FormLabel>Sign Up</FormLabel>
        <FormLabel>Enter Phone Number</FormLabel>
        <FormInput
          value={this.state.phone}
          onChangeText={phone => this.setState({ phone })}
        />
        <Button title="submit" onPress={this.handleSubmit} />
      </View>
    );
  }
}
