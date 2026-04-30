import React, { useEffect } from "react";
import { navigate } from "gatsby";

const AppIndexPage = () => {
  useEffect(() => {
    void navigate("/app/dashboard", { replace: true });
  }, []);

  return null;
};

export default AppIndexPage;
