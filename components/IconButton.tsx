import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

const IconButton = ({
  title = "button",
  icon,
}: {
  title: string;
  icon?: React.ReactElement;
}) => {
  return (
    <Pressable style={styles.container}>
      <Text>{title}</Text>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    borderWidth: 1,
    width: "50%",
  },
});
