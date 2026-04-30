import { expect, test } from "@playwright/test";

test("student portal pages render content", async ({ page }) => {
  await page.goto("/student/maya-johnson");

  await expect(page.getByRole("heading", { name: "Maya Johnson" })).toBeVisible();
  await expect(page.getByText("Improve reading comprehension and paragraph summaries.")).toBeVisible();
});

test("resource detail pages render content", async ({ page }) => {
  await page.goto("/resources/fraction-practice-checklist");

  await expect(page.getByRole("heading", { name: "Fraction Practice Checklist" })).toBeVisible();
  await expect(page.getByText("A step-by-step checklist for solving fraction problems neatly and accurately.")).toBeVisible();
});
