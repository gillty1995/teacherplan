import React from "react";
import { DashboardShell } from "../../components/dashboard-shell";
import { ProtectedRoute } from "../../components/protected-route";
import { SectionHeading } from "../../components/section-heading";
import { useDemoContent } from "../../hooks/useDemoContent";
import { LessonCard } from "../../components/lesson-card";

const LessonsPage = () => {
  const { lessons, students } = useDemoContent();

  return (
    <ProtectedRoute>
      <DashboardShell>
        <SectionHeading
          title="Lesson list"
          description="An easy-to-scan schedule view with subject, status, notes, and student linkage."
        />
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {lessons.map((lesson) => (
            <LessonCard
              key={`${lesson.studentSlug}-${lesson.title}`}
              lesson={lesson}
              student={students.find((student) => student.slug === lesson.studentSlug)}
            />
          ))}
        </div>
      </DashboardShell>
    </ProtectedRoute>
  );
};

export default LessonsPage;
