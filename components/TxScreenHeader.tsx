import { AntDesign, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import BlurredHeaderContainer from "./ui/BlurredHeaderContainer";

const tabs = [
  { key: "all", label: "All Transactions" },
  { key: "recent", label: "Recent" },
];

const TxScreenHeader = () => {
  const [selectedTab, setSelectedTab] = useState("all");

  return (
    <BlurredHeaderContainer>
      <View style={styles.container}>
        {/* Header Row */}
        <Pressable style={styles.row} onPress={() => router.back()}>
          <View style={styles.actionContainer}>
            <Ionicons name="chevron-back-outline" size={20} color="#fff" />
            <Text style={styles.title}>Transactions</Text>
          </View>
          <AntDesign name="filter" size={22} color="#ccc" />
        </Pressable>

        {/* Toggle Tabs */}
        <View style={styles.toggleSwitch}>
          {tabs.map((tab) => {
            const isSelected = selectedTab === tab.key;
            return (
              <Pressable
                key={tab.key}
                onPress={() => setSelectedTab(tab.key)}
                style={[
                  styles.toggleButton,
                  isSelected && styles.selectedToggleButton,
                ]}
              >
                <Text
                  style={[
                    styles.toggleButtonText,
                    isSelected && styles.selectedToggleText,
                  ]}
                >
                  {tab.label}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>
    </BlurredHeaderContainer>
  );
};

export default TxScreenHeader;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  actionContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  title: {
    fontWeight: "600",
    fontSize: 18,
    color: "#fff",
  },
  toggleSwitch: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 26,
    paddingVertical: 4,
    paddingHorizontal: 4,
  },
  toggleButton: {
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 16,
    width: 210 * 0.8,
  },
  selectedToggleButton: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  toggleButtonText: {
    fontSize: 15,
    color: "#ccc",
    textTransform: "capitalize",
    textAlign: "center",
  },
  selectedToggleText: {
    color: "#fff",
  },
});
