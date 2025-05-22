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
          style={{
            flex: 1,
            ...StyleSheet.absoluteFillObject,
          }}
          contentFit="cover"
        />
        {children}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {},
  bg: {},
});
