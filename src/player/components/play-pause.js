import React from "react";
import {
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Text
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

function PlayPause(props) {
  return (
    <TouchableHighlight
      onPress={props.onPress}
      style={styles.container}
      hitSlop={{
        left: 5,
        top: 5,
        right: 5,
        bottom: 5
      }}
    >
      {props.paused ? (
        <Icon name="play-arrow" size={20} color="#4F8EF7" />
      ) : (
        <Icon name="pause" size={20} color="#4F8EF7" />
      )}
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingHorizontal: 7,
    height: 20,
    marginRight: 10,
    marginVertical: 3,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "lightgrey",
    backgroundColor: "lightgrey"
  }
});

export default PlayPause;
