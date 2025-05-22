import { ImageBackground } from "expo-image";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Container = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ImageBackground />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {},
  bg: {},
});
