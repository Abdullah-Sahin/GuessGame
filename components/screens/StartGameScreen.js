import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import CustomButton from "../ui/CustomButton";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../util/Colors";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";

// Android: width: 400, height: 800
// Ipad: width: 800, height: 1200

function StartGameScreen(props) {
  const [enteredText, setEnteredText] = useState("");
  const { width, height } = useWindowDimensions();

  const marginTopR = width < 400 ? 100 : width >= 400 && width < 800 ? 80 : 60;
  const fontSizeR = width < 400 ? 40 : width >= 400 && width < 800 ? 50 : 100;
  const textWidth = fontSizeR * 2.5;

  function changeInputHandler(enteredValue) {
    setEnteredText(enteredValue);
  }

  function resetInputHandler() {
    setEnteredText("");
  }

  const confirmInputHandler = () => {
    const number = parseInt(enteredText);
    if (isNaN(number)) {
      Alert.alert("Invalid Input", "Input must be an integer", [
        { text: "Okay", style: "default", onPress: resetInputHandler },
      ]);
      return;
    }
    if (number < 1 || number > 99) {
      Alert.alert("Invalid Number", "Number should be between 1-99 included", [
        { text: "Reset", style: "calcel", onPress: resetInputHandler },
      ]);
      return;
    }
    props.confirmInput(number);
  };

  // useEffect(() => {
  //   console.log("\nwidth: " + width + "\nHeight: " + height)
  // }, [width])

  return (
    <>
    <StatusBar style="dark" />
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen}>
        <LinearGradient
          style={[styles.inputContainer, {marginTop: marginTopR}]}
          colors={[Colors.secondary600, Colors.secondary200]}
        >
          <TextInput
            value={enteredText}
            keyboardType="numeric"
            maxLength={2}
            style={[
              styles.textContainer,
              { fontSize: fontSizeR, width: textWidth },
            ]}
            onChangeText={changeInputHandler}
            selectionColor={Colors.primary200}
            autoFocus={true}
          />
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <CustomButton whenPressed={resetInputHandler}>Reset</CustomButton>
            </View>
            <View style={styles.buttonContainer}>
              <CustomButton whenPressed={confirmInputHandler}>
                Confirm
              </CustomButton>
            </View>
          </View>
        </LinearGradient>
      </KeyboardAvoidingView>
    </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    justifyContent: "center",
  },
  inputContainer: {
    alignItems: "center",
    padding: 24,
    width: "100%",
    elevation: 3,
    shadowColor: Colors.primary600,
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.9,
  },
  textContainer: {
    padding: 16,
    marginVertical: 10,
    borderBottomColor: Colors.primary400,
    borderBottomWidth: 3,
    textAlign: "center",
    color: Colors.primary200,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
