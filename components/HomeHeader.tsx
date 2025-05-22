import { AntDesign, Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.actionContainer}>
        <Feather name="bell" size={24} color="black" />

        <View
          style={{
            flexDirection: "row",
            gap: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign name="questioncircleo" size={24} color="black" />
          <View>
            <Feather name="user" color={"green"} size={24} />
          </View>
        </View>
      </View>
      <Text>HomeHeader</Text>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // paddingTop: 20,
    // paddingHorizontal: 20,
    // shadowColor: "#000",
    // shadowOpacity: 0.2,
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    // paddingVertical: 10,
  },
});
