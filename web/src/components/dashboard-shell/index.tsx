import React, { type PropsWithChildren } from "react";
import { Link } from "gatsby";
import { LogOut, LayoutDashboard, BookOpen, Megaphone, School, FileText, Menu } from "lucide-react";
import { navigate } from "gatsby";
import { Button } from "../ui/button";
import { cn } from "../../lib/cn";
import { useAuth } from "../../hooks/useAuth";

const navItems = [
  { to: "/app/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/app/students", label: "Students", icon: School },
  { to: "/app/lessons", label: "Lessons", icon: BookOpen },
  { to: "/app/resources", label: "Resources", icon: FileText },
  { to: "/app/announcements", label: "Announcements", icon: Megaphone }
];

export const DashboardShell = ({ children }: PropsWithChildren) => {
  const { logout } = useAuth();
  const pathname = typeof window !== "undefined" ? window.location.pathname : "";

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex min-h-screen flex-col lg:flex-row">
        <aside className="border-b border-slate-200/80 bg-white/90 backdrop-blur-xl lg:sticky lg:top-0 lg:h-screen lg:w-72 lg:border-b-0 lg:border-r">
          <div className="flex h-full flex-col px-4 py-5 sm:px-6">
            <div className="mb-6 flex items-center justify-between">
              <Link to="/app/dashboard" className="font-display text-xl font-bold tracking-tight text-slate-950">
                TeacherPlan
              </Link>
            </div>

            <div className="mb-6 rounded-3xl bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Teacher Mode</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Manage students, lessons, progress reports, and announcements from one polished dashboard.
              </p>
            </div>

            <nav className="space-y-1">
              {navItems.map(({ to, label, icon: Icon }) => (
                <Link
                  key={to}
                  to={to}
                  className={cn(
                    "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition",
                    pathname.startsWith(to)
                      ? "bg-blue-600 text-white shadow-soft"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto pt-6">
              <Button
                variant="outline"
                className="w-full justify-start rounded-2xl"
                onClick={() => {
                  logout();
                  void navigate("/login", { replace: true });
                }}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
        </aside>

        <div className="flex-1">
          <div className="border-b border-slate-200/80 bg-white/80 px-4 py-4 backdrop-blur-xl sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Teacher dashboard</p>
                <h1 className="font-display text-2xl font-bold tracking-tight text-slate-950">TeacherPlan</h1>
              </div>
              <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 lg:hidden">
                <Menu className="h-4 w-4" />
                Menu
              </button>
            </div>
          </div>
          <main className="px-4 py-6 sm:px-6 lg:px-8">{children}</main>
        </div>
      </div>
    </div>
  );
};
