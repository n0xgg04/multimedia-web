import { create } from "zustand";
import { User } from "@supabase/supabase-js";
import { createClient } from "../utils/supabase/client";
import { Tables } from "../utils/supabase/database.types";

type State = {
  status: "loading" | "authenticated" | "unauthenticated";
  user: User | null;
  userInfo: Tables<"users"> | null;
};

type Actions = {
  setStatus: (status: State["status"]) => void;
  setUser: (user: User | null) => void;
  setUserInfo: (userInfo: Tables<"users"> | null) => void;
  logout: (onSuccess?: () => void) => Promise<void>;
};

const supabase = createClient();

export const useAuthStore = create<State & Actions>((set) => ({
  status: "loading",
  user: null,
  userInfo: null,
  setStatus: (status) => set({ status }),
  setUser: (user) => set({ user }),
  setUserInfo: (userInfo) => set({ userInfo }),
  logout: async (onSuccess) => {
    await supabase.auth.signOut();
    set({ status: "unauthenticated", user: null, userInfo: null });
    onSuccess?.();
  },
}));
