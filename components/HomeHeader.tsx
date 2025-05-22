import { AntDesign, Feather } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import React from "react";
import { StyleSheet, View } from "react-native";

const HomeHeader = () => {
  return (
    <BlurView intensity={50} tint="dark" style={styles.container}>
      <View style={styles.actionContainer}>
        <Feather name="bell" size={24} color="#000" />
        <View style={styles.iconGroup}>
          <AntDesign name="questioncircleo" size={24} color="#000" />
          <Feather name="user" size={24} color="green" />
        </View>
      </View>
    </BlurView>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#9333ea",
    paddingTop: 40,
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
    alignItems: "center",
  },
  iconSpacing: {
    marginLeft: 12,
  },
});
