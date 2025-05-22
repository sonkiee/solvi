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
    <View>
      <Text>CardsSlider</Text>
    </View>
  );
};

export default CardsSlider;

const styles = StyleSheet.create({});
