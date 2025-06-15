import { registerForPushNotificationsAsync } from "@/lib/notification";
import { useUserStore } from "@/store/user";
import { useEffect, useState } from "react";

export const usePushTokenSync = () => {
  const { user, setUser } = useUserStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const sync = async () => {
      if (!user) {
        setLoading(false);
        return;
      }

      if (user.pushToken) {
        setLoading(false);
        return;
      }

      const token = await registerForPushNotificationsAsync();
      console.log("Push Token:", token);

      if (token) {
        try {
          //   await Api.post("/user/push-token", { token });

          // Update Zustand store if you want to keep local state consistent
          await setUser({ ...user, pushToken: token });
        } catch (err) {
          console.error("Failed to register push token:", err);
        }
      }

      setLoading(false);
    };

    sync();
  }, [user]);

  return { loading };
};
