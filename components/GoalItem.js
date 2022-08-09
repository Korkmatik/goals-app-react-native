import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#377068" }}
        onPress={props.onPress.bind(this, props.id)}
        style={({pressed}) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginBottom: 5,
    backgroundColor: "#70e6d4",
    borderRadius: 6,
  },
  pressedItem: {
    opacity: 0.5
  },
  goalText: {
    padding: 10,
    fontSize: 18,
    color: "white",
  },
});
