import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import TextInput from "@/components/ui/Input";
import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const SigninScreen = () => {
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
          />

          <TextInput
            title="Password"
            placeholder="Password"
            secureTextEntry
            icon={<Octicons name="lock" size={22} color="white" />}
          />

          <Button
            title="Sign In"
            onPress={() => router.replace("/(app)/(tabs)")}
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
