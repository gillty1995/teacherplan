import { fetchLiveSanityCollections } from "../src/lib/sanityContent";

export default async function handler(_req: any, res: any) {
  try {
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
}
