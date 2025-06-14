import { useAuthStore } from "@/store/auth";
import { useUserStore } from "@/store/user";
import { Redirect } from "expo-router";
import { useMemo } from "react";

export default function Index() {
  const { user } = useUserStore();
  const { isLocked } = useAuthStore();

  const target = useMemo(() => {
    if (!user) return "/(auth)/sign-in";
    if (isLocked) return "/(lock)";
    return "/(app)/(tabs)";
  }, [user, isLocked]);

  return <Redirect href={target} />;
}
