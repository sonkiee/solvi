import Picker from "@/components/Picker";
import { Containing, SegmentedControl } from "@/components/Reusables";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import TextInput from "@/components/ui/Input";
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

const dataPlans = {
  mtn: [
    {
      label: "MTN Daily 100MB",
      value: "mtn-daily-100",
      price: 100,
      data: "100MB",
      validity: "1 day",
    },
    {
      label: "MTN Weekly 750MB",
      value: "mtn-weekly-750",
      price: 500,
      data: "750MB",
      validity: "7 days",
    },
    {
      label: "MTN Monthly 1.5GB",
      value: "mtn-monthly-1500",
      price: 1000,
      data: "1.5GB",
      validity: "30 days",
    },
  ],
  airtel: [
    {
      label: "Airtel Daily 75MB",
      value: "airtel-daily-75",
      price: 100,
      data: "75MB",
      validity: "1 day",
    },
    {
      label: "Airtel Weekly 1GB",
      value: "airtel-weekly-1gb",
      price: 500,
      data: "1GB",
      validity: "7 days",
    },
    {
      label: "Airtel Monthly 2GB",
      value: "airtel-monthly-2gb",
      price: 1200,
      data: "2GB",
      validity: "30 days",
    },
  ],
  glo: [
    {
      label: "GLO Daily 105MB",
      value: "glo-daily-105",
      price: 100,
      data: "105MB",
      validity: "1 day",
    },
    {
      label: "GLO Weekly 1.25GB",
      value: "glo-weekly-1250",
      price: 500,
      data: "1.25GB",
      validity: "7 days",
    },
    {
      label: "GLO Monthly 3.2GB",
      value: "glo-monthly-3200",
      price: 1000,
      data: "3.2GB",
      validity: "30 days",
    },
  ],
  "9mobile": [
    {
      label: "9mobile Daily 50MB",
      value: "9mobile-daily-50",
      price: 100,
      data: "50MB",
      validity: "1 day",
    },
    {
      label: "9mobile Weekly 500MB",
      value: "9mobile-weekly-500",
      price: 500,
      data: "500MB",
      validity: "7 days",
    },
    {
      label: "9mobile Monthly 1.5GB",
      value: "9mobile-monthly-1500",
      price: 1200,
      data: "1.5GB",
      validity: "30 days",
    },
  ],
};

const DataScreen = () => {
  const [selectedProvider, setSelectedProvider] = useState("mtn");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [selectedTab, setSelectedTab] = useState("frequent");

  const plans = dataPlans[selectedProvider] || [];

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
              selectedValue={selectedProvider}
              onValueChange={(val) => {
                setSelectedProvider(val);
                setSelectedPlan("");
              }}
              transparent
              title="Network Provider"
            />

            <Picker
              options={plans}
              selectedValue={selectedPlan}
              onValueChange={setSelectedPlan}
              transparent
              title="Data Plan"
            />
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

export default DataScreen;

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
