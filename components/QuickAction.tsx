import React from "react";
import { StyleSheet, Text, View } from "react-native";

const QuickAction = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text>quick actions</Text>
        <Text>view all</Text>
      </View>
      <View style={styles.row}></View>
    </View>
  );
};

export default QuickAction;

const styles = StyleSheet.create({
  container: {},
  row: {},
});
