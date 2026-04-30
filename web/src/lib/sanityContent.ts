import type { DemoCollections } from "../types/content";

type SanityStudent = {
  name: string;
  slug: string;
  portalCode: string;
  gradeLevel: number;
  program: DemoCollections["students"][number]["program"];
  guardianName: string;
  status: DemoCollections["students"][number]["status"];
  currentGoal: string;
};

type SanityLesson = {
  title: string;
  studentSlug: string;
  date: string;
  subject: DemoCollections["lessons"][number]["subject"];
  lessonType: DemoCollections["lessons"][number]["lessonType"];
  status: DemoCollections["lessons"][number]["status"];
  notes: string;
};

type SanityProgressReport = {
  title: string;
  studentSlug: string;
  reportDate: string;
  strengths: string;
  areasToImprove: string;
  nextSteps: string;
  progressScore: number;
};

type SanityResource = {
  title: string;
  slug: string;
  subject: DemoCollections["resources"][number]["subject"];
  level: DemoCollections["resources"][number]["level"];
  summary: string;
  practiceSteps: string[];
};

type SanityAnnouncement = {
  title: string;
  message: string;
  audience: DemoCollections["announcements"][number]["audience"];
  priority: DemoCollections["announcements"][number]["priority"];
  publishedDate: string;
};

type SanityCollectionsResponse = {
  students: SanityStudent[];
  lessons: SanityLesson[];
  progressReports: SanityProgressReport[];
  resources: SanityResource[];
  announcements: SanityAnnouncement[];
};

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || process.env.GATSBY_SANITY_PROJECT_ID;
const dataset = process.env.SANITY_STUDIO_DATASET || process.env.GATSBY_SANITY_DATASET || "production";
const apiVersion = "2024-01-01";

const query = encodeURIComponent(`{
  "students": *[_type == "student"] | order(name asc) {
    name,
    "slug": slug.current,
    portalCode,
    gradeLevel,
    program,
    guardianName,
    status,
    currentGoal
  },
  "lessons": *[_type == "lesson"] | order(date asc) {
    title,
    "studentSlug": student->slug.current,
    date,
    subject,
    lessonType,
    status,
    notes
  },
  "progressReports": *[_type == "progressReport"] | order(reportDate desc) {
    title,
    "studentSlug": student->slug.current,
    reportDate,
    strengths,
    areasToImprove,
    nextSteps,
    progressScore
  },
  "resources": *[_type == "resource"] | order(title asc) {
    title,
    "slug": slug.current,
    subject,
    level,
    summary,
    practiceSteps
  },
  "announcements": *[_type == "announcement"] | order(publishedDate desc) {
    title,
    message,
    audience,
    priority,
    publishedDate
  }
}`);

export const hasLiveSanitySource = Boolean(projectId);

export const fetchLiveSanityCollections = async () => {
  if (!projectId) {
    return null;
  }

  const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${query}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Unable to load Sanity content (${response.status})`);
  }

  const data = (await response.json()) as { result: SanityCollectionsResponse };

  return data.result;
};
