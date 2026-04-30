import { demoCollections, demoLessons, demoProgressReports, demoResources, demoStudents } from "../data/demoContent";
import type { DemoCollections } from "../types/content";

export const getDemoStudents = () => demoStudents;
export const getDemoLessons = () => demoLessons;
export const getDemoProgressReports = () => demoProgressReports;
export const getDemoResources = () => demoResources;
export const getDemoAnnouncements = () => demoCollections.announcements;

export const getDashboardStats = () => ({
  activeStudents: demoStudents.filter((student) => student.status === "Active").length,
  upcomingLessons: demoLessons.filter((lesson) => lesson.status === "Scheduled").length,
  progressReports: demoProgressReports.length,
  learningResources: demoResources.length
});

export const getFollowUpStudents = () =>
  demoStudents.filter((student) => student.status === "Needs Follow-up");

export const getLatestAnnouncements = () => [...demoCollections.announcements].slice(0, 3);

export const getStudentPortalDataFromCollections = (collections: DemoCollections, slug: string) => {
  const student = collections.students.find((entry) => entry.slug === slug);

  if (!student) {
    return null;
  }

  return {
    student,
    lessons: collections.lessons.filter((lesson) => lesson.studentSlug === slug),
    progressReports: collections.progressReports.filter((report) => report.studentSlug === slug),
    recommendedResources: collections.resources.filter(
      (resource) => resource.subject === student.program || resource.subject === "General Tutoring"
    ),
    announcements: collections.announcements.filter(
      (announcement) => announcement.audience === "All Students" || announcement.audience === "Parents"
    )
  };
};

export const getResourceDetailDataFromCollections = (
  collections: Pick<DemoCollections, "resources">,
  slug: string
) => collections.resources.find((resource) => resource.slug === slug) ?? null;
