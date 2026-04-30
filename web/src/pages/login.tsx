import React, { useEffect } from "react";
import { navigate } from "gatsby";
import { PageShell } from "../components/page-shell";
import { LoginForm } from "../components/login-form";
import { useAuth } from "../hooks/useAuth";

const LoginPage = () => {
  const { isReady, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isReady && isAuthenticated) {
      void navigate("/app/dashboard", { replace: true });
    }
  }, [isReady, isAuthenticated]);

  return (
    <PageShell>
      <section className="mx-auto flex min-h-[calc(100vh-10rem)] max-w-5xl items-center px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <LoginForm />
      </section>
    </PageShell>
  );
};

export default LoginPage;
