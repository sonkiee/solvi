import { Entypo } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const Containing = ({
  children,
  row,
}: {
  children: React.ReactNode;
  row: boolean;
}) => {
  return (
    <View
      style={[
        styles.containing,
        row && {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        },
      ]}
    >
      {children}
    </View>
  );
};

export const HeaderBack = ({ title }: { title: string }) => {
  return (
    <View style={styles.headerBack}>
      <TouchableOpacity
        onPress={() => router.back()}
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 8,
          paddingHorizontal: 8,
          paddingVertical: 2,
        }}
      >
        <Entypo name="chevron-thin-left" size={16} color="white" />
        <Text style={styles.title}>{title ?? "title text"}</Text>
      </TouchableOpacity>
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
    paddingVertical: 16,
    gap: 12,
  },
  title: { fontSize: 16, fontWeight: "600", color: "white" },
});
