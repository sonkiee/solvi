// src/store/auth.ts

import Storage from "@/lib/storage";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthState = {
  accessToken: string | null;
  refreshToken: string | null;
  isLocked?: boolean; // Optional, if you want to manage lock state here
  setIsLocked: (locked: boolean) => void;
  setTokens: (accessToken: string, refreshToken: string) => Promise<void>;
  logout: () => Promise<void>;
  hydrate: () => Promise<void>;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      refreshToken: null,

      isLocked: false,
      setIsLocked: (isLocked) => set({ isLocked }),

      setTokens: async (accessToken, refreshToken) => {
        Storage.set("accessToken", accessToken);
        Storage.set("refreshToken", refreshToken);
        set({ accessToken, refreshToken });
      },

      logout: async () => {
        Storage.delete("accessToken");
        Storage.delete("refreshToken");
        set({ accessToken: null, refreshToken: null });
      },

      hydrate: async () => {
        const accessToken = Storage.get("accessToken");
        const refreshToken = Storage.get("refreshToken");
        set({ accessToken, refreshToken });
      },
    }),
    {
      name: "auth", // zustand-persist key in storage
      // Optional if you want to fully integrate with MMKV instead of localStorage:
      // storage: {
      //   getItem: (key) => Storage.get(key),
      //   setItem: (key, value) => Storage.set(key, value),
      //   removeItem: (key) => Storage.delete(key),
      // },
    }
  )
);
