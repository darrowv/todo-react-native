import { useState } from "react";
import {
  FlatList,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [modal, setModal] = useState(false);
  const [goalsList, setGoalsList] = useState([]);

  const addGoalHandler = (enteredGoalText) => {
    setGoalsList((currentList) => [
      ...currentList,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    setModal(false);
  };

  const deleteGoalHandler = (id) => {
    setGoalsList((list) => list.filter((item) => item.id !== id));
  };

  return (
    <>
      <View style={styles.appContainer}>
        <StatusBar barStyle="light-content" />
        <View style={{alignItems: "center"}}>
          <View style={styles.addButtonContainer}>
            <Pressable
              onPress={() => setModal(true)}
              style={({ pressed }) => pressed && styles.pressedAddButton}
            >
              <Text style={styles.addButtonText}>Add New Goal!</Text>
            </Pressable>
          </View>
        </View>
        <GoalInput
          visible={modal}
          addGoalHandler={addGoalHandler}
          setModal={setModal}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goalsList}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  deleteGoalHandler={deleteGoalHandler}
                  item={itemData.item}
                />
              );
            }}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 16,
    backgroundColor: "#273840",
  },
  goalsContainer: {
    flex: 5,
    marginTop: 9,
  },
  addButtonContainer: {

    width: "50%",
    backgroundColor: "#4682B4"
  },
  pressedAddButton: {
    opacity: 0.5
  },
  addButtonText: {
    color: "white",
    padding: 10,
    textAlign: "center",
    fontSize: 18
  },
});
