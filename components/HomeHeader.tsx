import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <Text>HomeHeader</Text>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
