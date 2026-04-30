import type { LoginFormValues } from "./types";

export const createEmptyLoginValues = (): LoginFormValues => ({
  email: "",
  password: ""
});
