import { Containing } from "@/components/Reusables";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const BillSuccessScreen = () => {
  // Ideally, these should be passed via route params or fetched from state
  const transaction = {
    provider: "MTN",
    phoneNumber: "08012345678",
    amount: "₦100",
    date: "May 28, 2025",
    time: "2:45 PM",
    status: "Successful",
  };

  return (
    <Container>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Containing style={styles.card} border>
          <View style={styles.iconWrapper}>
            <Feather name="check-circle" size={50} color="green" />
          </View>

          <Text style={styles.titleText}>Airtime Purchase Successful</Text>
          <Text style={styles.descText}>
            Your airtime purchase of {transaction.amount} was successful.
          </Text>

          <View style={styles.detailsContainer}>
            <DetailRow label="Provider" value={transaction.provider} />
            <DetailRow label="Phone Number" value={transaction.phoneNumber} />
            <DetailRow label="Amount" value={transaction.amount} />
            <DetailRow label="Date" value={transaction.date} />
            <DetailRow label="Time" value={transaction.time} />
            <DetailRow label="Status" value={transaction.status} />
          </View>

          <View>
            <Button
              title="Go to Dashboard"
              onPress={() => router.navigate("/(app)/(tabs)/home")}
            />
          </View>
        </Containing>
      </ScrollView>
    </Container>
  );
};

const DetailRow = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.row}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

export default BillSuccessScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 16,
    gap: 20,
  },
  card: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    gap: 16,
    borderRadius: 12,
    // backgroundColor: "rgba(255,255,255,0.02)",
  },
  iconWrapper: {
    alignItems: "center",
    marginBottom: 8,
  },
  titleText: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    color: "#00C851",
  },
  descText: {
    textAlign: "center",
    color: "#bbb",
    fontSize: 14,
  },
  detailsContainer: {
    marginTop: 12,
    gap: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 4,
    borderBottomWidth: 0.3,
    borderBottomColor: "rgba(255,255,255,0.1)",
  },
  label: {
    color: "#888",
    fontSize: 14,
    textTransform: "capitalize",
  },
  value: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 14,
  },
});
