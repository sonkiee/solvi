import { AntDesign, Feather } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import BalanceCard from "./BalanceCard";

const HomeHeader = () => {
  return (
    <BlurView intensity={80} tint="regular" style={styles.container}>
      <View style={styles.actionContainer}>
        <TouchableOpacity onPress={() => router.navigate("/transactions")}>
          <Feather name="bell" size={18} color="#fff" />
        </TouchableOpacity>
        <View style={styles.iconGroup}>
          <AntDesign name="questioncircleo" size={20} color="#fff" />
          <TouchableOpacity
            onPress={() => router.navigate("/(app)/(tabs)/(profile)")}
            style={{ backgroundColor: "white", padding: 4, borderRadius: 999 }}
          >
            <Feather name="user" size={24} color="#9333ea" />
          </TouchableOpacity>
        </View>
      </View>

      <BalanceCard />
    </BlurView>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#9333ea",
    backgroundColor: "#2E3A59",
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
