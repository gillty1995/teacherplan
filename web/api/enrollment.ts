import { submitEnrollmentToSanity } from "../src/server/enrollment";

const readBody = (body: unknown) => {
  if (typeof body === "string") {
    return JSON.parse(body);
  }

  return body ?? {};
};

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ ok: false, error: "Method not allowed." });
    return;
  }

  try {
    const payload = readBody(req.body);
    const result = await submitEnrollmentToSanity(payload);

    res.status(200).json(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to submit enrollment request.";
    res.status(400).json({ ok: false, error: message });
  }
}
