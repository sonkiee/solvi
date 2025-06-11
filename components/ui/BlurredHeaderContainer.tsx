import { BlurView } from "expo-blur";
import React, { ReactNode } from "react";
import { StyleSheet } from "react-native";

const BlurredHeaderContainer = ({ children }: { children: ReactNode }) => {
  return (
    <BlurView tint="default" style={styles.container}>
      {children}
    </BlurView>
  );
};

export default BlurredHeaderContainer;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "rgba(255, 255, 255, 0.3)",
  },
});
