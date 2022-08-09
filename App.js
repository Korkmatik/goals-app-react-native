import { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Button
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { key: Math.random().toString(), text: enteredGoalText },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => currentCourseGoals.filter(goal => goal.key !== id))
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.addNewGoalButton}>
        <Button title="Add New Goal" color="#2dc4ae" onPress={startAddGoalHandler} />
      </View>
      <GoalInput onPress={addGoalHandler} onCancel={endAddGoalHandler} visible={modalIsVisible}  />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} id={itemData.item.key} onPress={deleteGoalHandler} />;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
  addNewGoalButton: {
    marginTop: 24,
    marginBottom: 16
  }
});
