import React from "react";
import type { Announcement } from "../../types/content";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { formatDate } from "../../lib/format";
import { MotionReveal } from "../motion-reveal";

interface AnnouncementCardProps {
  announcement: Announcement;
  delay?: number;
}

const toneMap = {
  High: "danger",
  Medium: "warning",
  Low: "info"
} as const;

export const AnnouncementCard = ({ announcement, delay = 0 }: AnnouncementCardProps) => (
  <MotionReveal delay={delay}>
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <CardTitle>{announcement.title}</CardTitle>
          <Badge tone={toneMap[announcement.priority]}>{announcement.priority}</Badge>
        </div>
        <p className="mt-1 text-sm text-slate-500">{announcement.audience}</p>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-sm leading-6 text-slate-600">{announcement.message}</p>
        <p className="text-xs font-medium text-slate-400">{formatDate(announcement.publishedDate)}</p>
      </CardContent>
    </Card>
  </MotionReveal>
);
