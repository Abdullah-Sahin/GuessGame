import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  useWindowDimensions,
} from "react-native";
import Colors from "../../util/Colors";

function CustomButton(props) {
  const { width, height } = useWindowDimensions();

  const windowType =
    width < 500 && height < 1000
      ? "1"
      : width < 1000 && height < 500
      ? "2"
      : width < 1000 && width >= 500 && height < 1400 && height >= 1000
      ? "3"
      : width < 1400 && width >= 1000 && height < 1000 && height >= 500
      ? "4"
      : "else";

  const marginHorizontalR =
    windowType === "1" ? 8 : windowType === "2" ? 4 : 10
  const marginVerticalR =
    windowType === "1" ? 8 : windowType === "2" ? 4 : 10
  const fontSizeR = width < 400 ? 18 : width >= 400 && width < 800 ? 24 : 30;
  const textPaddingR = width < 400 ? 8 : width >= 400 && width < 800 ? 12 : 16;

  return (
    <View
      style={[
        styles.buttonOuterContainer,
        {
          marginHorizontal: marginHorizontalR,
          marginVertical: marginVerticalR,
        },
      ]}
    >
      <Pressable
        style={(pressData) =>
          pressData.pressed
            ? [styles.buttonInnerContainer, props.sryle, styles.ifPressed]
            : [styles.buttonInnerContainer, props.style]
        }
        android_ripple={{ color: "#83781ac0" }}
        onPress={props.whenPressed}
      >
        <Text
          style={[styles.text, { fontSize: fontSizeR, padding: textPaddingR }]}
        >
          {props.children}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderColor: Colors.secondary400,
    borderWidth: 2,
    borderRadius: 30,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary200,
    paddingHorizontal: 4,
    paddingVertical: 6,
  },
  text: {
    color: Colors.secondary300,
    textAlignVertical: "center",
    textAlign: "center",
    fontWeight: "bold",
  },
  ifPressed: {
    backgroundColor: Colors.secondary200,
  },
});

export default CustomButton;
