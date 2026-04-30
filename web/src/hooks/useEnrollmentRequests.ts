import { useState } from "react";
import type { SignupFormValues } from "../components/signup-form/types";

export interface EnrollmentRequestPayload extends SignupFormValues {}

export interface EnrollmentRequestResult {
  ok: boolean;
  requestId?: string;
  error?: string;
}

export const useEnrollmentRequests = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitEnrollmentRequest = async (payload: EnrollmentRequestPayload): Promise<EnrollmentRequestResult> => {
    setIsSubmitting(true);
    const { default: axios } = await import("axios");

    try {
      const response = await axios.post<EnrollmentRequestResult>("/api/enrollment", payload, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      return response.data;
    } catch (error) {
      const message = axios.isAxiosError(error)
        ? error.response?.data?.error ?? error.message
        : "Unable to submit the enrollment request.";

      return {
        ok: false,
        error: message
      };
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    submitEnrollmentRequest
  };
};
