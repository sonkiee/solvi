import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

export default function GradientTabBarBackground() {
  return (
    <LinearGradient
      colors={[
        "#2563eb", // orange
        "#FF5722", // deep orange
      ]}
      style={styles.tabBar}
    />
  );
}

const styles = StyleSheet.create({
  tabBar: {
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    borderTopColor: "transparent",
    ...StyleSheet.absoluteFillObject,
  },
});

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
