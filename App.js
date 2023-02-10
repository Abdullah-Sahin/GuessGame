import {
  StyleSheet,
  ImageBackground,
  SafeAreaView
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./components/screens/StartGameScreen";
import GameScreen from "./components/screens/GameScreen";
import EndGameScreen from "./components/screens/EndGameScreen";
import { useState } from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import Colors from "./util/Colors";

export default function App() {
  const [confirmedNumber, setConfirmedNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);
  const [numberOfTrials, setNumberOfTrials] = useState(0);

  const [fontsLoaded] = useFonts({
    "smack-boom": require("./assets/fonts/Smack-Boom.ttf"),
    "smack-boom-ex": require("./assets/fonts/Smack-Boom-Extrude.ttf"),
  });

  function confirmNumberHandler(enteredNumber) {
    setConfirmedNumber(enteredNumber);
  }

  function endGame() {
    setGameIsOver(true);
  }

  function startNewGame() {
    setConfirmedNumber(undefined);
    setGameIsOver(false);
    setNumberOfTrials(0);
  }

  function increaseNumberOfTrials() {
    setNumberOfTrials(numberOfTrials + 1);
  }

  let screen = <StartGameScreen confirmInput={confirmNumberHandler} />;

  if (confirmedNumber && !gameIsOver) {
    screen = (
      <GameScreen
        confirmedNumber={confirmedNumber}
        endGame={endGame}
        increaseTrials={increaseNumberOfTrials}
      />
    );
  }

  if (gameIsOver) {
    screen = (
      <EndGameScreen
        startNewGame={startNewGame}
        numberOfTrials={numberOfTrials}
      ></EndGameScreen>
    );
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <LinearGradient
      style={styles.appContainer}
      colors={[Colors.secondary500, Colors.primary400]}
    >
      <ImageBackground
        source={require("./assets/images/stairs.jpg")}
        style={styles.appContainer}
        imageStyle={styles.imageStyle}
      >
        <SafeAreaView style={styles.appContainer}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  imageStyle: {
    opacity: 0.2,
  },
});
