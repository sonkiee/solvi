import Picker from "@/components/Picker";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { currency } from "@/utils/currency";
import { Entypo, Feather, Octicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ExchangeScreen = () => {
  const [fromCurrency, setFromCurrency] = useState({
    id: "NGN",
    symbol: "$",
  });
  const [toCurrency, setToCurrency] = useState({
    id: "RMB",
    symbol: "¥",
  });
  const [amount, setAmount] = useState(1000); // optionally dynamic later

  const [selectedCurrency, setSelectedCurrency] = useState("NGN");

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <Container top={1}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Entypo name="chevron-thin-left" size={16} color="white" />
          <Text style={styles.title}>Currency Exchange</Text>
          <Feather name="refresh-ccw" size={16} color="white" />
        </View>

        {/* Wallet Balance */}
        <View style={styles.containing}>
          <Text style={styles.placeholder}>Wallet balance:</Text>
          <Text style={styles.price}>{currency(10000)}</Text>
        </View>

        {/* Exchange Rate */}
        <View style={styles.containing}>
          <Text style={styles.placeholder}>Exchange rate:</Text>
          <Text style={styles.price}>
            1 {fromCurrency.id} = 1.2 {toCurrency.id}
          </Text>
          <Text style={styles.updatedText}>Updated: 12:00 PM</Text>
        </View>

        {/* Converter Section */}
        <View style={styles.converter}>
          <Text style={styles.label}>Amount to Convert</Text>

          <Picker
            options={[
              { label: "Nigerian Naira (NGN)", value: "NGN" },
              { label: "Ghanaian Cedis (GHS)", value: "GHS" },
              { label: "Kenyan Shillings (KES)", value: "KES" },
            ]}
            selectedValue={selectedCurrency}
            onValueChange={(itemValue) => {
              setSelectedCurrency(itemValue);
              switch (itemValue) {
                case "NGN":
                  setFromCurrency({ id: "NGN", symbol: "₦" });
                  break;
                case "GHS":
                  setFromCurrency({ id: "GHS", symbol: "₵" });
                  break;
                case "KES":
                  setFromCurrency({ id: "KES", symbol: "KSh" });
                  break;
              }
            }}
          />

          <View style={styles.amountSection}>
            <View style={styles.amountSide}>
              <View style={styles.flag}>
                <Text>{fromCurrency.symbol}</Text>
              </View>
              <Text style={styles.amountText}>{amount}</Text>
            </View>
            <Text style={styles.amountText}>{amount}</Text>
          </View>

          <TouchableOpacity onPress={handleSwap} style={styles.switchIcon}>
            <Octicons name="arrow-switch" size={20} color="#333" />
          </TouchableOpacity>

          <View style={styles.amountSection}>
            <View style={styles.amountSide}>
              <View style={styles.flag}>
                <Text>{toCurrency.symbol}</Text>
              </View>
              <Text style={styles.amountText}>{amount * 1.2}</Text>
            </View>
            <Text style={styles.amountText}>{amount * 1.2}</Text>
          </View>

          <Text style={styles.label}>Amount You&apos;ll Receive</Text>

          {/* <View>
            <Text> 5mins</Text>
          </View> */}
        </View>

        <View
          style={{
            marginTop: 16,
          }}
        >
          <Button
            title="Buy RMB"
            gradient
            onPress={() => router.navigate("/send-to-details")}
          />
        </View>
      </View>
    </Container>
  );
};

export default ExchangeScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
  placeholder: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 15,
  },
  updatedText: {
    marginTop: 4,
    color: "rgba(255,255,255,0.5)",
    fontSize: 12,
  },
  containing: {
    borderWidth: 0.5,
    borderColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 8,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    paddingHorizontal: 10,
    paddingVertical: 16,
    marginTop: 12,
  },
  price: {
    fontWeight: "600",
    fontSize: 20,
    color: "white",
    marginTop: 4,
  },
  converter: {
    paddingVertical: 16,
    paddingHorizontal: 10,
    backgroundColor: "#f5f5f5",
    marginTop: 16,
    borderRadius: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
    marginBottom: 4,
  },
  amountSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  amountSide: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  flag: {
    width: 32,
    height: 24,
    borderRadius: 6,
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  amountText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  switchIcon: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    transform: [{ rotate: "90deg" }],
  },
});
