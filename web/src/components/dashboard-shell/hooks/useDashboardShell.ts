import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { useAuth } from "../../../hooks/useAuth";
import { DASHBOARD_NAV_ITEMS, SANITY_STUDIO_URL } from "../constants";

export const useDashboardShell = () => {
  const { pathname } = useLocation();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    void navigate("/login", { replace: true });
  };

  return {
    pathname,
    navItems: DASHBOARD_NAV_ITEMS,
    studioHref: SANITY_STUDIO_URL,
    handleLogout
  };
};
