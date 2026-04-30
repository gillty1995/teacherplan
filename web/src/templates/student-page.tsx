import React from "react";
import type { PageProps } from "gatsby";
import { Link } from "gatsby";
import { Badge } from "../components/ui/badge";
import { PageShell } from "../components/page-shell";
import { DashboardShell } from "../components/dashboard-shell";
import { ProtectedRoute } from "../components/protected-route";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { SectionHeading } from "../components/section-heading";
import { getStudentPortalDataFromCollections } from "../lib/content";
import { LessonCard } from "../components/lesson-card";
import { ProgressReportCard } from "../components/progress-report-card";
import { ResourceCard } from "../components/resource-card";
import { AnnouncementCard } from "../components/announcement-card";
import { EmptyState } from "../components/empty-state";
import { useDemoContent } from "../hooks/useDemoContent";

type StudentTemplateContext = {
  slug?: string;
  mode?: "public" | "dashboard";
};

const StudentPageTemplate = ({ pageContext, location }: PageProps<{}, StudentTemplateContext>) => {
  const { mode = "public" } = pageContext;
  const { students, lessons, progressReports, resources, announcements } = useDemoContent();
  const slug = location.pathname.split("/").filter(Boolean)[1] ?? "";
  const data = slug ? getStudentPortalDataFromCollections({ students, lessons, progressReports, resources, announcements }, slug) : null;

  if (!data) {
    return (
      <PageShell>
        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <EmptyState
            title="Student not found"
            description="This student profile does not exist yet."
            ctaLabel="Return home"
            ctaHref="/"
          />
        </section>
      </PageShell>
    );
  }

  const content = (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <SectionHeading
        eyebrow={mode === "dashboard" ? "Protected detail" : "Student portal"}
        title={data.student.name}
        description={`Grade ${data.student.gradeLevel} · ${data.student.program} · Guardian: ${data.student.guardianName}`}
      />

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between gap-4">
              <CardTitle>Current overview</CardTitle>
              <Badge tone="success">{data.student.status}</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-6 text-slate-600">
              <span className="font-semibold text-slate-900">Current goal:</span> {data.student.currentGoal}
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="bg-slate-50/80">
                <CardContent className="p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Lessons</p>
                  <p className="mt-2 font-display text-2xl font-semibold text-slate-950">{data.lessons.length}</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-50/80">
                <CardContent className="p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Reports</p>
                  <p className="mt-2 font-display text-2xl font-semibold text-slate-950">{data.progressReports.length}</p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Relevant announcements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {data.announcements.map((announcement) => (
              <AnnouncementCard key={announcement.title} announcement={announcement} />
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl font-semibold text-slate-950">Upcoming lessons</h3>
              {mode === "dashboard" ? (
                <Link to="/app/lessons" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
                  View lessons
                </Link>
              ) : null}
            </div>
            <div className="mt-5 grid gap-4">
              {data.lessons.length ? (
                data.lessons.map((lesson) => (
                  <LessonCard
                    key={`${lesson.studentSlug}-${lesson.title}`}
                    lesson={lesson}
                    student={data.student}
                  />
                ))
              ) : (
                <EmptyState title="No lessons yet" description="Add lessons for this student in Sanity." />
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="font-display text-xl font-semibold text-slate-950">Recommended resources</h3>
            <div className="mt-5 grid gap-4">
              {data.recommendedResources.map((resource) => (
                <ResourceCard key={resource.slug} resource={resource} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <h3 className="font-display text-xl font-semibold text-slate-950">Recent progress reports</h3>
            <div className="mt-5 grid gap-4">
              {data.progressReports.length ? (
                data.progressReports.map((report) => (
                  <ProgressReportCard key={`${report.studentSlug}-${report.title}`} report={report} student={data.student} />
                ))
              ) : (
                <EmptyState title="No reports yet" description="Progress reports will appear here once added." />
              )}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Student note</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-6 text-slate-600">
              This page gives students and families a clear view of progress,
              upcoming lessons, and recommended practice materials.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );

  if (mode === "dashboard") {
    return (
      <ProtectedRoute>
        <DashboardShell>{content}</DashboardShell>
      </ProtectedRoute>
    );
  }

  return <PageShell>{content}</PageShell>;
};

export default StudentPageTemplate;
