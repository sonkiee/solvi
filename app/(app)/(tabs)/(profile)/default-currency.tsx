import Picker from "@/components/Picker";
import Button from "@/components/ui/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const currencies = [
  { label: "USD", symbol: "$", value: "USD" },
  { label: "EUR", symbol: "€", value: "EUR" },
  { label: "GBP", symbol: "£", value: "GBP" },
];

const ManageCurrencyScreen = () => {
  const [selected, setSelected] = useState(currencies[0].value);

  useEffect(() => {
    (async () => {
      const savedCurrency = await AsyncStorage.getItem("preferredCurrency");
      if (savedCurrency) {
        setSelected(savedCurrency);
      } else {
        await saveCurrency(currencies[0].value);
      }
    })();
  }, []);

  const saveCurrency = async (currency) => {
    await AsyncStorage.setItem("preferredCurrency", currency);
  };

  const handleValueChange = async (value) => {
    setSelected(value);
    await saveCurrency(value);
  };

  return (
    <View style={styles.container}>
      <Picker
        title="Select your preferred currency"
        options={currencies}
        selectedValue={selected}
        onValueChange={handleValueChange}
      />

      <Text style={styles.note}>
        The currency will be used as default for all transactions and balances.
      </Text>

      <View style={{ marginTop: 20 }}>
        <Button title="Save changes" onPress={() => console.log(selected)} />
      </View>
    </View>
  );
};

export default ManageCurrencyScreen;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: "#fff",
    margin: 6,
  },
  note: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
});
