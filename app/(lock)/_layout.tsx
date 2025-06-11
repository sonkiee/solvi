import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const LockLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Lock",
          headerShown: false,
        }}
      />
      <StatusBar style="dark" />
    </Stack>
  );
};

export default LockLayout;
