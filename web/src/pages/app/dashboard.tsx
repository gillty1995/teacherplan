import React from "react";
import { Link } from "gatsby";
import { ArrowRight } from "lucide-react";
import { DashboardShell } from "../../components/dashboard-shell";
import { ProtectedRoute } from "../../components/protected-route";
import { SectionHeading } from "../../components/section-heading";
import { StatCard } from "../../components/stat-card";
import { useDemoContent } from "../../hooks/useDemoContent";
import { Card, CardContent } from "../../components/ui/card";
import { StudentCard } from "../../components/student-card";
import { LessonCard } from "../../components/lesson-card";
import { ProgressReportCard } from "../../components/progress-report-card";
import { AnnouncementCard } from "../../components/announcement-card";

const DashboardPage = () => {
  const { students, lessons, progressReports, announcements, dashboardStats, followUpStudents } = useDemoContent();

  return (
    <ProtectedRoute>
      <DashboardShell>
        <div className="space-y-10">
          <SectionHeading
            title="Dashboard overview"
            description="A polished snapshot of active students, upcoming sessions, recent progress, and announcements."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <StatCard label="Active Students" value={String(dashboardStats.activeStudents)} helperText="Students currently active in the program." delay={0.02} />
            <StatCard label="Upcoming Lessons" value={String(dashboardStats.upcomingLessons)} helperText="Scheduled sessions across all programs." delay={0.07} />
            <StatCard label="Progress Reports" value={String(dashboardStats.progressReports)} helperText="Recent learning updates ready for review." delay={0.12} />
            <StatCard label="Learning Resources" value={String(dashboardStats.learningResources)} helperText="Public resources available to families." delay={0.17} />
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-semibold text-slate-950">Upcoming lessons</h3>
                  <Link to="/app/lessons" className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700">
                    View all <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
                <div className="mt-5 grid gap-4">
                  {lessons.slice(0, 3).map((lesson) => (
                    <LessonCard
                      key={`${lesson.studentSlug}-${lesson.title}`}
                      lesson={lesson}
                      student={students.find((student) => student.slug === lesson.studentSlug)}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-semibold text-slate-950">Needs follow-up</h3>
                  <Link to="/app/students" className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700">
                    Open students <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
                <div className="mt-5 space-y-4">
                  {followUpStudents.map((student) => (
                    <StudentCard key={student.slug} student={student} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-semibold text-slate-950">Recent progress reports</h3>
                </div>
                <div className="mt-5 grid gap-4">
                  {progressReports.map((report) => (
                    <ProgressReportCard
                      key={`${report.studentSlug}-${report.title}`}
                      report={report}
                      student={students.find((student) => student.slug === report.studentSlug)}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-semibold text-slate-950">Latest announcements</h3>
                  <Link to="/app/announcements" className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700">
                    View all <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
                <div className="mt-5 grid gap-4">
                  {announcements.map((announcement) => (
                    <AnnouncementCard key={announcement.title} announcement={announcement} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </DashboardShell>
    </ProtectedRoute>
  );
};

export default DashboardPage;
