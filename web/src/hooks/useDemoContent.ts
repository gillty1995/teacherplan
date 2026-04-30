import { useEffect, useMemo, useState } from "react";
import {
  getDemoAnnouncements,
  getDemoLessons,
  getDemoProgressReports,
  getDemoResources,
  getDemoStudents
} from "../lib/content";
import { useContentCollections } from "./useContentCollections";
import type { DemoCollections } from "../types/content";

const getFallbackCollections = (): DemoCollections => ({
  students: getDemoStudents(),
  lessons: getDemoLessons(),
  progressReports: getDemoProgressReports(),
  resources: getDemoResources(),
  announcements: getDemoAnnouncements()
});

export const useDemoContent = () => {
  const [collections, setCollections] = useState<DemoCollections>(getFallbackCollections);
  const { collections: liveCollections } = useContentCollections();

  useEffect(() => {
    if (liveCollections) {
      setCollections(liveCollections);
    }
  }, [liveCollections]);

  return useMemo(() => {
    const dashboardStats = {
      activeStudents: collections.students.filter((student) => student.status === "Active").length,
      upcomingLessons: collections.lessons.filter((lesson) => lesson.status === "Scheduled").length,
      progressReports: collections.progressReports.length,
      learningResources: collections.resources.length
    };

    return {
      students: collections.students,
      lessons: collections.lessons,
      progressReports: collections.progressReports,
      resources: collections.resources,
      announcements: collections.announcements,
      dashboardStats,
      followUpStudents: collections.students.filter((student) => student.status === "Needs Follow-up"),
      latestAnnouncements: [...collections.announcements].slice(0, 3)
    };
  }, [collections]);
};
