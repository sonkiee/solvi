import { colors } from "@/constants";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

// "#2563eb", // blue
// "#9333ea", // purple

export default function GradientTabBarBackground() {
  return (
    <LinearGradient
      colors={[colors.from, colors.to]}
      start={{ x: 0, y: 0 }} // left
      end={{ x: 1, y: 0 }} // right
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
