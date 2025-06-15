import { usePushTokenSync } from "@/hooks/usePushTokenSync";
import { useAuthStore } from "@/store/auth";
import { useUserStore } from "@/store/user";
import { Redirect } from "expo-router";
import { useMemo } from "react";
import { ActivityIndicator } from "react-native";

export default function Index() {
  const { user, isLoading } = useUserStore();
  const { isLocked } = useAuthStore();
  const { loading: pushLoading } = usePushTokenSync();

  // const shhh = async () => {
  //   const projectId =
  //     Constants?.expoConfig?.extra?.eas?.projectId ??
  //     Constants?.easConfig?.projectId;

  //   console.log("Project ID:", projectId);
  //   const expoToken = await Notifications.getExpoPushTokenAsync({
  //     projectId,
  //   });

  //   console.log("Expo Push Token:", expoToken);
  //   console.log("Expo Push Token Data:", expoToken.data);
  //   console.log("Expo Push Token Type:");
  // };
  // shhh();

  const target = useMemo(() => {
    if (!user) return "/(auth)/sign-in";
    if (isLocked) return "/(lock)";
    return "/(app)/(tabs)";
  }, [user, isLocked]);

  // Wait for both global and local loading
  if (isLoading || pushLoading) return <ActivityIndicator size="large" />;

  return <Redirect href={target} />;
}
