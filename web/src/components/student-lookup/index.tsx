import React from "react";
import { navigate } from "gatsby";
import { Search } from "lucide-react";
import { StudentLookupProps } from "./types";
import { STUDENT_LOOKUP_COPY } from "./constants";
import { useStudentLookup } from "./hooks/useStudentLookup";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";

export const StudentLookup = ({ students }: StudentLookupProps) => {
  const {
    nameQuery,
    portalCode,
    error,
    setNameQuery,
    setPortalCode,
    submitLookup
  } = useStudentLookup(students);

  return (
    <Card className="h-full">
      <CardHeader>
        <Badge tone="info" className="w-fit">
          {STUDENT_LOOKUP_COPY.badge}
        </Badge>
        <CardTitle className="text-2xl">{STUDENT_LOOKUP_COPY.title}</CardTitle>
        <CardDescription>{STUDENT_LOOKUP_COPY.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          className="grid gap-4"
          onSubmit={(event) => {
            const match = submitLookup(event);

            if (match) {
              void navigate(`/student/${match.slug}`);
            }
          }}
        >
          <label className="grid gap-2">
            <span className="text-sm font-medium text-slate-700">
              {STUDENT_LOOKUP_COPY.nameLabel}
            </span>
            <Input
              value={nameQuery}
              onChange={(event) => setNameQuery(event.target.value)}
              placeholder="Start typing a student name"
              autoComplete="off"
            />
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-medium text-slate-700">
              {STUDENT_LOOKUP_COPY.codeLabel}
            </span>
            <Input
              value={portalCode}
              onChange={(event) => setPortalCode(event.target.value)}
              placeholder="Enter the portal code"
              autoComplete="off"
            />
          </label>
          {error ? (
            <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
              {error}
            </div>
          ) : null}
          <Button type="submit" className="w-full">
            <Search className="mr-2 h-4 w-4" />
            {STUDENT_LOOKUP_COPY.buttonLabel}
          </Button>
          <p className="text-sm leading-6 text-slate-500">
            {STUDENT_LOOKUP_COPY.helperText}
          </p>
        </form>
      </CardContent>
    </Card>
  );
};
