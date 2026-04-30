export const demoDocuments = [
  {
    _id: "student-maya-johnson",
    _type: "student",
    name: "Maya Johnson",
    slug: { _type: "slug", current: "maya-johnson" },
    portalCode: "MAYA-2481",
    gradeLevel: 5,
    program: "Reading",
    guardianName: "Alex Johnson",
    status: "Active",
    currentGoal: "Improve reading comprehension and paragraph summaries."
  },
  {
    _id: "student-eli-cohen",
    _type: "student",
    name: "Eli Cohen",
    slug: { _type: "slug", current: "eli-cohen" },
    portalCode: "ELI-7394",
    gradeLevel: 7,
    program: "Math",
    guardianName: "Sarah Cohen",
    status: "Needs Follow-up",
    currentGoal: "Build confidence with fractions and multi-step word problems."
  },
  {
    _id: "student-sofia-ramirez",
    _type: "student",
    name: "Sofia Ramirez",
    slug: { _type: "slug", current: "sofia-ramirez" },
    portalCode: "SOFIA-5126",
    gradeLevel: 4,
    program: "Music",
    guardianName: "Daniela Ramirez",
    status: "Active",
    currentGoal: "Improve rhythm reading and consistent practice habits."
  },
  {
    _id: "lesson-reading-fluency-session",
    _type: "lesson",
    title: "Reading Fluency Session",
    student: { _type: "reference", _ref: "student-maya-johnson" },
    date: "2026-05-01",
    subject: "Reading",
    lessonType: "Private Lesson",
    status: "Scheduled",
    notes: "Focus on fluency, pacing, and short comprehension checks."
  },
  {
    _id: "lesson-fraction-review",
    _type: "lesson",
    title: "Fraction Review",
    student: { _type: "reference", _ref: "student-eli-cohen" },
    date: "2026-05-02",
    subject: "Math",
    lessonType: "Private Lesson",
    status: "Scheduled",
    notes: "Review equivalent fractions and multi-step word problems."
  },
  {
    _id: "lesson-rhythm-and-sight-reading",
    _type: "lesson",
    title: "Rhythm and Sight Reading",
    student: { _type: "reference", _ref: "student-sofia-ramirez" },
    date: "2026-05-03",
    subject: "Music",
    lessonType: "Private Lesson",
    status: "Scheduled",
    notes: "Practice rhythm reading, clapping patterns, and short sight-reading examples."
  },
  {
    _id: "progress-maya-reading-progress",
    _type: "progressReport",
    title: "Maya Reading Progress",
    student: { _type: "reference", _ref: "student-maya-johnson" },
    reportDate: "2026-04-22",
    strengths: "Strong decoding skills and improved pacing.",
    areasToImprove: "Needs more confidence answering inference questions.",
    nextSteps: "Practice short summaries twice per week.",
    progressScore: 82
  },
  {
    _id: "progress-eli-math-progress",
    _type: "progressReport",
    title: "Eli Math Progress",
    student: { _type: "reference", _ref: "student-eli-cohen" },
    reportDate: "2026-04-19",
    strengths: "Good number sense and persistence.",
    areasToImprove: "Needs support organizing multi-step work.",
    nextSteps: "Use a written checklist for each word problem.",
    progressScore: 74
  },
  {
    _id: "resource-reading-comprehension-warmup",
    _type: "resource",
    title: "Reading Comprehension Warmup",
    slug: { _type: "slug", current: "reading-comprehension-warmup" },
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
    _id: "resource-fraction-practice-checklist",
    _type: "resource",
    title: "Fraction Practice Checklist",
    slug: { _type: "slug", current: "fraction-practice-checklist" },
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
    _id: "resource-rhythm-reading-drill",
    _type: "resource",
    title: "Rhythm Reading Drill",
    slug: { _type: "slug", current: "rhythm-reading-drill" },
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
    _id: "resource-weekly-practice-reflection",
    _type: "resource",
    title: "Weekly Practice Reflection",
    slug: { _type: "slug", current: "weekly-practice-reflection" },
    subject: "General Tutoring",
    level: "Beginner",
    summary: "A reflection sheet students can use to track what they practiced and what felt difficult.",
    practiceSteps: [
      "Write down what you practiced this week.",
      "Circle the task that felt easiest.",
      "Star the task that needs more support.",
      "Choose one goal for next week."
    ]
  },
  {
    _id: "announcement-spring-progress-reports-are-available",
    _type: "announcement",
    title: "Spring progress reports are available",
    message: "New progress reports have been added for active students.",
    audience: "Parents",
    priority: "High",
    publishedDate: "2026-04-21"
  },
  {
    _id: "announcement-bring-materials-to-each-session",
    _type: "announcement",
    title: "Bring materials to each session",
    message: "Please remember to bring your notebook, practice materials, and any assigned worksheets.",
    audience: "All Students",
    priority: "Medium",
    publishedDate: "2026-04-18"
  },
  {
    _id: "announcement-new-weekly-practice-resources-added",
    _type: "announcement",
    title: "New weekly practice resources added",
    message: "New learning resources are now available in the student portal.",
    audience: "All Students",
    priority: "Low",
    publishedDate: "2026-04-16"
  }
];
