import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ProfileListItem = ({
  icon,
  label,
}: {
  icon: React.ReactElement;
  label: string;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.detail}>
        <View style={styles.iconContainer}>{icon}</View>
        <Text style={styles.label}>{label ?? "label"}</Text>
      </View>

      <Feather name="chevron-right" size={20} color="#aaa" />
    </View>
  );
};

export default ProfileListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 10,
  },
  detail: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10, // Use marginRight as fallback if gap isn't supported
    paddingRight: 12, // fallback for older React Native versions instead of `gap`
  },
  iconContainer: {
    width: 30,
    height: 30,
    borderRadius: 4,
    backgroundColor: "#dad1e5",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10, // fallback for older React Native versions instead of `gap`
  },
  label: {
    // fontSize: 14,
    color: "#757784",
    textTransform: "capitalize",
  },
});
