import Feather from "@expo/vector-icons/Feather";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen name="bills" />
      <Tabs.Screen name="exchange" />
      <Tabs.Screen name="products" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
