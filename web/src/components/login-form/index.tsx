import React from "react";
import { Link } from "gatsby";
import { Loader2 } from "lucide-react";
import { LOGIN_CREDENTIALS, LOGIN_COPY } from "./constants";
import { useLoginForm } from "./hooks/useLoginForm";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";

export const LoginForm = () => {
  const { values, error, isSubmitting, updateField, handleSubmit } = useLoginForm();

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <Card>
        <CardHeader>
          <CardTitle>{LOGIN_COPY.title}</CardTitle>
          <CardDescription>{LOGIN_COPY.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <label className="block space-y-2">
              <span className="text-sm font-medium text-slate-700">Email</span>
              <Input
                type="email"
                value={values.email}
                onChange={(event) => updateField("email", event.target.value)}
                placeholder="teacher@teacherplan.com"
                autoComplete="email"
              />
            </label>
            <label className="block space-y-2">
              <span className="text-sm font-medium text-slate-700">Password</span>
              <Input
                type="password"
                value={values.password}
                onChange={(event) => updateField("password", event.target.value)}
                placeholder="Enter your password"
                autoComplete="current-password"
              />
            </label>
            {error ? (
              <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                {error}
              </div>
            ) : null}
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              {LOGIN_COPY.buttonLabel}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card className="border-slate-200 bg-white text-slate-900">
        <CardHeader className="text-slate-900">
          <CardTitle className="text-slate-900">Sign-in details</CardTitle>
          <CardDescription className="text-slate-600">
            Use the credentials below to access the teacher dashboard.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-slate-900">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Email</p>
            <p className="mt-1 font-mono text-sm text-slate-900">{LOGIN_CREDENTIALS.email}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Password</p>
            <p className="mt-1 font-mono text-sm text-slate-900">{LOGIN_CREDENTIALS.password}</p>
          </div>
          <p className="text-sm leading-6 text-slate-700">
            After login you’ll land on the dashboard with students, lessons,
            resources, and progress reports synced from Sanity.
          </p>
          <Link to="/" className="inline-flex text-sm font-semibold text-blue-700 hover:text-blue-800">
            Return to homepage
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};
