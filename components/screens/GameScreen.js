import React, { useEffect } from "react";
import { useState } from "react";
import {
  StyleSheet,
  FlatList,
  View,
  Alert,
  useWindowDimensions,
} from "react-native";
import CustomButton from "../ui/CustomButton";
import RandomGenerator from "../../util/RandomGenerator";
import Title from "../ui/Title";
import AntDesign from "@expo/vector-icons/AntDesign";
import GuessItem from "../ui/GuessItem";
import CardVertical from "../ui/CardVertical";
import CardHorizontal from "../ui/CardHorizontal";

const initialMin = 1;
const initialMax = 100;

let minimum = initialMin;
let maximum = initialMax;

function GameScreen({ confirmedNumber, endGame, increaseTrials }) {
  const [currentGuess, setCurrentGuess] = useState(
    RandomGenerator.guessNumberExcept(initialMin, initialMax, confirmedNumber)
  );
  const [guessList, setGuessList] = useState([currentGuess]);
  const length = guessList.length;
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

  useEffect(() => {
    if (confirmedNumber === currentGuess) {
      minimum = initialMin;
      maximum = initialMax;
      endGame();
    }
  }, [currentGuess]);

  function changeGuess(direction) {
    // WHEN HINT IS FALSE
    if (
      (direction === "increase" && currentGuess > confirmedNumber) ||
      (direction !== "increase" && currentGuess < confirmedNumber)
    ) {
      Alert.alert("NO", "You know this is wrong", [
        { text: "ok", style: "cancel" },
      ]);
      return;
    }
    // WHEN HINT IS TRUE
    if (direction === "increase") {
      minimum = currentGuess + 1;
    } else {
      maximum = currentGuess;
    }
    increaseTrials();
    const newGuess = RandomGenerator.guessNumber(minimum, maximum);
    setCurrentGuess(newGuess);
    setGuessList((prevList) => [newGuess, ...prevList]);
  }

  // Portrait
  let content = (
    <>
      <Title style={styles.informativeText}>Opponent's Guess: {currentGuess}</Title>
      <Title style={styles.question}>Lower or Higher ?</Title>
      <View style={[styles.buttonsContainer, {width: "92%"}]}>
        <View style={styles.buttonContainer}>
          <CustomButton whenPressed={changeGuess.bind(this, "decrease")}>
            <AntDesign name="downcircle" size={30} color="#011f95c0" />
          </CustomButton>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton whenPressed={changeGuess.bind(this, "increase")}>
            <AntDesign name="upcircle" size={30} color="#011f95c0" />
          </CustomButton>
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={guessList}
          renderItem={(itemData) => (
            <GuessItem index={length - itemData.index} number={itemData.item} />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </>
  );

  // Lanscape
  if (windowType === "2" || windowType === "4") {
    content = (
      <CardHorizontal>
        <CardVertical style={{ flex: 2, height: height, alignSelf: "center"}}>
          <View style={styles.listContainer}>
            <FlatList
              data={guessList}
              renderItem={(itemData) => (
                <GuessItem
                  index={length - itemData.index}
                  number={itemData.item}
                />
              )}
              keyExtractor={(item) => item}
            />
          </View>
        </CardVertical>
        <CardVertical style={{ flex: 3, justifyContent: "center" }}>
          <Title style={{ fontSize: questionFontSize }}>Lower or Higher</Title>
          <View
            style={[
              styles.buttonsContainer,
              { marginTop: buttonsContainerMarginTop },
            ]}
          >
            <View style={styles.buttonContainer}>
              <CustomButton whenPressed={changeGuess.bind(this, "decrease")}>
                <AntDesign name="downcircle" size={30} color="#011f95c0" />
              </CustomButton>
            </View>
            <Title style={styles.informativeText}>{currentGuess}</Title>
            <View style={styles.buttonContainer}>
              <CustomButton whenPressed={changeGuess.bind(this, "increase")}>
                <AntDesign name="upcircle" size={30} color="#011f95c0" />
              </CustomButton>
            </View>
          </View>
        </CardVertical>
      </CardHorizontal>
    );
  }

  const rootContainerMarginTop =
    windowType === "1" || windowType === "3" ? 80 : 20;
  const buttonsContainerMarginTop =
    windowType === "phonePortrait" || windowType === "tabletPortrait" ? 20 : 10;
  const questionFontSize =
    windowType === "phonePortrait"
      ? 24
      : windowType === "phoneLandscape"
      ? 16
      : windowType === "tabletPortrait"
      ? 36
      : 30;

  return (
    <View style={[styles.rootContainer, { marginTop: rootContainerMarginTop }]}>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsContainer: {
    flexDirection: "row"
  },
  buttonContainer: {
    flex: 1,
    alignSelf: "center",
    //alignItems: "center"
  },
  informativeText: {
    color: "#2326b185",
  },
  listContainer: {
    marginBottom: 10,
    flex: 1,
    width: "90%",
    alignSelf: "center",
  },
});

export default GameScreen;
