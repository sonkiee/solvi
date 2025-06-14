import Alerts from "@/components/ui/Alerts";
import { useHydrateStores } from "@/hooks/useHydrateStores";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  useHydrateStores();
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="(app)"
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
