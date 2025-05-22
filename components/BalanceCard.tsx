import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BalanceCard = () => {
  return (
    <View style={styles.container}>
      <Text>BalanceCard</Text>
    </View>
  );
};

export default BalanceCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    borderRadius: 5,
    width: "100%",
    height: 80,
    paddingHorizontal: 11,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
});
