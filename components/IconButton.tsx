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
      {icon && icon}
      <Text
        style={{
          color: "#ccc",
          textTransform: "capitalize",
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#cccccc",
    width: 120 * 0.8,
    paddingHorizontal: 5,
    paddingVertical: 8,
    justifyContent: "space-around",
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
