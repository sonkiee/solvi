import Button from "@/components/ui/Button";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

const ManageCardsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Feather name="credit-card" size={23} color="#3A1078" />
      </View>

      <Text style={styles.heading}>Your Cards</Text>

      <Text style={styles.subText}>
        You have no cards added yet. Add a debit or credit card to make your
        payments faster and easier.
      </Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Add Card"
          onPress={() => console.log("Add Card Pressed")}
        />
      </View>
    </View>
  );
};

export default ManageCardsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    margin: 6,
  },
  iconContainer: {
    backgroundColor: "#f2f2f2",
    borderRadius: 9999,
    padding: 15,
    marginBottom: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 10,
    color: "#111",
  },
  subText: {
    fontSize: 15,
    color: "#666",
    textAlign: "center",
    paddingHorizontal: 20,
    lineHeight: 22,
  },
  buttonContainer: {
    marginTop: 30,
    width: "100%",
  },
});
