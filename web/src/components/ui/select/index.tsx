import React, { type SelectHTMLAttributes } from "react";
import { cn } from "../../../lib/cn";

export const Select = ({ className, children, ...props }: SelectHTMLAttributes<HTMLSelectElement>) => (
  <select
    className={cn(
      "h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-950 shadow-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100",
      className
    )}
    {...props}
  >
    {children}
  </select>
);
