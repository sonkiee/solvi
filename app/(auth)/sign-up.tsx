import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import TextInput from "@/components/ui/Input";
import { Feather, MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { router } from "expo-router";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const SignupScreen = () => {
  return (
    <Container>
      <BlurView intensity={50} tint="dark" style={StyleSheet.absoluteFill}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={{ flex: 1 }}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.container}>
              <TextInput
                title="First Name"
                placeholder="Enter your first name"
                icon={<Feather name="user" size={20} color="#aaa" />}
              />

              <TextInput
                title="Last Name"
                placeholder="Enter your last name"
                icon={<Feather name="user" size={20} color="#aaa" />}
              />

              <TextInput
                title="Email"
                placeholder="Enter your email"
                icon={
                  <MaterialCommunityIcons
                    name="email-outline"
                    size={20}
                    color="#aaa"
                  />
                }
              />

              <TextInput
                title="Phone Number"
                placeholder="Enter your phone number"
                icon={
                  <MaterialCommunityIcons
                    name="phone-outline"
                    size={20}
                    color="#aaa"
                  />
                }
              />

              <TextInput
                title="Referral Code (Optional)"
                placeholder="Enter referral code"
                icon={
                  <MaterialCommunityIcons
                    name="gift-outline"
                    size={20}
                    color="#aaa"
                  />
                }
              />

              <TextInput
                title="Password"
                placeholder="Enter your password"
                secureTextEntry
                icon={<Octicons name="lock" size={22} color="#aaa" />}
              />

              <TextInput
                title="Confirm Password"
                placeholder="Re-enter your password"
                secureTextEntry
                icon={<Octicons name="lock" size={22} color="#aaa" />}
              />

              <Button title="Sign Up" gradient />

              <View style={styles.footer}>
                <View style={styles.footerRow}>
                  <Text style={styles.footerText}>
                    Already have an account?
                  </Text>
                  <TouchableOpacity
                    onPress={() => router.navigate("/(auth)/sign-in")}
                  >
                    <Text style={styles.footerLink}>Sign In</Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity>
                  <Text style={styles.footerLink}>Forgot Password?</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </BlurView>
    </Container>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 40,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 24,
    gap: 24,
    paddingTop: 100,
  },
  footer: {
    marginTop: 30,
    alignItems: "center",
    gap: 10,
  },
  footerRow: {
    flexDirection: "row",
    alignItems: "center",
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
});
