import { StyleSheet, Text } from "react-native";

export const Containing = () => {
  return <Text>Contain</Text>;
};

const styles = StyleSheet.create({
  containing: {
    borderWidth: 0.5,
    borderColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 8,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    paddingHorizontal: 10,
    paddingVertical: 16,
    marginTop: 12,
  },
});
