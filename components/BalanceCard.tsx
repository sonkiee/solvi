import { currency } from "@/utils/currency";
import {
  Feather,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import IconButton from "./IconButton";

const BalanceCard = () => {
  const [balance, setBalance] = useState(false);
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
        <Text style={{ color: "#eee", fontWeight: "600", fontSize: 16 }}>
          Wallet Balance
        </Text>
        <TouchableOpacity onPress={() => setBalance((prev) => !prev)}>
          <Feather name="eye-off" size={18} color="#eee" />
        </TouchableOpacity>
      </View>
      <Text style={styles.balance}>{balance ? currency(10000) : "******"}</Text>
      <View style={styles.buttonContainer}>
        {[
          {
            label: "fund",
            icon: <Ionicons name="wallet-outline" size={18} color="purple" />,
          },
          {
            label: "transfer",
            icon: (
              <FontAwesome6
                name="arrow-right-arrow-left"
                size={16}
                color="#ccc"
              />
            ),
          },
          {
            label: "history",
            icon: (
              <MaterialCommunityIcons name="history" size={18} color="#ccc" />
            ),
          },
        ].map((button, index) => (
          <IconButton
            key={index}
            index={index}
            title={button.label}
            icon={button.icon}
          />
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
  balance: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#eee",
  },
});
