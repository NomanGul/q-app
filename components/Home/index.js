import React, { Component } from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback
} from "react-native";
import * as firebase from "firebase";

const HomeBtn = ({ btnTitle, btnOnPress, btnColor }) => {
  return (
    <TouchableNativeFeedback>
      <Button onPress={btnOnPress} title={btnTitle} color={btnColor} />
    </TouchableNativeFeedback>
  );
};

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleCompanyBtn = this.handleCompanyBtn.bind(this);
    this.handleUserBtn = this.handleUserBtn.bind(this);
  }

  componentDidMount = () => {};

  handleCompanyBtn() {
    // console.log("handleCpmnybtn");
    this.props.navigation.navigate("Company");
  }

  handleUserBtn() {
    console.log("handleUserbtn");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <HomeBtn
          btnTitle={"Are you a Company?"}
          btnColor={"#841584"}
          btnOnPress={this.handleCompanyBtn}
        />
        <HomeBtn
          btnTitle={"Are you finding/waiting for Tokens?"}
          btnColor={"#841584"}
          btnOnPress={this.handleUserBtn}
        />
        <HomeBtn
          btnTitle={"Logout"}
          btnColor={"#841584"}
          btnOnPress={() => firebase.auth().signOut()}
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
  // btnStyle: {
  //   alignItems: "flex-start"
  // }
});
