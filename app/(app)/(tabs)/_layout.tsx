import {
  AntDesign,
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons/";
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
      <Tabs.Screen
        name="exchange"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="yen" color={color} size={size} />
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
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
