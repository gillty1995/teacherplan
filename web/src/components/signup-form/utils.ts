import type { SignupFormValues } from "./types";

export const createEmptySignupValues = (): SignupFormValues => ({
  studentName: "",
  guardianName: "",
  guardianEmail: "",
  gradeLevel: "5",
  programInterest: "Reading",
  message: ""
});
