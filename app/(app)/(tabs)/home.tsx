import CardsSlider from "@/components/CardsSlider";
import HomeHeader from "@/components/HomeHeader";
import QuickAction from "@/components/QuickAction";
import TransactionsContainer from "@/components/TransactionsContainer";
import Container from "@/components/ui/Container";
import { ScrollView, StyleSheet, Text } from "react-native";

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
        <Text>HomeScreen</Text>
      </ScrollView>
    </Container>
  );
};

export default HomeScreen;

const style = StyleSheet.create({});
