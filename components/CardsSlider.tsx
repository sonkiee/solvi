import { Feather, Octicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import PromoCard from "./PromoCard";

const lists = [
  {
    label: "monthly revenue ",
    content: "¥ 23,000",
    icon: (
      <Feather name="dollar-sign" size={30} color="rgba(204, 204, 204, 0.3)" />
    ),
    colors: ["#2563eb", "#1d4ed8"],
  },
  {
    label: "active orders ",
    content: "12",
    icon: <Feather name="truck" size={30} color="rgba(204, 204, 204, 0.3)" />,
    colors: ["#16a34a", "#15803d"],
  },
  {
    label: "unlock limits",
    content: "get business account",
    icon: <Octicons name="unlock" size={30} color="rgba(204, 204, 204, 0.3)" />,
    colors: ["#9333ea", "#7e22ce"],
  },
  {
    label: "new users",
    content: "",
    icon: <Feather name="users" size={30} color="rgba(204, 204, 204, 0.3)" />,
    colors: ["#f97316", "#dc2626"],
  },
  {
    label: "sms sent",
    content: "100",
    icon: (
      <Feather
        name="message-square"
        size={30}
        color="rgba(204, 204, 204, 0.3)"
      />
    ),
    colors: ["#14b8a6", "#0891b2"],
  },
  {
    label: "refer & earn",
    content: "get ¥20 bonus",
    icon: <Octicons name="gift" size={30} color="rgba(204, 204, 204, 0.3)" />,
    colors: ["#ec4899", "#e11d48"],
  },
];

const CardsSlider = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          gap: 10,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.content}
      >
        {lists.map((list, index) => (
          <PromoCard
            key={index}
            label={list.label}
            icon={list.icon}
            colors={list.colors}
          />
        ))}
      </ScrollView>
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
    marginHorizontal: 10,
  },
  content: {
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
});
