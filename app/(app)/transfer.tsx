import { HeaderBack } from "@/components/Reusables";
import Container from "@/components/ui/Container";
import { View } from "react-native";

const TransferScreen = () => {
  return (
    <Container top={1}>
      <View>
        <HeaderBack title={"Tranfer Funds"} />
      </View>
    </Container>
  );
};

export default TransferScreen;
