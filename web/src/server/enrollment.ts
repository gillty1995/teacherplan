import { createClient } from "@sanity/client";
import type { EnrollmentRequestPayload } from "../types/content";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || process.env.GATSBY_SANITY_PROJECT_ID;
const dataset = process.env.SANITY_STUDIO_DATASET || process.env.GATSBY_SANITY_DATASET || "production";
const token = process.env.SANITY_WRITE_TOKEN;

const createSanityClient = () => {
  if (!projectId || !token) {
    throw new Error("Set SANITY_STUDIO_PROJECT_ID and SANITY_WRITE_TOKEN before submitting enrollments.");
  }

  return createClient({
    projectId,
    dataset,
    token,
    apiVersion: "2024-01-01",
    useCdn: false
  });
};

const normalizeText = (value: string) => value.trim();

const parseGradeLevel = (value: string) => {
  const parsed = Number(value);

  if (!Number.isInteger(parsed) || parsed < 1 || parsed > 12) {
    throw new Error("Grade level must be between 1 and 12.");
  }

  return parsed;
};

export const submitEnrollmentToSanity = async (payload: EnrollmentRequestPayload) => {
  const studentName = normalizeText(payload.studentName);
  const guardianName = normalizeText(payload.guardianName);
  const guardianEmail = normalizeText(payload.guardianEmail).toLowerCase();
  const programInterest = normalizeText(payload.programInterest);
  const message = normalizeText(payload.message);

  if (!studentName || !guardianName || !guardianEmail || !programInterest || !message) {
    throw new Error("Please complete all enrollment fields before submitting.");
  }

  const client = createSanityClient();

  const document = await client.create({
    _type: "enrollmentRequest",
    studentName,
    guardianName,
    guardianEmail,
    gradeLevel: parseGradeLevel(payload.gradeLevel),
    programInterest,
    message,
    status: "Pending",
    submittedDate: new Date().toISOString().slice(0, 10)
  });

  return {
    ok: true as const,
    requestId: document._id
  };
};
