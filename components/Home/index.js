import React, { Component } from "react";
import { Button, View, Text, Alert, StyleSheet } from "react-native";
import fbconfig from "../../config/fbconfig";
import * as firebase from "firebase";
// import { Facebook } from "expo"

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    // this.loginWithFacebook = this.loginWithFacebook.bind(this);
  }

  componentDidMount = () => {};

  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <Button
          onPress={() => firebase.auth().signOut()}
          title="Logout"
          color="#841584"
        />
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
