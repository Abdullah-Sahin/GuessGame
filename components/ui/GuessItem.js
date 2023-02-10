import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../util/Colors";

function GuessItem({ index, number }) {
  return (
    <View style={styles.guessItemContainer}>
      <Text style={styles.guessItemText}>{index}.</Text>
      <Text style={styles.guessItemText}>Computers guess: {number}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  guessItemContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.primary200,
    borderColor: Colors.secondary300,
    borderRadius: 16,
    borderWidth: 3,
  },
  guessItemText: {
    padding: 16,
    fontSize: 16,
    color: Colors.secondary600,
    textAlign: "center",
    textAlignVertical: "center",
  },
});

export default GuessItem;
