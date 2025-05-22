import GradientTabBarBackground from "@/components/ui/TabBarBackground";
import {
  AntDesign,
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";

// Fix: Rename to PascalCase
const ExchangeTabIcon = ({ color, size }: { color: string; size: number }) => (
  <View style={styles.outer}>
    <LinearGradient
      colors={["#2563eb", "#9333ea"]} // left to right gradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.inner}
    >
      <FontAwesome name="yen" color={color} size={size * 0.8} />
    </LinearGradient>
  </View>
);

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          borderTopColor: "transparent",
        },
        tabBarBackground: GradientTabBarBackground,
        tabBarInactiveTintColor: "#eeeeee",

        tabBarActiveTintColor: "#ffffff",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="bills"
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="filetext1" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="exchange"
        options={{
          tabBarLabel: "",
          //   tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <ExchangeTabIcon color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="grid" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  outer: {
    position: "absolute",
    bottom: 0,
    alignSelf: "center", // center it horizontally
    elevation: 5, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },

    borderRadius: 999,
    borderWidth: 2,
    borderColor: "rgba(37, 99, 235, 0.3)",
    width: 55,
    height: 55,
    padding: 4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    alignContent: "center",
  },
  inner: {
    backgroundColor: "#FF9F1C",
    borderRadius: 999,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
  },
});
