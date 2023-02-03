import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./zzcomponents/StartGameScreen";
import GameScreen from "./zzcomponents/GameScreen";
import { useState } from "react";

export default function App() {

  const [confirmedNumber, setConfirmedNumber] = useState();

  const confirmNumberHandler = (enteredNumber) => {
    setConfirmedNumber(enteredNumber);
  }

  let screen = <StartGameScreen confirmInput={confirmNumberHandler}/>

  if(confirmedNumber){
    screen = <GameScreen />
  }

  return (

    <LinearGradient
      style={styles.appContainer}
      colors={["#1d07acdc", "#ebc248ff"]}
    >
      <ImageBackground source={require("./assets/stairs.jpg")} style={styles.appContainer} imageStyle={styles.imageStyle}>
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  imageStyle: {
    opacity: 0.2
  }
});
