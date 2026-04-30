# TeacherPlan

TeacherPlan is a Gatsby + Sanity education portal for managing students, lessons, and resources with a modern CMS workflow:

- Gatsby routing, page creation, and GraphQL data flow
- Sanity Studio content modeling and structured CMS content
- Tailwind CSS and modern dashboard UI design
- framer-motion polish for high-signal interactions
- Playwright smoke testing

## Live Links
**Landing Page + Student Portal**
https://teacherplan-web.vercel.app/
**Sanity CMS for Teachers**
https://teacherplan.sanity.studio/

## Repo Layout

- `web/` - Gatsby frontend
- `sanity/` - Sanity Studio

## Quick Start

1. Install dependencies from the repo root.
2. Copy `web/.env.example` to `web/.env.development` and `sanity/.env.example` to `sanity/.env`.
3. Fill in the Sanity project id and write token values.
4. Start Gatsby with `npm run dev:web`.
5. Start Sanity Studio with `npm run dev:sanity`.

## Sanity Seeding

After the Studio project exists and the write token is set, seed the CMS with:

```bash
npm run seed:sanity
```

## Environment Variables

The Gatsby app can connect to Sanity when these are provided:

- `GATSBY_SANITY_PROJECT_ID`
- `GATSBY_SANITY_DATASET`

If those are not set, the site still renders from local fallback content so the frontend remains usable during development.

## Site Map

- Landing page: `/`
- Login: `/login`
- Teacher dashboard: `/app/dashboard`
- Students list: `/app/students`
- Lessons list: `/app/lessons`
- Resources list: `/app/resources`
- Announcements list: `/app/announcements`
- Public student portal: `/student/:slug`
- Public resource page: `/resources/:slug`

## Auth Note

The dashboard uses a lightweight local sign-in flow with Gatsby client-side route guarding and localStorage-based session state. Sanity Studio handles content editing and publishing.
