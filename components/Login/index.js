import React, { Component } from "react";
import { Button, View, Alert, StyleSheet } from "react-native";
import fbconfig from "../../config/fbconfig";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { Facebook } from "expo";

// console.log(fb)
firebase.initializeApp(fbconfig);
// Initialize Cloud Firestore through Firebase
const db = firebase.firestore();
const settings = { /* your settings... */ timestampsInSnapshots: true };
db.settings(settings);

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.loginWithFacebook = this.loginWithFacebook.bind(this);
    // this.fb = firebase.initializeApp(fbconfig);
  }

  // componentDidMount = () => {
  //     // firebase.initializeApp(fbconfig)
  //     firebase.auth().onAuthStateChanged(user => {
  //         if (user != null) {
  //             console.log("We are authenticated now!");
  //             this.props.navigation.navigate("Home")
  //         }
  //         // Do other things
  //     });
  //     // console.log(this.fb)
  //     //   // fbconfig.auth().onAuthStateChanged(user => {
  //     //   //   this.props.navigation.navigate(user ? "Home" : "Login");
  //     //   // });
  // };

  // Listen for authentication state to change.

  // async loginWithFacebook() {
  //   const { type, token } = await Facebook.logInWithReadPermissionsAsync(
  //     "359653208101692",
  //     { permissions: ["public_profile"] }
  //   );

  //   if (type === "success") {
  //     // this.props.navigation.navigate("Home");
  //     // Build Firebase credential with the Facebook access token.
  //     const credential = await firebase.auth.FacebookAuthProvider.credential(token);
  //     // console.log("creadientials***", credential)
  //     // Sign in with credential from the Facebook user.
  //     firebase.auth().signInAndRetrieveDataWithCredential(credential).catch((error) => {
  //     //   // Handle Errors here.
  //     console.log(error)
  //     });
  //   }
  //   // try {
  //   //   const {
  //   //     type,
  //   //     token,
  //   //     expires,
  //   //     permissions,
  //   //     declinedPermissions
  //   //   } = await Facebook.logInWithReadPermissionsAsync("359653208101692", {
  //   //     permissions: ["public_profile"]
  //   //   });
  //   //   if (type === "success") {
  //   //     this.props.navigation.navigate("Home")
  //   //     // Get the user's name using Facebook's Graph API
  //   //     // const response = await fetch(
  //   //     //   `https://graph.facebook.com/me?access_token=${token}`
  //   //     // );
  //   //     // Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);
  //   //   } else {
  //   //     // type === 'cancel'
  //   //   }
  //   // } catch ({ message }) {
  //   //   alert(`Facebook Login Error: ${message}`);
  //   // }
  // }
  async loginWithFacebook() {
    //ENTER YOUR APP ID
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(
      "359653208101692",
      { permissions: ["public_profile"] }
    );

    if (type == "success") {
      this.props.navigation.navigate("Home");
      const credential = await firebase.auth.FacebookAuthProvider.credential(
        token
      );

      firebase
        .auth()
        .signInAndRetrieveDataWithCredential(credential)
        .then(res => {
          db.collection("users")
            .doc(res.user.uid)
            .set({
              name: res.user.displayName
            });
          // console.log(res.user.uid);
        })
        .catch(error => {
          console.log(error.message);
        });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.loginWithFacebook}
          title="Login with Facebook"
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
