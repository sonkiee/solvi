import { transactions } from "@/constants";
import { Entypo } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TxSummary from "./TxSummary";

const TransactionsContainer = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{ flex: 1 }}>
            <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
              recent transactions
            </Text>
          </View>

          <TouchableOpacity
            style={styles.moreWrapper}
            activeOpacity={0.5}
            onPress={() => setToggle((prev) => !prev)}
          >
            <Text style={styles.more}>{toggle ? "view less" : "view all"}</Text>
            <Entypo
              name={toggle ? "chevron-small-up" : "chevron-small-down"}
              size={20}
              color="#333"
            />
          </TouchableOpacity>
        </View>

        <View style={[styles.content]}>
          {transactions
            .slice(0, toggle ? transactions.length : 5)
            .map((item, index, arr) => (
              <TxSummary
                key={index}
                item={item}
                isLast={index === arr.length - 1}
              />
            ))}
        </View>
      </View>

      <View style={{ marginBottom: 50 }}>
        <Button
          title="View All Transaction"
          onPress={() => router.push("/transactions")}
        />
      </View>
    </>
  );
};

export default TransactionsContainer;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    margin: 10,
    marginBottom: 30,
    flex: 1,
  },
  header: {
    backgroundColor: "#f5f5f5",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontWeight: "700",
    fontSize: 18,
    color: "#333",
    textTransform: "capitalize",
  },
  content: {
    padding: 10,
    paddingTop: 0,
    flex: 1,
    backgroundColor: "#fff",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  moreWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  more: {
    fontWeight: "500",
    fontSize: 14,
    color: "#888", // softer than solid black
    textTransform: "capitalize",
  },
});
