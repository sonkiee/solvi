import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface Tab {
  key: string;
  label: string;
  value?: string;
  linkTo?: string;
  icon?: React.ReactNode;
}

interface SegmentedControlRoundedProps {
  tabs: Tab[];
  selectedTab: string;
  setSelectedTab: (key: string) => void;
}

const SegmentedControlRounded = ({
  tabs,
  selectedTab,
  setSelectedTab,
}: SegmentedControlRoundedProps) => {
  return (
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
              {
                flexGrow: 1,
              },
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
  );
};

export default SegmentedControlRounded;

const styles = StyleSheet.create({
  toggleSwitch: {
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 26,
    padding: 4,
    justifyContent: "center",
  },
  toggleButton: {
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedToggleButton: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  toggleButtonText: {
    fontSize: 14,
    color: "#ccc",
    textTransform: "capitalize",
    textAlign: "center",
  },
  selectedToggleText: {
    color: "#fff",
    fontWeight: "600",
  },
});
