import { Entypo } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

// =============== Containing Component ===============
export const Containing = ({
  children,
  row,
  style,
}: {
  children: React.ReactNode;
  row?: boolean;
  style?: StyleProp<ViewStyle>;
}) => {
  return (
    <View
      style={[
        styles.containing,
        row && {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

// =============== HeaderBack Component ===============
export const HeaderBack = ({ title }: { title: string }) => {
  return (
    <View style={styles.headerBack}>
      <TouchableOpacity
        onPress={() => router.back()}
        style={styles.headerBackButton}
      >
        <Entypo name="chevron-thin-left" size={16} color="white" />
        <Text style={styles.title}>{title ?? "title text"}</Text>
      </TouchableOpacity>
    </View>
  );
};

// =============== SegmentedControl Component ===============
export const SegmentedControl = ({
  tabs,
  selectedTab,
  onTabChange,
}: {
  tabs: { key: string; label: string }[];
  selectedTab: string;
  onTabChange: (key: string) => void;
}) => {
  return (
    <View style={styles.segmentedControlContainer}>
      {tabs.map((tab) => {
        const isSelected = selectedTab === tab.key;
        return (
          <Pressable
            key={tab.key}
            onPress={() => onTabChange(tab.key)}
            style={[
              styles.segmentedControlButton,
              isSelected && styles.segmentedControlButtonActive,
              { flex: 1 }, // Equal space per item
            ]}
          >
            <Text
              style={[
                styles.segmentedControlText,
                isSelected && styles.segmentedControlTextActive,
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

// =============== Shared Styles ===============
const styles = StyleSheet.create({
  containing: {
    borderWidth: 0.5,
    borderColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 8,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    paddingHorizontal: 10,
    paddingVertical: 16,
    marginTop: 12,
    flex: 1,
  },
  headerBack: {
    borderBottomColor: "#aaa",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 12,
  },
  headerBackButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },

  // SegmentedControl styles
  segmentedControlContainer: {
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 6,
    overflow: "hidden",
    marginVertical: 10,
  },
  segmentedControlButton: {
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  segmentedControlButtonActive: {
    backgroundColor: "#ffffff33",
  },
  segmentedControlText: {
    color: "#bbb",
    fontSize: 14,
    fontWeight: "500",
  },
  segmentedControlTextActive: {
    color: "white",
    fontWeight: "600",
  },
});
