import React, { type PropsWithChildren } from "react";
import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";

export const PageShell = ({ children }: PropsWithChildren) => (
  <div className="flex min-h-screen flex-col">
    <SiteHeader />
    <main className="flex-1">{children}</main>
    <SiteFooter />
  </div>
);
