import React from "react";
import { Link } from "gatsby";
import type { Resource } from "../../types/content";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { MotionReveal } from "../motion-reveal";

interface ResourceCardProps {
  resource: Resource;
  delay?: number;
}

export const ResourceCard = ({ resource, delay = 0 }: ResourceCardProps) => (
  <MotionReveal delay={delay}>
    <Card className="flex h-full flex-col">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <CardTitle>{resource.title}</CardTitle>
          <Badge tone="info">{resource.level}</Badge>
        </div>
        <p className="mt-1 text-sm text-slate-500">{resource.subject}</p>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm leading-6 text-slate-600">{resource.summary}</p>
      </CardContent>
      <CardFooter className="flex justify-end border-t border-slate-200/70">
        <Link to={`/resources/${resource.slug}`} className="text-sm font-semibold text-blue-600 hover:text-blue-700">
          Open resource
        </Link>
      </CardFooter>
    </Card>
  </MotionReveal>
);
