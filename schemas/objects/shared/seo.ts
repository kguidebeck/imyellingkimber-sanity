import { defineField, defineType } from "sanity";

export default defineType({
  name: "seo",
  type: "object",
  title: "SEO",
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    defineField({
      name: "heading",
      type: "string",
      title: "Heading",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
      rows: 3,
    }),
    defineField({
      name: "keywords",
      type: "string",
      title: "Keywords",
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
    }),
  ],
});
