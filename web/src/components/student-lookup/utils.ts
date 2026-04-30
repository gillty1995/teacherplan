import type { Student } from "../../types/content";

const normalize = (value: string) => value.trim().toLowerCase();

export const findMatchingStudent = (
  students: Student[],
  nameQuery: string,
  portalCode: string
) => {
  const normalizedQuery = normalize(nameQuery);
  const normalizedCode = normalize(portalCode);

  if (!normalizedQuery || !normalizedCode) {
    return null;
  }

  return (
    students.find(
      (student) =>
        normalize(student.name).includes(normalizedQuery) &&
        normalize(student.portalCode) === normalizedCode
    ) ?? null
  );
};
