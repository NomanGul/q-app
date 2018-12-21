import React from "react";
import { TouchableOpacity, Modal, Alert, Text, View } from "react-native";
import AddCompanyForm from "./AddCompanyForm";

const AddCompanyModal = ({ modalVisible, hideModal }) => {
  return (
    <View style={{ marginTop: 22 }}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={{ marginTop: 22 }}>
          <View>
            <Text>Hello World!</Text>
            {/* <TouchableOpacity onPress={hideModal}>
              <Text>Hide Modal</Text>
            </TouchableOpacity> */}
            <AddCompanyForm />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AddCompanyModal;
