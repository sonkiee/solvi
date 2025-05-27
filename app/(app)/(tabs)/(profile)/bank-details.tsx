import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Linking, StyleSheet, Text, View } from "react-native";

const BankdetailsScreen = () => {
  const url = `mailto:annagu.kennedy@gmail.com`;
  return (
    <Container top={1}>
      <View style={styles.container}>
        <View>
          <Text style={styles.label}>Account Name:</Text>
          <Text style={[styles.text, { textTransform: "uppercase" }]}>
            Kennedy Lala
          </Text>
          <Text style={styles.label}>Bank Name:</Text>
          <Text style={styles.text}>Access bank</Text>
          <Text style={styles.label}>Account Number:</Text>
          <Text style={styles.text}>0086972100</Text>
        </View>

        <View style={styles.calloutBox}>
          <View style={styles.calloutHeader}>
            <Ionicons name="alert-circle-outline" size={20} color="#ccc" />
            <Text style={styles.calloutTitle}>
              Want to change bank account?
            </Text>
          </View>
          <Text style={styles.calloutText}>
            For security purposes, please contact our support team to update
            your bank account details. We typically respond within 1-2 business
            hours.
          </Text>

          <Button
            title="Contact support"
            onPress={() => Linking.openURL(url)}
            gradient
          />
        </View>
      </View>
    </Container>
  );
};

export default BankdetailsScreen;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: "#fff",
    margin: 6,
  },
  label: {
    fontSize: 14,
    color: "#666",
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    marginBottom: 8,
  },
  calloutBox: {
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#ccc",
    backgroundColor: "#3a1078",
    padding: 10,
    marginTop: 20,
    gap: 10,
  },
  calloutHeader: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
    marginBottom: 10,
  },
  calloutTitle: {
    color: "#ccc",
    fontWeight: "600",
    fontSize: 16,
  },
  calloutText: {
    color: "#ccc",
  },
});
