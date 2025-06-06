import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import TextInput from "@/components/ui/Input";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const PersonalDetailsScreen = () => {
  return (
    <Container top={1}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0} // Adjust based on header/nav height
      >
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="on-drag"
          style={{
            paddingBottom: 40,
          }}
        >
          <Text style={styles.titleText}>Your Information</Text>
          <Text style={styles.subtitleText}>
            Manage your personal information. BVN verification is required to
            edit details.
          </Text>

          <View style={styles.formGroup}>
            <TextInput
              title="First Name"
              placeholder="Enter your first name"
              label={{ color: "#333" }}
              container={{ backgroundColor: "#fff", borderColor: "#ccc" }}
            />
            <TextInput
              title="Last Name"
              placeholder="Enter your last name"
              label={{ color: "#333" }}
              container={{ backgroundColor: "#fff", borderColor: "#ccc" }}
            />
            <TextInput
              title="Email"
              keyboardType="email-address"
              placeholder="john.doe@example.com"
              label={{ color: "#333" }}
              container={{ backgroundColor: "#fff", borderColor: "#ccc" }}
            />
            <TextInput
              title="Phone Number"
              placeholder="08150215728"
              label={{ color: "#333" }}
              container={{ backgroundColor: "#fff", borderColor: "#ccc" }}
            />
            <TextInput
              title="Address"
              placeholder="Enter your address"
              label={{ color: "#333" }}
              container={{ backgroundColor: "#fff", borderColor: "#ccc" }}
            />
          </View>

          <Button title="Save Changes" gradient />
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default PersonalDetailsScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    // gap: 20,
    backgroundColor: "#fff",
  },
  scrollContent: {
    paddingHorizontal: 10,
    gap: 20,
    backgroundColor: "#fff",
    paddingVertical: 20,
    marginBottom: 40,
    borderRadius: 8,
    margin: 6,
  },
  formGroup: {
    gap: 10,
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitleText: {
    color: "#666",
    fontSize: 14,
  },
});
