import React from "react";
import { Link } from "gatsby";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  LineChart,
  Sparkles,
} from "lucide-react";
import { PageShell } from "../components/page-shell";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { SectionHeading } from "../components/section-heading";
import { useDemoContent } from "../hooks/useDemoContent";
import { StudentLookup } from "../components/student-lookup";
import { ResourceCard } from "../components/resource-card";
import { AnnouncementCard } from "../components/announcement-card";
import { MotionReveal } from "../components/motion-reveal";

const featureCards = [
  {
    icon: GraduationCap,
    title: "Student Management",
    description:
      "A clean roster view for tracking goals, status, guardians, and program assignments.",
  },
  {
    icon: BookOpen,
    title: "Lesson Planning",
    description:
      "Organized lesson data tied to each student so the dashboard feels useful and credible.",
  },
  {
    icon: LineChart,
    title: "Progress Reports",
    description:
      "Report cards with strengths, areas to improve, and next steps for every learner.",
  },
  {
    icon: Sparkles,
    title: "Resource Library",
    description:
      "A public-facing catalog of practice materials with polished detail pages.",
  },
];

const HomePage = () => {
  const { students, resources, announcements } = useDemoContent();

  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <MotionReveal y={18}>
            <Badge tone="info" className="mb-4">
              Student management and lesson planning
            </Badge>
            <h1 className="font-display text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl">
              TeacherPlan
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Centralize lesson planning, student progress, and family
              communication in one secure portal.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link to="/login">
                  Open Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/signup">Request Enrollment</Link>
              </Button>
            </div>

            <div className="mt-10 max-w-2xl">
              <svg
                aria-hidden="true"
                viewBox="0 0 760 150"
                className="h-36 w-full overflow-visible"
              >
                <path
                  className="hero-doodle__path"
                  d="M42 82C78 40 118 124 156 81C177 57 203 58 226 81C247 102 273 106 298 82C323 58 349 58 374 82C401 108 428 110 454 82C479 56 505 55 530 82C556 109 584 110 611 82C637 56 664 57 689 80"
                  fill="none"
                  stroke="rgb(59, 130, 246)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="hero-doodle__path hero-doodle__path--secondary"
                  d="M70 108C110 94 141 95 181 109C217 120 255 121 295 109C334 97 371 97 409 109C448 121 486 120 524 109C563 97 601 97 640 110C675 121 706 120 728 112"
                  fill="none"
                  stroke="rgba(14, 165, 233, 0.55)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle
                  className="hero-doodle__dot"
                  cx="694"
                  cy="79"
                  r="5"
                  fill="rgb(59, 130, 246)"
                />
                <circle
                  className="hero-doodle__dot"
                  cx="709"
                  cy="64"
                  r="3.25"
                  fill="rgba(14, 165, 233, 0.7)"
                />
                <circle
                  className="hero-doodle__dot"
                  cx="721"
                  cy="92"
                  r="2.6"
                  fill="rgba(59, 130, 246, 0.45)"
                />
              </svg>
            </div>
          </MotionReveal>

          <MotionReveal className="relative" delay={0.1} y={18}>
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-blue-500/10 blur-3xl" />
            <StudentLookup students={students} />
          </MotionReveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why it works"
          title="Everything you need in one place"
          description="Lessons, resources, and announcements all integrated together for easy access and organization."
        />
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featureCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <MotionReveal key={card.title} delay={index * 0.05}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-slate-950">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              </MotionReveal>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeading
          title="For Students and Families"
          description="Study materials and announcements to keep everyone in the loop and on track between sessions."
        />
        <div className="mt-6 space-y-6">
          <div className="rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-5 shadow-sm">
            <div className="mb-4">
              <h3 className="font-display text-xl font-semibold text-slate-950">
                Learning resources
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Practice materials and study guides for students and families.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {resources.slice(0, 3).map((resource, index) => (
                <ResourceCard
                  key={resource.slug}
                  resource={resource}
                  delay={index * 0.05}
                />
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-sky-100 bg-gradient-to-br from-sky-50 to-white p-5 shadow-sm">
            <div className="mb-4">
              <h3 className="font-display text-xl font-semibold text-slate-950">
                Announcements
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Quick updates for families, students, and teachers.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {announcements.map((announcement, index) => (
                <AnnouncementCard
                  key={announcement.title}
                  announcement={announcement}
                  delay={index * 0.05}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default HomePage;
