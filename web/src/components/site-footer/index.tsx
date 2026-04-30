import React from "react";
import { ExternalLink } from "lucide-react";

export const SiteFooter = () => (
  <footer className="border-t border-slate-200/80 bg-white/70">
    <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
      <p className="font-medium text-slate-600">TeacherPlan © 2026</p>
      <a
        href="https://www.gillhermelin.com"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 font-medium text-slate-600 transition hover:text-slate-950"
      >
        <ExternalLink className="h-3.5 w-3.5" />
      </a>
    </div>
  </footer>
);
