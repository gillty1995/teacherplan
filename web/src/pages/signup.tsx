import React from "react";
import { PageShell } from "../components/page-shell";
import { SignupForm } from "../components/signup-form";
import { SectionHeading } from "../components/section-heading";

const SignupPage = () => (
  <PageShell>
    <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
      <SectionHeading
        eyebrow="Enrollment"
        title="Request enrollment"
        description="Share a few details and we’ll follow up with next steps."
      />
      <div className="mt-8">
        <SignupForm />
      </div>
    </section>
  </PageShell>
);

export default SignupPage;
