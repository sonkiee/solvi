import CardsSlider from "@/components/CardsSlider";
import HomeHeader from "@/components/HomeHeader";
import QuickAction from "@/components/QuickAction";
import TransactionsContainer from "@/components/TransactionsContainer";
import Container from "@/components/ui/Container";
import { ScrollView, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <Container top={1}>
      <ScrollView
        automaticallyAdjustContentInsets={true}
        contentInsetAdjustmentBehavior="automatic"
      >
        <HomeHeader />

        <CardsSlider />

        <QuickAction />

        <TransactionsContainer />
      </ScrollView>
    </Container>
  );
};

export default HomeScreen;

const style = StyleSheet.create({});
