import { defineField, defineType } from "sanity";

export const enrollmentRequestType = defineType({
  name: "enrollmentRequest",
  title: "Enrollment Request",
  type: "document",
  fields: [
    defineField({
      name: "studentName",
      title: "Student name",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "guardianName",
      title: "Guardian name",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "guardianEmail",
      title: "Guardian email",
      type: "string",
      validation: (Rule) => Rule.required().email()
    }),
    defineField({
      name: "gradeLevel",
      title: "Grade level",
      type: "number",
      validation: (Rule) => Rule.required().min(1).max(12)
    }),
    defineField({
      name: "programInterest",
      title: "Program interest",
      type: "string",
      options: { list: ["Music", "Math", "Reading", "Language", "Science", "General Tutoring"] },
      validation: (Rule) => Rule.required()
    }),
    defineField({ name: "message", title: "Message", type: "text", rows: 4, validation: (Rule) => Rule.required() }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: { list: ["Pending", "Approved", "Rejected"] },
      initialValue: "Pending",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "approvedStudent",
      title: "Approved student",
      type: "reference",
      to: [{ type: "student" }],
      hidden: true
    }),
    defineField({
      name: "approvedAt",
      title: "Approved at",
      type: "datetime",
      hidden: true
    }),
    defineField({
      name: "submittedDate",
      title: "Submitted date",
      type: "date",
      validation: (Rule) => Rule.required()
    })
  ]
});
