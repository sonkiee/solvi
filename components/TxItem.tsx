import { currency } from "@/utils/currency";
import { getStatusColor } from "@/utils/status-color";
import {
  AntDesign,
  Feather,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const getIcon = (type: string) => {
  switch (type) {
    case "withdrawal":
      return {
        icon: <MaterialCommunityIcons name="bank" size={20} color="#FF3B30" />,
        iconColor: "#FF3B30",
        bgColor: "#FFECEC",
      };
    case "rmb purchase":
      return {
        icon: <FontAwesome name="rmb" size={20} color="#FF9500" />,
        iconColor: "#FF9500",
        bgColor: "#FFF4E5",
      };
    case "bill payment":
      return {
        icon: <AntDesign name="filetext1" size={20} color="#5856D6" />,
        iconColor: "#5856D6",
        bgColor: "#EFEFFE",
      };
    case "wallet fund":
      return {
        icon: <Ionicons name="wallet-outline" size={20} color="#34C759" />,
        iconColor: "#34C759",
        bgColor: "#E6FCEB",
      };
    default:
      return {
        icon: <AntDesign name="question" size={20} color="#C7C7CC" />,
        iconColor: "#C7C7CC",
        bgColor: "#F2F2F7",
      };
  }
};

const TxItem = ({ transaction, current, setCurrent }) => {
  const { type, amount, date, direction, status, recipient, description } =
    transaction;
  const { icon, bgColor } = getIcon(type);
  const isOutgoing = direction === "outgoing";

  const { background, text } = getStatusColor({ status });

  return (
    <View style={styles.container}>
      <View style={[styles.iconContainer, { backgroundColor: bgColor }]}>
        {icon}
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>{type}</Text>
        <Text style={styles.date}>{date}</Text>

        {(recipient || description) && (
          <View style={styles.metaBox}>
            {recipient && (
              <Text style={styles.metaText}>Recipient: {recipient}</Text>
            )}
            {description && <Text style={styles.metaText}>{description}</Text>}
          </View>
        )}
      </View>

      <View style={styles.amountSection}>
        <View style={styles.amountRow}>
          <Feather
            name={isOutgoing ? "arrow-up-right" : "arrow-down-left"}
            size={12}
            color={isOutgoing ? "#e74c3c" : "#27ae60"}
          />
          <Text style={styles.amount}>{currency(amount)}</Text>
        </View>
        <View style={[styles.statusBox, { backgroundColor: background }]}>
          <Text style={[styles.status, { color: text }]}>{status}</Text>
        </View>
      </View>
    </View>
  );
};

export default TxItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 10,
    elevation: 1,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 2,
    color: "#222",
    textTransform: "capitalize",
  },
  date: {
    fontSize: 12,
    color: "#888",
  },
  metaBox: {
    marginTop: 8,
  },
  metaText: {
    fontSize: 12,
    color: "#666",
    opacity: 0.9,
    marginBottom: 2,
  },
  amountSection: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
    gap: 4,
  },
  amountRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  amount: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#000",
  },
  statusBox: {
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 6,
    marginTop: 4,
  },
  status: {
    fontSize: 12,
    fontWeight: "500",
    textTransform: "capitalize",
  },
});
