import { Entypo } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Containing = ({ children }: { children: React.ReactNode }) => {
  return <View style={styles.containing}>{children}</View>;
};

export const HeaderBack = () => {
  return (
    <View style={styles.headerBack}>
      <Entypo name="chevron-thin-left" size={16} color="white" />
      <Text style={styles.title}>Currency Exchange</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containing: {
    borderWidth: 0.5,
    borderColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 8,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    paddingHorizontal: 10,
    paddingVertical: 16,
    marginTop: 12,
  },
  headerBack: {
    borderBottomColor: "#aaa",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  title: { fontSize: 16, fontWeight: "600", color: "white" },
});
