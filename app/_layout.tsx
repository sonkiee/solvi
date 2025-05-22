import Container from "@/components/ui/Container";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <Container>
      <Stack
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "transparent",
          },
          contentStyle: {
            backgroundColor: "transparent",
          },
        }}
      />
      <StatusBar translucent backgroundColor="transparent" style="auto" />
    </Container>
  );
}
