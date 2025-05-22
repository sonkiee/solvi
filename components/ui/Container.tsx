import { Images } from "@/constants";
import { ImageBackground } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={styles.safeArea}
        // edges={["top", "bottom", "left", "right"]}
      >
        <ImageBackground
          source={Images.bg}
          style={styles.background}
          contentFit="cover"
        >
          <LinearGradient
            colors={["rgba(147, 51, 234, 0.4)", "rgba(37, 99, 235, 0.5)"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradient}
          >
            {children}
          </LinearGradient>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Container;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
});
