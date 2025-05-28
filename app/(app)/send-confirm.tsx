import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const SendConfirmScreen = () => {
  const [selectedMethod, setSelectedMethod] = useState("wallet");

  const handleBuyNow = () => {
    Alert.alert(
      "Payment Success",
      `You have paid with ${selectedMethod === "wallet" ? "Wallet" : "Card"}`
    );
    // You can also trigger API logic or navigate
  };

  const PaymentOption = ({ method, label, subLabel, icon }: any) => (
    <TouchableOpacity
      style={[styles.card, styles.paymentRow]}
      onPress={() => setSelectedMethod(method)}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Ionicons
          name={
            selectedMethod === method ? "radio-button-on" : "radio-button-off"
          }
          size={20}
          color={selectedMethod === method ? "#007AFF" : "#999"}
          style={styles.radioIcon}
        />
        <View>
          <Text style={styles.paymentOption}>{label}</Text>
          {subLabel && <Text style={styles.subText}>{subLabel}</Text>}
        </View>
      </View>
      {icon}
    </TouchableOpacity>
  );

  return (
    <Container>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionTitle}>Transaction Summary</Text>

        <View style={styles.card}>
          <View style={styles.imagePreview}>
            <Text style={styles.previewText}>Image Preview</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Amount (AMB)</Text>
            <Text style={styles.amountValue}>2,000</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Amount (NGN)</Text>
            <Text style={styles.amountValue}>₦2,000</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Exchange Rate (AMB → NGN)</Text>
            <Text style={styles.value}>1 AMB = ₦1.00</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Recipient</Text>
            <Text style={styles.value}>Emeka Okonkwo</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Lipay ID</Text>
            <Text style={styles.value}>LIP-293929</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Select Payment Method</Text>

        <PaymentOption method="wallet" label="Pay from Wallet" icon={<></>} />

        <PaymentOption
          method="card"
          label="Pay from Card"
          subLabel="Debit/Credit Card"
          icon={<Feather name="credit-card" size={22} color="#ccc" />}
        />

        <View style={styles.buttonWrapper}>
          <Button title="Buy Now" onPress={handleBuyNow} />
        </View>
      </ScrollView>
    </Container>
  );
};

export default SendConfirmScreen;

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 40,
  },
  card: {
    borderRadius: 12,
    marginVertical: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 6,
    color: "#aaa",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    color: "#555",
  },
  value: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
  },
  amountValue: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
  },
  imagePreview: {
    height: 100,
    marginBottom: 16,
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  previewText: {
    color: "#888",
    fontSize: 14,
  },
  paymentOption: {
    fontSize: 15,
    fontWeight: "500",
    color: "#333",
  },
  subText: {
    fontSize: 12,
    color: "#666",
  },
  paymentRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  radioIcon: {
    marginRight: 12,
  },
  buttonWrapper: {
    marginTop: 24,
  },
});
