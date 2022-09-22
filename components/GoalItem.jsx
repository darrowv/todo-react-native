import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ item, deleteGoalHandler }) => {
  return (
    <View style={styles.goalBlock}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={() => deleteGoalHandler(item.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{item.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalBlock: {
    margin: 8,
    borderRadius: 3,
    backgroundColor: "#ffffff",
  },
  pressedItem: {
    opacity: 0.5,
    backgroundColor: "#ED1C1C",
  },
  goalText: {
    // textAlign: "center",
    padding: 8,
    fontSize: 16
  },
});
