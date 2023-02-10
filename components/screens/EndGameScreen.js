import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import CustomButton from "../ui/CustomButton";
import Title from "../ui/Title";
import CardHorizontal from "../ui/CardHorizontal";
import CardVertical from "../ui/CardVertical";

function EndGameScreen({ startNewGame, numberOfTrials }) {
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

  const imageHeight = (height * 8) / 10;
  const imageWidth = imageHeight;
  const imageBorderRadius = imageHeight / 2;

  let content = (
    <>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/winImage.jpg")}
          style={styles.imageStyle}
          resizeMode="cover"
        />
      </View>
      <Title style={styles.text}>Try Count: {numberOfTrials}</Title>
      <View style={styles.buttonContainer}>
        <CustomButton whenPressed={startNewGame}>New Game</CustomButton>
      </View>
    </>
  );

  if (windowType === "2") {
    content = (
      <>
        <CardHorizontal style={{ alignItems: "center" }}>
          <View
            style={[
              styles.imageContainer,
              ,
              {
                height: imageHeight,
                width: imageWidth,
                borderRadius: imageBorderRadius,
              },
            ]}
          >
            <Image
              source={require("../../assets/images/winImage.jpg")}
              style={styles.imageStyle}
              resizeMode="cover"
            />
          </View>
          <CardVertical style={{ justifyContent: "center" }}>
            <Title style={styles.text}>Try Count: {numberOfTrials}</Title>
            <View style={styles.buttonContainer}>
              <CustomButton whenPressed={startNewGame}>New Game</CustomButton>
            </View>
          </CardVertical>
        </CardHorizontal>
      </>
    );
  }

  return <View style={styles.container}>{content}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
  },
  text: {
    color: "#0a279da3",
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    padding: 20,
  },
  imageContainer: {
    width: 300,
    height: 300,
    overflow: "hidden",
    borderColor: "#9e0808",
    borderWidth: 2,
    borderRadius: 150,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    width: "100%",
  },
});

export default EndGameScreen;
