import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet } from "react-native";

const GradientContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <LinearGradient
      colors={["#2563eb", "#9333ea"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{
        // flex: 1,
        borderRadius: 10,
        // padding: 10,
        // shadowColor: "#000",
        // shadowOpacity: 0.3,
        // shadowRadius: 5,
        // shadowOffset: { width: 0, height: 2 },
      }}
    >
      {children}
    </LinearGradient>
  );
};

export default GradientContainer;

const styles = StyleSheet.create({});
