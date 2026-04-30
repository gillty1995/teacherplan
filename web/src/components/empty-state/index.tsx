import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

interface EmptyStateProps {
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export const EmptyState = ({ title, description, ctaLabel, ctaHref }: EmptyStateProps) => (
  <Card>
    <CardContent className="flex flex-col items-start gap-4 py-10">
      <div>
        <h3 className="font-display text-lg font-semibold text-slate-950">{title}</h3>
        <p className="mt-2 max-w-lg text-sm leading-6 text-slate-500">{description}</p>
      </div>
      {ctaLabel && ctaHref ? (
        <Button asChild>
          <a href={ctaHref}>{ctaLabel}</a>
        </Button>
      ) : null}
    </CardContent>
  </Card>
);
