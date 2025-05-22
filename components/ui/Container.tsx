import { Images } from "@/constants";
import { ImageBackground } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const Container = ({ children }: { children: React.ReactNode }) => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider>
      <View
        style={{
          paddingTop: insets.top,
          backgroundColor: "transparent",
        }}
      />
      <View style={styles.container}>
        <ImageBackground
          source={Images.bg}
          style={styles.background}
          contentFit="cover"
        >
          <LinearGradient
            colors={["rgba(147, 51, 234, 0.4)", "rgba(37, 99, 235, 0.5)"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ flex: 1 }}
          >
            {children}
          </LinearGradient>
        </ImageBackground>
      </View>
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
