import React from "react";
import type { Lesson, Student } from "../../types/content";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { formatDate } from "../../lib/format";
import { MotionReveal } from "../motion-reveal";

interface LessonCardProps {
  lesson: Lesson;
  student?: Student | null;
  delay?: number;
}

const toneMap = {
  Scheduled: "info",
  Completed: "success",
  Canceled: "danger"
} as const;

export const LessonCard = ({ lesson, student, delay = 0 }: LessonCardProps) => (
  <MotionReveal delay={delay}>
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle>{lesson.title}</CardTitle>
            <p className="mt-1 text-sm text-slate-500">{student?.name ?? "Student not found"}</p>
          </div>
          <Badge tone={toneMap[lesson.status]}>{lesson.status}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-500">
          <span>{formatDate(lesson.date)}</span>
          <span>•</span>
          <span>{lesson.subject}</span>
          <span>•</span>
          <span>{lesson.lessonType}</span>
        </div>
        <p className="text-sm leading-6 text-slate-600">{lesson.notes}</p>
      </CardContent>
    </Card>
  </MotionReveal>
);
