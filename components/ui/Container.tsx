import { Images } from "@/constants";
import { ImageBackground } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const Container = ({
  children,
  top,
}: {
  children: React.ReactNode;
  top?: number;
}) => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider>
      <ImageBackground
        source={Images.bg}
        style={StyleSheet.absoluteFill}
        contentFit="cover"
      >
        <LinearGradient
          colors={["rgba(147, 51, 234, 0.4)", "rgba(37, 99, 235, 0.5)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={StyleSheet.absoluteFill}
        />

        <View
          style={{
            flex: 1,
            ...(top ? { paddingTop: top } : { paddingTop: insets.top }),
            // paddingTop: insets.top,
          }}
        >
          {children}
        </View>
      </ImageBackground>
    </SafeAreaProvider>
  );
};

export default Container;
