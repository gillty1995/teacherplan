import { useState } from "react";
import type { EnrollmentRequestPayload } from "../types/content";

export interface EnrollmentRequestResult {
  ok: boolean;
  requestId?: string;
  error?: string;
}

const toErrorMessage = (axios: any, error: unknown, fallback: string) => {
  if (axios.isAxiosError(error)) {
    const apiError = error.response?.data?.error;

    if (typeof apiError === "string") {
      return apiError;
    }

    if (apiError && typeof apiError === "object" && "message" in apiError) {
      const nestedMessage = (apiError as { message?: unknown }).message;

      if (typeof nestedMessage === "string") {
        return nestedMessage;
      }
    }

    return error.message || fallback;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return fallback;
};

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
      const message = toErrorMessage(axios, error, "Unable to submit the enrollment request.");

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
