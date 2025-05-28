import { RelativePathString, router } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Card from "./ui/Card";

const BillsItem = ({
  colors,
  icon,
  label,
  linkTo,
}: {
  colors: [string, string];
  icon: React.ReactElement;
  label: string;
  linkTo: RelativePathString;
}) => {
  return (
    <Card colors={colors} height={140} width={"100%"}>
      <Pressable
        style={{ flex: 1 }}
        onPress={() => linkTo && router.navigate(linkTo)}
      >
        <View style={[styles.action, { flex: 1 }]}>
          <View style={styles.iconContainer}>{icon}</View>
          <Text style={styles.label}>{label}</Text>
        </View>
      </Pressable>
    </Card>
  );
};

export default BillsItem;

const styles = StyleSheet.create({
  action: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignContent: "center",
    alignItems: "center",
    gap: 10,
  },
  label: {
    fontWeight: "500",
    fontSize: 16,
    color: "#ccc",
    textTransform: "capitalize",
    textAlign: "center",
  },
  iconContainer: {
    borderRadius: 999,
    height: 40,
    width: 40,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
});
