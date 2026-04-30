import React from "react";
import { Link } from "gatsby";
import type { Student } from "../../types/content";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { formatDate } from "../../lib/format";
import { MotionReveal } from "../motion-reveal";

interface StudentCardProps {
  student: Student;
  delay?: number;
  dashboardHref?: string;
  className?: string;
}

const toneMap = {
  Active: "success",
  "Needs Follow-up": "warning",
  Paused: "danger"
} as const;

export const StudentCard = ({ student, delay = 0, dashboardHref = `/student/${student.slug}`, className }: StudentCardProps) => (
  <MotionReveal delay={delay}>
    <Card className={className ? `${className} h-full max-h-[17rem]` : "h-full max-h-[17rem]"}>
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle className="text-base sm:text-lg">{student.name}</CardTitle>
            <p className="mt-1 text-sm text-slate-500">
              Grade {student.gradeLevel} · {student.program}
            </p>
          </div>
          <Badge tone={toneMap[student.status]}>{student.status}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm leading-6 text-slate-600">
          <span className="font-semibold text-slate-900">Current goal:</span> {student.currentGoal}
        </p>
        <p className="text-xs text-slate-500">Guardian: {student.guardianName}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-end">
        <Link to={dashboardHref} className="text-sm font-semibold text-blue-600 hover:text-blue-700">
          View profile
        </Link>
      </CardFooter>
    </Card>
  </MotionReveal>
);
