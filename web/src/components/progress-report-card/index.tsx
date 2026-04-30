import React from "react";
import type { ProgressReport, Student } from "../../types/content";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { formatDate } from "../../lib/format";
import { MotionReveal } from "../motion-reveal";

interface ProgressReportCardProps {
  report: ProgressReport;
  student?: Student | null;
  delay?: number;
}

export const ProgressReportCard = ({ report, student, delay = 0 }: ProgressReportCardProps) => (
  <MotionReveal delay={delay}>
    <Card>
      <CardHeader>
        <CardTitle>{report.title}</CardTitle>
        <p className="mt-1 text-sm text-slate-500">
          {student?.name ?? "Student not found"} · {formatDate(report.reportDate)}
        </p>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 font-display text-xl font-bold text-blue-700">
            {report.progressScore}
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Progress score</p>
            <p className="text-xs text-slate-500">Out of 100</p>
          </div>
        </div>
        <p className="text-sm leading-6 text-slate-600">
          <span className="font-semibold text-slate-900">Strengths:</span> {report.strengths}
        </p>
        <p className="text-sm leading-6 text-slate-600">
          <span className="font-semibold text-slate-900">Areas to improve:</span> {report.areasToImprove}
        </p>
        <p className="text-sm leading-6 text-slate-600">
          <span className="font-semibold text-slate-900">Next steps:</span> {report.nextSteps}
        </p>
      </CardContent>
    </Card>
  </MotionReveal>
);
