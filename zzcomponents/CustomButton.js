import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";


function CustomButton(props) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={(pressData) =>
          pressData.pressed
            ? [styles.buttonInnerContainer, styles.ifPressed]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: "#ada027c0" }}
        onPress={props.whenPressed}
      >
        <Text style={styles.text}>{props.children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderColor: "#0a289d7c",
    borderWidth: 2,
    borderRadius: 30,
    marginHorizontal: 12,
    marginVertical: 10,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#c5b62ac0",
    paddingHorizontal: 3,
    paddingVertical: 5,
  },
  text: {
    color: "#0a289d7c",
    textAlignVertical: "center",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    padding: 8,
  },
  ifPressed: {
    opacity: 0.8,
  },
});

export default CustomButton;
