import React from "react";
import { StyleSheet, Text, View } from "react-native";

const lists = [
  {
    label: "monthly revenue ",
    content: "¥ 23,000",
    icon: "wallet-outline",
    colors: ["#ccc", "#ccc", "#ccc"],
  },
  {
    label: "active orders ",
    content: "12",
    icon: "wallet-outline",
    colors: ["#ccc", "#ccc", "#ccc"],
  },
  {
    label: "unlock limits",
    content: "get business account",
    icon: "wallet-outline",
    colors: ["#ccc", "#ccc", "#ccc"],
  },
  {
    label: "new users",
    content: "",
    icon: "wallet-outline",
    colors: ["#ccc", "#ccc", "#ccc"],
  },
  {
    label: "sms sent",
    content: "100",
    icon: "wallet-outline",
    colors: ["#ccc", "#ccc", "#ccc"],
  },
  {
    label: "refer & earn",
    content: "get ¥20 bonus",
    icon: "wallet-outline",
    colors: ["#ccc", "#ccc", "#ccc"],
  },
];

const CardsSlider = () => {
  return (
    <View style={styles.container}>
      <Text>CardsSlider</Text>

      <View style={styles.content}>
        {lists.map((list, index) => (
          <View key={index} style={styles.content}>
            <Text style={{ color: list.colors[0] }}>{list.label}</Text>
            <Text style={{ color: list.colors[1] }}>{list.content}</Text>
            <Text style={{ color: list.colors[2] }}>{list.icon}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default CardsSlider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
});
