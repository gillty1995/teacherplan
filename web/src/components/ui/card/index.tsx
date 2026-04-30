import React, { type HTMLAttributes, type PropsWithChildren } from "react";
import { cn } from "../../../lib/cn";

export const Card = ({ className, ...props }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => (
  <div
    className={cn("glass-card overflow-hidden rounded-3xl border border-slate-200/80", className)}
    {...props}
  />
);

export const CardHeader = ({ className, ...props }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => (
  <div className={cn("space-y-1.5 p-6", className)} {...props} />
);

export const CardTitle = ({ className, ...props }: PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>) => (
  <h3 className={cn("font-display text-lg font-semibold tracking-tight text-slate-950", className)} {...props} />
);

export const CardDescription = ({
  className,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>) => (
  <p className={cn("text-sm leading-6 text-slate-500", className)} {...props} />
);

export const CardContent = ({ className, ...props }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => (
  <div className={cn("px-6 pb-6", className)} {...props} />
);

export const CardFooter = ({ className, ...props }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => (
  <div className={cn("border-t border-slate-200/70 px-6 py-4", className)} {...props} />
);
