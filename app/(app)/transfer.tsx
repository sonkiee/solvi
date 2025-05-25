import { Containing, HeaderBack } from "@/components/Reusables";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import TextInput from "@/components/ui/Input";
import { currency } from "@/utils/currency";
import { Feather } from "@expo/vector-icons";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const TransferScreen = () => {
  return (
    <Container top={1}>
      <HeaderBack title={"Tranfer Funds"} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          style={styles.container}
          contentInsetAdjustmentBehavior="automatic"
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="interactive"
        >
          <View>
            <Containing>
              <Text style={styles.text}>Available Balance:</Text>
              <Text style={styles.amountText}>{currency(10000)}</Text>
              {/* Transfer form */}
            </Containing>

            <View style={styles.content}>
              <Text style={styles.label}> Transfer Deatils</Text>

              <TextInput
                title="Recipient"
                placeholder="Enter recipient's name or ID"
                style={{
                  backgroundColor: "#fff",
                }}
                label={{ color: "#333" }}
                container={{ backgroundColor: "#fff" }}
                icon={<Feather name="user" size={19} color="#aaa" />}
              />

              <TextInput
                title="Amount"
                placeholder="Enter amount"
                container={{ backgroundColor: "#fff" }}
                label={{ color: "#333" }}
                icon={<Feather name="credit-card" size={18} color="#aaa" />}
              />

              <Button title="Transfer funds" gradient />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default TransferScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 16,
    color: "#aaa",
  },
  amountText: {
    fontSize: 24,
    fontWeight: "600",
    color: "#aaa",
  },
  content: {
    borderRadius: 8,
    backgroundColor: "#e5e7eb",
    padding: 16,
    marginTop: 16,
    marginBottom: 24,
    gap: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
});
