"use client";

import { createClient } from "@/shared/utils/supabase/client";
import { useEffect } from "react";
import { useAuthStore } from "@/shared/stores/AuthStore";

const supabase = createClient();

export default function AuthProvider({ children }: React.PropsWithChildren) {
  const { setStatus, setUser, setUserInfo } = useAuthStore();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        supabase
          .from("users")
          .select("*")
          .eq("id", session.user.id)
          .single()
          .then(({ data, error }) => {
            if (error) {
              console.error(error);
            } else {
              console.info("Hello", data);
              setUserInfo(data);
            }
          });
      }
      setStatus(session?.user ? "authenticated" : "unauthenticated");
    });

    return () => subscription.unsubscribe();
  }, [setStatus, setUser, setUserInfo]);

  return <>{children}</>;
}
