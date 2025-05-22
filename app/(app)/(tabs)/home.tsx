import Container from "@/components/ui/Container";
import { ScrollView, StyleSheet, Text } from "react-native";

const HomeScreen = () => {
  return (
    <Container top={1}>
      <ScrollView
        automaticallyAdjustContentInsets={true}
        contentInsetAdjustmentBehavior="always"
      >
        <Text>HomeScreen</Text>
      </ScrollView>
    </Container>
  );
};

export default HomeScreen;

const style = StyleSheet.create({});
