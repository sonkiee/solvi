import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.actionContainer}></View>
      <Text>HomeHeader</Text>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // paddingHorizontal: 20,
    // paddingVertical: 10,
  },
});
