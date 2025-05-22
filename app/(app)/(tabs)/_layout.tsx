import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="home" />
      <Tabs.Screen name="bills" />
      <Tabs.Screen name="exchange" />
      <Tabs.Screen name="products" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
