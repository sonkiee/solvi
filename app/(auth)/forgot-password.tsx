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
        We&apos;ve sent a reset link to your email. Please check your inbox.
      </Text>
      <Button title="Back to login" gradient onPress={onBack} />
    </View>
  );
};

const ForgotPasswordScreen = () => {
  const [successScreen, setSuccessScreen] = useState(false);

  const handleBackToLogin = () => {
    setSuccessScreen(false);
    router.push("/(auth)/sign-in");
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
                title="Email"
                placeholder="Enter your email"
                icon={
                  <MaterialCommunityIcons
                    name="email-outline"
                    size={20}
                    color="white"
                  />
                }
              />
              <Button
                title="Send Reset Link"
                onPress={() => setSuccessScreen(true)}
                gradient
              />
            </>
          )}

          <View style={styles.footer}>
            <Text style={styles.footerText}>Don&apos;t have an account?</Text>
            <TouchableOpacity
              onPress={() => router.navigate("/(auth)/sign-up")}
            >
              <Text style={styles.footerLink}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </BlurView>
    </Container>
  );
};

export default ForgotPasswordScreen;

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
