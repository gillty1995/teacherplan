import React from "react";
import type { PageProps } from "gatsby";
import { PageShell } from "../components/page-shell";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { SectionHeading } from "../components/section-heading";
import { getResourceDetailDataFromCollections } from "../lib/content";
import { EmptyState } from "../components/empty-state";
import { useDemoContent } from "../hooks/useDemoContent";

type ResourceTemplateContext = {
  slug?: string;
};

const ResourcePageTemplate = ({ location }: PageProps<{}, ResourceTemplateContext>) => {
  const { resources } = useDemoContent();
  const slug = location.pathname.split("/").filter(Boolean)[1] ?? "";
  const resource = slug
    ? getResourceDetailDataFromCollections({ resources }, slug)
    : null;

  if (!resource) {
    return (
      <PageShell>
        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <EmptyState title="Resource not found" description="This resource has not been published yet." ctaLabel="Return home" ctaHref="/" />
        </section>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <SectionHeading
          eyebrow="Public resource"
          title={resource.title}
          description={`${resource.subject} · ${resource.level}`}
        />
        <div className="mt-6 grid gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between gap-4">
              <CardTitle>Overview</CardTitle>
              <Badge tone="info">{resource.level}</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-6 text-slate-600">{resource.summary}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Practice steps</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3">
                {resource.practiceSteps.map((step, index) => (
                  <li key={step} className="flex gap-3 text-sm leading-6 text-slate-600">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 font-semibold text-blue-700">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </div>
      </section>
    </PageShell>
  );
};

export default ResourcePageTemplate;
