import React from "react";
import { Link } from "gatsby";
import { PageShell } from "../components/page-shell";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";

const NotFoundPage = () => (
  <PageShell>
    <section className="mx-auto grid min-h-[70vh] max-w-3xl place-items-center px-4 py-16 sm:px-6 lg:px-8">
      <Card className="w-full text-center">
        <CardHeader>
          <CardTitle>Page not found</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm leading-6 text-slate-500">
            The page you’re looking for does not exist.
          </p>
          <Button asChild>
            <Link to="/">Return home</Link>
          </Button>
        </CardContent>
      </Card>
    </section>
  </PageShell>
);

export default NotFoundPage;
