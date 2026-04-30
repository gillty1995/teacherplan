import { useEffect, useState } from "react";
import type { DemoCollections } from "../types/content";

type ContentCollectionsResponse =
  | {
      ok: true;
      collections: DemoCollections;
    }
  | {
      ok: false;
      error?: string;
    };

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

export const useContentCollections = () => {
  const [collections, setCollections] = useState<DemoCollections | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let mounted = true;

    if (!process.env.GATSBY_SANITY_PROJECT_ID) {
      return () => {
        mounted = false;
      };
    }

    const loadCollections = async () => {
      setIsLoading(true);
      const { default: axios } = await import("axios");

      try {
        const response = await axios.get<ContentCollectionsResponse>("/api/content");

        if (mounted && response.data.ok) {
          setCollections(response.data.collections);
          setError(null);
        } else if (mounted) {
          setError(response.data.ok ? null : response.data.error ?? "Unable to load live content.");
        }
      } catch (requestError) {
        if (mounted) {
          const message = toErrorMessage(axios, requestError, "Unable to load live content.");
          setError(message);
          setCollections(null);
          void requestError;
        }
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    void loadCollections();

    return () => {
      mounted = false;
    };
  }, []);

  return {
    collections,
    error,
    isLoading
  };
};
