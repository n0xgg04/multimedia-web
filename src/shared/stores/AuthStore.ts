import { create } from "zustand";
import { User } from "@supabase/supabase-js";

type State = {
  status: "loading" | "authenticated" | "unauthenticated";
  user: User | null;
};

type Actions = {
  setStatus: (status: State["status"]) => void;
  setUser: (user: User | null) => void;
};

export const useAuthStore = create<State & Actions>((set) => ({
  status: "loading",
  user: null,
  setStatus: (status) => set({ status }),
  setUser: (user) => set({ user }),
}));
