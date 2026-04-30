import { defineField, defineType } from "sanity";

export const announcementType = defineType({
  name: "announcement",
  title: "Announcement",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "message", title: "Message", type: "text", rows: 4, validation: (Rule) => Rule.required() }),
    defineField({
      name: "audience",
      title: "Audience",
      type: "string",
      options: { list: ["All Students", "Parents", "Teachers", "Directors"] },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "priority",
      title: "Priority",
      type: "string",
      options: { list: ["Low", "Medium", "High"] },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "publishedDate",
      title: "Published date",
      type: "date",
      validation: (Rule) => Rule.required()
    })
  ]
});
