import React from "react";
import { DashboardShell } from "../../components/dashboard-shell";
import { ProtectedRoute } from "../../components/protected-route";
import { SectionHeading } from "../../components/section-heading";
import { useDemoContent } from "../../hooks/useDemoContent";
import { AnnouncementCard } from "../../components/announcement-card";

const AnnouncementsPage = () => {
  const { announcements } = useDemoContent();

  return (
    <ProtectedRoute>
      <DashboardShell>
        <SectionHeading
          title="Announcement board"
          description="A simple feed for updates that teachers, families, and students can scan quickly."
        />
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {announcements.map((announcement) => (
            <AnnouncementCard key={announcement.title} announcement={announcement} />
          ))}
        </div>
      </DashboardShell>
    </ProtectedRoute>
  );
};

export default AnnouncementsPage;
