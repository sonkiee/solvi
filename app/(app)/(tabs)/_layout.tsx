import { AntDesign, Feather } from "@expo/vector-icons/";
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
      <Tabs.Screen
        name="bills"
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="filetext1" scolor={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen name="exchange" />
      <Tabs.Screen name="products" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
