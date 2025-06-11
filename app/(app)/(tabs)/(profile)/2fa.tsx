import Container from "@/components/ui/Container";
import React, { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

const TwoFactorAuthenticationScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((prev) => !prev);

  return (
    <Container top={1}>
      <View style={styles.container}>
        <Text style={styles.heading}>Two-Factor Authentication</Text>

        <View style={styles.section}>
          <View style={styles.textContainer}>
            <Text style={styles.label}>Enable Two-Factor Authentication</Text>
            <Text style={styles.description}>
              Add an extra layer of security to your account by requiring a code
              in addition to your password.
            </Text>
          </View>

          <Switch
            value={isEnabled}
            onValueChange={toggleSwitch}
            trackColor={{ false: "#ccc", true: "#3A1078" }}
            thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
          />
        </View>
      </View>
    </Container>
  );
};

export default TwoFactorAuthenticationScreen;

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 25,
    backgroundColor: "#fff",
    margin: 6,
  },
  heading: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111",
    marginBottom: 20,
  },
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    paddingRight: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
    marginBottom: 4,
  },
  description: {
    fontSize: 13,
    color: "#666",
    lineHeight: 18,
  },
});
