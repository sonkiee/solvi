import { currency } from "@/utils/currency";
import { getStatusColor } from "@/utils/status-color";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TxSummary = ({
  item,
  isLast,
}: {
  isLast: boolean;
  item: {
    id: string;
    description: string;
    amount: any;
    status: string;
    direction: string;
    type: string;
  };
}) => {
  const isOutgoing = item.direction === "outgoing" ? true : false;

  const status = item.status;

  const { background, text } = getStatusColor({ status });

  return (
    <View style={[styles.container, !isLast && styles.txItemBorder]}>
      {/* Left column: transaction meta */}
      <View style={styles.columnLeft}>
        <Text style={styles.title}>{item.type}</Text>
        <Text style={styles.dsc}>{item.description}</Text>
        <View style={styles.dateTimeContainer}>
          <Text style={styles.date}>May 20, 2025</Text>
          <Text style={styles.time}>12:30 PM</Text>
        </View>
      </View>

      {/* Right column: transaction status + amount */}
      <View style={styles.columnRight}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 4,
            // marginBottom: 8,
          }}
        >
          <Feather
            name={isOutgoing ? "arrow-up-right" : "arrow-down-left"}
            size={12}
            color={isOutgoing ? "#e74c3c" : "#27ae60"}
          />
          <Text
            style={[
              styles.amount,
              // { color: isOutgoing ? "#e74c3c" : "#27ae60" },
            ]}
          >
            {currency(isOutgoing ? item.amount : item.amount)}
          </Text>
        </View>
        <View style={[styles.statusBox, { backgroundColor: background }]}>
          <Text
            style={[
              styles.status,
              {
                color: text,
              },
            ]}
          >
            {item.status}
          </Text>
        </View>
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
    paddingHorizontal: 10,
    backgroundColor: "#fff",
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
  txItemBorder: {
    borderBottomWidth: 1,
    borderColor: "#f0f0f0",
  },
  statusBox: {
    padding: 3,
    // paddingHorizontal: 6,
    borderRadius: 6,
    // alignSelf: "flex-start",
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
