import Alerts from "@/components/ui/Alerts";
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
        <Stack.Screen name="(app)" />
        <Stack.Screen name="(auth)" />
        <Stack.Screen
          name="(lock)"
          options={{
            animation: "fade_from_bottom",
          }}
        />
      </Stack>

      <Alerts
        type="warning"
        title="Low Balance"
        description="Your wallet balance is running low. Please top-up to continue using the service."
      />

      <StatusBar translucent backgroundColor="transparent" style="auto" />
    </>
  );
}
