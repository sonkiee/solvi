import Container from "@/components/ui/Container";
import * as LocalAuthentication from "expo-local-authentication";
import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Switch, Text, View } from "react-native";

const ManageBiometricsScreen = () => {
  const [isSupported, setIsSupported] = useState(false);
  const [biometricType, setBiometricType] = useState<string | null>(null);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    checkBiometricSupport();
  }, []);

  const checkBiometricSupport = async () => {
    try {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      const enrolled = await LocalAuthentication.isEnrolledAsync();

      if (compatible && enrolled) {
        setIsSupported(true);

        const types =
          await LocalAuthentication.supportedAuthenticationTypesAsync();
        if (
          types.includes(LocalAuthentication.AuthenticationType.FINGERPRINT)
        ) {
          setBiometricType("Fingerprint");
        } else if (
          types.includes(
            LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION
          )
        ) {
          setBiometricType("Face ID");
        } else if (
          types.includes(LocalAuthentication.AuthenticationType.IRIS)
        ) {
          setBiometricType("Iris Scan");
        } else {
          setBiometricType("Biometrics");
        }
      } else {
        setIsSupported(false);
      }
    } catch (error) {
      console.error("Error checking biometrics: ", error);
      setIsSupported(false);
    }
  };

  const toggleSwitch = async (value: boolean) => {
    if (value) {
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: `Authenticate to enable ${
          biometricType ?? "biometrics"
        }`,
      });

      if (result.success) {
        setIsEnabled(true);
        // Store this state somewhere if needed (API or AsyncStorage)
      } else {
        Alert.alert(
          "Authentication Failed",
          "Biometric authentication failed."
        );
      }
    } else {
      setIsEnabled(false);
      // Remove from storage/API if needed
    }
  };

  return (
    <Container top={1}>
      <View style={styles.container}>
        <Text style={styles.heading}>Manage Biometrics</Text>

        <Text style={styles.description}>
          Enable {biometricType ?? "biometric"} authentication for faster and
          secure sign-in.
        </Text>

        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Enable Biometrics</Text>
          <Switch
            value={isEnabled}
            onValueChange={toggleSwitch}
            // disabled={!isSupported}
          />
        </View>

        {!isSupported && (
          <Text style={styles.unsupported}>
            Biometrics not supported or not enrolled on this device.
          </Text>
        )}
      </View>
    </Container>
  );
};

export default ManageBiometricsScreen;

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 25,
    backgroundColor: "#fff",
    margin: 8,
  },
  heading: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111",
    marginBottom: 15,
  },
  description: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
    marginBottom: 25,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  switchLabel: {
    fontSize: 16,
    color: "#333",
  },
  unsupported: {
    fontSize: 13,
    color: "#999",
    marginTop: 10,
  },
});
