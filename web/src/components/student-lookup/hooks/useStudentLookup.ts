import { FormEvent, useState } from "react";
import { findMatchingStudent } from "../utils";
import { STUDENT_LOOKUP_COPY } from "../constants";
import type { Student } from "../../../types/content";

export const useStudentLookup = (students: Student[]) => {
  const [nameQuery, setNameQuery] = useState("");
  const [portalCode, setPortalCode] = useState("");
  const [error, setError] = useState<string | null>(null);

  const submitLookup = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const match = findMatchingStudent(students, nameQuery, portalCode);

    if (!match) {
      setError(STUDENT_LOOKUP_COPY.errorMessage);
      return null;
    }

    setError(null);
    return match;
  };

  return {
    nameQuery,
    portalCode,
    error,
    setNameQuery,
    setPortalCode,
    submitLookup
  };
};
