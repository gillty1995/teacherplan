import { useEffect, useState } from "react";
import { navigate } from "gatsby";
import { getStoredAuthToken } from "../../../lib/auth";

export const useProtectedRoute = () => {
  const [isReady, setIsReady] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = getStoredAuthToken();
    setIsAuthenticated(Boolean(token));
    setIsReady(true);

    if (!token) {
      void navigate("/login", { replace: true });
    }
  }, []);

  return { isReady, isAuthenticated };
};
