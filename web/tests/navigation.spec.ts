import { expect, test } from "@playwright/test";

test("landing page renders", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "TeacherPlan" })).toBeVisible();
  await expect(page.getByText("Centralize lesson planning, student progress, and family communication in one secure portal.")).toBeVisible();
  await expect(page.getByRole("heading", { name: "Find a student profile" })).toBeVisible();
});

test("login redirects to the dashboard with teacher credentials", async ({ page }) => {
  await page.goto("/login");

  await page.getByLabel("Email").fill("teacher@teacherplan.com");
  await page.getByLabel("Password").fill("TeacherPlan2026!");
  await page.getByRole("button", { name: "Sign In" }).click();

  await expect(page).toHaveURL(/\/app\/dashboard\/?$/);
  await expect(page.getByRole("heading", { name: "Dashboard overview" })).toBeVisible();
});

test("student lookup opens a profile with the portal code", async ({ page }) => {
  await page.goto("/");

  await page.getByLabel("Student name").fill("Maya Johnson");
  await page.getByLabel("Portal code").fill("MAYA-2481");
  await page.getByRole("button", { name: "Open profile" }).click();

  await expect(page).toHaveURL(/\/student\/maya-johnson\/?$/);
  await expect(page.getByRole("heading", { name: "Maya Johnson" })).toBeVisible();
});

test("protected routes redirect unauthenticated visitors", async ({ page }) => {
  await page.goto("/app/dashboard", { waitUntil: "commit" });

  await expect(page).toHaveURL(/\/login\/?$/);
});
