import React from "react";
import { StyleSheet, Text, View } from "react-native";

const lists = [
  {
    label: "monthly revenue ",
    content: "¥ 23,000",
    icon: "wallet-outline",
  },
  {
    label: "active orders ",
    content: "12",
    icon: "wallet-outline",
  },
  {
    label: "unlock limits",
    content: "get business account",
    icon: "wallet-outline",
  },
  {
    label: "new users",
    content: "",
    icon: "wallet-outline",
  },
  {
    label: "sms sent",
    content: "100",
    icon: "wallet-outline",
  },
  {
    label: "refer & earn",
    content: "get ¥20 bonus",
    icon: "wallet-outline",
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
