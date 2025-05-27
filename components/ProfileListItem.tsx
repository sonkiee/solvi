import { Feather } from "@expo/vector-icons";
import { RelativePathString, router } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const ProfileListItem = ({
  icon,
  label,
  linkTo,
}: {
  icon: React.ReactElement;
  label: string;
  linkTo: RelativePathString;
}) => {
  return (
    <Pressable
      style={styles.container}
      onPress={() => linkTo && router.push(linkTo)}
    >
      <View style={styles.detail}>
        <View style={styles.iconContainer}>{icon}</View>
        <Text style={styles.label}>{label ?? "label"}</Text>
      </View>

      <Feather name="chevron-right" size={20} color="#aaa" />
    </Pressable>
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
