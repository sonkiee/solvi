import { Entypo } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TxSummary from "./TxSummary";

const TransactionsContainer = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{ flex: 1 }}>
            <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
              recent transactions
            </Text>
          </View>

          <View style={styles.moreWrapper}>
            <Text style={styles.more}>view all</Text>
            <Entypo name="chevron-small-down" size={20} color="#333" />
          </View>
        </View>

        <View style={styles.content}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
            <TxSummary key={index} />
          ))}
        </View>
      </View>

      <Text style={{ color: "white" }}> View All Transaction</Text>
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

    // height: 400,
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
