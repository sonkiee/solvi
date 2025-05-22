import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

export default function GradientTabBarBackground() {
  return (
    <LinearGradient
      colors={[
        "#FF9F1C", // orange
        "#FF5722", // deep orange
      ]}
      style={StyleSheet.absoluteFill}
    />
  );
}

// const styles = StyleSheet.create({})

export function useBottomTabOverflow() {
  return useBottomTabBarHeight();
}

{
  /* <BlurView
tint="systemChromeMaterial"
intensity={100}
style={StyleSheet.absoluteFill}
/> */
}
