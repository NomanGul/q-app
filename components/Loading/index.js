import React, { Component } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import * as firebase from "firebase";

export default class Loading extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? "Home" : "Login");
    });
    // this.props.navigation.navigate("SignUp");
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="#e93766" size="large" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
