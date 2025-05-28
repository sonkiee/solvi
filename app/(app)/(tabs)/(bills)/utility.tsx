import Picker from "@/components/Picker";
import { Containing, SegmentedControl } from "@/components/Reusables";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import TextInput from "@/components/ui/Input";
import { currency } from "@/utils/currency";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const providers = [
  { label: "MTN", value: "mtn" },
  { label: "Airtel", value: "airtel" },
  { label: "GLO", value: "glo" },
  { label: "9mobile", value: "9mobile" },
];

const electricityProviders = [
  { label: "Abuja Electricity Distribution Company (AEDC)", value: "aedc" },
  { label: "Eko Electricity Distribution Company (EKEDC)", value: "ekedc" },
  { label: "Ikeja Electric (IE)", value: "ikeja" },
  { label: "Jos Electricity Distribution Company (JED)", value: "jed" },
  { label: "Kaduna Electric", value: "kaduna" },
  { label: "Kano Electricity Distribution Company (KEDCO)", value: "kedco" },
  {
    label: "Port Harcourt Electricity Distribution Company (PHED)",
    value: "phed",
  },
  { label: "Benin Electricity Distribution Company (BEDC)", value: "bedc" },
  { label: "Enugu Electricity Distribution Company (EEDC)", value: "eedc" },
  { label: "Ibadan Electricity Distribution Company (IBEDC)", value: "ibedc" },
  { label: "Yola Electricity Distribution Company (YEDC)", value: "yedc" },
];

const prices = [100, 200, 500, 1000];

const tabs = [
  { label: "beneficiary", key: "beneficiary", value: "beneficiary" },
  { label: "frequent", key: "frequent", value: "frequent" },
];

const UtilityScreen = () => {
  const [selectedElectricity, setSelectedElectricity] = useState("");
  const [selectedNetwork, setSelectedNetwork] = useState("");
  const [amount, setAmount] = useState(0);
  const [selectedTab, setSelectedTab] = useState("frequent");
  const [selectedType, setSelectedType] = useState("prepaid");

  return (
    <Container top={1}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <Containing style={styles.card} border>
            <Picker
              options={electricityProviders}
              selectedValue={selectedElectricity}
              onValueChange={setSelectedElectricity}
              transparent
              title="Electricity Provider"
            />

            <View style={styles.typeSwitcher}>
              {["prepaid", "postpaid"].map((item) => {
                const isSelected = selectedType === item;
                return (
                  <TouchableOpacity
                    key={item}
                    style={[
                      styles.typeButton,
                      isSelected && styles.typeButtonSelected,
                    ]}
                    onPress={() => setSelectedType(item)}
                  >
                    <Text
                      style={[
                        styles.typeButtonText,
                        isSelected && styles.typeButtonTextSelected,
                      ]}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            <TextInput title="Meter Number" placeholder="Enter Meter Number" />

            <TextInput
              icon={
                <MaterialCommunityIcons
                  name="currency-ngn"
                  size={20}
                  color="#ccc"
                />
              }
              title="Amount"
              value={amount > 0 ? amount.toString() : ""}
              onChangeText={(text) => setAmount(Number(text))}
              keyboardType="numeric"
              placeholder="Enter Amount"
            />

            <View style={styles.quickAmounts}>
              {prices.map((price) => (
                <Containing
                  key={price}
                  style={[
                    styles.amountBox,
                    amount === price && styles.amountBoxSelected,
                  ]}
                  onPress={() => setAmount(price)}
                >
                  <Text style={styles.amountText}>{currency(price)}</Text>
                </Containing>
              ))}
            </View>
          </Containing>

          <View style={styles.buttonWrapper}>
            <Button
              title="Continue"
              onPress={() =>
                router.navigate("/(app)/(tabs)/(bills)/bill-success")
              }
            />
          </View>

          <View>
            <SegmentedControl
              tabs={tabs}
              selectedTab={selectedTab}
              onTabChange={setSelectedTab}
            />
          </View>

          <View>
            <Text>
              {selectedTab === "beneficiary" ? "beneficiary" : "frequent"}
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default UtilityScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 10,
    gap: 16,
  },
  card: {
    gap: 12,
    paddingVertical: 22,
  },
  quickAmounts: {
    flexDirection: "row",
    gap: 8,
  },
  amountBox: {
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 14,
    backgroundColor: "rgba(255,255,255,0.05)",
    borderRadius: 6,
  },
  amountBoxSelected: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  amountText: {
    color: "#ccc",
    fontWeight: "500",
  },
  buttonWrapper: {
    marginVertical: 16,
  },
  typeSwitcher: {
    flexDirection: "row",
    gap: 12,
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
  },
  typeButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    // backgroundColor: "#1e1e1e",
    borderRadius: 8,
    // width: 150 * 0.8,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "rgba(255,255,255,0.1)",
    flex: 1,
    alignItems: "center",
    alignContent: "center",
  },
  typeButtonSelected: {
    backgroundColor: "white",
  },
  typeButtonText: {
    color: "#ccc",
    fontWeight: "600",
    textTransform: "capitalize",
  },
  typeButtonTextSelected: {
    color: "#000",
  },
});
