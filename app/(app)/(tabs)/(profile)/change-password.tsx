import Button from "@/components/ui/Button";
import TextInput from "@/components/ui/Input";
import React from "react";
import { StyleSheet, View } from "react-native";

const ChangePasswordScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput
        title="Current Password"
        placeholder="Enter current password"
      />
      <TextInput title="New Password" placeholder="Enter new password" />
      <TextInput
        title="Confirm New Password"
        placeholder="Confirm new password"
      />

      <View style={{ marginTop: 20 }}>
        <Button
          title="Change Password"
          onPress={() => {
            // Handle password change logic here
          }}
        />
      </View>
    </View>
  );
};

export default ChangePasswordScreen;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: "#fff",
    margin: 6,
    flexGrow: 1,
  },
});
