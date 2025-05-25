import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(auth)" />
      </Stack>

      <StatusBar translucent backgroundColor="transparent" style="auto" />
    </>
  );
}
