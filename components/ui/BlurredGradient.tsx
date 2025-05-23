import { BlurView } from "expo-blur";
import React from "react";
import { StyleSheet, Text } from "react-native";

const BlurredGradient = () => {
  return (
    <BlurView tint="default" style={styles.container}>
      <Text> jjjj</Text>
    </BlurView>
  );
};

export default BlurredGradient;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 500,
    width: "100%",
  },
});
