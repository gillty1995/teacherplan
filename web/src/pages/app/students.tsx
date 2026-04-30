import React from "react";
import { DashboardShell } from "../../components/dashboard-shell";
import { ProtectedRoute } from "../../components/protected-route";
import { SectionHeading } from "../../components/section-heading";
import { useDemoContent } from "../../hooks/useDemoContent";
import { StudentCard } from "../../components/student-card";
import { EmptyState } from "../../components/empty-state";

const StudentsPage = () => {
  const { students } = useDemoContent();

  return (
    <ProtectedRoute>
      <DashboardShell>
        <SectionHeading
          title="Student list"
          description="A responsive roster that keeps grade, program, status, and current goal visible."
        />
        <div className="mt-6">
          {students.length ? (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {students.map((student) => (
                <StudentCard key={student.slug} student={student} dashboardHref={`/student/${student.slug}`} />
              ))}
            </div>
          ) : (
            <EmptyState title="No students found" description="Add students in Sanity to populate this list." />
          )}
        </div>
      </DashboardShell>
    </ProtectedRoute>
  );
};

export default StudentsPage;
