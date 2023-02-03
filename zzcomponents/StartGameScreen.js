import React from "react";
import { useState } from "react";
import { StyleSheet, View, TextInput, Alert } from "react-native";
import CustomButton from "./CustomButton";
import { LinearGradient } from "expo-linear-gradient";

function StartGameScreen(props) {

  const [enteredText, setEnteredText] = useState("");

  const changeInputHandler = (enteredValue) => {
    setEnteredText(enteredValue);
  };

  const resetInputHandler = () => {
    setEnteredText("");
  };

  const confirmInputHandler = () => {
    const number = parseInt(enteredText);
    if(isNaN(number)){
      Alert.alert("Invalid Input", "Input must be an integer",[{text:"Okay", style:"default", onPress:resetInputHandler}]);
      return;
    }
    if (number < 1 || number > 99) {
      Alert.alert(
        "Invalid Number",
        "Number should be between 1-99 included",
        [{text:"Reset", style:"calcel", onPress:resetInputHandler}]
      );
      return;
    }
    props.confirmInput(number);
    console.log(number)
  };

  return (
    <LinearGradient
      style={styles.InputContainer}
      colors={["#2b18addc", "#c887e8ff"]}
    >
      <TextInput
        placeholderTextColor="#f8daa6"
        value={enteredText}
        keyboardType="numeric"
        maxLength={2}
        style={styles.textContainer}
        onChangeText={changeInputHandler}
        cursorColor="#e0a4d9ca"
        autoFocus={true}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <CustomButton whenPressed={resetInputHandler}>Reset</CustomButton>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton whenPressed={confirmInputHandler}>Confirm</CustomButton>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  InputContainer: {
    marginTop: 125,
    alignItems: "center",
    alignSelf: "center",
    padding: 24,
    width: "100%",
    elevation: 3,
    shadowColor: "#ca9116dc",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.9,
  },
  textContainer: {
    padding: 16,
    marginVertical: 10,
    width: 100,
    borderBottomColor: "#e0a4d9ca",
    borderBottomWidth: 3,
    fontSize: 40,
    textAlign: "center",
    color: "#e0a4d9ca",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
