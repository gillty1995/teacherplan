import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { MotionReveal } from "../motion-reveal";

interface StatCardProps {
  label: string;
  value: string;
  helperText: string;
  delay?: number;
}

export const StatCard = ({ label, value, helperText, delay = 0 }: StatCardProps) => (
  <MotionReveal delay={delay} y={14}>
    <Card>
      <CardHeader className="pb-2">
        <CardDescription>{label}</CardDescription>
        <CardTitle className="text-3xl">{value}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-6 text-slate-500">{helperText}</p>
      </CardContent>
    </Card>
  </MotionReveal>
);
