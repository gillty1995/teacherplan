import React from "react";
import type { DocumentActionComponent } from "sanity";
import { useClient } from "sanity";

type EnrollmentRequestDraft = {
  studentName?: string;
  guardianName?: string;
  guardianEmail?: string;
  gradeLevel?: number;
  programInterest?: string;
  message?: string;
  status?: "Pending" | "Approved" | "Rejected";
  approvedStudent?: { _ref: string } | null;
};

const toSlug = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const generatePortalCode = (studentName: string) => {
  const initials = studentName.replace(/[^a-z]/gi, "").slice(0, 4).toUpperCase().padEnd(4, "X");
  const suffix = Math.floor(1000 + Math.random() * 9000);
  return `${initials}-${suffix}`;
};

export const approveEnrollmentRequestAction: DocumentActionComponent = (props) => {
  const client = useClient({ apiVersion: "2024-01-01" });
  const draft = props.draft as EnrollmentRequestDraft | null | undefined;
  const request = draft ?? (props.published as EnrollmentRequestDraft | null | undefined);

  if (!request || request.status !== "Pending" || request.approvedStudent) {
    return null;
  }

  return {
    label: "Approve enrollment",
    onHandle: async () => {
      const studentName = request.studentName?.trim();
      const guardianName = request.guardianName?.trim();
      const guardianEmail = request.guardianEmail?.trim();
      const programInterest = request.programInterest?.trim();
      const gradeLevel = request.gradeLevel ?? 1;
      const currentGoal = request.message?.trim() || "Set an initial learning goal.";

      if (!studentName || !guardianName || !guardianEmail || !programInterest) {
        throw new Error("Enrollment request is missing required fields.");
      }

      const slug = toSlug(studentName);
      const studentId = `student-${slug}`;
      const portalCode = generatePortalCode(studentName);

      await client
        .transaction()
        .create({
          _id: studentId,
          _type: "student",
          name: studentName,
          slug: {
            _type: "slug",
            current: slug
          },
          portalCode,
          gradeLevel,
          program: programInterest,
          guardianName,
          status: "Active",
          currentGoal
        })
        .patch(props.id, {
          set: {
            status: "Approved",
            approvedAt: new Date().toISOString(),
            approvedStudent: {
              _type: "reference",
              _ref: studentId
            }
          }
        })
        .commit();

      props.onComplete();
    },
    disabled: false
  };
};
