import TxItem from "@/components/TxItem";
import TxScreenHeader from "@/components/TxScreenHeader";
import Container from "@/components/ui/Container";
import { transactions } from "@/constants";
import { groupTransactionsByDate } from "@/utils/grouped-tx-date";
import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const TransactionsScreen = () => {
  const [current, setCurrent] = useState("all");

  const grouped = groupTransactionsByDate(transactions);

  // Sort dates descending
  const sortedDates = Object.keys(grouped).sort(
    (a, b) => new Date(b) - new Date(a)
  );

  return (
    <Container top={1}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic"
      >
        <TxScreenHeader />

        <View style={styles.content}>
          {sortedDates.map((date) => (
            <View key={date} style={styles.dateGroup}>
              <View
                style={{
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                  marginHorizontal: 16,
                  marginBottom: 5,
                }}
              >
                <Feather name="calendar" size={16} color="#ccc" />
                <Text style={styles.dateHeader}>{date}</Text>
              </View>

              {grouped[date].map((transaction, index) => (
                <TxItem
                  key={transaction.id}
                  transaction={transaction}
                  current={current}
                  setCurrent={setCurrent}
                />
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </Container>
  );
};

export default TransactionsScreen;

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  dateGroup: {
    marginBottom: 24,
  },
  dateHeader: {
    fontSize: 15,
    // fontWeight: "bold",

    color: "#ccc",
  },
});
