import Container from "@/components/ui/Container";
import { ScrollView, StyleSheet, Text } from "react-native";

const HomeScreen = () => {
  return (
    <Container>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>HomeScreen</Text>
      </ScrollView>
    </Container>
  );
};

export default HomeScreen;

const style = StyleSheet.create({});
