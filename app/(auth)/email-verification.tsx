import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import TextInput from "@/components/ui/Input";
import { useUserStore } from "@/store/user";
import { maskEmail } from "@/utils/maskedEmail";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

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
  const { verifyEmail, isLoading } = useUserStore();
  const [successScreen, setSuccessScreen] = useState(false);
  const [otp, setOtp] = useState("");
  const { email } = useLocalSearchParams();
  const [error, setError] = useState<string | null>(null);

  const maskedEmail = maskEmail(email as string);

  const handleBackToLogin = () => {
    setSuccessScreen(false);
    router.push("/(auth)/sign-in");
  };

  const handleVerifyCode = async () => {
    setError(""); // clear previous error

    if (!otp) {
      setError("Please enter the verification code.");
      return;
    }

    try {
      console.log("codes,", otp);
      await verifyEmail(email as string, otp.trim());
      // setSuccessScreen(true); // Only on success
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error verifying email:", error);
        setError(error?.message);
      } else {
        console.error("Unknown error verifying email:", error);
        setError("We were unable to verify your email, please try again");
      }
    }
  };

  const handleResendCode = () => {
    // Here you'd call your resend code API
    console.log("Resend code requested");
  };

  return (
    <Container>
      <BlurView
        intensity={50}
        tint="dark"
        style={[StyleSheet.absoluteFill, { flex: 1 }]}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1, // <-- KEY PART
            justifyContent: "center",
            paddingHorizontal: 20,
            gap: 24,
          }}
          style={styles.container}
        >
          {successScreen ? (
            <SuccessScreen onBack={handleBackToLogin} />
          ) : (
            <>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <Text style={styles.instructionText}>
                  Please enter the code sent to{" "}
                </Text>
                <Text style={styles.emailText}>{maskedEmail}</Text>
              </View>

              <TextInput
                title="Verification Code"
                placeholder="Enter the code"
                value={otp}
                onChangeText={setOtp}
                keyboardType="numeric"
                maxLength={4}
                icon={
                  <MaterialCommunityIcons
                    name="key-outline"
                    size={20}
                    color="white"
                  />
                }
              />

              {error ? <Text style={styles.errorText}>{error}</Text> : null}

              <Button
                title="Verify"
                onPress={handleVerifyCode}
                loading={isLoading}
                disabled={isLoading}
                gradient
              />
            </>
          )}

          <View style={styles.footer}>
            <Text style={styles.footerText}>Didn&apos;t receive code?</Text>
            <TouchableOpacity onPress={handleResendCode}>
              <Text style={styles.footerLink}>Resend Code</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </BlurView>
    </Container>
  );
};

export default EmailVerificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  instructionText: {
    color: "white",
    fontSize: 16,
    marginBottom: 10,
  },

  emailText: {
    color: "#6FA6FF",
    fontSize: 16,
    fontWeight: "600",
  },
  errorText: {
    color: "#FF5A5F",
    fontSize: 14,
    marginBottom: 10,
  },
});
