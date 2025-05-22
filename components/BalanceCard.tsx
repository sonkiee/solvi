import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BalanceCard = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 10,
          paddingHorizontal: 12,
        }}
      >
        <Text style={{ color: "#eee" }}>Wallet Balance</Text>
        <Feather name="eye-off" size={18} color="white" />
      </View>
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
