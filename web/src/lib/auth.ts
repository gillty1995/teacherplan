export const AUTH_TOKEN_KEY = "teacherplan-auth";
export const TEACHER_EMAIL = "teacher@teacherplan.com";
export const TEACHER_PASSWORD = "TeacherPlan2026!";

export const isTeacherCredentials = (email: string, password: string) =>
  email.trim().toLowerCase() === TEACHER_EMAIL && password === TEACHER_PASSWORD;

export const getStoredAuthToken = () => {
  if (typeof window === "undefined") {
    return null;
  }

  return window.localStorage.getItem(AUTH_TOKEN_KEY);
};

export const storeAuthToken = () => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(AUTH_TOKEN_KEY, "auth-token");
};

export const clearAuthToken = () => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(AUTH_TOKEN_KEY);
};
