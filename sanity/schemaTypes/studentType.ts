import { defineField, defineType } from "sanity";

export const studentType = defineType({
  name: "student",
  title: "Student",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "portalCode",
      title: "Portal code",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "gradeLevel",
      title: "Grade level",
      type: "number",
      validation: (Rule) => Rule.required().min(1).max(12)
    }),
    defineField({
      name: "program",
      title: "Program",
      type: "string",
      options: {
        list: ["Music", "Math", "Reading", "Language", "Science", "General Tutoring"]
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({ name: "guardianName", title: "Guardian name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: ["Active", "Needs Follow-up", "Paused"]
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "currentGoal",
      title: "Current goal",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required()
    })
  ]
});
