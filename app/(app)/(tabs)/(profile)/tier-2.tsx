import Picker from "@/components/Picker";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Upload from "@/components/Upload";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const ids = [
  {
    label: "National ID (Passport)",
    value: "passport",
  },
  {
    label: "National Indentification Number (NIN)",
    value: "nin",
  },
  {
    label: "Driver's License (Driving Permit)",
    value: "driving_permit",
  },
];

const Tier2Screen = () => {
  //   const [selected, setSelected] = React.useState<number | null>(null);
  //   const [documents, setDocuments] = useState<{
  //     id: string;
  //     proof: string;
  //   }[]>([]);

  const [idType, setIdType] = useState("passport");

  const [selected, setSelected] = useState("");

  return (
    <Container top={1}>
      <ScrollView style={styles.container}>
        <Text style={styles.titleText}>Upload ID Documents</Text>
        <Text style={styles.descText}>
          Kindly upload all required documents
        </Text>

        <View style={styles.inputSection}>
          <Text style={styles.subtitleText}>
            Proof of Address (e.g., utility bill, rental agreement)
          </Text>
          <Upload title="Proof of address" desc="Upload proof of address" />

          <Picker
            options={ids}
            selectedValue={selected}
            onValueChange={(val) => setSelected(val)}
            placeholder="Select Identification Type"
          />
          <Upload title="Upload ID" desc={`Upload ${selected ?? "ID"}`} />
          <Button title="Verify" gradient />
        </View>
      </ScrollView>
    </Container>
  );
};

export default Tier2Screen;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: "#fff",
    margin: 6,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#222",
  },
  descText: {
    fontSize: 14,
    color: "#666",
    marginTop: 8,
  },
  inputSection: {
    marginVertical: 20,
    gap: 20,
  },
  uploadBox: {
    height: 220,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  uploadInner: {
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "dashed",
    borderWidth: 2,
    borderColor: "#ccc",
    padding: 10,
    width: "70%",
    borderRadius: 6,
  },
  uploadText: {
    marginTop: 8,
    fontSize: 14,
    color: "#333",
  },
  uploadRequirements: {
    marginTop: 16,
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  },
  subtitleText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  faqSection: {
    marginTop: 30,
    gap: 16,
  },
  faqItem: {
    paddingVertical: 8,
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  faqAnswer: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
    lineHeight: 20,
  },
});
