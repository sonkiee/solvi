import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import TextInput from "@/components/ui/Input";
import { useUserStore } from "@/store/user";
import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const SigninScreen = () => {
  const { login, isLoading } = useUserStore();
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSignIn = async () => {
    setError(null); // Reset error state before attempting login
    if (!form.email || !form.password) {
      console.error("Email and password are required");
      setError("Email and password are required.");
      return;
    }

    try {
      await login(form.email, form.password);
      // router.replace("/(app)/(tabs)");
    } catch (error) {
      console.error("Sign in error:", error);
      setError("Sign in failed. Please check your credentials.");
    }
  };
  return (
    <Container>
      <BlurView intensity={50} tint="dark" style={StyleSheet.absoluteFill}>
        <View style={styles.container}>
          <TextInput
            title="Email"
            placeholder="Email"
            icon={
              <MaterialCommunityIcons
                name="email-outline"
                size={20}
                color="white"
              />
            }
            value={form.email}
            onChangeText={(text) => setForm({ ...form, email: text })}
          />

          <TextInput
            title="Password"
            placeholder="Password"
            secureTextEntry
            icon={<Octicons name="lock" size={22} color="white" />}
            value={form.password}
            onChangeText={(text) => setForm({ ...form, password: text })}
          />

          {error && (
            <Text style={{ color: "red", textAlign: "left", fontSize: 13 }}>
              {error}
            </Text>
          )}

          <Button
            title="Sign In"
            onPress={handleSignIn}
            loading={isLoading}
            disabled={isLoading}
            gradient
          />

          <View style={styles.footer}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 8,
                alignContent: "center",
                marginBottom: 20,
              }}
            >
              <Text style={styles.footerText}>Don&apos;t have an account?</Text>
              <TouchableOpacity
                onPress={() => router.navigate("/(auth)/sign-up")}
              >
                <Text style={styles.footerLink}>Register</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => router.navigate("/(auth)/forgot-password")}
            >
              <Text style={styles.footerLink}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </BlurView>
    </Container>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    gap: 24,
  },
  footer: {
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
  },
  footerText: {
    color: "white",
    fontSize: 14,
  },
  footerLink: {
    color: "#6FA6FF",
    fontSize: 14,
    fontWeight: "600",
    // marginTop: 4,
  },
});
