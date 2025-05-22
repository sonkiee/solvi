import Container from "@/components/ui/Container";
import { Stack } from "expo-router";

const AppLayout = () => {
  return (
    <Container>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </Container>
  );
};

export default AppLayout;
