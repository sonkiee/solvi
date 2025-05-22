import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PromoCard from "./PromoCard";

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
          <PromoCard key={index} />
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
    marginHorizontal: 20,
  },
  content: {
    flexDirection: "row",
    // justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
});
