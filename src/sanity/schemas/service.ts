import { defineField, defineType } from "sanity"

export default defineType({
  name: "service",
  title: "Services",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
      rows: 3,
    }),
    defineField({
      name: "icon",
      type: "string",
      title: "Icon (Lucide name)",
      description: "e.g. Globe, Database, ShoppingBag, Zap, Search, Wrench",
    }),
    defineField({
      name: "order",
      type: "number",
      title: "Order",
    }),
  ],
  preview: {
    select: { title: "title" },
  },
})