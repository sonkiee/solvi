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
  { label: "DSTV", value: "dstv" },
  { label: "GOTV", value: "gotv" },
  { label: "SHOWMAX", value: "showmax" },
  { label: "StartTime", value: "startimes" },
];

const tvPlans = {
  dstv: [
    {
      label: "DSTV Padi",
      value: "dstv-padi",
      price: 2500,
      duration: "Monthly",
      channels: 45,
    },
    {
      label: "DSTV Yanga",
      value: "dstv-yanga",
      price: 3500,
      duration: "Monthly",
      channels: 95,
    },
    {
      label: "DSTV Confam",
      value: "dstv-confam",
      price: 6200,
      duration: "Monthly",
      channels: 120,
    },
    {
      label: "DSTV Compact Plus",
      value: "dstv-compact-plus",
      price: 14000,
      duration: "Monthly",
      channels: 155,
    },
  ],
  gotv: [
    {
      label: "GOtv Smallie",
      value: "gotv-smallie",
      price: 1300,
      duration: "Monthly",
      channels: 35,
    },
    {
      label: "GOtv Jinja",
      value: "gotv-jinja",
      price: 2200,
      duration: "Monthly",
      channels: 50,
    },
    {
      label: "GOtv Jolli",
      value: "gotv-jolli",
      price: 3200,
      duration: "Monthly",
      channels: 68,
    },
    {
      label: "GOtv Max",
      value: "gotv-max",
      price: 4700,
      duration: "Monthly",
      channels: 75,
    },
  ],
  showmax: [
    {
      label: "Showmax Mobile",
      value: "showmax-mobile",
      price: 1450,
      duration: "Monthly",
      resolution: "SD - 1 device",
    },
    {
      label: "Showmax Standard",
      value: "showmax-standard",
      price: 2900,
      duration: "Monthly",
      resolution: "HD - 2 devices",
    },
    {
      label: "Showmax Pro Mobile",
      value: "showmax-pro-mobile",
      price: 3200,
      duration: "Monthly",
      resolution: "SD + Sports - 1 device",
    },
    {
      label: "Showmax Pro",
      value: "showmax-pro",
      price: 6300,
      duration: "Monthly",
      resolution: "HD + Sports - 2 devices",
    },
  ],
  startimes: [
    {
      label: "Startimes Nova",
      value: "startimes-nova",
      price: 1200,
      duration: "Monthly",
      channels: 30,
    },
    {
      label: "Startimes Basic",
      value: "startimes-basic",
      price: 2700,
      duration: "Monthly",
      channels: 80,
    },
    {
      label: "Startimes Smart",
      value: "startimes-smart",
      price: 3600,
      duration: "Monthly",
      channels: 100,
    },
    {
      label: "Startimes Classic",
      value: "startimes-classic",
      price: 5300,
      duration: "Monthly",
      channels: 120,
    },
  ],
};

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

const CableScreen = () => {
  const [selectedProvider, setSelectedProvider] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [selectedTab, setSelectedTab] = useState("frequent");

  const plans = tvPlans[selectedProvider] || [];

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

            {selectedProvider && (
              <>
                <TextInput title="Smartcard Number" />

                <Picker
                  options={plans}
                  selectedValue={selectedPlan}
                  onValueChange={setSelectedPlan}
                  transparent
                  title="Data Plan"
                />
              </>
            )}
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

export default CableScreen;

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
