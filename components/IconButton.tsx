import { RelativePathString, router } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

const IconButton = ({
  title = "button",
  icon,
  index,
  link,
}: {
  title: string;
  icon?: React.ReactElement;
  index: number;
  link: RelativePathString;
}) => {
  return (
    <Pressable
      style={[styles.container, index === 0 && { backgroundColor: "#ccc" }]}
      onPress={() => router.navigate(`${link}`)}
    >
      {icon && icon}
      <Text
        style={[
          {
            color: "#ccc",
            textTransform: "capitalize",
          },
          index === 0 && { color: "purple" },
        ]}
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
