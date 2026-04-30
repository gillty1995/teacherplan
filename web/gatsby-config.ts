import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "TeacherPlan",
    description: "A CMS-powered education portal for managing lessons, student progress, and learning resources."
  },
  plugins: ["gatsby-plugin-postcss"]
};

export default config;
