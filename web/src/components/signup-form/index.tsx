import React from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { SIGNUP_COPY } from "./constants";
import { useSignupForm } from "./hooks/useSignupForm";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Select } from "../ui/select";
import { Textarea } from "../ui/textarea";

export const SignupForm = () => {
  const { values, isSubmitted, isSubmitting, error, updateField, handleSubmit, resetForm } = useSignupForm();

  if (isSubmitted) {
    return (
      <Card className="mx-auto max-w-2xl">
        <CardContent className="flex flex-col items-start gap-4 p-8">
          <div className="rounded-full bg-emerald-50 p-3 text-emerald-600">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-display text-2xl font-semibold text-slate-950">{SIGNUP_COPY.successMessage}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              We’ll review the request and follow up with next steps.
            </p>
          </div>
          <Button variant="outline" onClick={resetForm}>
            Submit another request
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mx-auto max-w-2xl">
      <CardHeader>
        <CardTitle>{SIGNUP_COPY.title}</CardTitle>
        <CardDescription>{SIGNUP_COPY.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-5" onSubmit={handleSubmit}>
          <label className="grid gap-2">
            <span className="text-sm font-medium text-slate-700">Student name</span>
            <Input value={values.studentName} onChange={(event) => updateField("studentName", event.target.value)} />
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-medium text-slate-700">Guardian name</span>
            <Input value={values.guardianName} onChange={(event) => updateField("guardianName", event.target.value)} />
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-medium text-slate-700">Guardian email</span>
            <Input
              type="email"
              value={values.guardianEmail}
              onChange={(event) => updateField("guardianEmail", event.target.value)}
            />
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-medium text-slate-700">Grade level</span>
            <Select value={values.gradeLevel} onChange={(event) => updateField("gradeLevel", event.target.value)}>
              {Array.from({ length: 12 }, (_, index) => String(index + 1)).map((grade) => (
                <option key={grade} value={grade}>
                  Grade {grade}
                </option>
              ))}
            </Select>
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-medium text-slate-700">Program interest</span>
            <Select value={values.programInterest} onChange={(event) => updateField("programInterest", event.target.value)}>
              <option>Music</option>
              <option>Math</option>
              <option>Reading</option>
              <option>Language</option>
              <option>Science</option>
              <option>General Tutoring</option>
            </Select>
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-medium text-slate-700">Current goal</span>
            <Textarea value={values.message} onChange={(event) => updateField("message", event.target.value)} />
          </label>
          {error ? (
            <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
              {error}
            </div>
          ) : null}
          <Button type="submit" className="w-full">
            {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            Send request
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
