import { Stack } from "expo-router";

const ProfileLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Profile",
          headerShown: false,
          //   headerTransparent: true,
          //   headerLargeTitle: true,
        }}
      />
      {/* Add other screens here */}
    </Stack>
  );
};

export default ProfileLayout;
