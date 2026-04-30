import { FormEvent, useState } from "react";
import { createEmptySignupValues } from "../utils";
import { SIGNUP_COPY } from "../constants";
import { useEnrollmentRequests } from "../../../hooks/useEnrollmentRequests";

export const useSignupForm = () => {
  const [values, setValues] = useState(createEmptySignupValues());
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { isSubmitting, submitEnrollmentRequest } = useEnrollmentRequests();

  const updateField = (field: keyof typeof values, value: string) => {
    setValues((current) => ({
      ...current,
      [field]: value
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    const result = await submitEnrollmentRequest(values);

    if (!result.ok) {
      setError(result.error ?? "Unable to submit the enrollment request.");
      return;
    }

    setIsSubmitted(true);
  };

  const resetForm = () => {
    setValues(createEmptySignupValues());
    setIsSubmitted(false);
    setError(null);
  };

  return {
    values,
    isSubmitted,
    isSubmitting,
    error,
    updateField,
    handleSubmit,
    resetForm,
    successMessage: SIGNUP_COPY.successMessage
  };
};
