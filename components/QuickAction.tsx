import { AntDesign, FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "./ui/Card";

const actions = [
  {
    label: "buy rmb",
    icon: <FontAwesome name="yen" size={20} color="white" />,
    colors: ["green", "green"],
  },
  {
    label: "buy rmb",
    icon: <AntDesign name="filetext1" size={20} color="white" />,
    colors: ["green", "green"],
  },
];

const CartItem = ({ action }) => {
  return (
    <Card colors={action.colors} height={120} width={210}>
      <View style={[styles.action, { flex: 1 }]}>
        <View style={styles.iconContainer}>{action.icon}</View>
        <Text style={styles.label}>{action.label}</Text>
      </View>
    </Card>
  );
};

const QuickAction = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>quick actions</Text>
        <Text style={styles.more}>view all</Text>
      </View>
      <View style={styles.row}>
        {actions.map((action, index) => (
          <CartItem key={index} action={action} />
        ))}
      </View>
    </View>
  );
};

export default QuickAction;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    width: "100%",
    gap: 10,
  },
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
  },
  iconContainer: {
    borderRadius: 999,
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  title: {
    fontWeight: "700",
    fontSize: 18,
    color: "#ccc",
    textTransform: "capitalize",
  },
  more: {
    fontWeight: "500",
    fontSize: 14,
    color: "#ccc",
    textTransform: "capitalize",
  },
});
