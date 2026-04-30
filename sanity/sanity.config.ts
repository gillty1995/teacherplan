import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { approveEnrollmentRequestAction } from "./schemaTypes/enrollmentRequestAction";
import { schemaTypes } from "./schemaTypes";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || "teacherplan-demo";
const dataset = process.env.SANITY_STUDIO_DATASET || "production";

export default defineConfig({
  name: "teacherplan-studio",
  title: "TeacherPlan Studio",
  projectId,
  dataset,
  basePath: "/",
  plugins: [structureTool()],
  document: {
    actions: (previousActions, context) =>
      context.schemaType === "enrollmentRequest"
        ? previousActions.concat(approveEnrollmentRequestAction)
        : previousActions
  },
  schema: {
    types: schemaTypes
  }
});
