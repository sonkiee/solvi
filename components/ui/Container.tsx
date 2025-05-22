import { Images } from "@/constants";
import { ImageBackground } from "expo-image";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={Images.bg}
          style={styles.background}
          contentFit="cover"
        >
          {children}
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    // backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
