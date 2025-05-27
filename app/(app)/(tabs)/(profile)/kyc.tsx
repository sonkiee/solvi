import { Containing } from "@/components/Reusables";
import Container from "@/components/ui/Container";
import { Octicons } from "@expo/vector-icons";
import { RelativePathString } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const tiers = [
  {
    type: "tier-1",
    label: "Tier 1 Verification",
    description:
      "Enter your Bank Verification Number (BVN) to verify your identity and activate your wallet.",
    isCompleted: true,
    linkTo: "/tier-1",
  },
  {
    type: "tier-2",
    label: "Tier 2 Verification",
    description:
      "Upload a valid ID, proof of address, and other identification documents to further verify your identity.",
    isCompleted: false,
    linkTo: "/tier-2",
  },
];

const KycScreen = () => {
  return (
    <Container top={1}>
      <View style={styles.container}>
        <View style={styles.tierList}>
          {tiers.map((item, index) => (
            <Containing
              key={index}
              style={styles.card}
              linkTo={item.linkTo as RelativePathString}
              border
            >
              <View style={styles.labelRow}>
                <Text style={styles.label}>{item.label}</Text>
                {item.isCompleted && (
                  <View style={styles.verifiedBadge}>
                    <Octicons name="verified" size={14} color="#fff" />
                    <Text style={styles.verifiedText}>Completed</Text>
                  </View>
                )}
              </View>
              <Text style={styles.description}>{item.description}</Text>
            </Containing>
          ))}
        </View>
      </View>
    </Container>
  );
};

export default KycScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    flex: 1,
  },
  tierList: {
    gap: 20,
  },
  card: {
    paddingBottom: 16,
    // borderBottomWidth: 1,
    // borderBottomColor: "#222", // for contrast; adjust for light/dark themes
  },
  labelRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ddd",
    textTransform: "capitalize",
  },
  description: {
    fontSize: 14,
    color: "#aaa",
    lineHeight: 20,
  },
  verifiedBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#28a745",
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 2,
    gap: 6,
  },
  verifiedText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 13,
  },
});
