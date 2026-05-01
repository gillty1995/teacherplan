import { BookOpen, FileText, LayoutDashboard, Megaphone, School } from "lucide-react";

export const SANITY_STUDIO_URL =
  process.env.GATSBY_SANITY_STUDIO_URL ?? "https://teacherplan.sanity.studio/";

export const DASHBOARD_SHELL_COPY = {
  roleLabel: "Teacher Mode",
  description:
    "Manage students, lessons, progress reports, and announcements from one polished dashboard.",
  studioButtonLabel: "Open Sanity Studio",
  logoutButtonLabel: "Logout",
  menuButtonLabel: "Menu"
} as const;

export const DASHBOARD_NAV_ITEMS = [
  { to: "/app/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/app/students", label: "Students", icon: School },
  { to: "/app/lessons", label: "Lessons", icon: BookOpen },
  { to: "/app/resources", label: "Resources", icon: FileText },
  { to: "/app/announcements", label: "Announcements", icon: Megaphone }
] as const;
