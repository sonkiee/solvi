import React from "react";
import { StyleSheet, Text, View } from "react-native";

const PromoCard = () => {
  return (
    <View style={styles.container}>
      <Text>PromoCard</Text>
    </View>
  );
};

export default PromoCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    width: 200 * 0.8,
    height: 100 * 0.8,
    padding: 10,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
  },
});
