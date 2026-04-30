import type {
  Announcement,
  DemoCollections,
  Lesson,
  ProgressReport,
  Resource,
  Student
} from "../types/content";

export const demoStudents: Student[] = [
  {
    name: "Maya Johnson",
    slug: "maya-johnson",
    portalCode: "MAYA-2481",
    gradeLevel: 5,
    program: "Reading",
    guardianName: "Alex Johnson",
    status: "Active",
    currentGoal: "Improve reading comprehension and paragraph summaries."
  },
  {
    name: "Eli Cohen",
    slug: "eli-cohen",
    portalCode: "ELI-7394",
    gradeLevel: 7,
    program: "Math",
    guardianName: "Sarah Cohen",
    status: "Needs Follow-up",
    currentGoal: "Build confidence with fractions and multi-step word problems."
  },
  {
    name: "Sofia Ramirez",
    slug: "sofia-ramirez",
    portalCode: "SOFIA-5126",
    gradeLevel: 4,
    program: "Music",
    guardianName: "Daniela Ramirez",
    status: "Active",
    currentGoal: "Improve rhythm reading and consistent practice habits."
  }
];

export const demoLessons: Lesson[] = [
  {
    title: "Reading Fluency Session",
    studentSlug: "maya-johnson",
    date: "2026-05-01",
    subject: "Reading",
    lessonType: "Private Lesson",
    status: "Scheduled",
    notes: "Focus on fluency, pacing, and short comprehension checks."
  },
  {
    title: "Fraction Review",
    studentSlug: "eli-cohen",
    date: "2026-05-02",
    subject: "Math",
    lessonType: "Private Lesson",
    status: "Scheduled",
    notes: "Review equivalent fractions and multi-step word problems."
  },
  {
    title: "Rhythm and Sight Reading",
    studentSlug: "sofia-ramirez",
    date: "2026-05-03",
    subject: "Music",
    lessonType: "Private Lesson",
    status: "Scheduled",
    notes: "Practice rhythm reading, clapping patterns, and short sight-reading examples."
  }
];

export const demoProgressReports: ProgressReport[] = [
  {
    title: "Maya Reading Progress",
    studentSlug: "maya-johnson",
    reportDate: "2026-04-22",
    strengths: "Strong decoding skills and improved pacing.",
    areasToImprove: "Needs more confidence answering inference questions.",
    nextSteps: "Practice short summaries twice per week.",
    progressScore: 82
  },
  {
    title: "Eli Math Progress",
    studentSlug: "eli-cohen",
    reportDate: "2026-04-19",
    strengths: "Good number sense and persistence.",
    areasToImprove: "Needs support organizing multi-step work.",
    nextSteps: "Use a written checklist for each word problem.",
    progressScore: 74
  }
];

export const demoResources: Resource[] = [
  {
    title: "Reading Comprehension Warmup",
    slug: "reading-comprehension-warmup",
    subject: "Reading",
    level: "Beginner",
    summary: "A short routine to help students preview a passage before answering comprehension questions.",
    practiceSteps: [
      "Read the title and preview the headings.",
      "Highlight two words you think will matter most.",
      "Summarize the passage in one sentence.",
      "Answer the comprehension questions with evidence."
    ]
  },
  {
    title: "Fraction Practice Checklist",
    slug: "fraction-practice-checklist",
    subject: "Math",
    level: "Intermediate",
    summary: "A step-by-step checklist for solving fraction problems neatly and accurately.",
    practiceSteps: [
      "Identify the denominators.",
      "Find a common denominator before calculating.",
      "Show each step clearly.",
      "Check the final answer for simplification."
    ]
  },
  {
    title: "Rhythm Reading Drill",
    slug: "rhythm-reading-drill",
    subject: "Music",
    level: "Beginner",
    summary: "A simple rhythm practice sequence for building timing and reading confidence.",
    practiceSteps: [
      "Tap the beat once before starting.",
      "Clap each rhythm pattern slowly.",
      "Count aloud while repeating the sequence.",
      "Increase speed only after two clean rounds."
    ]
  },
  {
    title: "Weekly Practice Reflection",
    slug: "weekly-practice-reflection",
    subject: "General Tutoring",
    level: "Beginner",
    summary: "A reflection sheet students can use to track what they practiced and what felt difficult.",
    practiceSteps: [
      "Write down what you practiced this week.",
      "Circle the task that felt easiest.",
      "Star the task that needs more support.",
      "Choose one goal for next week."
    ]
  }
];

export const demoAnnouncements: Announcement[] = [
  {
    title: "Spring progress reports are available",
    audience: "Parents",
    priority: "High",
    message: "New progress reports have been added for active students.",
    publishedDate: "2026-04-21"
  },
  {
    title: "Bring materials to each session",
    audience: "All Students",
    priority: "Medium",
    message: "Please remember to bring your notebook, practice materials, and any assigned worksheets.",
    publishedDate: "2026-04-18"
  },
  {
    title: "New weekly practice resources added",
    audience: "All Students",
    priority: "Low",
    message: "New learning resources are now available in the student portal.",
    publishedDate: "2026-04-16"
  }
];

export const demoCollections: DemoCollections = {
  students: demoStudents,
  lessons: demoLessons,
  progressReports: demoProgressReports,
  resources: demoResources,
  announcements: demoAnnouncements
};
