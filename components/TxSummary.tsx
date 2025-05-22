import { currency } from "@/utils/currency";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TxSummary = () => {
  const isOutgoing = true; // you can dynamically toggle this
  const status = "completed"; // pending | completed | failed

  return (
    <View style={styles.container}>
      {/* Left column: transaction meta */}
      <View style={styles.columnLeft}>
        <Text style={styles.title}>RMB Purchase</Text>
        <Text style={styles.dsc}>Wallet fund transfer</Text>
        <View style={styles.dateTimeContainer}>
          <Text style={styles.date}>May 20, 2025</Text>
          <Text style={styles.time}>12:30 PM</Text>
        </View>
      </View>

      {/* Right column: transaction status + amount */}
      <View style={styles.columnRight}>
        <AntDesign
          name={isOutgoing ? "arrowup" : "arrowdown"}
          size={18}
          color={isOutgoing ? "#e74c3c" : "#27ae60"}
        />
        <Text
          style={[styles.amount, { color: isOutgoing ? "#e74c3c" : "#27ae60" }]}
        >
          {currency(isOutgoing ? -10000 : 10000)}
        </Text>
        <Text style={[styles.status, statusStyles[status]]}>{status}</Text>
      </View>
    </View>
  );
};

export default TxSummary;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#f0f0f0",
  },
  columnLeft: {
    flexDirection: "column",
    gap: 4,
  },
  columnRight: {
    flexDirection: "column",
    alignItems: "flex-end",
    gap: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
    textTransform: "capitalize",
  },
  dsc: {
    fontSize: 14,
    color: "#666",
  },
  dateTimeContainer: {
    flexDirection: "row",
    gap: 10,
  },
  date: {
    fontSize: 12,
    color: "#999",
  },
  time: {
    fontSize: 12,
    color: "#999",
  },
  amount: {
    fontSize: 16,
    fontWeight: "700",
  },
  status: {
    fontSize: 12,
    fontWeight: "500",
    textTransform: "capitalize",
  },
});

const statusStyles = StyleSheet.create({
  pending: {
    color: "#f39c12",
  },
  completed: {
    color: "#27ae60",
  },
  failed: {
    color: "#e74c3c",
  },
});
