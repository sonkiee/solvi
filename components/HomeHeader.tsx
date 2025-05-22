import { AntDesign, Feather } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import React from "react";
import { StyleSheet, View } from "react-native";
import BalanceCard from "./BalanceCard";

const HomeHeader = () => {
  return (
    <BlurView intensity={80} tint="dark" style={styles.container}>
      <View style={styles.actionContainer}>
        <Feather name="bell" size={18} color="#fff" />
        <View style={styles.iconGroup}>
          <AntDesign name="questioncircleo" size={20} color="#fff" />
          <View
            style={{ backgroundColor: "white", padding: 4, borderRadius: 999 }}
          >
            <Feather name="user" size={24} color="#9333ea" />
          </View>
        </View>
      </View>

      <BalanceCard />
    </BlurView>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#9333ea",
    paddingTop: 15,
    paddingHorizontal: 16,
    paddingBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconGroup: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  iconSpacing: {
    marginLeft: 12,
  },
});
