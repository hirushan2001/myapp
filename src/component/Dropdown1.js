import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Surface } from "react-native-paper";
import DropDown from "react-native-paper-dropdown";

const Dropdown1 = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [showMultiSelectDropDown, setShowMultiSelectDropDown] = useState(false);
  const [gender, setGender] = useState("");
  const [colors, setColors] = useState([]);

  const genderList = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Others", value: "others" }
  ];

 

  return (
    <Surface style={styles.containerStyle}>
      <SafeAreaView style={styles.safeContainerStyle}>
        <DropDown
          label={"Gender"}
          mode={"outlined"}
          visible={showDropDown}
          showDropDown={() => setShowDropDown(true)}
          onDismiss={() => setShowDropDown(false)}
          value={gender}
          setValue={setGender}
          list={genderList}
        />
      </SafeAreaView>
    </Surface>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  spacerStyle: {
    marginBottom: 15,
  },
  safeContainerStyle: {
    flex: 1,
    margin: 20,
    justifyContent: "center",
  },
});

export default Dropdown1;
