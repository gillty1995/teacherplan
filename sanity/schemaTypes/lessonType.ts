import { defineField, defineType } from "sanity";

export const lessonType = defineType({
  name: "lesson",
  title: "Lesson",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Lesson title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "student",
      title: "Student reference",
      type: "reference",
      to: [{ type: "student" }],
      validation: (Rule) => Rule.required()
    }),
    defineField({ name: "date", title: "Date", type: "date", validation: (Rule) => Rule.required() }),
    defineField({
      name: "subject",
      title: "Subject",
      type: "string",
      options: { list: ["Music", "Math", "Reading", "Language", "Science", "General Tutoring"] },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "lessonType",
      title: "Lesson type",
      type: "string",
      options: { list: ["Private Lesson", "Group Lesson", "Assessment", "Makeup Lesson"] },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: { list: ["Scheduled", "Completed", "Canceled"] },
      validation: (Rule) => Rule.required()
    }),
    defineField({ name: "notes", title: "Lesson notes", type: "text", rows: 5, validation: (Rule) => Rule.required() })
  ]
});
