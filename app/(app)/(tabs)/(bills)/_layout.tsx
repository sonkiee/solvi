import { Stack } from "expo-router";

export default function BillsLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="airtime" options={{}} />
    </Stack>
  );
}
