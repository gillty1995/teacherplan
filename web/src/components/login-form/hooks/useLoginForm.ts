import { FormEvent, useState } from "react";
import { navigate } from "gatsby";
import { useAuth } from "../../../hooks/useAuth";
import { createEmptyLoginValues } from "../utils";
import { LOGIN_COPY } from "../constants";

export const useLoginForm = () => {
  const auth = useAuth();
  const [values, setValues] = useState(createEmptyLoginValues());
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field: keyof typeof values, value: string) => {
    setValues((current) => ({
      ...current,
      [field]: value
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const result = auth.login(values.email, values.password);

    if (!result.ok) {
      setError(result.error ?? LOGIN_COPY.errorMessage);
      setIsSubmitting(false);
      return;
    }

    setError(null);
    await navigate("/app/dashboard");
    setIsSubmitting(false);
  };

  return {
    values,
    error,
    isSubmitting,
    updateField,
    handleSubmit
  };
};
