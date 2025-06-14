// src/hooks/useHydrateStores.ts

import { useAuthStore } from "@/store/auth";
import { useUserStore } from "@/store/user";
import { useEffect } from "react";

export const useHydrateStores = () => {
  useEffect(() => {
    (async () => {
      await useAuthStore.getState().hydrate();
      await useUserStore.getState().hydrate();
    })();
  }, []);
};
