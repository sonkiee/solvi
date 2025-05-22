import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "./IconButton";

const BalanceCard = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 10,
        }}
      >
        <Text style={{ color: "#eee" }}>Wallet Balance</Text>
        <Feather name="eye-off" size={18} color="white" />
      </View>
      <Text>10,000.00</Text>
      <View style={styles.buttonContainer}>
        {["fund", "transfer", "history"].map((button, index) => (
          <IconButton key={index} title={button} />
        ))}
      </View>
    </View>
  );
};

export default BalanceCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    borderRadius: 8,
    width: "100%",
    // height: 80,
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 10,
    flex: 1,
    width: "100%",
  },
});
