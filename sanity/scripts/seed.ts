import { createClient } from "@sanity/client";
import { demoDocuments } from "../seed/demoSeed";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID;
const dataset = process.env.SANITY_STUDIO_DATASET || "production";
const token = process.env.SANITY_WRITE_TOKEN;

if (!projectId || !token) {
  throw new Error("Set SANITY_STUDIO_PROJECT_ID and SANITY_WRITE_TOKEN before seeding.");
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2024-01-01",
  useCdn: false
});

const run = async () => {
  for (const document of demoDocuments as Array<{ _id: string; _type: string } & Record<string, unknown>>) {
    await client.createOrReplace(document as never);
    // eslint-disable-next-line no-console
    console.log(`Seeded ${document._type}: ${document._id}`);
  }
};

run().catch((error) => {
  // eslint-disable-next-line no-console
  console.error(error);
  process.exit(1);
});
