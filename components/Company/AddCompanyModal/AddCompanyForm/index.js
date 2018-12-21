import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
// import {
//   FormLabel,
//   FormInput,
//   FormValidationMessage
// } from "react-native-elements";

export default class AddCompanyForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      text: null
    };

    //   // this.setModalVisible = this.setModalVisible.bind(this);
  }

  render() {
    // const { modalVisible } = this.state;
    return (
      <View>
        {/* <FormLabel>Name</FormLabel>
        <FormInput onChangeText={() => console.log("object")} />
        <FormValidationMessage>Error message</FormValidationMessage> */}
        <TextInput
          placeholder={"Company Name"}
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <TextInput
          placeholder={"Since e.g. 1998"}
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <TextInput
          placeholder={"3 Certificates Images"}
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <TextInput
          placeholder={"Timings"}
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <TextInput
        onTouchStart={fetch('https://api.foursquare.com/v2/venues/explore?client_id=AENQ1WJCTE0YKMNHZHC14Z1Y5NJJM5L23Q2IPKTW3ZNDCZJG&client_secret=TWELFXAQND3IGLOZI4RYY42QN5ZW1OBIWHEIN2FFGBNCHSLF&v=20180323&limit=1&ll=40.7243,-74.0018&query=coffee')
        .then(function(e) {
            // Code for handling API response
            console.log(e)
        })
        .catch(function() {
            // Code for handling errors
        })}
          placeholder={"Location"}
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          // onChangeText={text => this.setState({ text })}
          // value={this.state.text}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  addCompanyText: {
    fontSize: 40,
    marginBottom: 50
  }
});
