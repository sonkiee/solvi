// src/store/user.ts

import Api from "@/api";
import Storage from "@/lib/storage";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  id: string;
  email: string;
  name: string;
  role: string;
  pushToken?: string;
};

type UserState = {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (payload: any) => Promise<void>;
  setUser: (user: User) => Promise<void>;
  verifyEmail: (email: string, otp: string) => Promise<void>;
  resendOtp: (ref_code: string) => Promise<void>;
  clearUser: () => Promise<void>;
  hydrate: () => Promise<void>;
};

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      isLoading: false,

      login: async (email: string, password: string) => {
        set({ isLoading: true });
        try {
          const response = await Api.post("/user-login", { email, password });
          console.log("Login response:", response);
          const data = response;
          await useUserStore.getState().setUser(data);
        } catch (error) {
          // console.error("Login error:", error);
          throw error;
        } finally {
          set({ isLoading: false });
        }
      },

      signup: async (payload) => {
        set({ isLoading: true });
        try {
          const response = await Api.post("/user-onboard", payload);
          console.log("Signup response:", response);
          const data = response;
          await useUserStore.getState().setUser(data);
        } catch (error) {
          // console.error("Signup error:", error);
          throw error;
        } finally {
          set({ isLoading: false });
        }
      },

      verifyEmail: async (email, otp) => {
        set({ isLoading: true });
        try {
          const response = await Api.post("/verify-otp", { email, otp });
          console.log("Verification response", response);
          return response;
        } catch (error) {
          throw error;
        } finally {
          set({ isLoading: false });
        }
      },

      resendOtp: async (ref_code) => {
        set({ isLoading: true });
        try {
          const response = await Api.post(`resend-otp/${ref_code}`);
          console.log("Verification response", response);
          return response;
        } catch (error) {
          throw error;
        } finally {
          set({ isLoading: false });
        }
      },

      setUser: async (user) => {
        await Storage.set("user", JSON.stringify(user));
        set({ user });
      },

      clearUser: async () => {
        await Storage.delete("user");
        set({ user: null });
      },

      hydrate: async () => {
        const raw = await Storage.get("user");
        if (raw) {
          set({ user: JSON.parse(raw) });
        }
      },
    }),
    { name: "user" }
  )
);
