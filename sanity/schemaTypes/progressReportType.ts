import { defineField, defineType } from "sanity";

export const progressReportType = defineType({
  name: "progressReport",
  title: "Progress Report",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Report title",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "student",
      title: "Student reference",
      type: "reference",
      to: [{ type: "student" }],
      validation: (Rule) => Rule.required()
    }),
    defineField({ name: "reportDate", title: "Report date", type: "date", validation: (Rule) => Rule.required() }),
    defineField({ name: "strengths", title: "Strengths", type: "text", rows: 3, validation: (Rule) => Rule.required() }),
    defineField({
      name: "areasToImprove",
      title: "Areas to improve",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required()
    }),
    defineField({ name: "nextSteps", title: "Next steps", type: "text", rows: 3, validation: (Rule) => Rule.required() }),
    defineField({
      name: "progressScore",
      title: "Progress score",
      type: "number",
      validation: (Rule) => Rule.required().min(1).max(100)
    })
  ]
});
