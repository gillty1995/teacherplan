import React, { type PropsWithChildren } from "react";
import { Card, CardContent } from "../ui/card";
import { useProtectedRoute } from "./hooks/useProtectedRoute";

export const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const { isReady, isAuthenticated } = useProtectedRoute();

  if (!isReady) {
    return (
      <div className="grid min-h-[60vh] place-items-center px-4">
        <Card className="w-full max-w-md">
          <CardContent className="p-6 text-center text-sm text-slate-500">Checking access...</CardContent>
        </Card>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
};
