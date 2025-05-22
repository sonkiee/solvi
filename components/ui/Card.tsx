import { LinearGradient } from "expo-linear-gradient";
import React, { ReactNode } from "react";
import { StyleSheet } from "react-native";

const Card = ({
  colors,
  children,
  height,
  width,
}: {
  children: ReactNode;
  colors: [string, string];
  height?: number;
  width?: number;
}) => {
  return (
    <LinearGradient
      style={[
        styles.container,
        {
          height: height ? height * 0.8 : undefined,
          width: width ? width * 0.8 : undefined,
        },
      ]}
      colors={colors ?? ["#FF5733", "#FFC300"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      {children}
    </LinearGradient>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
});
