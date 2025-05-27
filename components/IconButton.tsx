import { RelativePathString, router } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

const IconButton = ({
  title = "button",
  icon,
  index,
  linkTo,
}: {
  title: string;
  icon?: React.ReactElement;
  index?: number;
  linkTo: RelativePathString;
}) => {
  // TO DO
  // make dynamic, bg, border and the rest
  return (
    <Pressable
      style={[
        styles.container,
        index === 0 && { backgroundColor: "#ccc" },
        {
          backgroundColor: "rgba(255, 255, 255, 0.1)",
        },
      ]}
      onPress={() => linkTo && router.navigate(linkTo)}
    >
      {icon && icon}
      <Text style={[styles.text, index === 0 && { color: "purple" }]}>
        {title}
      </Text>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: {
    flex: 1, // 👈 Make it take available space
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#cccccc",
    paddingHorizontal: 12,
    paddingVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
  },
  text: {
    color: "#ccc",
    textTransform: "capitalize",
  },
});
