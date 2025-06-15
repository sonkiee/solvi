import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import TextInput from "@/components/ui/Input";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const SuccessScreen = ({ onBack }: { onBack: () => void }) => {
  return (
    <View style={styles.successContainer}>
      <View style={styles.successIcon}>
        <MaterialCommunityIcons name="check" size={28} color="white" />
      </View>
      <Text style={styles.successText}>
        Your email has been successfully verified.
      </Text>
      <Button title="Back to login" gradient onPress={onBack} />
    </View>
  );
};

const EmailVerificationScreen = () => {
  const [successScreen, setSuccessScreen] = useState(false);
  const [code, setCode] = useState("");

  const handleBackToLogin = () => {
    setSuccessScreen(false);
    router.push("/(auth)/sign-in");
  };

  const handleVerifyCode = () => {
    // Here you'd normally call your API to verify code
    // If successful, show success screen
    setSuccessScreen(true);
  };

  const handleResendCode = () => {
    // Here you'd call your resend code API
    console.log("Resend code requested");
  };

  return (
    <Container>
      <BlurView intensity={50} tint="dark" style={StyleSheet.absoluteFill}>
        <View style={styles.container}>
          {successScreen ? (
            <SuccessScreen onBack={handleBackToLogin} />
          ) : (
            <>
              <TextInput
                title="Verification Code"
                placeholder="Enter the code"
                value={code}
                onChangeText={setCode}
                icon={
                  <MaterialCommunityIcons
                    name="key-outline"
                    size={20}
                    color="white"
                  />
                }
              />
              <Button title="Verify" onPress={handleVerifyCode} gradient />
            </>
          )}

          <View style={styles.footer}>
            <Text style={styles.footerText}>Didn&apos;t receive code?</Text>
            <TouchableOpacity onPress={handleResendCode}>
              <Text style={styles.footerLink}>Resend Code</Text>
            </TouchableOpacity>
          </View>
        </View>
      </BlurView>
    </Container>
  );
};

export default EmailVerificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    gap: 24,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    gap: 8,
  },
  footerText: {
    color: "white",
    fontSize: 14,
  },
  footerLink: {
    color: "#6FA6FF",
    fontSize: 14,
    fontWeight: "600",
  },
  successContainer: {
    alignItems: "center",
    gap: 20,
    marginTop: 40,
    justifyContent: "center",
  },
  successIcon: {
    borderRadius: 999,
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(69, 66, 234, 0.5)",
  },
  successText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 16,
  },
});
