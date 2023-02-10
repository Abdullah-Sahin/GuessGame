import React from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import Colors from "../../util/Colors";

function Title({ children, styleButton, styleText }) {
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

  const marginVertical = windowType === "1" ? 12 : windowType === "2" ? 8 : 16;
  const marginHorizontal =
    windowType === "1" ? 12 : windowType === "2" ? 8 : 16;
  const padding = windowType === "1" ? 12 : windowType === "2" ? 8 : 16;
  const minWidth = windowType === "2" ? "40%" : "60%";
  const minHeight = windowType === "2" || windowType === "4" ? 16 : 24;
  const fontSize = windowType === "1" || windowType === "2" ? 18 : 36;

  return (
    <View
      style={[
        styles.container,
        styleButton,
        {
          marginVertical: marginVertical,
          marginHorizontal: marginHorizontal,
          padding: padding,
          minWidth: minWidth,
          minHeight: minHeight,
        },
      ]}
    >
      <Text style={[styles.text, styleText ]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.secondary500,
    borderRadius: 15,
    minWidth: "40%",
    minHeight: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary300,
  },
  text: {
    color: Colors.secondary500,
    fontFamily: "smack-boom",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 18,
  },
});

export default Title;
