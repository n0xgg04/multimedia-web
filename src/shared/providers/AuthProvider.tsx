"use client";

import { createClient } from "@/shared/utils/supabase/client";
import { useEffect } from "react";
import { useAuthStore } from "@/shared/stores/AuthStore";

export default function AuthProvider({ children }: React.PropsWithChildren) {
  const supabase = createClient();
  const { setStatus, setUser } = useAuthStore();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setStatus(event === "SIGNED_IN" ? "authenticated" : "unauthenticated");
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [setStatus, setUser, supabase.auth]);

  return <>{children}</>;
}
