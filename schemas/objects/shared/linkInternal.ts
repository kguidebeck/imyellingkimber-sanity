import { LinkIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  title: "Internal Link",
  name: "linkInternal",
  type: "object",
  icon: LinkIcon,
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "reference",
      type: "reference",
      weak: true,
      validation: (Rule) => Rule.required(),
      to: [{ type: "page" }, { type: "work" }, { type: "news" }, { type: "thinking" }],
    }),
  ],
  preview: {
    select: {
      referenceTitle: "reference.title",
      title: "title",
    },
    prepare(selection) {
      const { referenceTitle, title } = selection;

      return {
        subtitle: `→ ${referenceTitle}`,
        title,
      };
    },
  },
});
