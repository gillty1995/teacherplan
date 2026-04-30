import { TEACHER_EMAIL, TEACHER_PASSWORD } from "../../lib/auth";

export const LOGIN_COPY = {
  title: "Welcome back",
  description: "Sign in to manage students, lessons, resources, and progress reports.",
  buttonLabel: "Sign In",
  errorMessage: "Use the sign-in details shown on the page."
} as const;

export const LOGIN_CREDENTIALS = {
  email: TEACHER_EMAIL,
  password: TEACHER_PASSWORD
} as const;
