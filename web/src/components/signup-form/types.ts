import type { Program } from "../../types/content";

export interface SignupFormValues {
  studentName: string;
  guardianName: string;
  guardianEmail: string;
  gradeLevel: string;
  programInterest: Program;
  message: string;
}
