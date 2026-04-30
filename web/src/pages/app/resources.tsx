import React from "react";
import { DashboardShell } from "../../components/dashboard-shell";
import { ProtectedRoute } from "../../components/protected-route";
import { SectionHeading } from "../../components/section-heading";
import { useDemoContent } from "../../hooks/useDemoContent";
import { ResourceCard } from "../../components/resource-card";

const ResourcesPage = () => {
  const { resources } = useDemoContent();

  return (
    <ProtectedRoute>
      <DashboardShell>
        <SectionHeading
          title="Resource library"
          description="A CMS-backed library of practice materials, lesson supports, and reflections."
        />
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-2">
          {resources.map((resource) => (
            <ResourceCard key={resource.slug} resource={resource} />
          ))}
        </div>
      </DashboardShell>
    </ProtectedRoute>
  );
};

export default ResourcesPage;
