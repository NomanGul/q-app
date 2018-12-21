import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const FloatingBtn = ({ showModal }) => {
  return (
    <TouchableOpacity
      style={{
        // flexGrow: 1,
        // borderWidth: 1,
        // borderColor: "#01a699",
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        // position: "absolute",
        bottom: 10,
        // right: 10,
        // top: 100,
        height: 100,
        backgroundColor: "#5c007a",
        borderRadius: 50
      }}
      onPress={showModal}
    >
      <Icon name="plus" size={30} color="#fff" />
    </TouchableOpacity>
  );
};

export default FloatingBtn;
