import { Containing, HeaderBack } from "@/components/Reusables";
import Container from "@/components/ui/Container";
import TextInput from "@/components/ui/Input";
import { currency } from "@/utils/currency";
import { StyleSheet, Text, View } from "react-native";

const TransferScreen = () => {
  return (
    <Container top={1}>
      <HeaderBack title={"Tranfer Funds"} />
      <View style={styles.container}>
        <View>
          <Containing>
            <Text style={styles.text}>Available Balance:</Text>
            <Text style={styles.amountText}>{currency(10000)}</Text>
            {/* Transfer form */}
          </Containing>

          <View style={styles.content}>
            <Text style={styles.label}> Transfer Deatils</Text>

            <TextInput title="Recipient's Address" />

            <TextInput title="Recipient's Address" />
          </View>
        </View>
      </View>
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
    backgroundColor: "#f5f5f5",
    padding: 16,
    marginTop: 16,
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
});
