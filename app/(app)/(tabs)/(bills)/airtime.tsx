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
  View,
} from "react-native";

const providers = [
  { label: "MTN", value: "mtn" },
  { label: "Airtel", value: "airtel" },
  { label: "GLO", value: "glo" },
  { label: "9mobile", value: "9mobile" },
];

const prices = [100, 200, 500, 1000];

const tabs = [
  {
    label: "beneficiary",
    key: "beneficiary",
    value: "beneficiary",
  },
  {
    label: "frequent",
    key: "frequent",
    value: "frequent",
  },
];

const AirtimeScreen = () => {
  const [selected, setSelected] = useState("");
  const [amount, setAmount] = useState(0);
  const [selectedTab, setSelectedTab] = useState("frequent");

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
            <TextInput title="Phone number" placeholder="Enter Phone Number" />

            <Picker
              options={providers}
              selectedValue={selected}
              onValueChange={setSelected}
              transparent
              title="Network Provider"
            />

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
              onChangeText={(text) => setAmount(text)}
              keyboardType="numeric"
              placeholder="Enter Amount"
            />

            <View style={styles.quickAmounts}>
              {prices.map((price, index) => (
                <Containing
                  key={index}
                  style={[
                    styles.amountBox,
                    amount === price && {
                      backgroundColor: "rgba(255, 255, 255, 0.5)",
                    },
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
              onTabChange={(key) => setSelectedTab(key)}
            />
          </View>

          <View>
            {selectedTab === "beneficiary" ? (
              <Text>beneficiary</Text>
            ) : (
              <Text>frequent</Text>
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default AirtimeScreen;

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
    // flexWrap: "wrap",
    gap: 8,
  },
  amountBox: {
    alignItems: "center",
    // paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: "rgba(255,255,255,0.05)",
    borderRadius: 6,
  },
  amountText: {
    color: "#ccc",
    fontWeight: "500",
  },
  buttonWrapper: {
    marginVertical: 16,
  },
});
