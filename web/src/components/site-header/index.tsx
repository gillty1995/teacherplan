import React from "react";
import { Link } from "gatsby";
import { HandHelping } from "lucide-react";
import { Button } from "../ui/button";

export const SiteHeader = () => (
  <header className="sticky top-0 z-40 border-b border-slate-800/70 bg-slate-950/95 text-white backdrop-blur-xl">
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
      <Link to="/" className="flex items-center gap-3 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
        <HandHelping className="h-8 w-8 text-sky-300 sm:h-9 sm:w-9" />
        <span>TeacherPlan</span>
      </Link>
      <nav className="flex items-center gap-3 sm:gap-4">
        <Button asChild variant="outline" className="hidden rounded-full border-slate-700 bg-white/5 text-white hover:bg-white/10 md:inline-flex">
          <Link to="/signup">Request Enrollment</Link>
        </Button>
        <Button asChild className="rounded-full bg-sky-500 text-white hover:bg-sky-400">
          <Link to="/login">
            Login
          </Link>
        </Button>
      </nav>
    </div>
  </header>
);
