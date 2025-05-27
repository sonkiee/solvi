import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import TextInput from "@/components/ui/Input";
import RadioButtonGroup from "@/components/ui/RadioButton";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const BusinessDetailsScreen = () => {
  const [registered, setIsregistered] = React.useState(false);
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
          //   keyboardDismissMode="on-drag"
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
              title="Business Name"
              placeholder="Enter your first name"
              label={{ color: "#333" }}
              container={{ backgroundColor: "#fff", borderColor: "#ccc" }}
            />

            <TextInput
              title="Email Address"
              keyboardType="email-address"
              placeholder="john.doe@example.com"
              label={{ color: "#333" }}
              container={{ backgroundColor: "#fff", borderColor: "#ccc" }}
            />
            <TextInput
              title="Business category"
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

            <RadioButtonGroup
              selected={registered}
              onChange={setIsregistered}
              row
              options={[
                { label: "Yes", value: true },
                { label: "No", value: false },
              ]}
            />
          </View>

          <Button title="Save Changes" gradient />
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default BusinessDetailsScreen;

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
