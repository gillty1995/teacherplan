import { defineField, defineType } from "sanity";

export const resourceType = defineType({
  name: "resource",
  title: "Learning Resource",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Resource title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "subject",
      title: "Subject",
      type: "string",
      options: { list: ["Music", "Math", "Reading", "Language", "Science", "General Tutoring"] },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "level",
      title: "Level",
      type: "string",
      options: { list: ["Beginner", "Intermediate", "Advanced"] },
      validation: (Rule) => Rule.required()
    }),
    defineField({ name: "summary", title: "Summary", type: "text", rows: 4, validation: (Rule) => Rule.required() }),
    defineField({
      name: "practiceSteps",
      title: "Practice steps",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required().min(1)
    })
  ]
});
