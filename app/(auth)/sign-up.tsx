import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import TextInput from "@/components/ui/Input";
import { useUserStore } from "@/store/user";
import { Feather, MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { Link, router } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type FormErrors = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  referral?: string;
  password?: string;
  nin?: string;
  confirmPassword?: string;
};

const SignupScreen = () => {
  const { signup, isLoading } = useUserStore();
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    referral: "",
    password: "",
    confirmPassword: "",
    nin: "",
    terms: true,
  });

  const payLoad = {
    first_name: form.firstName.trim(),
    last_name: form.lastName.trim(),
    email: form.email.trim().toLowerCase(),
    phone: form.phone.trim(),
    referral: form.referral.trim(),
    nin: form.nin.trim(),
    password: form.password.trim(),
    terms: form.terms,
  };

  const [errors, setErrors] = useState<FormErrors>({});

  const validate = () => {
    let tempErrors: FormErrors = {};

    if (!form.firstName) tempErrors.firstName = "First name is required.";
    if (!form.lastName) tempErrors.lastName = "Last name is required.";
    if (!form.email) {
      tempErrors.email = "Email is required.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email)) {
        tempErrors.email = "Invalid email address.";
      }
    }
    if (!form.phone) tempErrors.phone = "Phone number is required.";
    if (!form.nin && form.nin.length < 11)
      tempErrors.nin = "NIN must be at least 11 characters.";
    if (!form.password) tempErrors.password = "Password is required.";
    else if (form.password.length < 6)
      tempErrors.password = "Password must be at least 6 characters.";
    if (!form.confirmPassword)
      tempErrors.confirmPassword = "Please confirm your password.";
    else if (form.password !== form.confirmPassword)
      tempErrors.confirmPassword = "Passwords do not match.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSignUp = async () => {
    if (validate()) {
      try {
        await signup(payLoad);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
          console.error("Sign up error:", error);
        } else {
          console.error("Sign up error:", error);
          setError("An unknown error occurred.");
        }
        // Handle error (e.g., show a message to the user)
      }
    }
  };

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
                value={form.firstName}
                onChangeText={(text) =>
                  setForm({ ...form, firstName: text.trim() })
                }
                container={
                  errors.firstName && { borderColor: "red", borderWidth: 1 }
                }
              />
              {/* {errors.firstName && (
                <Text style={styles.errorText}>{errors.firstName}</Text>
              )} */}

              <TextInput
                title="Last Name"
                placeholder="Enter your last name"
                icon={<Feather name="user" size={20} color="#aaa" />}
                value={form.lastName}
                onChangeText={(text) =>
                  setForm({ ...form, lastName: text.trim() })
                }
                container={
                  errors.lastName && { borderColor: "red", borderWidth: 1 }
                }
              />
              {/* {errors.lastName && (
                <Text style={styles.errorText}>{errors.lastName}</Text>
              )} */}

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
                value={form.email}
                onChangeText={(text) => setForm({ ...form, email: text })}
                container={
                  errors.email && { borderColor: "red", borderWidth: 1 }
                }
              />
              {/* {errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )} */}

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
                keyboardType="phone-pad"
                value={form.phone}
                onChangeText={(text) => setForm({ ...form, phone: text })}
                container={
                  errors.phone && { borderColor: "red", borderWidth: 1 }
                }
              />
              {/* {errors.phone && (
                <Text style={styles.errorText}>{errors.phone}</Text>
              )} */}

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
                value={form.referral}
                onChangeText={(text) => setForm({ ...form, referral: text })}
              />

              <TextInput
                title="NIN (Optional)"
                placeholder="Enter your NIN"
                keyboardType="numeric"
                icon={<Octicons name="id" size={22} color="#aaa" />}
                value={form.nin}
                onChangeText={(text) => setForm({ ...form, nin: text.trim() })}
                container={errors.nin && { borderColor: "red", borderWidth: 1 }}
              />
              {/* {errors.nin && <Text style={styles.errorText}>{errors.nin}</Text>} */}

              <TextInput
                title="Password"
                placeholder="Enter your password"
                secureTextEntry
                icon={<Octicons name="lock" size={22} color="#aaa" />}
                value={form.password}
                onChangeText={(text) =>
                  setForm({ ...form, password: text.trim() })
                }
                container={
                  errors.password && { borderColor: "red", borderWidth: 1 }
                }
              />
              {/* {errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )} */}

              <TextInput
                title="Confirm Password"
                placeholder="Re-enter your password"
                secureTextEntry
                icon={<Octicons name="lock" size={22} color="#aaa" />}
                value={form.confirmPassword}
                onChangeText={(text) =>
                  setForm({ ...form, confirmPassword: text })
                }
                container={
                  errors.confirmPassword && {
                    borderColor: "red",
                    borderWidth: 1,
                  }
                }
              />
              {/* {errors.confirmPassword && (
                <Text style={styles.errorText}>{errors.confirmPassword}</Text>
              )} */}
              {error && <Text style={styles.errorText}>{error}</Text>}

              <Text style={{ color: "#aaa", fontSize: 12 }}>
                By clicking Signup you agree to our{" "}
                <Link style={styles.link} href="https://example.com/terms">
                  Terms of Service
                </Link>{" "}
                and acknowledge that you have read our{" "}
                <Link
                  style={styles.link}
                  href="https://example.com/privacy-policy"
                >
                  Privacy Policy
                </Link>
                .
              </Text>

              <Button
                title="Sign Up"
                // onPress={handleSignUp}
                onPress={() => router.navigate("/(auth)/email-verification")}
                loading={isLoading}
                disabled={isLoading}
                gradient
              />

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

                <TouchableOpacity
                  onPress={() => router.navigate("/(auth)/forgot-password")}
                >
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
  scrollContent: { paddingBottom: 40 },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 24,
    gap: 24,
    paddingTop: 100,
  },
  footer: { marginTop: 30, alignItems: "center", gap: 10 },
  footerRow: { flexDirection: "row", alignItems: "center", gap: 8 },
  footerText: { color: "white", fontSize: 14 },
  footerLink: { color: "#6FA6FF", fontSize: 14, fontWeight: "600" },
  link: { color: "#6FA6FF", textDecorationLine: "underline" },
  errorText: { color: "red", fontSize: 12 },
});
