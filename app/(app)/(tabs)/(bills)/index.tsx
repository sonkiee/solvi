import BillsItem from "@/components/BillsItem";
import TransactionsContainer from "@/components/TransactionsContainer";
import Container from "@/components/ui/Container";
import { currency } from "@/utils/currency";
import { Feather, MaterialIcons, Octicons } from "@expo/vector-icons";
import { FlatList, StyleSheet, Text, View } from "react-native";

const ICON_COLOR = "#fff";

const bills = [
  {
    icon: <Feather name="phone" size={24} color={ICON_COLOR} />,
    label: "airtime top-up",
    linkTo: "airtime",
    colors: ["#1eba58", "#1aaf51"],
  },
  {
    icon: <MaterialIcons name="wifi" size={24} color={ICON_COLOR} />,
    label: "buy data",
    linkTo: "data",
    colors: ["#3579f3", "#2c6cee"],
  },
  {
    icon: <Feather name="tv" size={24} color={ICON_COLOR} />,
    label: "cable subsciption",
    linkTo: "cable",
    colors: ["#a44ff5", "#9739ec"],
  },
  {
    icon: <Octicons name="light-bulb" size={24} color={ICON_COLOR} />,
    label: "utility payment",
    linkTo: "utility",
    colors: ["#e6ae08", "#d49705"],
  },
  // {
  //   icon: "",
  //   label: "internet bill",
  //   linkTo: "internet",
  //   colors: ["#e5398a", "#df2f7f"],
  // },
  // {
  //   icon: "",
  //   label: "betting",
  //   linkTo: "betting",
  //   colors: ["#ec3f3f", "#e02d2d"],
  // },
  // {
  //   icon: "",
  //   label: "examination",
  //   linkTo: "examination",
  //   colors: ["#13b1a0", "#0f9e90"],
  // },
];

const BillsScreen = () => {
  return (
    <Container top={1}>
      <View style={styles.container}>
        <FlatList
          data={bills}
          ListHeaderComponent={
            <View style={styles.containing}>
              <Text style={styles.placeholder}>Wallet balance:</Text>
              <Text style={styles.price}>{currency(10000)}</Text>
            </View>
          }
          ListFooterComponent={<TransactionsContainer />}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: "space-between",
            marginBottom: 10,
            gap: 10,
          }}
          contentContainerStyle={{
            paddingVertical: 20,
            gap: 10,
            marginBottom: 30,
          }}
          renderItem={({ item }) => (
            <BillsItem
              colors={item.colors}
              icon={item.icon}
              label={item.label}
              linkTo={item.linkTo}
            />
          )}
        />
      </View>
    </Container>
  );
};

export default BillsScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  containing: {
    borderWidth: 0.5,
    borderColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 8,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    paddingHorizontal: 10,
    paddingVertical: 16,
    marginTop: 12,
    marginBottom: 10,
  },
  price: {
    fontWeight: "600",
    fontSize: 20,
    color: "white",
    marginTop: 4,
  },
  converter: {
    paddingVertical: 16,
    paddingHorizontal: 10,
    backgroundColor: "#f5f5f5",
    marginTop: 16,
    borderRadius: 8,
  },
  placeholder: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 15,
  },
});
