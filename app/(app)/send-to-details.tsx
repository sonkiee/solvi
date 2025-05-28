import { Entypo } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import TextInput from "@/components/ui/Input";
import Upload from "@/components/Upload";
import { router } from "expo-router";

const SendToScreen = () => {
  return (
    <Container top={1}>
      {/* Beneficiaries Header Section */}

      <ScrollView>
        <View style={[styles.card, styles.rowBetween]}>
          <View style={styles.row}>
            <Text style={styles.helloText}>Hello</Text>
            <View>
              <Text style={styles.titleText}>Select from Beneficiaries</Text>
              <Text style={styles.subtitleText}>
                Send RMB to saved beneficiaries
              </Text>
            </View>
          </View>
          <Entypo name="chevron-small-right" size={24} color="#ccc" />
        </View>

        {/* Input & Upload Section */}
        <View style={styles.card}>
          <TextInput
            title="Alipay ID"
            container={styles.inputContainer}
            label={{ color: "#333" }}
          />
          <TextInput
            title="Alipay Full Name/Nickname"
            container={styles.inputContainer}
            label={{ color: "#333" }}
          />
          <Upload title="Alipay QR Code" qr />

          <Text style={styles.saveText}>Save as beneficiary</Text>
        </View>
        <View
          style={{
            paddingHorizontal: 6,
            marginVertical: 12,
          }}
        >
          <Button title="Next" onPress={() => router.push("/send-confirm")} />
        </View>
      </ScrollView>
    </Container>
  );
};

export default SendToScreen;

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    margin: 6,
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 12,
    gap: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleText: {
    fontWeight: "600",
    fontSize: 14,
    color: "#111",
  },
  subtitleText: {
    fontSize: 12,
    color: "#666",
  },
  helloText: {
    fontSize: 14,
    color: "#333",
  },
  inputContainer: {
    borderColor: "#aaa",
    backgroundColor: "#f5f5f5",
  },
  saveText: {
    marginTop: 16,
    fontSize: 14,
    color: "#444",
  },
});
