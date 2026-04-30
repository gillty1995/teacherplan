export type Program =
  | "Music"
  | "Math"
  | "Reading"
  | "Language"
  | "Science"
  | "General Tutoring";

export type StudentStatus = "Active" | "Needs Follow-up" | "Paused";
export type LessonType = "Private Lesson" | "Group Lesson" | "Assessment" | "Makeup Lesson";
export type LessonStatus = "Scheduled" | "Completed" | "Canceled";
export type ResourceLevel = "Beginner" | "Intermediate" | "Advanced";
export type AnnouncementAudience = "All Students" | "Parents" | "Teachers" | "Directors";
export type AnnouncementPriority = "Low" | "Medium" | "High";

export interface Student {
  name: string;
  slug: string;
  portalCode: string;
  gradeLevel: number;
  program: Program;
  guardianName: string;
  status: StudentStatus;
  currentGoal: string;
}

export interface Lesson {
  title: string;
  studentSlug: string;
  date: string;
  subject: Program;
  lessonType: LessonType;
  status: LessonStatus;
  notes: string;
}

export interface ProgressReport {
  title: string;
  studentSlug: string;
  reportDate: string;
  strengths: string;
  areasToImprove: string;
  nextSteps: string;
  progressScore: number;
}

export interface Resource {
  title: string;
  slug: string;
  subject: Program;
  level: ResourceLevel;
  summary: string;
  practiceSteps: string[];
}

export interface Announcement {
  title: string;
  message: string;
  audience: AnnouncementAudience;
  priority: AnnouncementPriority;
  publishedDate: string;
}

export interface EnrollmentRequest {
  studentName: string;
  guardianEmail: string;
  programInterest: Program;
  message: string;
  submittedDate: string;
}

export interface EnrollmentRequestPayload {
  studentName: string;
  guardianName: string;
  guardianEmail: string;
  gradeLevel: string;
  programInterest: Program;
  message: string;
}

export interface DemoCollections {
  students: Student[];
  lessons: Lesson[];
  progressReports: ProgressReport[];
  resources: Resource[];
  announcements: Announcement[];
}
