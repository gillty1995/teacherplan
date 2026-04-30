import { useEffect, useMemo, useState } from "react";
import {
  clearAuthToken,
  getStoredAuthToken,
  isTeacherCredentials,
  storeAuthToken
} from "../lib/auth";

export const useAuth = () => {
  const [isReady, setIsReady] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    setToken(getStoredAuthToken());
    setIsReady(true);
  }, []);

  const login = (email: string, password: string) => {
    if (!isTeacherCredentials(email, password)) {
      return { ok: false, error: "Use the sign-in details shown on the page." };
    }

    storeAuthToken();
    setToken("auth-token");

    return { ok: true, error: null };
  };

  const logout = () => {
    clearAuthToken();
    setToken(null);
  };

  return useMemo(
    () => ({
      isReady,
      isAuthenticated: Boolean(token),
      login,
      logout
    }),
    [isReady, token]
  );
};
