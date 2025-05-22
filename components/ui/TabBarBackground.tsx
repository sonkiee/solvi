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
      style={styles.tabBar}
    />
  );
}

const styles = StyleSheet.create({
  tabBar: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
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
