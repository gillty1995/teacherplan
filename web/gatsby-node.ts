import type { GatsbyNode } from "gatsby";
import path from "path";

export const createPages: GatsbyNode["createPages"] = async ({ actions }) => {
  const { createPage } = actions;
  const studentTemplate = path.resolve("./src/templates/student-page.tsx");
  const resourceTemplate = path.resolve("./src/templates/resource-page.tsx");

  createPage({
    path: "/student",
    matchPath: "/student/*",
    component: studentTemplate,
    context: {
      mode: "public"
    }
  });

  createPage({
    path: "/resources",
    matchPath: "/resources/*",
    component: resourceTemplate,
    context: {}
  });
};

export const onCreateDevServer = ({ app }: { app: any }) => {
  const { json } = require("express") as { json: () => any };

  app.use("/api/enrollment", json());
  app.use("/api/content", json());
  app.post("/api/enrollment", async (req: any, res: any) => {
    try {
      const { submitEnrollmentToSanity } = require("./src/server/enrollment") as {
        submitEnrollmentToSanity: (payload: unknown) => Promise<{ ok: boolean; requestId?: string }>;
      };
      const result = await submitEnrollmentToSanity(req.body);
      res.status(200).json(result);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to submit enrollment request.";
      res.status(400).json({ ok: false, error: message });
    }
  });

  app.get("/api/content", async (_req: any, res: any) => {
    try {
      const { fetchLiveSanityCollections } = require("./src/lib/sanityContent") as {
        fetchLiveSanityCollections: () => Promise<unknown>;
      };
      const collections = await fetchLiveSanityCollections();

      if (!collections) {
        res.status(404).json({ ok: false, error: "Live content is not configured." });
        return;
      }

      res.status(200).json({ ok: true, collections });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to load live content.";
      res.status(500).json({ ok: false, error: message });
    }
  });
};
