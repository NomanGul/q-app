import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import FloatingBtn from "./FloatingBtn";
import AddCompanyModal from "./AddCompanyModal";

export default class Company extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false
    };
    
    this.setModalVisible = this.setModalVisible.bind(this);
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { modalVisible } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.addCompanyText}>Add your Company :)</Text>
        <FloatingBtn showModal={() => this.setModalVisible(true)} />
        <AddCompanyModal
          modalVisible={modalVisible}
          hideModal={() => this.setModalVisible(false)}
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
